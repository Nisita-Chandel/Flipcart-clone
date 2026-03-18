import React, { useState } from "react";
import { motion } from "framer-motion";

const Ladies = () => {

  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart 🛒");
  };

  const ladiesProducts = [
    {
      id: 1,
      title: "Women Jacket",
      price: 1999,
      description: "Stylish and warm winter jacket for women.",
      img: "https://i.pinimg.com/736x/c0/9d/b5/c09db5748e423667f2827f68481f1c02.jpg",
    },
    {
      id: 2,
      title: "Ladies Handbag",
      price: 2499,
      description: "Premium handbag perfect for daily use.",
      img: "https://i.pinimg.com/736x/02/81/58/0281586e53e30e76f2378792d964533d.jpg",
    },
    {
      id: 3,
      title: "Stylish Heels",
      price: 1599,
      description: "Comfortable and trendy heels.",
      img: "https://i.pinimg.com/1200x/9c/de/65/9cde65cee20237d0ca7c7f05717f9027.jpg",
    },
    {
      id: 4,
      title: "Women Dress",
      price: 2999,
      description: "Elegant dress for parties and occasions.",
      img: "https://i.pinimg.com/736x/8c/7f/68/8c7f6894583e4cff11a7e7bc9bc64aef.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-100 px-8 py-16">

      <h1 className="text-4xl font-bold text-center mb-12 text-pink-600">
        👗 Ladies Fashion Collection
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto">

        {ladiesProducts.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ y: -10 }}
            className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition text-center"
          >

            {/* CLICK IMAGE */}
            <img
              src={product.img}
              alt={product.title}
              onClick={() => setSelectedProduct(product)}
              className="h-44 w-full object-contain mb-4 cursor-pointer hover:scale-105 transition"
            />

            <h3 className="font-semibold">{product.title}</h3>

            <p className="text-pink-600 font-bold mt-2">
              ₹{product.price}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="mt-4 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition"
            >
              Add to Cart
            </button>

          </motion.div>
        ))}

      </div>

      {/* MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-2xl w-[90%] md:w-[500px] relative">

            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-gray-600 text-xl"
            >
              ✖
            </button>

            <img
              src={selectedProduct.img}
              alt={selectedProduct.title}
              className="w-full h-60 object-contain mb-4"
            />

            <h2 className="text-2xl font-bold">
              {selectedProduct.title}
            </h2>

            <p className="text-gray-600 mt-2">
              {selectedProduct.description}
            </p>

            <p className="text-pink-600 font-bold text-xl mt-3">
              ₹{selectedProduct.price}
            </p>

            <button
              onClick={() => addToCart(selectedProduct)}
              className="mt-4 w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition"
            >
              Add to Cart 🛒
            </button>

          </div>
        </div>
      )}

    </div>
  );
};

export default Ladies;