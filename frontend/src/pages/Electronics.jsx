import React from "react";

const Electronics = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Electronics Collection ⚡
      </h1>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Smart Watch */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
          <img
            src="https://i.pinimg.com/1200x/0b/f5/7e/0bf57e9b54ee33e7765ebd8bebb7b407.jpg"
            alt="Smart Watch"
            className="h-40 mx-auto object-contain mb-4"
          />
          <h3 className="font-semibold text-lg">Smart Watch</h3>
          <p className="text-indigo-600 font-bold mt-1">₹7999</p>
          <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            Add to Cart
          </button>
        </div>

        {/* TV */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
          <img
            src="https://i.pinimg.com/736x/8f/2a/35/8f2a352af1fba88c3b11aefc4c1d9c64.jpg"
            alt="Smart TV"
            className="h-40 mx-auto object-contain mb-4"
          />
          <h3 className="font-semibold text-lg">Smart TV</h3>
          <p className="text-indigo-600 font-bold mt-1">₹24999</p>
          <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            Add to Cart
          </button>
        </div>

        {/* Headphones */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
          <img
            src="https://i.pinimg.com/736x/75/5b/6d/755b6d3bcd1d5e3e2392d6f4858cc5d5.jpg"
            alt="Headphones"
            className="h-40 mx-auto object-contain mb-4"
          />
          <h3 className="font-semibold text-lg">Headphones</h3>
          <p className="text-indigo-600 font-bold mt-1">₹2999</p>
          <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            Add to Cart
          </button>
        </div>

        {/* Laptop */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
          <img
            src="https://i.pinimg.com/736x/5e/2e/46/5e2e46d48b1e59f13b1d3c2a0a0c2c9e.jpg"
            alt="Laptop"
            className="h-40 mx-auto object-contain mb-4"
          />
          <h3 className="font-semibold text-lg">Laptop</h3>
          <p className="text-indigo-600 font-bold mt-1">₹55999</p>
          <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            Add to Cart
          </button>
        </div>

      </div>

    </div>
  );
};

export default Electronics;