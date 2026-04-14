import { useEffect, useState, useMemo } from "react";
import API from "../services/api";
import { FaHeart, FaSearch, FaMicrophone } from "react-icons/fa";

const categories = ["All", "Electronics", "Fashion", "Home"];

// 🔥 Better fuzzy match (checks sequence)
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

// 🔥 Highlight match
const highlightText = (text, search) => {
  if (!search) return text;
  const regex = new RegExp(`(${search})`, "gi");
  return text.split(regex).map((part, i) =>
    part.toLowerCase() === search.toLowerCase() ? (
      <span key={i} className="bg-yellow-200 px-1 rounded">
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

  // 🔥 Load products + recent searches
  useEffect(() => {
    API.get("/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));

    const stored = JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(stored);
  }, []);

  // 🔥 Save search history
  const saveSearch = (value) => {
    if (!value) return;

    let updated = [value, ...recentSearches.filter((s) => s !== value)];
    updated = updated.slice(0, 5);

    setRecentSearches(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
  };

  // 🔥 Voice Search
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

  // 🔥 Filtered products
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

  // 🔥 Suggestions (products + history)
  const suggestions = useMemo(() => {
    if (!search) return recentSearches;

    const productMatches = products
      .filter((p) =>
        p.name?.toLowerCase().includes(search.toLowerCase())
      )
      .slice(0, 3)
      .map((p) => p.name);

    return [...new Set([...productMatches, ...recentSearches])].slice(0, 5);
  }, [search, products, recentSearches]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-6 py-12">

      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-gray-900">
          Premium Store ✨
        </h1>
        <p className="text-gray-500 mt-3">
          AI-powered shopping experience
        </p>
      </div>

      {/* 🔍 SEARCH BAR */}
      <div className="max-w-xl mx-auto mb-6 relative">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full py-3 pl-12 pr-12 rounded-full border shadow-md focus:ring-2 focus:ring-indigo-400 outline-none"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setShowSuggestions(true);
          }}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          onKeyDown={(e) => {
            if (e.key === "Enter") saveSearch(search);
          }}
        />

        <FaSearch className="absolute top-4 left-4 text-gray-400" />

        {/* 🎤 Voice Button */}
        <FaMicrophone
          onClick={handleVoiceSearch}
          className="absolute top-4 right-4 text-gray-500 cursor-pointer hover:text-indigo-600"
        />

        {/* 🔥 Suggestions */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute w-full bg-white mt-2 rounded-xl shadow-lg z-50">
            {suggestions.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  setSearch(item);
                  saveSearch(item);
                  setShowSuggestions(false);
                }}
                className="px-4 py-3 hover:bg-indigo-50 cursor-pointer"
              >
                {highlightText(item, search)}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CATEGORY */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold
              ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white scale-105"
                  : "bg-white text-gray-600 border"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCTS */}
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-64 bg-gray-200 rounded-2xl animate-pulse"></div>
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {filteredProducts.map((product) => (
              <div key={product._id} className="bg-white rounded-2xl shadow hover:shadow-xl transition">

                <div className="h-56 flex items-center justify-center bg-gray-100">
                  <img src={product.image} alt="" className="h-full object-contain" />
                </div>

                <div className="p-4">
                  <h3 className="font-bold">
                    {highlightText(product.name, search)}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {product.category}
                  </p>

                  <p className="text-xl font-bold mt-2">
                    ₹{product.price}
                  </p>

                  <button className="mt-3 w-full py-2 bg-indigo-600 text-white rounded-xl">
                    Add to Cart 🛒
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center mt-20">
              <h2 className="text-2xl font-bold text-gray-600">
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