import React from "react";

const Beauty = () => {

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart 🛒");
  };

  const products = [
    {
      id: 1,
      title: "Makeup Kit",
      price: 999,
      img: "https://i.pinimg.com/736x/ff/8d/c1/ff8dc1bbb55766ca59cb4bce40880163.jpg",
    },
    {
      id: 2,
      title: "Lipstick",
      price: 499,
      img: "https://i.pinimg.com/736x/f6/21/d9/f621d9dfce1c066eceb9290f676aca16.jpg",
    },
    {
      id: 3,
      title: "Perfume",
      price: 1499,
      img: "https://i.pinimg.com/736x/18/a6/03/18a60337e45e4d5842c373478e7eb7da.jpg",
    },
    {
      id: 4,
      title: "Skincare Set",
      price: 1299,
      img: "https://i.pinimg.com/736x/89/63/52/8963524761b32bb9167b43a36d619b7c.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">

      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Beauty Collection 💄
      </h1>

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

export default Beauty;