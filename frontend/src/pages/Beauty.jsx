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
      img: "https://i.pinimg.com/736x/6e/a8/05/6ea8053b16e93ef94a6c823bb38c6a7d.jpg",
    },
    {
      id: 2,
      title: "Lipstick",
      price: 499,
      img: "https://i.pinimg.com/736x/90/92/31/909231d0b3e93d9e4a4c9c6fa0a4e3df.jpg",
    },
    {
      id: 3,
      title: "Perfume",
      price: 1499,
      img: "https://i.pinimg.com/736x/59/5c/b6/595cb6b9b4a6fbc1fa2d3b2b9c79d93d.jpg",
    },
    {
      id: 4,
      title: "Skincare Set",
      price: 1299,
      img: "https://i.pinimg.com/736x/3f/2a/1e/3f2a1e1f9b2f8a9a6d7b1b3d4c8c9f7d.jpg",
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