import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaUser, FaEnvelope, FaLock, FaPhone } from "react-icons/fa";

const Register = () => {

  const [fullname,setFullname] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [mobile,setMobile] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:4000/api/auth/register",
        {
          fullname,
          email,
          password,
          mobile
        },
        { withCredentials:true }
      );

      toast.success(res.data.message);

    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 px-4">

      <div className="bg-white shadow-xl rounded-xl w-full max-w-md p-8">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Account 🚀
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Register to get started
        </p>

        <form onSubmit={handleRegister} className="space-y-5">

          {/* Full Name */}
          <div className="relative">
            <FaUser className="absolute top-3.5 left-3 text-gray-400"/>
            <input
              type="text"
              placeholder="Enter your full name"
              value={fullname}
              onChange={(e)=>setFullname(e.target.value)}
              className="w-full border rounded-lg py-2.5 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute top-3.5 left-3 text-gray-400"/>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full border rounded-lg py-2.5 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Mobile */}
          <div className="relative">
            <FaPhone className="absolute top-3.5 left-3 text-gray-400"/>
            <input
              type="text"
              placeholder="Enter your mobile number"
              value={mobile}
              onChange={(e)=>setMobile(e.target.value)}
              className="w-full border rounded-lg py-2.5 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute top-3.5 left-3 text-gray-400"/>
            <input
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full border rounded-lg py-2.5 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2.5 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Register
          </button>

        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          Already have an account?
          <Link
            to="/login"
            className="text-purple-600 hover:underline ml-1 font-medium"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Register;