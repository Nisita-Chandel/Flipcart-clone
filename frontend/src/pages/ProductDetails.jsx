import { useLocation, useNavigate } from "react-router-dom";
import { FaStar, FaShoppingCart, FaBolt } from "react-icons/fa";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;

  // If user refreshes page
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <p className="text-lg font-semibold mb-4">Product data not found</p>

        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  const buyNow = () => {
    navigate("/cart", { state: { product } });
  };

  const addToCart = () => {
    navigate("/cart", { state: { product } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600 font-semibold hover:underline"
      >
        ← Back
      </button>

      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.img}
            alt={product.title || product.name}
            className="h-96 object-contain"
          />
        </div>

        {/* Product Details */}
        <div>

          {/* Title */}
          <h1 className="text-3xl font-bold mb-3">
            {product.title || product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500 mb-3">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar className="text-gray-300" />
            <span className="text-gray-600 ml-2">(4.0 Rating)</span>
          </div>

          {/* Price */}
          <p className="text-3xl text-green-600 font-bold">
            ₹{product.price || 0}
          </p>

          {/* Offer */}
          {product.offerText && (
            <p className="text-sm text-green-600 font-semibold mt-1">
              {product.offerText}
            </p>
          )}

          {/* Stock */}
          <p className="text-sm text-gray-600 mt-2">
            Availability : <span className="text-green-600 font-semibold">In Stock</span>
          </p>

          {/* Description */}
          <p className="text-gray-600 mt-5 leading-relaxed">
            This is a premium quality product designed for modern users.
            It offers excellent durability, stylish design, and high performance.
            Perfect for everyday use with fast delivery and easy return policy.
          </p>

          {/* Features */}
          <ul className="mt-4 text-gray-600 list-disc list-inside space-y-1">
            <li>High quality material</li>
            <li>1 year warranty</li>
            <li>Fast delivery available</li>
            <li>Easy return & replacement</li>
          </ul>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">

            <button
              onClick={addToCart}
              className="w-1/2 flex items-center justify-center gap-2 border-2 border-orange-500 text-orange-500 py-3 rounded-xl font-semibold hover:bg-orange-50 transition"
            >
              <FaShoppingCart />
              Add to Cart
            </button>

            <button
              onClick={buyNow}
              className="w-1/2 flex items-center justify-center gap-2 bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
            >
              <FaBolt />
              Buy Now
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;