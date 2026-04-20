import React from "react";
import { FaHeart, FaLock } from "react-icons/fa";

const Reserved = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 px-6">
      
      {/* Card */}
      <div className="backdrop-blur-xl bg-white/60 shadow-2xl rounded-3xl p-10 max-w-xl w-full text-center border border-white/30">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-5 rounded-full shadow-lg">
            <FaLock className="text-white text-2xl" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Reserved Section 🔒
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-base leading-relaxed mb-6">
          This section is exclusively reserved for premium content and future updates.
          Stay tuned for exciting features, special access, and enhanced experiences.
        </p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-6"></div>

        {/* Footer Text */}
        <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
          Made with <FaHeart className="text-pink-500" /> for a better experience
        </p>

        {/* Button */}
        <button className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-md hover:scale-105 hover:shadow-xl transition duration-300">
          Explore More
        </button>

      </div>
    </div>
  );
};

export default Reserved;