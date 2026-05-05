import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim()) {
      navigate(`/products?search=${search}`);
      setSearch("");
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-2xl relative overflow-hidden">

      {/* Background Blur Effects */}
      <div className="absolute top-0 left-20 w-40 h-40 bg-pink-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute top-0 right-20 w-40 h-40 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent hover:scale-110 transition duration-300"
        >
          SastaFlipkart ✨
        </Link>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-5 py-2 w-80 hover:border-pink-400 transition duration-300"
        >
          <FaSearch className="text-gray-300 mr-3" />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none w-full text-white placeholder-gray-300"
          />
        </form>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center text-white font-medium">

          {[
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: "Login", path: "/login" },
          ].map((item, index) => (
            <li key={index} className="relative group">
              <Link
                to={item.path}
                className="transition duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-blue-400 group-hover:bg-clip-text"
              >
                {item.name}
              </Link>

              {/* Animated Underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-pink-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}

          {/* Cart */}
          <li
            className="relative cursor-pointer group"
            onClick={() => navigate("/cart")}
          >
            <FaShoppingCart
              size={22}
              className="group-hover:text-pink-400 group-hover:scale-110 transition duration-300"
            />

            <span className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-500 text-xs px-2 rounded-full shadow-lg animate-pulse">
              2
            </span>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white text-2xl cursor-pointer">
          {menuOpen ? (
            <FaTimes
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-400 transition"
            />
          ) : (
            <FaBars
              onClick={() => setMenuOpen(true)}
              className="hover:text-pink-400 transition"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-xl px-6 py-6 text-white space-y-5 border-t border-white/10">

          {[
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: "Cart", path: "/cart" },
            { name: "Login", path: "/login" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="block hover:text-pink-400 transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;