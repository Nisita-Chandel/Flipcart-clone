import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaSearch,
  FaHeart,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";
import { useState } from "react";

const products = [
  {
    id: 1,
    title: "Stylish Jacket",
    price: 1999,
    img: "https://i.pinimg.com/736x/c0/9d/b5/c09db5748e423667f2827f68481f1c02.jpg",
    category: "Fashion",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Modern Chair",
    price: 4999,
    img: "https://i.pinimg.com/1200x/45/f9/83/45f983a60e38b6182b3b42e871e2ee86.jpg",
    category: "Furniture",
    rating: 4.7,
  },
  {
    id: 3,
    title: "Smart Watch",
    price: 7999,
    img: "https://i.pinimg.com/1200x/0b/f5/7e/0bf57e9b54ee33e7765ebd8bebb7b407.jpg",
    category: "Electronics",
    rating: 4.9,
  },
  {
    id: 4,
    title: "Beauty Kit",
    price: 999,
    img: "https://i.pinimg.com/736x/96/a5/17/96a5177c29eb65c1485b653d635257ad.jpg",
    category: "Beauty",
    rating: 4.6,
  },
];

const categories = [
  { name: "Fashion", route: "/ladies", emoji: "👗" },
  { name: "Furniture", route: "/furniture", emoji: "🪑" },
  { name: "Electronics", route: "/electronics", emoji: "📱" },
  { name: "Beauty", route: "/beauty", emoji: "💄" },
];

const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-black text-white overflow-hidden">

      {/* Floating Background Blur */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

      {/* Navbar */}
      <div className="sticky top-0 z-50 backdrop-blur-lg bg-white/10 border-b border-white/20 px-8 py-4 flex justify-between items-center">
        <h1
          onClick={() => navigate("/")}
          className="text-3xl font-bold cursor-pointer bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
        >
          TrendyStore
        </h1>

        <div className="flex items-center gap-5">
          <div className="flex items-center bg-white/20 px-4 py-2 rounded-xl">
            <FaSearch className="mr-2 text-gray-300" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none text-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <FaShoppingCart
            size={24}
            className="cursor-pointer hover:scale-110 transition"
            onClick={() => navigate("/cart")}
          />
        </div>
      </div>

      {/* Hero Section */}
      <div className="text-center py-24 px-6 relative">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-extrabold leading-tight"
        >
          Premium Shopping <br />
          Experience ✨
        </motion.h1>

        <p className="mt-6 text-gray-300 text-lg">
          Discover fashion, electronics, furniture & beauty products
        </p>

        <button
          onClick={() => navigate("/shipping")}
          className="mt-8 bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition shadow-xl"
        >
          Shop Now <FaArrowRight className="inline ml-2" />
        </button>
      </div>

      {/* Categories */}
      <div className="px-8 py-16 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Shop Categories
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              onClick={() => navigate(cat.route)}
              className="backdrop-blur-lg bg-white/10 p-6 rounded-2xl text-center cursor-pointer border border-white/20 hover:bg-white/20 transition"
            >
              <div className="text-4xl mb-3">{cat.emoji}</div>
              <h3 className="text-xl font-semibold">{cat.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="px-8 pb-20 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Trending Products 🔥
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10 }}
              className="backdrop-blur-lg bg-white/10 p-5 rounded-2xl border border-white/20 hover:shadow-2xl transition cursor-pointer"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-48 object-cover rounded-xl"
              />

              <h3 className="mt-4 text-lg font-semibold">
                {product.title}
              </h3>

              <div className="flex items-center justify-between mt-2">
                <p className="text-pink-400 font-bold text-xl">
                  ₹{product.price}
                </p>

                <div className="flex items-center gap-1 text-yellow-400">
                  <FaStar />
                  {product.rating}
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                <button
                  className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 py-2 rounded-lg hover:scale-105 transition"
                  onClick={() => navigate("/cart")}
                >
                  Add to Cart
                </button>

                <button
                  className="p-3 bg-white/20 rounded-lg hover:bg-red-500 transition"
                >
                  <FaHeart />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black/40 backdrop-blur-lg text-center py-6 border-t border-white/10">
        <p className="text-gray-300">
          © 2026 TrendyStore | Premium Shopping Experience
        </p>
      </div>
    </div>
  );
};

export default Home;