import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaShoppingCart, FaSearch, FaHeart } from "react-icons/fa";
import { useState } from "react";

/* ---------------- DATA ---------------- */

const products = [
  {
    id: 1,
    title: "Stylish Jacket",
    price: 1999,
    img: "https://i.pinimg.com/736x/c0/9d/b5/c09db5748e423667f2827f68481f1c02.jpg",
    category: "Fashion",
  },
  {
    id: 2,
    title: "Modern Chair",
    price: 4999,
    img: "https://i.pinimg.com/1200x/45/f9/83/45f983a60e38b6182b3b42e871e2ee86.jpg",
    category: "Furniture",
  },
  {
    id: 3,
    title: "Smart Watch",
    price: 7999,
    img: "https://i.pinimg.com/1200x/0b/f5/7e/0bf57e9b54ee33e7765ebd8bebb7b407.jpg",
    category: "Electronics",
  },
  {
    id: 4,
    title: "Beauty Kit",
    price: 999,
    img: "https://i.pinimg.com/1200x/6e/a8/05/6ea8053b16e93ef94a6c823bb38c6a7d.jpg",
    category: "Beauty",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const goToDetails = (product) => {
    navigate("/details", { state: product });
  };

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-br from-indigo-100 via-white to-purple-100 min-h-screen">

      {/* ---------------- NAVBAR ---------------- */}
      <div className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-indigo-600 cursor-pointer">
          TrendyStore
        </h1>

        <div className="flex items-center gap-4">
          <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="relative cursor-pointer">
            <FaShoppingCart size={22} className="text-indigo-600" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              2
            </span>
          </div>
        </div>
      </div>

      {/* ---------------- HERO SECTION ---------------- */}
      <div className="text-center py-16 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold"
        >
          Big Billion Days Sale 🎉
        </motion.h2>
        <p className="mt-4 text-lg">
          Up to 70% OFF on Fashion, Electronics & More
        </p>
        <button
  onClick={() => navigate("/shipping")}
  className="mt-6 bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
>
  Shop Now
</button>
      </div>

      {/* ---------------- PRODUCTS SECTION ---------------- */}
      <div className="px-6 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">
          🔥 Trending Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -8 }}
              className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer relative"
              onClick={() => goToDetails(product)}
            >
              <FaHeart className="absolute top-4 right-4 text-gray-400 hover:text-red-500" />
              <img
                src={product.img}
                className="h-40 w-full object-contain mb-4"
              />
              <h3 className="font-semibold text-sm">{product.title}</h3>
              <p className="text-indigo-600 font-bold mt-1">
                ₹{product.price}
              </p>
              <button className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ---------------- NEWSLETTER ---------------- */}
      <div className="bg-indigo-600 text-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Subscribe for Exclusive Offers 💌
        </h2>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-lg text-black w-64"
          />
          <button className="bg-purple-700 px-6 py-2 rounded-r-lg hover:bg-purple-800 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* ---------------- FOOTER ---------------- */}
      
    </div>
  );
};

export default Home;