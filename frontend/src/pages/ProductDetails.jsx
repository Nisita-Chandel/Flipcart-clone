import { useLocation, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get product safely
  const product = location.state;

  // If user refreshes page
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <p className="text-lg font-semibold mb-4">
          Product data not found
        </p>
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
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600 font-semibold hover:underline"
      >
        ← Back
      </button>

      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.img}
            alt={product.title || product.name}
            className="h-80 object-contain"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-3">
            {product.title || product.name}
          </h1>

          {/* Price Fix */}
          <p className="text-3xl text-green-600 font-bold mb-2">
            ₹{product.price ? product.price : 0}
          </p>

          {product.offerText && (
            <p className="text-sm text-gray-500 mb-3">
              {product.offerText}
            </p>
          )}

          <p className="text-gray-600 mt-4 leading-relaxed">
            This is the detailed description of the selected product.
            High quality, best price, and fast delivery.
            100% genuine product with easy return policy.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button
              onClick={addToCart}
              className="w-1/2 border-2 border-orange-500 text-orange-500 py-3 rounded-xl font-semibold hover:bg-orange-50 transition"
            >
              Add to Cart
            </button>

            <button
              onClick={buyNow}
              className="w-1/2 bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
            >
              Buy Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
