import React from "react";
import { FaShoppingBag, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TrendyStore = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "Minimal White Sneakers",
      price: 2499,
      img: "https://images.unsplash.com/photo-1528701800489-20be0bcbf8b8?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Aesthetic Hoodie",
      price: 1899,
      img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Trendy Sunglasses",
      price: 999,
      img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Smart Watch",
      price: 3499,
      img: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // ✅ ADD TO CART FUNCTION (localStorage)
  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const updatedCart = [...existingCart, product];

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    navigate("/cart"); // go to cart page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Trendy Store ✨
        </h1>

        <FaShoppingBag
          onClick={() => navigate("/cart")}
          className="text-2xl text-indigo-600 cursor-pointer hover:scale-110"
        />
      </div>

      {/* Products */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transition"
          >
            <img
              src={item.img}
              alt={item.title}
              className="rounded-xl h-48 w-full object-cover mb-4"
            />

            <h3 className="font-semibold text-lg">{item.title}</h3>

            <div className="flex text-yellow-500 text-sm my-1">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="opacity-40" />
            </div>

            <p className="text-indigo-600 font-bold text-lg">
              ₹{item.price}
            </p>

            <button
              onClick={() => handleAddToCart(item)}
              className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-xl"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendyStore;