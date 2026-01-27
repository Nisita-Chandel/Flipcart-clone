import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("Please fill all fields ❌");
      return;
    }

    toast.success("Registration Successful 🎉");

    // later: backend API call
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      
      {/* Card */}
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8"
      >
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Create Account 
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Join SastaFlipkart today
        </p>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="
              w-full px-4 py-2 rounded-lg border
              focus:outline-none focus:ring-2 focus:ring-green-500
              transition duration-300
            "
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full px-4 py-2 rounded-lg border
              focus:outline-none focus:ring-2 focus:ring-green-500
              transition duration-300
            "
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
              w-full px-4 py-2 rounded-lg border
              focus:outline-none focus:ring-2 focus:ring-green-500
              transition duration-300
            "
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="
            w-full bg-green-600 text-white py-2.5 rounded-lg font-semibold
            hover:bg-green-700 hover:shadow-lg
            active:scale-95
            transition duration-300
          "
        >
          Register
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600 hover:underline font-medium"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
