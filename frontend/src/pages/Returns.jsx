import React, { useState } from "react";
import { FaUndoAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Returns = () => {
  const [orderId, setOrderId] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Return request submitted successfully!");
    setOrderId("");
    setReason("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-white/40"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-indigo-100 p-4 rounded-full shadow-md">
              <FaUndoAlt className="text-3xl text-indigo-600" />
            </div>
          </div>

          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
            Returns & Refunds
          </h1>
          <p className="text-gray-500 text-lg">
            Easily request a return within <span className="font-semibold text-indigo-600">7 days</span> of delivery.
          </p>
        </div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl mb-10 shadow-inner"
        >
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Return Process
          </h3>
          <ul className="space-y-2 text-gray-600">
            {[
              "Enter your Order ID",
              "Choose reason for return",
              "Submit request",
              "Our team will contact you",
            ].map((step, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center bg-indigo-600 text-white text-sm rounded-full">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Order ID */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Order ID
            </label>
            <input
              type="text"
              placeholder="Enter your Order ID"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            />
          </div>

          {/* Reason */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Reason for Return
            </label>
            <textarea
              placeholder="Write your reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-xl p-3 h-32 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
            ></textarea>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition"
          >
            Submit Return Request
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Returns;