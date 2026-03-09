import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate(); // navigation hook

  return (
    <footer className="bg-[#172337] text-gray-300 pt-12 mt-16">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 text-sm">

        {/* LOGO & ABOUT */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">
            TrendyStore
          </h2>
          <p className="text-gray-400 leading-6">
            India’s leading online shopping platform offering
            the latest fashion, electronics, and home essentials
            at unbeatable prices.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-5 text-lg">
            <FaFacebook className="hover:text-white cursor-pointer transition" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
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
            <li><Link to="/" className="hover:text-indigo-400 transition">Home</Link></li>
            <li><Link to="/products" className="hover:text-indigo-400 transition">Products</Link></li>
            <li><Link to="/cart" className="hover:text-indigo-400 transition">Cart</Link></li>
          </ul>
        </div>

        {/* ABOUT */}
        <div>
          <h3 className="text-gray-400 mb-4 uppercase text-xs tracking-wider">
            About
          </h3>
          <ul className="space-y-3 text-white">
            <li><Link to="/contact" className="hover:text-indigo-400 transition">Contact Us</Link></li>
            <li><Link to="/about" className="hover:text-indigo-400 transition">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-indigo-400 transition">Careers</Link></li>
          </ul>
        </div>

        {/* HELP */}
        <div>
          <h3 className="text-gray-400 mb-4 uppercase text-xs tracking-wider">
            Help
          </h3>
          <ul className="space-y-3 text-white">
            <li><Link to="/payments" className="hover:text-indigo-400 transition">Payments</Link></li>
            <li><Link to="/shipping" className="hover:text-indigo-400 transition">Shipping</Link></li>
            <li><Link to="/returns" className="hover:text-indigo-400 transition">Returns</Link></li>
            <li><Link to="/faq" className="hover:text-indigo-400 transition">FAQ</Link></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-gray-400 mb-4 uppercase text-xs tracking-wider">
            Subscribe
          </h3>
          <p className="text-gray-400 mb-3">
            Get updates on special offers & discounts.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-l-md text-black w-full"
            />
            <button
              onClick={() => navigate("/")}   // navigate to home
              className="bg-indigo-600 px-4 py-2 rounded-r-md hover:bg-indigo-700 transition text-white"
            >
              Go
            </button>
          </div>
        </div>
      </div>

      {/* PAYMENT METHODS */}
      <div className="max-w-7xl mx-auto px-6 mt-12 border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="flex gap-6 text-2xl text-gray-400">
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcPaypal />
          <FaCcAmazonPay />
        </div>

        <p className="text-gray-400 text-sm text-center md:text-right">
          © 2026 TrendyStore. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;