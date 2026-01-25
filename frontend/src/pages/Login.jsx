const Login = () => {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-96 border p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
  
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 mb-3 rounded"
          />
  
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 mb-4 rounded"
          />
  
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Login
          </button>
        </div>
      </div>
    );
  };
  
  export default Login;
  