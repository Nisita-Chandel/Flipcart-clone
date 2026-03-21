import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Furniture = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  // Load favorites
  useEffect(() => {
    const storedFav = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFav);
  }, []);

  // Add to Cart
  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart 🛒");
  };

  // Toggle Favorite
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

    // Navigate to favorite page
    navigate("/favorite");
  };

  // Check favorite
  const isFavorite = (id) => {
    return favorites.some((item) => item.id === id);
  };

  const products = [
    {
      id: 1,
      title: "Modern Chair",
      price: 4999,
      description: "Comfortable and stylish modern chair.",
      img: "https://i.pinimg.com/1200x/45/f9/83/45f983a60e38b6182b3b42e871e2ee86.jpg",
    },
    {
      id: 2,
      title: "Wooden Table",
      price: 7999,
      description: "Durable wooden table for dining or work.",
      img: "https://i.pinimg.com/1200x/69/47/98/6947987f1e5b8a683a97b93541107089.jpg",
    },
    {
      id: 3,
      title: "Luxury Sofa",
      price: 14999,
      description: "Premium sofa with ultimate comfort.",
      img: "https://i.pinimg.com/736x/48/bd/b3/48bdb3d380213d6623f027879b9d9a5b.jpg",
    },
    {
      id: 4,
      title: "Premium Bed",
      price: 19999,
      description: "Spacious and elegant premium bed.",
      img: "https://i.pinimg.com/736x/57/4c/62/574c62701ecb68f06fd831432a13637a.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Furniture Collection 🪑
      </h1>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition relative"
          >

            {/* ❤️ Favorite Icon */}
            <div
              className="absolute top-3 right-3 text-xl cursor-pointer"
              onClick={() => toggleFavorite(product)}
            >
              {isFavorite(product.id) ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart className="text-gray-500" />
              )}
            </div>

            {/* Image */}
            <img
              src={product.img}
              alt={product.title}
              onClick={() => setSelectedProduct(product)}
              className="h-40 mx-auto object-contain mb-4 cursor-pointer hover:scale-105 transition"
            />

            <h3 className="font-semibold text-lg">{product.title}</h3>

            <p className="text-indigo-600 font-bold mt-1">
              ₹{product.price}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Add to Cart
            </button>

          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-2xl w-[90%] md:w-[500px] relative">

            {/* Close */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-xl text-gray-600"
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

            <p className="text-indigo-600 font-bold text-xl mt-3">
              ₹{selectedProduct.price}
            </p>

            <button
              onClick={() => addToCart(selectedProduct)}
              className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
            >
              Add to Cart 🛒
            </button>

          </div>
        </div>
      )}

    </div>
  );
};

export default Furniture;