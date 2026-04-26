import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  // ✅ Load cart
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

  // ✅ Quantity handlers
  const increaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

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

  // ✅ Total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // ✅ Load Razorpay SDK
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // ✅ PAYMENT FUNCTION
  const placeOrder = async () => {
    try {
      const isLoaded = await loadRazorpayScript();

      if (!isLoaded) {
        alert("Razorpay SDK failed to load ❌");
        return;
      }

      console.log("Calling backend...");

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

      if (!data.id) {
        alert("❌ Order creation failed");
        return;
      }

      // ✅ RAZORPAY OPTIONS (FIXED)
      const options = {
        key: data.key, // ✅ dynamic key from backend
        amount: data.amount,
        currency: "INR",
        order_id: data.id,
        name: "My Store",
        description: "Order Payment",
        prefill: {
          name: "Test User",
          email: "test@example.com",
          contact: "9999999999",
        },

        theme: {
          color: "#22c55e",
        },

        handler: async function (response) {
          console.log("✅ Payment success:", response);

          try {
            const verifyRes = await fetch(
              "http://localhost:4000/api/payment/verify-payment",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(response),
              }
            );

            const verifyData = await verifyRes.json();

            if (verifyData.success) {
              alert("🎉 Payment Successful!");

              localStorage.removeItem("cart");
              setCartItems([]);
              navigate("/");
            } else {
              alert("❌ Payment Verification Failed");
            }
          } catch (err) {
            console.error("Verification error:", err);
            alert("Verification error ❌");
          }
        },

        modal: {
          ondismiss: function () {
            console.log("❌ Payment popup closed");
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

    } catch (error) {
      console.error("ERROR:", error);
      alert("❌ Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      <h2 className="text-3xl font-bold mb-8">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white p-5 rounded shadow flex gap-5">
                <img src={item.image} className="w-24 h-24 object-contain" />

                <div className="flex-1">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>

                  <div className="flex gap-3">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>
                </div>

                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white p-6 rounded shadow">
            <h3>Price Details</h3>

            <p>Total: ₹{totalPrice}</p>

            <button
              onClick={placeOrder}
              className="w-full mt-4 bg-green-600 text-white py-2 rounded"
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