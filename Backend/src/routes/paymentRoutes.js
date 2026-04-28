const express = require("express");
const router = express.Router();
const Razorpay = require("razorpay");

// ✅ Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ✅ CREATE ORDER API
router.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100, // ₹ to paise
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);

    res.json({
      id: order.id,
      amount: order.amount,
      key: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Order creation failed" });
  }
});

module.exports = router;