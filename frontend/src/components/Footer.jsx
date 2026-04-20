import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmazonPay,
} from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter your email!");
      return;
    }

    navigate("/subscribe", { state: { email } });
    setEmail("");
  };

  // NEW: Navigate to Reserved Page
  const handleReservedClick = () => {
    navigate("/reserved");
  };

  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-gray-300 pt-14">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 text-sm">

        {/* ABOUT */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4 cursor-pointer hover:text-indigo-300 transition">
            <Link to="/trendystore">
              TrendyStore
            </Link>
          </h2>

          <p className="text-gray-400 leading-6">
            India's leading online shopping platform offering
            fashion, electronics, furniture and lifestyle
            products at amazing prices.
          </p>

          <div className="flex gap-4 mt-5 text-lg">
            <FaFacebook className="hover:text-white cursor-pointer transition" />
            <FaInstagram className="hover:text-pink-400 cursor-pointer transition" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer transition" />
            <FaYoutube className="hover:text-red-500 cursor-pointer transition" />
          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="text-gray-400 mb-4 uppercase text-xs tracking-wider">
            Navigation
          </h3>

          <ul className="space-y-3 text-white">
            <li><Link to="/" className="hover:text-indigo-300 transition">Home</Link></li>
            <li><Link to="/products" className="hover:text-indigo-300 transition">Products</Link></li>
            <li><Link to="/cart" className="hover:text-indigo-300 transition">Cart</Link></li>
          </ul>
        </div>

        {/* ABOUT LINKS */}
        <div>
          <h3 className="text-gray-400 mb-4 uppercase text-xs tracking-wider">
            About
          </h3>

          <ul className="space-y-3 text-white">
            <li><Link to="/contact" className="hover:text-indigo-300 transition">Contact Us</Link></li>
            <li><Link to="/about" className="hover:text-indigo-300 transition">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-indigo-300 transition">Careers</Link></li>
          </ul>
        </div>

        {/* HELP */}
        <div>
          <h3 className="text-gray-400 mb-4 uppercase text-xs tracking-wider">
            Help
          </h3>

          <ul className="space-y-3 text-white">
            <li><Link to="/payments" className="hover:text-indigo-300 transition">Payments</Link></li>
            <li><Link to="/shipping" className="hover:text-indigo-300 transition">Shipping</Link></li>
            <li><Link to="/returns" className="hover:text-indigo-300 transition">Returns</Link></li>
            <li><Link to="/faq" className="hover:text-indigo-300 transition">FAQ</Link></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-gray-400 mb-4 uppercase text-xs tracking-wider">
            Subscribe
          </h3>

          <p className="text-gray-400 mb-3">
            Get updates on offers & discounts.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 rounded-l-md text-black w-full outline-none"
            />

            <button
              onClick={handleSubscribe}
              className="bg-indigo-600 px-4 py-2 rounded-r-md hover:bg-indigo-700 transition text-white"
            >
              Go
            </button>
          </div>
        </div>

      </div>

      {/* PAYMENT */}
      <div className="max-w-7xl mx-auto px-6 mt-12 border-t border-indigo-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="flex gap-6 text-2xl text-gray-400">
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcPaypal />
          <FaCcAmazonPay />
        </div>

        {/* UPDATED COPYRIGHT (Clickable) */}
        <p
          onClick={handleReservedClick}
          className="text-gray-400 text-sm text-center md:text-right cursor-pointer hover:text-white hover:underline transition"
        >
          © 2026 TrendyStore. All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;