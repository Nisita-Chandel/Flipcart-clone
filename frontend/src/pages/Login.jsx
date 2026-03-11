import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:4000/api/auth/login",
        { email, password },
        { withCredentials:true }
      );

      toast.success(res.data.message);

    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">

      <div className="bg-white shadow-xl rounded-xl w-full max-w-md p-8">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back 👋
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Login to your account
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute top-3.5 left-3 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full border rounded-lg py-2.5 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute top-3.5 left-3 text-gray-400" />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full border rounded-lg py-2.5 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right text-sm">
            <Link to="/forgot-password" className="text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>

        {/* Register Link */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          Don't have an account?
          <Link
            to="/register"
            className="text-blue-600 hover:underline ml-1 font-medium"
          >
            Register
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Login;