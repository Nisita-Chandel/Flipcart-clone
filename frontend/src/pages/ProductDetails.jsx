
import { useLocation, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state;

  // If user refreshes page
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-lg font-semibold mb-4">
          Product data not found
        </p>
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
    navigate("/cart", { state: product });
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
          alt={product.title}
          className="h-64 w-full object-contain mb-4"
        />

        <h1 className="text-2xl font-bold mb-2">
          {product.title || product.name}
        </h1>

        {product.price && (
          <p className="text-green-600 text-lg font-semibold">
            {product.price}
          </p>
        )}

        <p className="text-gray-600 mt-4">
          This is the detailed description of the selected product.
        </p>

        {/* BUY NOW BUTTON */}
        <button
          onClick={buyNow}
          className="mt-6 w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
