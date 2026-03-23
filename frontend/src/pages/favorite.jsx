import React, { useState, useEffect } from "react";
import { FaHeart, FaTrash } from "react-icons/fa";

const Favorite = () => {

  const [favorites, setFavorites] = useState([]);

  // ✅ Load favorites from localStorage
  useEffect(() => {
    const storedFav = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFav);
  }, []);

  // ✅ Remove from favorites
  const removeFavorite = (id) => {
    const updatedFav = favorites.filter((item) => item.id !== id);
    setFavorites(updatedFav);
    localStorage.setItem("favorites", JSON.stringify(updatedFav));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-10 flex justify-center items-center gap-2">
        <FaHeart className="text-red-500" />
        My Favorites
      </h1>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No favorite items yet ❤️
        </p>
      ) : (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {favorites.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-48 w-full object-cover rounded-lg"
              />

              <h2 className="text-lg font-semibold mt-3">{item.title}</h2>

              <p className="text-blue-600 font-bold">₹{item.price}</p>

              <button
                onClick={() => removeFavorite(item.id)}
                className="mt-3 w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
              >
                <FaTrash />
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorite;