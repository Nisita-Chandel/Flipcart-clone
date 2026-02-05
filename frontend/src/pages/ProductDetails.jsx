import { useLocation, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  if (!data) {
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

  const handleAddToCart = () => {
    navigate("/cart", { state: data });
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
          src={data.img}
          alt={data.title}
          className="h-64 w-full object-contain mb-4"
        />

        <h1 className="text-2xl font-bold mb-2">
          {data.title || data.name}
        </h1>

        {data.price && (
          <p className="text-green-600 text-lg font-semibold mb-4">
            {data.price}
          </p>
        )}

        <p className="text-gray-600 mb-6">
          This is the detailed description of the selected product.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold"
          >
            Add to Cart
          </button>

          <button
            className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-lg font-semibold"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
