const Register = () => {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-96 border p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 text-center">Register</h2>
  
          <input className="w-full border p-2 mb-3 rounded" placeholder="Name" />
          <input className="w-full border p-2 mb-3 rounded" placeholder="Email" />
          <input className="w-full border p-2 mb-4 rounded" placeholder="Password" />
  
          <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Register
          </button>
        </div>
      </div>
    );
  };
  
  export default Register;
  