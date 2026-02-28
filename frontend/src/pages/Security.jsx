import React from "react";
import { FaLock, FaShieldAlt, FaUserShield, FaFingerprint } from "react-icons/fa";

const Security = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Your Security is Our Priority 🔐
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We use advanced technologies and strict policies to ensure your data
            and transactions remain safe and protected at all times.
          </p>
        </div>

        {/* Security Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <FaLock className="text-indigo-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p className="text-gray-600 text-sm">
              All transactions are encrypted using industry-standard SSL security.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <FaShieldAlt className="text-purple-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Data Protection</h3>
            <p className="text-gray-600 text-sm">
              Your personal information is securely stored and never shared.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <FaUserShield className="text-indigo-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Privacy Control</h3>
            <p className="text-gray-600 text-sm">
              You have full control over your account settings and privacy.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <FaFingerprint className="text-purple-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Advanced Authentication</h3>
            <p className="text-gray-600 text-sm">
              Multi-factor authentication adds an extra layer of protection.
            </p>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-10 text-center shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Safe. Reliable. Protected.
          </h2>
          <p className="max-w-2xl mx-auto">
            Our security team continuously monitors and upgrades our systems to
            provide you with the highest level of safety.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Security;