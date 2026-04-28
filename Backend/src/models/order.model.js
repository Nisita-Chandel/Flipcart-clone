const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  paymentId: String,
  orderId: String,
  signature: String,
  items: Array,
  amount: Number,
  phone: String,
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);