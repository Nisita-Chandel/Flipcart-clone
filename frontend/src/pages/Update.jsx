import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaTag,
  FaRupeeSign,
  FaImage,
  FaList,
  FaAlignLeft,
  FaArrowLeft,
} from "react-icons/fa";

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `http://localhost:4000/api/products/update/${id}`,
        formData
      );

      if (res.data.success) {
        toast.success("🎉 Product Updated Successfully!");
        navigate("/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("❌ Failed to update product");
    }
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-black via-gray-900 to-purple-900 flex items-center justify-center px-4 py-10 overflow-hidden">
      
      {/* Background Blur Circles */}
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20 bottom-10 right-10"></div>

      <div className="relative z-10 w-full max-w-6xl grid md:grid-cols-2 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20">
        
        {/* Left Side Preview */}
        <div className="p-8 text-white flex flex-col justify-center items-center bg-white/5">
          <h1 className="text-4xl font-bold mb-6">
            Update Product ✨
          </h1>

          <div className="bg-white rounded-2xl p-4 shadow-lg w-80">
            {formData.image ? (
              <img
                src={formData.image}
                alt="Product Preview"
                className="w-full h-64 object-cover rounded-xl"
              />
            ) : (
              <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                Product Image Preview
              </div>
            )}

            <div className="mt-4">
              <h2 className="text-xl font-bold text-black">
                {formData.title || "Product Title"}
              </h2>

              <p className="text-green-600 font-semibold text-lg mt-2">
                ₹ {formData.price || "0"}
              </p>

              <p className="text-gray-500 text-sm mt-2">
                {formData.description || "Product description will appear here"}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="bg-white p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Edit Details
          </h2>

          <form onSubmit={handleUpdate} className="space-y-5">

            {/* Title */}
            <div className="relative">
              <FaTag className="absolute top-4 left-4 text-gray-400" />
              <input
                type="text"
                name="title"
                placeholder="Enter Product Title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border pl-12 p-3 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            {/* Price */}
            <div className="relative">
              <FaRupeeSign className="absolute top-4 left-4 text-gray-400" />
              <input
                type="number"
                name="price"
                placeholder="Enter Product Price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border pl-12 p-3 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            {/* Image */}
            <div className="relative">
              <FaImage className="absolute top-4 left-4 text-gray-400" />
              <input
                type="text"
                name="image"
                placeholder="Paste Image URL"
                value={formData.image}
                onChange={handleChange}
                className="w-full border pl-12 p-3 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            {/* Description */}
            <div className="relative">
              <FaAlignLeft className="absolute top-4 left-4 text-gray-400" />
              <textarea
                name="description"
                rows="4"
                placeholder="Enter Product Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border pl-12 p-3 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            {/* Category */}
            <div className="relative">
              <FaList className="absolute top-4 left-4 text-gray-400" />
              <input
                type="text"
                name="category"
                placeholder="Enter Product Category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border pl-12 p-3 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-lg"
              >
                🚀 Update Product
              </button>

              <button
                type="button"
                onClick={() => navigate("/products")}
                className="w-full bg-gray-200 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
              >
                <FaArrowLeft className="inline mr-2" />
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;