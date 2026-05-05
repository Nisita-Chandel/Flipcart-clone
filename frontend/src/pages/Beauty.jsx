import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHeart,
  FaRegHeart,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

const Beauty = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedFav =
      JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFav);
  }, []);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("✨ Product added to cart");
  };

  const toggleFavorite = (product) => {
    let updatedFav;
    const exists = favorites.find(
      (item) => item.id === product.id
    );

    if (exists) {
      updatedFav = favorites.filter(
        (item) => item.id !== product.id
      );
    } else {
      updatedFav = [...favorites, product];
    }

    setFavorites(updatedFav);
    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFav)
    );

    navigate("/favorite");
  };

  const isFavorite = (id) => {
    return favorites.some((item) => item.id === id);
  };

  const products = [
    {
      id: 1,
      title: "Luxury Makeup Kit",
      price: 999,
      description:
        "Complete makeup kit for daily and party use.",
      img: "https://i.pinimg.com/736x/ff/8d/c1/ff8dc1bbb55766ca59cb4bce40880163.jpg",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Matte Lipstick",
      price: 499,
      description:
        "Long-lasting matte lipstick with vibrant colors.",
      img: "https://i.pinimg.com/736x/f6/21/d9/f621d9dfce1c066eceb9290f676aca16.jpg",
      rating: 4.7,
    },
    {
      id: 3,
      title: "Premium Perfume",
      price: 1499,
      description:
        "Luxury fragrance with long-lasting freshness.",
      img: "https://i.pinimg.com/736x/18/a6/03/18a60337e45e4d5842c373478e7eb7da.jpg",
      rating: 4.9,
    },
    {
      id: 4,
      title: "Skincare Set",
      price: 1299,
      description:
        "Complete skincare solution for glowing skin.",
      img: "https://i.pinimg.com/736x/89/63/52/8963524761b32bb9167b43a36d619b7c.jpg",
      rating: 4.8,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-indigo-900 text-white relative overflow-hidden">

      {/* Floating Blur Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

      {/* Heading */}
      <div className="relative z-10 text-center py-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Beauty Collection ✨
        </h1>

        <p className="text-gray-300 mt-4">
          Discover luxury beauty essentials
        </p>
      </div>

      {/* Premium Banner */}
      <div className="relative z-10 w-[90%] md:w-[70%] lg:w-[60%] mx-auto h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
        <img
          src="https://i.pinimg.com/1200x/24/51/27/2451277bfcba967b2af87eeefa438d19.jpg"
          alt="Beauty Banner"
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

      {/* Product Grid */}
      <div className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-5 hover:scale-105 hover:shadow-2xl transition duration-300 relative"
            >
              {/* Wishlist */}
              <div
                className="absolute top-4 right-4 text-xl cursor-pointer"
                onClick={() => toggleFavorite(product)}
              >
                {isFavorite(product.id) ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart className="text-gray-300 hover:text-red-400 transition" />
                )}
              </div>

              {/* Product Image */}
              <img
                src={product.img}
                alt={product.title}
                onClick={() => setSelectedProduct(product)}
                className="h-52 mx-auto object-contain cursor-pointer hover:scale-110 transition duration-300"
              />

              <h3 className="text-xl font-bold mt-4">
                {product.title}
              </h3>

              <div className="flex justify-between items-center mt-2">
                <p className="text-pink-400 font-bold text-xl">
                  ₹{product.price}
                </p>

                <div className="flex items-center gap-1 text-yellow-400">
                  <FaStar />
                  {product.rating}
                </div>
              </div>

              <button
                onClick={() => addToCart(product)}
                className="mt-5 w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition duration-300 flex justify-center items-center gap-2"
              >
                <FaShoppingCart />
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4">

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 w-full max-w-lg text-white relative">

            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-xl hover:text-red-400"
            >
              ✖
            </button>

            <img
              src={selectedProduct.img}
              alt={selectedProduct.title}
              className="w-full h-72 object-contain mb-5"
            />

            <h2 className="text-3xl font-bold">
              {selectedProduct.title}
            </h2>

            <p className="text-gray-300 mt-3">
              {selectedProduct.description}
            </p>

            <p className="text-pink-400 font-bold text-2xl mt-4">
              ₹{selectedProduct.price}
            </p>

            <button
              onClick={() => addToCart(selectedProduct)}
              className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition duration-300"
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