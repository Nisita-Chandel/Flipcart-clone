import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaShoppingBag } from "react-icons/fa";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-blue-100 flex items-center justify-center px-4">
      
      <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 text-center max-w-md w-full animate-fadeIn">
        
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <FaCheckCircle className="text-green-500 text-7xl animate-bounce" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Payment Successful 🎉
        </h1>

        {/* Message */}
        <p className="text-gray-600 text-lg mb-6">
          Your order has been placed successfully.
          <br />
          Thank you for shopping with us ❤️
        </p>

        {/* Order Info Box */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
          <p className="text-green-700 font-semibold">
            Order ID: #ORD12345
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Estimated delivery: 3-5 business days
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          
          <button
            onClick={() => navigate("/")}
            className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition duration-300"
          >
            Go Home
          </button>

          <button
            onClick={() => navigate("/orders")}
            className="bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition duration-300 flex items-center justify-center gap-2"
          >
            <FaShoppingBag />
            View Orders
          </button>

        </div>
      </div>
    </div>
  );
};

export default Success;