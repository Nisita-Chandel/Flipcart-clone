import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      toast.error("Please fill all fields ❌");
      return;
    }

    // SUCCESS TOAST (backend call later)
    toast.success("Login Successful 🎉");

    // later you can call backend API here
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      
      {/* Card */}
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8"
      >
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Login to your SastaFlipkart account
        </p>

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
              focus:outline-none focus:ring-2 focus:ring-blue-500
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
              focus:outline-none focus:ring-2 focus:ring-blue-500
              transition duration-300
            "
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="
            w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold
            hover:bg-blue-700 hover:shadow-lg
            active:scale-95
            transition duration-300
          "
        >
          Login
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
  Don’t have an account?{" "}
  <Link
    to="/register"
    className="text-blue-600 hover:underline font-medium"
  >
    Register
  </Link>
</p>

      </form>
    </div>  
  );
};

export default Login;
