import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";

const Furniture = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedFav = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFav);
  }, []);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...cart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };

  const toggleFavorite = (product) => {
    const exists = favorites.some((item) => item.id === product.id);

    const updatedFav = exists
      ? favorites.filter((item) => item.id !== product.id)
      : [...favorites, product];

    setFavorites(updatedFav);
    localStorage.setItem("favorites", JSON.stringify(updatedFav));
  };

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
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 pt-10 pb-4 px-4">
      
      <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Premium Furniture Collection
      </h1>

      {/* Banner */}
      <div className="w-full h-[380px] md:h-[400px] overflow-hidden rounded-2xl mb-10 shadow-lg">
        <img
          src="https://i.pinimg.com/1200x/9e/39/56/9e39568dd08ab62c6d179a77d9cb902f.jpg"
          alt="Furniture Banner"
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-5 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 relative group"
          >
            {/* Favorite */}
            <div
              className="absolute top-3 right-3 text-xl cursor-pointer z-10"
              onClick={() => toggleFavorite(product)}
            >
              {isFavorite(product.id) ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart className="text-gray-400 hover:text-red-500 transition" />
              )}
            </div>

            {/* Image */}
            <img
              src={product.img}
              alt={product.title}
              onClick={() => setSelectedProduct(product)}
              className="h-44 mx-auto object-contain mb-4 cursor-pointer group-hover:scale-110 transition duration-300"
            />

            <h3 className="font-semibold text-lg text-gray-700">
              {product.title}
            </h3>

            <p className="text-indigo-600 font-bold text-lg mt-1">
              ₹{product.price}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="mt-4 w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-[90%] md:w-[500px] relative shadow-2xl">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-xl text-gray-600 hover:text-black"
            >
              ✖
            </button>

            <img
              src={selectedProduct.img}
              alt={selectedProduct.title}
              className="w-full h-60 object-contain mb-4"
            />

            <h2 className="text-2xl font-bold text-gray-800">
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
              className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
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