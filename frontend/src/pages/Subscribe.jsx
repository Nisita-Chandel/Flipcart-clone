import React from "react";
import { useLocation } from "react-router-dom";

const Subscribe = () => {
  const location = useLocation();
  const email = location.state?.email;

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-50">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold text-indigo-700 mb-4">
          Subscription Successful 🎉
        </h1>

        <p className="text-gray-600">
          Thank you for subscribing{email && ` with ${email}`}!
        </p>
      </div>
    </div>
  );
};

export default Subscribe;