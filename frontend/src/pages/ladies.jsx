import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";

const Ladies = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedFav = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFav);
  }, []);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart 🛒");
  };

  const toggleFavorite = (product) => {
    let updatedFav;
    const exists = favorites.find((item) => item.id === product.id);

    if (exists) {
      updatedFav = favorites.filter((item) => item.id !== product.id);
    } else {
      updatedFav = [...favorites, product];
    }

    setFavorites(updatedFav);
    localStorage.setItem("favorites", JSON.stringify(updatedFav));
  };

  const isFavorite = (id) => {
    return favorites.some((item) => item.id === id);
  };

  const products = [
    {
      id: 1,
      title: "Women Jacket",
      price: 1999,
      description: "Stylish winter jacket.",
      img: "https://i.pinimg.com/736x/c0/9d/b5/c09db5748e423667f2827f68481f1c02.jpg",
    },
    {
      id: 2,
      title: "Ladies Handbag",
      price: 2499,
      description: "Premium daily handbag.",
      img: "https://i.pinimg.com/736x/02/81/58/0281586e53e30e76f2378792d964533d.jpg",
    },
    {
      id: 3,
      title: "Stylish Heels",
      price: 1599,
      description: "Trendy comfortable heels.",
      img: "https://i.pinimg.com/1200x/9c/de/65/9cde65cee20237d0ca7c7f05717f9027.jpg",
    },
    {
      id: 4,
      title: "Women Dress",
      price: 2999,
      description: "Elegant party wear dress.",
      img: "https://i.pinimg.com/736x/8c/7f/68/8c7f6894583e4cff11a7e7bc9bc64aef.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100 px-6 py-12">

      {/* 🔥 Banner */}
      <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-xl relative">
        <img
          src="https://i.pinimg.com/1200x/4c/fc/d1/4cfcd13a3a7ea283e49096b3cbbcfe09.jpg"
          alt="banner"
          className="w-full h-full object-cover scale-105 hover:scale-110 transition duration-700"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold tracking-wide">
            Ladies Collection ✨
          </h1>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-10 text-pink-600">
        Explore Latest Fashion 💃
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">

        {products.map((product) => (
          <div
            key={product.id}
            className="backdrop-blur-lg bg-white/70 rounded-2xl shadow-lg p-5 hover:shadow-2xl hover:-translate-y-2 transition duration-300 relative group"
          >

            {/* ❤️ Favorite */}
            <div
              className="absolute top-3 right-3 text-xl cursor-pointer"
              onClick={() => toggleFavorite(product)}
            >
              {isFavorite(product.id) ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart className="text-gray-500 group-hover:text-red-400" />
              )}
            </div>

            {/* Image */}
            <img
              src={product.img}
              alt={product.title}
              onClick={() => setSelectedProduct(product)}
              className="h-44 w-full object-contain mb-4 cursor-pointer transition transform group-hover:scale-110"
            />

            {/* Info */}
            <h3 className="font-semibold text-lg">{product.title}</h3>

            <p className="text-pink-600 font-bold mt-2 text-xl">
              ₹{product.price}
            </p>

            {/* Button */}
            <button
              onClick={() => addToCart(product)}
              className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-xl hover:scale-105 transition"
            >
              <FaShoppingCart />
              Add to Cart
            </button>

          </div>
        ))}
      </div>

      {/* 🌟 MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm">

          <div className="bg-white rounded-3xl p-6 w-[90%] md:w-[450px] shadow-2xl animate-fadeIn relative">

            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-4 text-xl text-gray-600 hover:text-black"
            >
              ✖
            </button>

            <img
              src={selectedProduct.img}
              alt={selectedProduct.title}
              className="w-full h-56 object-contain mb-4"
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
              className="mt-5 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-xl hover:scale-105 transition"
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