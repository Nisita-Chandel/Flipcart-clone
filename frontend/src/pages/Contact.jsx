import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600">
            We'd love to hear from you. Get in touch with us!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 bg-white shadow-xl rounded-2xl p-8">

          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-indigo-100 p-4 rounded-full text-indigo-600 text-xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="text-gray-600">Huzurganj, India</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-purple-100 p-4 rounded-full text-purple-600 text-xl">
                <FaPhoneAlt />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-pink-100 p-4 rounded-full text-pink-600 text-xl">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600">contact@example.com</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;