import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl text-green-600 font-bold">
        🎉 Payment Successful!
      </h1>

      <button
        onClick={() => navigate("/")}
        className="mt-5 bg-black text-white px-5 py-2 rounded"
      >
        Go Home
      </button>
    </div>
  );
};

export default Success;