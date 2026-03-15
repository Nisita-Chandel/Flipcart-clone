import React from "react";

const Furniture = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">

      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Furniture Collection 🪑
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <img
            src="https://i.pinimg.com/1200x/45/f9/83/45f983a60e38b6182b3b42e871e2ee86.jpg"
            className="h-40 mx-auto object-contain mb-4"
            alt=""
          />
          <h3 className="font-semibold">Modern Chair</h3>
          <p className="text-indigo-600 font-bold mt-1">₹4999</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <img
            src="https://i.pinimg.com/736x/60/70/9f/60709f2f5f8f4a8c67a4c31f5b9c72fd.jpg"
            className="h-40 mx-auto object-contain mb-4"
            alt=""
          />
          <h3 className="font-semibold">Wooden Table</h3>
          <p className="text-indigo-600 font-bold mt-1">₹7999</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <img
            src="https://i.pinimg.com/736x/1a/55/6d/1a556dffbe09c2dbbc9f6d4c0f6f2d61.jpg"
            className="h-40 mx-auto object-contain mb-4"
            alt=""
          />
          <h3 className="font-semibold">Luxury Sofa</h3>
          <p className="text-indigo-600 font-bold mt-1">₹14999</p>
        </div>

      </div>

    </div>
  );
};

export default Furniture;