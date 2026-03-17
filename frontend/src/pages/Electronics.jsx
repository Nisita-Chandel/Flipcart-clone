import React from "react";

const Electronics = () => {

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
      img: "https://i.pinimg.com/1200x/0b/f5/7e/0bf57e9b54ee33e7765ebd8bebb7b407.jpg",
    },
    {
      id: 2,
      title: "Smart TV",
      price: 24999,
      img: "https://i.pinimg.com/1200x/16/99/25/169925e71ddf66880636818841138913.jpg",
    },
    {
      id: 3,
      title: "Headphones",
      price: 2999,
      img: "https://i.pinimg.com/736x/a5/2c/1c/a52c1cb5dbf7bc4e1523f1c7847cb08d.jpg",
    },
    {
      id: 4,
      title: "Laptop",
      price: 55999,
      img: "https://i.pinimg.com/1200x/99/75/01/99750135b74204cbf3187f2d74956ae0.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">

      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Electronics Collection ⚡
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

export default Electronics;