import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaShoppingCart, FaSearch, FaHeart } from "react-icons/fa";
import { useState } from "react";

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
    <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-100 min-h-screen">

      {/* NAVBAR */}
      <div className="backdrop-blur-md bg-white/70 shadow-md px-8 py-4 flex justify-between items-center sticky top-0 z-50">

        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-bold text-indigo-600 cursor-pointer hover:scale-105 transition"
        >
          TrendyStore
        </h1>

        <div className="flex items-center gap-5">

          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-xl shadow-sm">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="relative cursor-pointer hover:scale-110 transition">
            <FaShoppingCart size={22} className="text-indigo-600" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              2
            </span>
          </div>

        </div>
      </div>

      {/* HERO */}
      <div className="text-center py-24 px-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold"
        >
          Big Billion Days Sale 🎉
        </motion.h2>

        <p className="mt-6 text-lg opacity-90">
          Up to <span className="font-bold">70% OFF</span> on Fashion,
          Electronics & Furniture
        </p>

        <button
          onClick={() => navigate("/shipping")}
          className="mt-8 bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:bg-gray-100 transition"
        >
          Shop Now
        </button>

      </div>

      {/* PRODUCTS */}
      <div className="px-8 py-16 max-w-7xl mx-auto">

        <h2 className="text-3xl font-bold mb-12 text-center">
          🔥 Trending Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {filteredProducts.map((product) => (

            <motion.div
              key={product.id}
              whileHover={{ y: -10 }}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-2xl transition cursor-pointer relative group"
              onClick={() => goToDetails(product)}
            >

              <FaHeart
                className="absolute top-4 right-4 text-gray-400 group-hover:text-red-500 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/favorite");
                }}
              />

              <img
                src={product.img}
                className="h-44 w-full object-contain mb-4 group-hover:scale-105 transition"
                alt={product.title}
              />

              <h3 className="font-semibold text-sm">{product.title}</h3>

              <p className="text-indigo-600 font-bold mt-1 text-lg">
                ₹{product.price}
              </p>

              <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                Add to Cart
              </button>

            </motion.div>

          ))}

        </div>

      </div>

      {/* NEWSLETTER */}
     
      {/* NEWSLETTER */}
<div className="py-20 px-6 bg-gray-50">

<div className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl p-10 text-center">

  <h2 className="text-3xl font-bold text-gray-800 mb-3">
    Subscribe for Exclusive Offers 💌
  </h2>

  <p className="text-gray-500 mb-8">
    Get updates about our latest deals, new arrivals and discounts
  </p>

  <div className="flex flex-col sm:flex-row justify-center gap-4">

    <input
      type="email"
      placeholder="Enter your email"
      className="px-5 py-3 rounded-xl border border-gray-300 w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-indigo-400"
    />

    <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition shadow-md">
      Subscribe
    </button>

  </div>

</div>

</div>

    </div>
  );
};

export default Home;