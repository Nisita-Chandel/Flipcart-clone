import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  // ✅ Load cart from localStorage
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

  // ✅ Increase Quantity
  const increaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // ✅ Decrease Quantity
  const decreaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // ✅ Remove Item
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);

    setCartItems(updatedCart);

    const storageCart = updatedCart.map((item) => ({
      id: item.id,
      title: item.name,
      price: item.price,
      img: item.image,
    }));

    localStorage.setItem("cart", JSON.stringify(storageCart));
  };

  // ✅ Total Price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // ✅ RAZORPAY PAYMENT FUNCTION
  const placeOrder = async () => {
    try {
      console.log("Calling backend...");
  
      const res = await fetch("http://localhost:4000/api/payment/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: totalPrice }),
      });
  
      // ❌ Handle server down
      if (!res) {
        throw new Error("No response from server");
      }
  
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Server error");
      }
  
      const data = await res.json();
  
      console.log("Order created:", data);
  
      if (!window.Razorpay) {
        alert("Razorpay SDK not loaded ❌");
        return;
      }
  
      const options = {
        key: "rzp_test_Rgz6mQTZRldpAy",
        amount: data.amount,
        currency: "INR",
        order_id: data.id,
        name: "My Store",
        description: "Order Payment",
  
        handler: async function (response) {
          try {
            const verifyRes = await fetch(
              "http://localhost:3000/api/payment/verify-payment",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(response),
              }
            );
  
            if (!verifyRes.ok) {
              throw new Error("Payment verification failed");
            }
  
            alert("🎉 Payment Successful!");
  
            localStorage.removeItem("cart");
            setCartItems([]);
  
            navigate("/");
          } catch (err) {
            console.error("Verification error:", err);
            alert("Payment verification failed ❌");
          }
        },
  
        theme: {
          color: "#22c55e",
        },
      };
  
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("ERROR:", error);
  
      // 🔥 Better error message
      if (error.message.includes("Failed to fetch")) {
        alert("❌ Backend not running (Check port 4000)");
      } else {
        alert(error.message);
      }
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="bg-white p-10 rounded-lg shadow text-center">
          <p className="text-gray-600 text-lg">Your cart is empty</p>
          <button
            onClick={() => navigate("/")}
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
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
                className="bg-white rounded-lg shadow p-5 flex gap-5 items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-contain"
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {item.name}
                  </h3>

                  <p className="text-green-600 font-semibold text-lg">
                    ₹{item.price}
                  </p>

                  <div className="flex items-center gap-4 mt-3">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-3 py-1 border rounded"
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-3 py-1 border rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Price Summary */}
          <div className="bg-white rounded-lg shadow p-6 h-fit">
            <h3 className="text-xl font-semibold mb-4">Price Details</h3>

            <div className="flex justify-between mb-2">
              <span>Items ({cartItems.length})</span>
              <span>₹{totalPrice}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Delivery</span>
              <span className="text-green-600">FREE</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between font-bold text-lg">
              <span>Total Amount</span>
              <span>₹{totalPrice}</span>
            </div>

            <button
              onClick={placeOrder}
              className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Pay Now
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default Cart;