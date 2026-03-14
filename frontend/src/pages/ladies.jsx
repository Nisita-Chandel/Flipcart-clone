import React from "react";
import { motion } from "framer-motion";

const ladiesProducts = [
  {
    id: 1,
    title: "Women Jacket",
    price: 1999,
    img: "https://i.pinimg.com/736x/c0/9d/b5/c09db5748e423667f2827f68481f1c02.jpg",
  },
  {
    id: 2,
    title: "Ladies Handbag",
    price: 2499,
    img: "https://i.pinimg.com/736x/76/50/2b/76502bcb9b682d7e4f88e969d875d4fa.jpg",
  },
  {
    id: 3,
    title: "Stylish Heels",
    price: 1599,
    img: "https://i.pinimg.com/736x/b6/6a/7b/b66a7be5c25c5b3b76f5f0c8c0f45c3c.jpg",
  },
  {
    id: 4,
    title: "Women Dress",
    price: 2999,
    img: "https://i.pinimg.com/736x/4b/f7/43/4bf743b4e08f7a3a0655e768f8b510c2.jpg",
  },
];

const Ladies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-100 px-8 py-16">

      <h1 className="text-4xl font-bold text-center mb-12 text-pink-600">
        👗 Ladies Fashion Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto">

        {ladiesProducts.map((item) => (

          <motion.div
            key={item.id}
            whileHover={{ y: -10 }}
            className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition text-center"
          >

            <img
              src={item.img}
              className="h-44 w-full object-contain mb-4"
              alt={item.title}
            />

            <h3 className="font-semibold">{item.title}</h3>

            <p className="text-pink-600 font-bold mt-2">
              ₹{item.price}
            </p>

            <button className="mt-4 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
              Add to Cart
            </button>

          </motion.div>

        ))}

      </div>

    </div>
  );
};

export default Ladies;