import { useLocation, useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { title } = useParams();

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
          src={state?.img}
          className="h-64 w-full object-contain mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">{state?.title || title}</h1>
        {state?.price && (
          <p className="text-green-600 text-lg font-semibold">
            {state.price}
          </p>
        )}
        <p className="text-gray-600 mt-4">
          This is the detailed description of the selected product.
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
