import React from "react";

const Furniture = () => {

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart 🛒");
  };

  const products = [
    {
      id: 1,
      title: "Modern Chair",
      price: 4999,
      img: "https://i.pinimg.com/1200x/45/f9/83/45f983a60e38b6182b3b42e871e2ee86.jpg",
    },
    {
      id: 2,
      title: "Wooden Table",
      price: 7999,
      img: "https://i.pinimg.com/1200x/69/47/98/6947987f1e5b8a683a97b93541107089.jpg",
    },
    {
      id: 3,
      title: "Luxury Sofa",
      price: 14999,
      img: "https://i.pinimg.com/736x/48/bd/b3/48bdb3d380213d6623f027879b9d9a5b.jpg",
    },
    {
      id: 4,
      title: "Premium Bed",
      price: 19999,
      img: "https://i.pinimg.com/736x/57/4c/62/574c62701ecb68f06fd831432a13637a.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Furniture Collection 🪑
      </h1>

      {/* Grid same as Electronics */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition"
          >
            <img
              src={product.img}
              alt={product.title}
              className="h-40 mx-auto object-contain mb-4"
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
    </div>
  );
};

export default Furniture;