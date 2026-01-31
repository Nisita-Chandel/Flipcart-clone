import { useEffect, useState } from "react";
import API from "../services/api";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      id="top"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 px-6 py-12"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
          NEW ARRIVALS
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Discover Our Products ✨
        </h2>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Hand-picked items with unbeatable quality and prices just for you.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <div
            key={product._id}
            className="group relative rounded-2xl bg-white/70 backdrop-blur-lg
                       border border-gray-200 shadow-md
                       hover:shadow-2xl transition-all duration-500
                       hover:-translate-y-3 overflow-hidden"
          >
            {/* Wishlist */}
            <button
              className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur
                         p-2 rounded-full shadow
                         opacity-0 group-hover:opacity-100
                         transition duration-300 hover:scale-110"
            >
              ❤️
            </button>

            {/* Image */}
            <div className="relative h-52 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <img
                src={product.image || "https://via.placeholder.com/300"}
                alt={product.name}
                className="h-full object-contain
                           group-hover:scale-110 transition-transform duration-500"
              />

              {/* Quick View Overlay */}
              <div
                className="absolute inset-0 bg-black/50 flex items-center justify-center
                           opacity-0 group-hover:opacity-100 transition duration-300"
              >
                <button
                  className="px-6 py-2 bg-white text-gray-900 font-semibold rounded-full
                             hover:bg-gray-900 hover:text-white transition"
                >
                  Quick View 👀
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              {/* Category */}
              <span className="text-xs font-semibold text-blue-600 uppercase">
                Trending
              </span>

              <h3 className="mt-1 font-bold text-lg text-gray-800 truncate">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-2 text-yellow-400 text-sm">
                ★ ★ ★ ★ ☆
                <span className="text-gray-400 text-xs ml-1">(4.0)</span>
              </div>

              {/* Price */}
              <p className="mt-3 text-2xl font-extrabold text-gray-900">
                ₹{product.price}
              </p>

              {/* Actions */}
              <div className="mt-5 flex gap-3">
                <button
                  className="flex-1 py-2 rounded-xl text-white font-semibold
                             bg-gradient-to-r from-blue-600 to-indigo-600
                             hover:from-indigo-600 hover:to-blue-600
                             transition-all duration-300 shadow-lg"
                >
                  Add to Cart
                </button>

                <button
                  className="flex-1 py-2 rounded-xl border border-gray-300
                             text-gray-700 font-semibold
                             hover:bg-gray-900 hover:text-white
                             transition duration-300"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll To Top */}
      <a
        href="#top"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-indigo-600
                   text-white px-4 py-3 rounded-full shadow-xl
                   hover:scale-110 transition duration-300"
      >
        ⬆
      </a>
    </div>
  );
};

export default Products;
