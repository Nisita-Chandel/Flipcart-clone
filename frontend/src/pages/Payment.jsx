import React, { useState } from "react";
import { FaCreditCard, FaMobileAlt, FaMoneyBillWave } from "react-icons/fa";

const Payment = () => {
  const [method, setMethod] = useState("card");

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Payment Form */}
        <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Choose Payment Method
          </h2>

          {/* Payment Options */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setMethod("card")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                method === "card"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100"
              }`}
            >
              <FaCreditCard /> Card
            </button>

            <button
              onClick={() => setMethod("upi")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                method === "upi"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100"
              }`}
            >
              <FaMobileAlt /> UPI
            </button>

            <button
              onClick={() => setMethod("cod")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                method === "cod"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100"
              }`}
            >
              <FaMoneyBillWave /> COD
            </button>
          </div>

          {/* Card Payment */}
          {method === "card" && (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Card Holder Name"
                className="w-full border p-3 rounded-lg"
              />
              <input
                type="text"
                placeholder="Card Number"
                className="w-full border p-3 rounded-lg"
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-1/2 border p-3 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-1/2 border p-3 rounded-lg"
                />
              </div>
            </div>
          )}

          {/* UPI Payment */}
          {method === "upi" && (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter UPI ID (example@upi)"
                className="w-full border p-3 rounded-lg"
              />
            </div>
          )}

          {/* COD Payment */}
          {method === "cod" && (
            <div className="bg-gray-100 p-4 rounded-lg text-gray-700">
              Pay with cash when your order is delivered.
            </div>
          )}

          {/* Pay Button */}
          <button className="w-full mt-8 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
            Pay Now
          </button>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-xl font-bold mb-6 text-gray-800">
            Order Summary
          </h2>

          <div className="flex justify-between mb-3">
            <span>Subtotal</span>
            <span>₹1,500</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Shipping</span>
            <span>₹100</span>
          </div>

          <div className="flex justify-between font-bold text-lg border-t pt-4">
            <span>Total</span>
            <span>₹1,600</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;