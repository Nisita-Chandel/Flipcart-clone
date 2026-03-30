import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Beauty = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  // Load favorites from localStorage
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

    navigate("/favorite");
  };

  const isFavorite = (id) => {
    return favorites.some((item) => item.id === id);
  };

  const products = [
    {
      id: 1,
      title: "Makeup Kit",
      price: 999,
      description: "Complete makeup kit for daily and party use.",
      img: "https://i.pinimg.com/736x/ff/8d/c1/ff8dc1bbb55766ca59cb4bce40880163.jpg",
    },
    {
      id: 2,
      title: "Lipstick",
      price: 499,
      description: "Long-lasting matte lipstick with vibrant color.",
      img: "https://i.pinimg.com/736x/f6/21/d9/f621d9dfce1c066eceb9290f676aca16.jpg",
    },
    {
      id: 3,
      title: "Perfume",
      price: 1499,
      description: "Premium fragrance with long-lasting freshness.",
      img: "https://i.pinimg.com/736x/18/a6/03/18a60337e45e4d5842c373478e7eb7da.jpg",
    },
    {
      id: 4,
      title: "Skincare Set",
      price: 1299,
      description: "Complete skincare solution for glowing skin.",
      img: "https://i.pinimg.com/736x/89/63/52/8963524761b32bb9167b43a36d619b7c.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* 🔥 Banner Section */}
      <div className="w-full h-[250px] md:h-[350px] overflow-hidden">
        <img
          src="https://i.pinimg.com/736x/98/d1/aa/98d1aa6cee69fd8734b4f158155c3c21.jpg"
          alt="Beauty Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="py-12 px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Beauty Collection 💄
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

              {/* Product Image */}
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
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-[90%] md:w-[500px] relative">

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

export default Beauty;