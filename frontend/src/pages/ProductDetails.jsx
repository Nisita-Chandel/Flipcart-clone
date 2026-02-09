import { useLocation, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state;

  // If page refreshed
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-lg font-semibold mb-4">Product data not found</p>
        <button
          onClick={() => navigate("/")}
          className="text-blue-600 font-semibold"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  const buyNow = () => {
    navigate("/cart", { state: { product, buyNow: true } });
  };

  const addToCart = () => {
    navigate("/cart", { state: { product } });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 font-semibold"
      >
        ← Back
      </button>

      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto">
        <img
          src={product.img}
          alt={product.title || product.name}
          className="h-64 w-full object-contain mb-4"
        />

        <h1 className="text-2xl font-bold mb-2">
          {product.title || product.name}
        </h1>

        <p className="text-green-600 text-xl font-semibold">
          ₹{product.price}
        </p>

        {product.offerText && (
          <p className="text-sm text-gray-500 mt-1">
            {product.offerText}
          </p>
        )}

        <p className="text-gray-600 mt-4">
          This is the detailed description of the selected product.
          High quality, best price, and fast delivery.
        </p>

        <div className="mt-6 flex gap-4">
          <button
            onClick={addToCart}
            className="w-1/2 border border-orange-500 text-orange-500 py-3 rounded-lg font-semibold hover:bg-orange-50"
          >
            Add to Cart
          </button>

          <button
            onClick={buyNow}
            className="w-1/2 bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
