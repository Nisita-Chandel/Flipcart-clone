import { FaShippingFast, FaLock, FaHeadset, FaTags } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">

      {/* Hero Section */}
      <div className="text-center py-16 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Flipcart
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Your trusted online shopping partner delivering quality products,
          unbeatable prices, and seamless shopping experiences.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Mission Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At <span className="font-semibold text-indigo-600">Flipcart</span>, 
            we aim to make online shopping simple, affordable, and reliable 
            for everyone. We bring you a wide variety of quality products 
            with fast delivery and secure payment options.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <FaTags className="text-indigo-600 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Best Prices</h3>
            <p className="text-gray-600 text-sm">
              Affordable pricing with amazing discounts and offers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <FaLock className="text-indigo-600 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Secure Payments</h3>
            <p className="text-gray-600 text-sm">
              100% safe and secure payment options for your peace of mind.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <FaShippingFast className="text-indigo-600 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">
              Quick and reliable shipping across the country.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <FaHeadset className="text-indigo-600 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
            <p className="text-gray-600 text-sm">
              Our support team is always ready to assist you.
            </p>
          </div>

        </div>

        {/* Stats Section */}
        <div className="bg-indigo-600 text-white rounded-2xl p-10 text-center mb-16 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-3xl font-bold">10K+</h3>
              <p className="opacity-90">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">5K+</h3>
              <p className="opacity-90">Products Available</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">99%</h3>
              <p className="opacity-90">Customer Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Closing Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Thank You for Choosing Us ❤️
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We’re constantly improving to provide you with the best online 
            shopping experience. Your trust motivates us to do better every day.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;