import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaShoppingBag,
  FaArrowRight,
} from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!fullname || !email || !password || !mobile) {
      return toast.error("All fields are required");
    }

    if (mobile.length !== 10) {
      return toast.error("Mobile number must be 10 digits");
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:4000/api/auth/register",
        {
          fullname,
          email,
          password,
          mobile,
        },
        { withCredentials: true }
      );

      toast.success(res.data.message);

      setFullname("");
      setEmail("");
      setPassword("");
      setMobile("");

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-indigo-900 flex items-center justify-center px-4 relative overflow-hidden">

      {/* Background Blur Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

      {/* Register Card */}
      <div className="relative z-10 w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 text-white">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center shadow-lg">
            <FaShoppingBag size={35} />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-3">
          Create Account 🚀
        </h2>

        <p className="text-center text-gray-300 mb-8">
          Join our premium shopping experience
        </p>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-5">

          {/* Full Name */}
          <div className="relative">
            <FaUser className="absolute top-4 left-4 text-gray-300" />
            <input
              type="text"
              placeholder="Enter your full name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-300"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute top-4 left-4 text-gray-300" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-300"
            />
          </div>

          {/* Mobile */}
          <div className="relative">
            <FaPhone className="absolute top-4 left-4 text-gray-300" />
            <input
              type="tel"
              placeholder="Enter mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              maxLength={10}
              className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-300"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute top-4 left-4 text-gray-300" />
            <input
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-300"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition duration-300 ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 shadow-lg"
            }`}
          >
            {loading ? (
              "Registering..."
            ) : (
              <>
                Register <FaArrowRight />
              </>
            )}
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-300 mt-6 text-sm">
          Already have an account?
          <Link
            to="/login"
            className="text-pink-400 ml-2 hover:underline font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;