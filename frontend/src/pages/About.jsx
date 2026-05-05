import {
  FaShippingFast,
  FaLock,
  FaHeadset,
  FaTags,
  FaUsers,
  FaShoppingBag,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-indigo-900 text-white relative overflow-hidden">

      {/* Floating Blur Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

      {/* Hero Section */}
      <div className="relative z-10 text-center py-20 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-5 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          About SastaFlipkart ✨
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-gray-300">
          Your trusted online shopping destination offering premium
          products, amazing discounts, secure payments, and
          lightning-fast delivery.
        </p>
      </div>

      {/* Mission Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 text-center">
        <h2 className="text-4xl font-bold mb-5">
          Our Mission 🚀
        </h2>

        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg">
          At <span className="text-pink-400 font-bold">SastaFlipkart</span>,
          our mission is to make online shopping affordable,
          convenient, and enjoyable for everyone by delivering
          high-quality products with modern shopping experiences.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {[
          {
            icon: <FaTags />,
            title: "Best Prices",
            desc: "Amazing offers and unbeatable discounts.",
          },
          {
            icon: <FaLock />,
            title: "Secure Payments",
            desc: "100% safe transactions for every purchase.",
          },
          {
            icon: <FaShippingFast />,
            title: "Fast Delivery",
            desc: "Quick delivery at your doorstep.",
          },
          {
            icon: <FaHeadset />,
            title: "24/7 Support",
            desc: "Always available customer support team.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 text-center hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            <div className="text-5xl text-pink-400 mb-4 flex justify-center">
              {item.icon}
            </div>

            <h3 className="text-xl font-bold mb-3">
              {item.title}
            </h3>

            <p className="text-gray-300 text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-10">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10">

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="hover:scale-105 transition">
              <FaUsers className="text-4xl text-pink-400 mx-auto mb-3" />
              <h3 className="text-4xl font-bold">10K+</h3>
              <p className="text-gray-300">Happy Customers</p>
            </div>

            <div className="hover:scale-105 transition">
              <FaShoppingBag className="text-4xl text-purple-400 mx-auto mb-3" />
              <h3 className="text-4xl font-bold">5K+</h3>
              <p className="text-gray-300">Products Available</p>
            </div>

            <div className="hover:scale-105 transition">
              <FaHeadset className="text-4xl text-blue-400 mx-auto mb-3" />
              <h3 className="text-4xl font-bold">99%</h3>
              <p className="text-gray-300">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Section */}
      <div className="relative z-10 text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-5">
          Thank You For Shopping With Us ❤️
        </h2>

        <p className="max-w-3xl mx-auto text-gray-300 text-lg">
          We continuously improve our platform to provide a world-class
          shopping experience. Your trust motivates us every day.
        </p>
      </div>
    </div>
  );
};

export default About;