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
      img: "https://i.pinimg.com/736x/60/70/9f/60709f2f5f8f4a8c67a4c31f5b9c72fd.jpg",
    },
    {
      id: 3,
      title: "Luxury Sofa",
      price: 14999,
      img: "https://i.pinimg.com/736x/1a/55/6d/1a556dffbe09c2dbbc9f6d4c0f6f2d61.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">

      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Furniture Collection 🪑
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

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