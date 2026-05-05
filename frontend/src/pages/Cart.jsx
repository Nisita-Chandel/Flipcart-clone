import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FaTrash,
  FaPlus,
  FaMinus,
  FaShoppingCart,
  FaCreditCard,
} from "react-icons/fa";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  // Load cart data
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    const formattedCart = storedCart.map((item) => ({
      id: item.id,
      name: item.title,
      price: item.price,
      quantity: 1,
      image: item.img,
    }));

    setCartItems(formattedCart);
  }, []);

  // Increase Quantity
  const increaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove Item
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(
        updatedCart.map((item) => ({
          id: item.id,
          title: item.name,
          price: item.price,
          img: item.image,
        }))
      )
    );
  };

  // Total Price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Load Razorpay
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  };

  // Payment
  const placeOrder = async () => {
    try {
      if (!phone) {
        alert("Please enter phone number");
        return;
      }

      setLoading(true);

      const isLoaded = await loadRazorpayScript();

      if (!isLoaded) {
        alert("Razorpay SDK failed");
        setLoading(false);
        return;
      }

      const res = await fetch(
        "http://localhost:4000/api/payment/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: totalPrice }),
        }
      );

      const data = await res.json();

      const options = {
        key: data.key,
        amount: data.amount,
        currency: "INR",
        order_id: data.id,
        name: "TrendyStore",
        description: "Premium Order Payment",

        prefill: {
          name: "Customer",
          email: "customer@email.com",
          contact: phone,
        },

        theme: {
          color: "#8b5cf6",
        },

        handler: function () {
          alert("🎉 Payment Successful!");
          localStorage.removeItem("cart");
          navigate("/success");
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("Payment failed");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-indigo-900 text-white px-6 py-10 relative overflow-hidden">

      {/* Background Blur */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-10 text-center">
          <FaShoppingCart className="inline mr-3" />
          Your Premium Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center mt-20">
            <h2 className="text-3xl font-bold text-gray-300">
              Your cart is empty 🛒
            </h2>

            <button
              onClick={() => navigate("/products")}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl hover:scale-105 transition"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-5 flex gap-5 hover:scale-[1.02] transition"
                >
                  {/* Product Image */}
                  <div className="w-28 h-28 bg-white rounded-2xl flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-pink-400 font-semibold mt-2">
                      ₹{item.price}
                    </p>

                    {/* Quantity Buttons */}
                    <div className="flex items-center gap-3 mt-4">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="w-10 h-10 rounded-full bg-white/20 hover:bg-red-500 transition"
                      >
                        <FaMinus className="mx-auto" />
                      </button>

                      <span className="text-lg font-bold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="w-10 h-10 rounded-full bg-white/20 hover:bg-green-500 transition"
                      >
                        <FaPlus className="mx-auto" />
                      </button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-400 hover:text-red-600"
                  >
                    <FaTrash size={22} />
                  </button>
                </div>
              ))}
            </div>

            {/* Checkout Card */}
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-6 h-fit sticky top-24">

              <h2 className="text-2xl font-bold mb-6">
                <FaCreditCard className="inline mr-2" />
                Checkout
              </h2>

              <input
                type="text"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 rounded-xl bg-white/20 outline-none mb-5"
              />

              <div className="flex justify-between text-lg mb-3">
                <span>Items:</span>
                <span>{cartItems.length}</span>
              </div>

              <div className="flex justify-between text-lg mb-5">
                <span>Total:</span>
                <span className="text-pink-400 font-bold">
                  ₹{totalPrice}
                </span>
              </div>

              <button
                onClick={placeOrder}
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition font-semibold"
              >
                {loading ? "Processing..." : "Pay Now 🚀"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;