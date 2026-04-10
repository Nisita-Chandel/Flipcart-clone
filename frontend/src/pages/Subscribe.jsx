import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const Subscribe = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-4">
      
      <div className="bg-white/80 backdrop-blur-lg p-10 rounded-2xl shadow-2xl text-center max-w-md w-full border border-gray-200 animate-fadeIn">
        
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <FaCheckCircle className="text-green-500 text-6xl animate-bounce" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-indigo-700 mb-3">
          Subscription Successful 🎉
        </h1>

        {/* Message */}
        <p className="text-gray-600 text-lg mb-6">
          Thank you for subscribing
          {email && (
            <span className="block mt-2 font-semibold text-indigo-600">
              {email}
            </span>
          )}
        </p>

        {/* Divider */}
        <div className="h-1 w-20 bg-indigo-500 mx-auto mb-6 rounded-full"></div>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow-md transition-all duration-300 hover:scale-105"
        >
          Back to Home
        </button>
      </div>

      {/* Animation (Tailwind custom) */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-in-out;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Subscribe; 