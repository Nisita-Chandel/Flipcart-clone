import React from "react";
import {
  FaLock,
  FaShieldAlt,
  FaUserShield,
  FaFingerprint,
} from "react-icons/fa";

const securityFeatures = [
  {
    icon: <FaLock />,
    title: "Secure Payments",
    desc: "All transactions are encrypted with advanced SSL technology for maximum safety.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: <FaShieldAlt />,
    title: "Data Protection",
    desc: "We ensure your personal data is stored securely and never shared without consent.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <FaUserShield />,
    title: "Privacy Control",
    desc: "Manage your account settings and privacy preferences anytime with ease.",
    color: "from-indigo-400 to-purple-500",
  },
  {
    icon: <FaFingerprint />,
    title: "Advanced Authentication",
    desc: "Multi-factor authentication ensures an extra layer of protection for your account.",
    color: "from-pink-500 to-red-500",
  },
];

const Security = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Your Security is Our Priority 🔐
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We use advanced technologies and strict policies to ensure your data
            and transactions remain safe and protected at all times.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {securityFeatures.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/60 backdrop-blur-lg p-6 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 text-center hover:-translate-y-2"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white text-2xl rounded-full bg-gradient-to-r ${item.color} shadow-lg group-hover:scale-110 transition`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-200 to-purple-200 opacity-0 group-hover:opacity-20 transition"></div>
            </div>
          ))}

        </div>

        {/* Bottom Section */}
        <div className="mt-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-10 md:p-14 text-center shadow-2xl relative overflow-hidden">

          {/* Decorative Blur */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>

          <h2 className="text-3xl font-bold mb-4">
            Safe. Reliable. Protected.
          </h2>

          <p className="max-w-2xl mx-auto mb-6 text-lg">
            Our security team continuously monitors and upgrades our systems to
            provide you with the highest level of safety.
          </p>

          {/* CTA Button */}
          <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>

      </div>
    </div>
  );
};

export default Security;