import { useEffect, useState, useMemo } from "react";
import API from "../services/api";
import {
  FaHeart,
  FaSearch,
  FaMicrophone,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

const categories = ["All", "Electronics", "Fashion", "Home"];

// Fuzzy Search
const fuzzyMatch = (text, search) => {
  let t = text.toLowerCase();
  let s = search.toLowerCase();

  let i = 0;
  for (let char of t) {
    if (char === s[i]) i++;
    if (i === s.length) return true;
  }
  return false;
};

// Highlight Search Text
const highlightText = (text, search) => {
  if (!search) return text;

  const regex = new RegExp(`(${search})`, "gi");

  return text.split(regex).map((part, i) =>
    part.toLowerCase() === search.toLowerCase() ? (
      <span
        key={i}
        className="bg-yellow-300 text-black px-1 rounded"
      >
        {part}
      </span>
    ) : (
      part
    )
  );
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    API.get("/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));

    const stored =
      JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(stored);
  }, []);

  const saveSearch = (value) => {
    if (!value) return;

    let updated = [
      value,
      ...recentSearches.filter((s) => s !== value),
    ];

    updated = updated.slice(0, 5);

    setRecentSearches(updated);
    localStorage.setItem(
      "recentSearches",
      JSON.stringify(updated)
    );
  };

  // Voice Search
  const handleVoiceSearch = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.start();

    recognition.onresult = (event) => {
      const voiceText = event.results[0][0].transcript;
      setSearch(voiceText);
      saveSearch(voiceText);
    };
  };

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const filteredProducts = useMemo(() => {
    const searchText = search.toLowerCase().trim();

    return products.filter((p) => {
      const name = p.name?.toLowerCase() || "";
      const category = p.category?.toLowerCase() || "";

      return (
        (fuzzyMatch(name, searchText) ||
          fuzzyMatch(category, searchText)) &&
        (activeCategory === "All" ||
          category === activeCategory.toLowerCase())
      );
    });
  }, [products, search, activeCategory]);

  const suggestions = useMemo(() => {
    if (!search) return recentSearches;

    const productMatches = products
      .filter((p) =>
        p.name?.toLowerCase().includes(search.toLowerCase())
      )
      .slice(0, 3)
      .map((p) => p.name);

    return [...new Set([...productMatches, ...recentSearches])].slice(
      0,
      5
    );
  }, [search, products, recentSearches]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-indigo-900 text-white px-6 py-10 relative overflow-hidden">

      {/* Background Blur */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <h1 className="text-5xl font-extrabold">
          Premium Products ✨
        </h1>
        <p className="text-gray-300 mt-3">
          Explore trending collections
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-8 relative z-10">
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-full overflow-hidden flex items-center px-4 py-3 shadow-lg">
          <FaSearch className="text-gray-300 mr-3" />

          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-transparent outline-none text-white placeholder-gray-300"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowSuggestions(true);
            }}
            onBlur={() =>
              setTimeout(() => setShowSuggestions(false), 200)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") saveSearch(search);
            }}
          />

          <FaMicrophone
            onClick={handleVoiceSearch}
            className="cursor-pointer hover:text-pink-400 transition"
          />
        </div>

        {/* Suggestions */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute w-full bg-white text-black rounded-2xl mt-3 shadow-xl z-50">
            {suggestions.map((item, i) => (
              <div
                key={i}
                className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSearch(item);
                  saveSearch(item);
                  setShowSuggestions(false);
                }}
              >
                {highlightText(item, search)}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Categories */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap relative z-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
              activeCategory === cat
                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white scale-105"
                : "bg-white/10 backdrop-blur-lg border border-white/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Loading Skeleton */}
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="h-72 rounded-2xl bg-white/10 animate-pulse"
            ></div>
          ))}
        </div>
      ) : (
        <>
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 relative z-10">
            {filteredProducts.map((product) => (
              <div
                key={product._id}
                className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transition duration-300"
              >
                {/* Image Preview */}
                <div className="h-56 bg-white flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full object-contain hover:scale-110 transition duration-300"
                  />
                </div>

                <div className="p-5">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg">
                      {highlightText(product.name, search)}
                    </h3>

                    <button
                      onClick={() =>
                        toggleWishlist(product._id)
                      }
                    >
                      <FaHeart
                        className={`${
                          wishlist.includes(product._id)
                            ? "text-red-500"
                            : "text-gray-300"
                        }`}
                      />
                    </button>
                  </div>

                  <p className="text-gray-300 text-sm mt-2">
                    {product.category}
                  </p>

                  <div className="flex justify-between items-center mt-3">
                    <p className="text-2xl font-bold text-pink-400">
                      ₹{product.price}
                    </p>

                    <div className="flex items-center gap-1 text-yellow-400">
                      <FaStar />
                      4.8
                    </div>
                  </div>

                  {/* Button */}
                  <button className="mt-5 w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition duration-300 flex justify-center items-center gap-2">
                    <FaShoppingCart />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center mt-20">
              <h2 className="text-3xl font-bold text-gray-300">
                No Products Found 😢
              </h2>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Products;