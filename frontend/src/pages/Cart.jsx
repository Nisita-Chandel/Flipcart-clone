import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

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

  // Increase quantity
  const increaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item
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

  // Total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Load Razorpay SDK
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  };

  // Payment function
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

      if (!data.id) {
        alert("Order creation failed");
        setLoading(false);
        return;
      }

      const options = {
        key: data.key,
        amount: data.amount,
        currency: "INR",
        order_id: data.id,
        name: "My Store",
        description: "Order Payment",

        prefill: {
          name: "Customer",
          email: "customer@email.com",
          contact: phone,
        },
        notes: {
          address: "Test Order"
        },
      

        theme: {
          color: "#22c55e",
        },

        handler: function (response) {
          alert("🎉 Payment Successful");
          console.log(response);

          localStorage.removeItem("cart");
          navigate("/success");
        },

        modal: {
          ondismiss: function () {
            console.log("Payment cancelled");
            setLoading(false);
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

      setLoading(false);
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      <h2 className="text-3xl font-bold mb-8">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-5 rounded shadow flex gap-5"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-contain"
                />

                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>₹{item.price}</p>

                  <div className="flex gap-3 mt-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Price Summary */}
          <div className="bg-white p-6 rounded shadow h-fit">
            <h3 className="text-lg font-semibold">Price Details</h3>

            <input
              type="text"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border p-2 mt-3 rounded"
            />

            <p className="mt-4 font-medium">Total: ₹{totalPrice}</p>

            <button
              onClick={placeOrder}
              disabled={loading}
              className="w-full mt-4 bg-green-600 text-white py-2 rounded"
            >
              {loading ? "Processing..." : "Pay Now"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;