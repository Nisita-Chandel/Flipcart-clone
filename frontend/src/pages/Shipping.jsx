import React from "react";
import { FaShippingFast, FaClock, FaGlobe, FaBoxOpen } from "react-icons/fa";

const Shipping = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Shipping Information
          </h1>
          <p className="text-gray-600 text-lg">
            Fast, secure and reliable delivery services across the country.
          </p>
        </div>

        {/* Shipping Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Fast Delivery */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <FaShippingFast className="text-indigo-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              We deliver your orders within 3-5 business days with secure packaging.
            </p>
          </div>

          {/* Processing Time */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <FaClock className="text-purple-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Processing Time</h3>
            <p className="text-gray-600">
              Orders are processed within 24 hours after confirmation.
            </p>
          </div>

          {/* Worldwide Shipping */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <FaGlobe className="text-indigo-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Worldwide Shipping</h3>
            <p className="text-gray-600">
              We offer international shipping to selected countries.
            </p>
          </div>

          {/* Secure Packaging */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <FaBoxOpen className="text-purple-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Packaging</h3>
            <p className="text-gray-600">
              All products are carefully packed to ensure safe delivery.
            </p>
          </div>

        </div>

        {/* Extra Info Section */}
        <div className="mt-16 bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Shipping Policy
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Free shipping on orders above ₹999.</li>
            <li>Tracking details will be shared via email after dispatch.</li>
            <li>Delivery delays may occur during holidays or peak seasons.</li>
            <li>If your package is damaged, contact support within 48 hours.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Shipping;