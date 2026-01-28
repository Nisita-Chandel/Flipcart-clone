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
    <div className="min-h-screen bg-gray-50 px-6 py-10 scroll-smooth">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Our Products 🛍️
        </h2>
        <p className="text-gray-500 mt-3">
          Explore our latest collection with best prices
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="group bg-white rounded-xl border shadow-sm 
                       hover:shadow-2xl transition-all duration-300 
                       hover:-translate-y-2 overflow-hidden"
          >
            {/* Product Image */}
            <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={product.image || "https://via.placeholder.com/200"}
                alt={product.name}
                className="h-full object-contain 
                           group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Product Details */}
            <div className="p-5">
              <h3 className="font-semibold text-lg text-gray-800 truncate">
                {product.name}
              </h3>

              <p className="text-green-600 font-bold text-xl mt-2">
                ₹{product.price}
              </p>

              {/* Buttons */}
              <div className="mt-5 flex gap-3">
                <button
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg
                             hover:bg-blue-700 transition duration-300"
                >
                  Add to Cart
                </button>

                <button
                  className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg
                             hover:bg-blue-600 hover:text-white transition duration-300"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-6 right-6">
        <a
          href="#top"
          className="bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg
                     hover:bg-blue-700 transition duration-300"
        >
          ⬆
        </a>
      </div>
    </div>
  );
};

export default Products;
