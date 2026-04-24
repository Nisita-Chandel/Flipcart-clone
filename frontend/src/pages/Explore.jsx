import React from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";

const Explore = () => {
  const products = [
    {
      id: 1,
      name: "Stylish Sneakers",
      price: "₹1,999",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
      id: 2,
      name: "Classic Watch",
      price: "₹2,499",
      rating: 4.2,
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552"
    },
    {
      id: 3,
      name: "Trendy Jacket",
      price: "₹3,299",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47"
    },
    {
      id: 4,
      name: "Cool Sunglasses",
      price: "₹999",
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-8">
        Explore Products
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-48 w-full object-cover rounded-xl"
            />

            <h2 className="text-lg font-semibold mt-3">
              {item.name}
            </h2>

            <div className="flex items-center mt-1 text-yellow-500">
              <FaStar />
              <span className="ml-1 text-gray-700">
                {item.rating}
              </span>
            </div>

            <p className="text-xl font-bold mt-2">
              {item.price}
            </p>

            <button className="mt-4 w-full bg-black text-white py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition">
              <FaShoppingCart />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;