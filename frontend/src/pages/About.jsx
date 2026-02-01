const About = () => {
    return (
      <div className="min-h-screen bg-gray-50 px-6 py-10">
        <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
          
          {/* Heading */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            About Us
          </h1>
  
          {/* Intro */}
          <p className="text-gray-600 leading-relaxed mb-6">
            Welcome to <span className="font-semibold text-gray-800">Flipcart</span> — 
            your one-stop destination for quality products at the best prices.
            We are committed to delivering a smooth, secure, and enjoyable shopping experience.
          </p>
  
          {/* Mission */}
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our mission is to make online shopping simple, affordable, and reliable
            for everyone. We aim to bring you a wide range of products with fast delivery
            and excellent customer support.
          </p>
  
          {/* Why Choose Us */}
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Why Choose Us?
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Wide variety of quality products</li>
            <li>Affordable prices and great deals</li>
            <li>Secure payments</li>
            <li>Easy returns & fast delivery</li>
            <li>24/7 customer support</li>
          </ul>
  
          {/* Closing */}
          <p className="text-gray-600 leading-relaxed">
            Thank you for choosing <span className="font-semibold text-gray-800">Flipcart</span>.
            We look forward to serving you and making your shopping experience better every day.
          </p>
  
        </div>
      </div>
    );
  };
  
  export default About;
  