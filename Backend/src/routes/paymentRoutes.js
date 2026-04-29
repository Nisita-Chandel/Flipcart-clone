const express = require("express");
const router = express.Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");

// ✅ Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ✅ CREATE ORDER
router.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({ error: "Amount is required" });
    }

    const order = await razorpay.orders.create({
      amount: amount * 100, // ₹ → paise
      currency: "INR",
      receipt: "order_" + Date.now(),
    });

    console.log("✅ Order Created:", order.id);

    res.json({
      id: order.id,
      amount: order.amount,
      key: process.env.RAZORPAY_KEY_ID,
    });
  } catch (err) {
    console.error("❌ Create Order Error:", err);
    res.status(500).json({ error: "Order creation failed" });
  }
});

// ✅ VERIFY PAYMENT (IMPORTANT FIXED LOGGING)
router.post("/verify-payment", (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    console.log("📦 Received for verification:", req.body);

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    console.log("🔐 Expected:", expectedSignature);
    console.log("🔐 Received:", razorpay_signature);

    if (expectedSignature === razorpay_signature) {
      console.log("✅ Payment Verified");

      res.json({
        success: true,
        message: "Payment verified successfully",
      });
    } else {
      console.log("❌ Signature mismatch");

      res.json({
        success: false,
        message: "Invalid signature",
      });
    }
  } catch (err) {
    console.error("❌ Verification Error:", err);
    res.json({ success: false });
  }
});

module.exports = router;