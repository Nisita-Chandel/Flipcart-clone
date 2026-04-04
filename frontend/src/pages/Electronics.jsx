import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";

const Electronics = () => {
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
    navigate("/cart"); // ✅ Redirect to cart page
  };

  const toggleFavorite = (product) => {
    let updatedFav;
    const exists = favorites.find((item) => item.id === product.id);

    if (exists) {
      updatedFav = favorites.filter((item) => item.id !== product.id);
    } else {
      updatedFav = [...favorites, product];
      navigate("/favorite");
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
      title: "Smart Watch",
      price: 7999,
      description: "Track your fitness and stay connected.",
      img: "https://i.pinimg.com/1200x/0b/f5/7e/0bf57e9b54ee33e7765ebd8bebb7b407.jpg",
    },
    {
      id: 2,
      title: "Smart TV",
      price: 24999,
      description: "Enjoy 4K entertainment with smart features.",
      img: "https://i.pinimg.com/1200x/16/99/25/169925e71ddf66880636818841138913.jpg",
    },
    {
      id: 3,
      title: "Headphones",
      price: 2999,
      description: "High-quality sound with noise cancellation.",
      img: "https://i.pinimg.com/736x/a5/2c/1c/a52c1cb5dbf7bc4e1523f1c7847cb08d.jpg",
    },
    {
      id: 4,
      title: "Laptop",
      price: 55999,
      description: "Powerful performance for work and gaming.",
      img: "https://i.pinimg.com/1200x/99/75/01/99750135b74204cbf3187f2d74956ae0.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-10 px-4">

      {/* 🔥 Banner */}
      <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-12 shadow-lg">
        <img
          src="https://t3.ftcdn.net/jpg/11/80/90/06/360_F_1180900664_EGOErJLzFqvqBovmkMRGCTxO5hiFnZPX.jpg"
          alt="Electronics Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Electronics Store ⚡</h1>
          <p className="mt-2 text-lg">Latest gadgets at best prices</p>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Trending Electronics 🔥
      </h2>

      {/* Products */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white/80 backdrop-blur-lg p-5 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 relative group"
          >

            {/* ❤️ Favorite */}
            <div
              className="absolute top-3 right-3 text-xl cursor-pointer transition transform hover:scale-125"
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
              className="h-40 mx-auto object-contain mb-4 cursor-pointer group-hover:scale-110 transition duration-300"
            />

            <h3 className="font-semibold text-lg">{product.title}</h3>

            <p className="text-indigo-600 font-bold mt-1 text-lg">
              ₹{product.price}
            </p>

            {/* Button */}
            <button
              onClick={() => addToCart(product)}
              className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded-lg hover:scale-105 transition"
            >
              <FaShoppingCart /> Add to Cart
            </button>

          </div>
        ))}

      </div>

      {/* 🔥 MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-3xl w-[90%] md:w-[500px] relative shadow-2xl animate-fadeIn">

            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-xl"
            >
              ✖
            </button>

            <img
              src={selectedProduct.img}
              alt={selectedProduct.title}
              className="w-full h-60 object-contain mb-4"
            />

            <h2 className="text-2xl font-bold">{selectedProduct.title}</h2>

            <p className="text-gray-600 mt-2">
              {selectedProduct.description}
            </p>

            <p className="text-indigo-600 font-bold text-xl mt-3">
              ₹{selectedProduct.price}
            </p>

            <button
              onClick={() => addToCart(selectedProduct)}
              className="mt-4 w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded-lg hover:scale-105 transition"
            >
              Add to Cart 🛒
            </button>

          </div>
        </div>
      )}

    </div>
  );
};

export default Electronics;