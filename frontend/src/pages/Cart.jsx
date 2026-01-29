const Cart = () => {
  // Dummy cart data (you can replace this with real data later)
  const cartItems = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1999,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1518443895471-17c8b7a87f1d",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 2999,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
  ];

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="bg-white p-10 rounded-lg shadow text-center">
          <p className="text-gray-600 text-lg">Your cart is empty</p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
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
                  className="w-24 h-24 object-cover rounded"
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-gray-600">₹{item.price}</p>

                  <div className="flex items-center gap-4 mt-3">
                    <button className="px-3 py-1 border rounded">−</button>
                    <span>{item.quantity}</span>
                    <button className="px-3 py-1 border rounded">+</button>
                  </div>
                </div>

                <button className="text-red-500 hover:text-red-700">
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Price Summary */}
          <div className="bg-white rounded-lg shadow p-6 h-fit">
            <h3 className="text-xl font-semibold mb-4">Price Details</h3>

            <div className="flex justify-between text-gray-700 mb-2">
              <span>Items ({cartItems.length})</span>
              <span>₹{totalPrice}</span>
            </div>

            <div className="flex justify-between text-gray-700 mb-2">
              <span>Delivery</span>
              <span className="text-green-600">FREE</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between font-bold text-lg">
              <span>Total Amount</span>
              <span>₹{totalPrice}</span>
            </div>

            <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
