import React from "react";

const Beauty = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Beauty Collection 💄
      </h1>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Makeup Kit */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
          <img
            src="https://i.pinimg.com/736x/6e/a8/05/6ea8053b16e93ef94a6c823bb38c6a7d.jpg"
            alt="Makeup Kit"
            className="h-40 mx-auto object-contain mb-4"
          />
          <h3 className="font-semibold text-lg">Makeup Kit</h3>
          <p className="text-indigo-600 font-bold mt-1">₹999</p>
          <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            Add to Cart
          </button>
        </div>

        {/* Lipstick */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
          <img
            src="https://i.pinimg.com/736x/90/92/31/909231d0b3e93d9e4a4c9c6fa0a4e3df.jpg"
            alt="Lipstick"
            className="h-40 mx-auto object-contain mb-4"
          />
          <h3 className="font-semibold text-lg">Lipstick</h3>
          <p className="text-indigo-600 font-bold mt-1">₹499</p>
          <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            Add to Cart
          </button>
        </div>

        {/* Perfume */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
          <img
            src="https://i.pinimg.com/736x/59/5c/b6/595cb6b9b4a6fbc1fa2d3b2b9c79d93d.jpg"
            alt="Perfume"
            className="h-40 mx-auto object-contain mb-4"
          />
          <h3 className="font-semibold text-lg">Perfume</h3>
          <p className="text-indigo-600 font-bold mt-1">₹1499</p>
          <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            Add to Cart
          </button>
        </div>

        {/* Skincare */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
          <img
            src="https://i.pinimg.com/736x/3f/2a/1e/3f2a1e1f9b2f8a9a6d7b1b3d4c8c9f7d.jpg"
            alt="Skincare"
            className="h-40 mx-auto object-contain mb-4"
          />
          <h3 className="font-semibold text-lg">Skincare Set</h3>
          <p className="text-indigo-600 font-bold mt-1">₹1299</p>
          <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            Add to Cart
          </button>
        </div>

      </div>

    </div>
  );
};

export default Beauty;