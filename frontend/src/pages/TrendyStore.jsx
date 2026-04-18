import React from "react";
import { FaShoppingBag, FaStar } from "react-icons/fa";

const TrendyStore = () => {
  const products = [
    {
      id: 1,
      name: "Minimal White Sneakers",
      price: "₹2,499",
      image:
        "https://images.unsplash.com/photo-1528701800489-20be0bcbf8b8?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Aesthetic Hoodie",
      price: "₹1,899",
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Trendy Sunglasses",
      price: "₹999",
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Smart Watch",
      price: "₹3,499",
      image:
        "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 p-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800 tracking-wide">
          Trendy Store ✨
        </h1>
        <FaShoppingBag className="text-2xl text-indigo-600 cursor-pointer hover:scale-110 transition" />
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-3xl p-10 mb-10 shadow-xl">
        <h2 className="text-4xl font-bold mb-3">Upgrade Your Style 🔥</h2>
        <p className="opacity-90">
          Discover the latest fashion trends curated just for you.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="backdrop-blur-lg bg-white/40 border border-white/30 rounded-2xl shadow-lg p-4 hover:scale-105 transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-xl h-48 w-full object-cover mb-4"
            />

            <h3 className="font-semibold text-lg text-gray-800">
              {item.name}
            </h3>

            <div className="flex items-center text-yellow-500 text-sm my-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar className="opacity-40" />
            </div>

            <p className="text-indigo-600 font-bold text-lg">
              {item.price}
            </p>

            <button className="mt-3 w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-xl hover:opacity-90 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-12 text-gray-500">
        © 2026 Trendy Store • Designed with 💜
      </div>
    </div>
  );
};

export default TrendyStore;