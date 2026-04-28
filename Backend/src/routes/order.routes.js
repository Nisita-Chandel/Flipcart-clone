const express = require("express");
const router = express.Router();
const Order = require("../models/order.model");

router.post("/save", async (req, res) => {
  try {
    const { payment, items, amount, phone } = req.body;

    const newOrder = new Order({
      paymentId: payment.razorpay_payment_id,
      orderId: payment.razorpay_order_id,
      signature: payment.razorpay_signature,
      items,
      amount,
      phone,
    });

    await newOrder.save();

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.json({ success: false });
  }
});

module.exports = router;