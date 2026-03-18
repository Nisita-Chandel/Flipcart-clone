import React, { useState } from "react";

const Electronics = () => {

  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart 🛒");
  };

  const products = [
    {
      id: 1,
      title: "Smart Watch",
      price: 7999,
      description: "Track your fitness and stay connected.",
      img: "https://i.pinimg.com/1200x/0b/f5/7e/0bf57e9b54ee33e7765ebd8bebb7b407.jpg",
    },
    {
      id: 2,
      title: "Smart TV",
      price: 24999,
      description: "Enjoy 4K entertainment with smart features.",
      img: "https://i.pinimg.com/1200x/16/99/25/169925e71ddf66880636818841138913.jpg",
    },
    {
      id: 3,
      title: "Headphones",
      price: 2999,
      description: "High-quality sound with noise cancellation.",
      img: "https://i.pinimg.com/736x/a5/2c/1c/a52c1cb5dbf7bc4e1523f1c7847cb08d.jpg",
    },
    {
      id: 4,
      title: "Laptop",
      price: 55999,
      description: "Powerful performance for work and gaming.",
      img: "https://i.pinimg.com/1200x/99/75/01/99750135b74204cbf3187f2d74956ae0.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">

      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Electronics Collection ⚡
      </h1>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition"
          >

            {/* CLICK IMAGE */}
            <img
              src={product.img}
              alt={product.title}
              onClick={() => setSelectedProduct(product)}
              className="h-40 mx-auto object-contain mb-4 cursor-pointer hover:scale-105 transition"
            />

            <h3 className="font-semibold text-lg">{product.title}</h3>

            <p className="text-indigo-600 font-bold mt-1">
              ₹{product.price}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Add to Cart
            </button>

          </div>
        ))}

      </div>

      {/* MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-2xl w-[90%] md:w-[500px] relative">

            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-xl text-gray-600"
            >
              ✖
            </button>

            <img
              src={selectedProduct.img}
              alt={selectedProduct.title}
              className="w-full h-60 object-contain mb-4"
            />

            <h2 className="text-2xl font-bold">
              {selectedProduct.title}
            </h2>

            <p className="text-gray-600 mt-2">
              {selectedProduct.description}
            </p>

            <p className="text-indigo-600 font-bold text-xl mt-3">
              ₹{selectedProduct.price}
            </p>

            <button
              onClick={() => addToCart(selectedProduct)}
              className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
            >
              Add to Cart 🛒
            </button>

          </div>
        </div>
      )}

    </div>
  );
};

export default Electronics;