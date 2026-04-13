import { useEffect, useState } from "react";
import API from "../services/api";
import { FaHeart, FaSearch } from "react-icons/fa";

const categories = ["All", "Electronics", "Fashion", "Home"];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    API.get("/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const filteredProducts = products.filter((p) => {
    return (
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (activeCategory === "All" || p.category === activeCategory)
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-6 py-12">
      
      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
          Premium Store ✨
        </h1>
        <p className="text-gray-500 mt-3">
          Discover elegant & modern products curated for you
        </p>
      </div>

      {/* SEARCH */}
      <div className="max-w-xl mx-auto mb-6 relative">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full py-3 pl-12 pr-4 rounded-full border border-gray-200 
                     shadow-md focus:ring-2 focus:ring-indigo-400 outline-none 
                     transition-all duration-300 focus:scale-105"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearch className="absolute top-4 left-4 text-gray-400" />
      </div>

      {/* CATEGORY FILTER */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300
              ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-600 border hover:bg-indigo-50"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* LOADING SKELETON */}
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="h-64 bg-gray-200 rounded-2xl animate-pulse"
            ></div>
          ))}
        </div>
      ) : (
        <>
          {/* PRODUCTS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {filteredProducts.map((product) => (
              <div
                key={product._id}
                className="group relative rounded-3xl overflow-hidden
                           bg-white/60 backdrop-blur-xl border
                           shadow-lg hover:shadow-2xl 
                           transition-all duration-500 hover:-translate-y-3"
              >
                {/* WISHLIST */}
                <button
                  onClick={() => toggleWishlist(product._id)}
                  className={`absolute top-4 right-4 z-10 p-2 rounded-full shadow 
                  transition ${
                    wishlist.includes(product._id)
                      ? "bg-red-100 text-red-500"
                      : "bg-white text-gray-400"
                  }`}
                >
                  <FaHeart />
                </button>

                {/* IMAGE */}
                <div className="h-56 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={product.image || "https://via.placeholder.com/300"}
                    alt={product.name}
                    className="h-full object-contain transition duration-500 group-hover:scale-110"
                  />
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <button className="bg-white px-5 py-2 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition">
                    Quick View 👀
                  </button>
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 truncate">
                    {product.name}
                  </h3>

                  <div className="text-yellow-400 text-sm mt-1">
                    ★★★★☆
                    <span className="text-gray-400 text-xs ml-2">(4.0)</span>
                  </div>

                  <p className="text-2xl font-extrabold mt-2 text-gray-900">
                    ₹{product.price}
                  </p>

                  {/* BUTTONS */}
                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 py-2 rounded-xl text-white font-semibold
                      bg-gradient-to-r from-indigo-500 to-blue-500
                      hover:from-blue-600 hover:to-indigo-600
                      transition shadow-md">
                      Add 🛒
                    </button>

                    <button className="flex-1 py-2 rounded-xl border text-gray-600
                      hover:bg-gray-900 hover:text-white transition">
                      View
                    </button>
                  </div>
                </div>

                {/* GLOW BORDER */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent 
                  group-hover:border-indigo-400 transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* EMPTY STATE */}
          {filteredProducts.length === 0 && (
            <div className="text-center mt-20">
              <h2 className="text-2xl font-bold text-gray-600">
                No Products Found 😢
              </h2>
              <p className="text-gray-400 mt-2">
                Try searching something else
              </p>
            </div>
          )}
        </>
      )}

      {/* SCROLL TOP */}
      <a
        href="#top"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-indigo-600 to-blue-600
                   text-white px-4 py-3 rounded-full shadow-xl
                   hover:scale-110 transition"
      >
        ⬆
      </a>
    </div>
  );
};

export default Products;