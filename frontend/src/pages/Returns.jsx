import React, { useState } from "react";
import { FaUndoAlt } from "react-icons/fa";

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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">

        {/* Heading */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-3">
            <FaUndoAlt className="text-3xl text-indigo-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">
            Returns & Refunds
          </h1>
          <p className="text-gray-500 mt-2">
            You can request a return within 7 days of delivery.
          </p>
        </div>

        {/* Steps */}
        <div className="bg-indigo-50 p-5 rounded-lg mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Return Process
          </h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Enter your Order ID.</li>
            <li>Select the reason for return.</li>
            <li>Submit the return request.</li>
            <li>Our support team will contact you.</li>
          </ul>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Order ID */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Order ID
            </label>
            <input
              type="text"
              placeholder="Enter your Order ID"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Reason */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Reason for Return
            </label>
            <textarea
              placeholder="Write your reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-3 h-28 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Submit Return Request
          </button>

        </form>
      </div>
    </div>
  );
};

export default Returns;