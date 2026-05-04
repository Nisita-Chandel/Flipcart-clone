import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmazonPay,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    navigate("/subscribe", { state: { email } });
    setEmail("");
  };

  const handleReservedClick = () => {
    navigate("/reserved");
  };

  return (
    <footer className="relative bg-gradient-to-br from-black via-purple-950 to-indigo-950 text-white overflow-hidden">

      {/* Background Blur Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">

          {/* Brand Section */}
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
              <Link to="/">TrendyStore</Link>
            </h2>

            <p className="text-gray-300 leading-7 text-sm">
              Premium shopping destination for fashion, electronics,
              furniture, beauty & lifestyle products.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:bg-pink-500 transition cursor-pointer"
                  >
                    <Icon />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/" className="hover:text-pink-400">Home</Link></li>
              <li><Link to="/products" className="hover:text-pink-400">Products</Link></li>
              <li><Link to="/cart" className="hover:text-pink-400">Cart</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-lg mb-4">About</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Help</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/payments">Payments</Link></li>
              <li><Link to="/shipping">Shipping</Link></li>
              <li><Link to="/returns">Returns</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Exclusive Offers ✨
            </h3>

            <p
              onClick={() => navigate("/update")}
              className="text-gray-300 mb-4 cursor-pointer hover:text-pink-400 transition"
            >
              Get updates on offers & discounts
            </p>

            {/* Glassmorphism Input */}
            <div className="flex bg-white/10 backdrop-blur-lg rounded-full overflow-hidden border border-white/20">
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent px-4 py-3 w-full outline-none text-white placeholder-gray-400"
              />

              <button
                onClick={handleSubscribe}
                className="bg-gradient-to-r from-pink-500 to-purple-600 px-5 hover:scale-105 transition"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Payment Icons */}
          <div className="flex gap-5 text-3xl text-gray-300">
            <FaCcVisa className="hover:text-blue-400 transition" />
            <FaCcMastercard className="hover:text-red-400 transition" />
            <FaCcPaypal className="hover:text-blue-500 transition" />
            <FaCcAmazonPay className="hover:text-yellow-400 transition" />
          </div>

          {/* Copyright */}
          <p
            onClick={handleReservedClick}
            className="text-gray-400 text-sm cursor-pointer hover:text-white hover:underline transition"
          >
            © 2026 TrendyStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;