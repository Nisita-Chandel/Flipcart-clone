import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  FaEnvelope,
  FaLock,
  FaShoppingBag,
  FaArrowRight,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:4000/api/auth/login",
        { email, password },
        { withCredentials: true }
      );

      toast.success(res.data.message);

      setUser(res.data.user);

      navigate("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed"
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

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 text-white">

        {/* Logo/Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center shadow-lg">
            <FaShoppingBag size={35} />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-3">
          Welcome Back ✨
        </h2>

        <p className="text-center text-gray-300 mb-8">
          Login to continue shopping
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">

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

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute top-4 left-4 text-gray-300" />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-300"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right text-sm">
            <Link
              to="/forgot-password"
              className="text-pink-400 hover:text-pink-300 transition"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
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
              "Logging in..."
            ) : (
              <>
                Login <FaArrowRight />
              </>
            )}
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-gray-300 mt-6 text-sm">
          Don't have an account?
          <Link
            to="/register"
            className="text-pink-400 ml-2 hover:underline font-semibold"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;