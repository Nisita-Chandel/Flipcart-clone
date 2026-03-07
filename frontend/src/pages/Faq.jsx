import React from "react";

const Faq = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h1>

        {/* FAQ 1 */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700">
            1. How can I place an order?
          </h2>
          <p className="text-gray-600 mt-2">
            You can place an order by selecting the product, adding it to your
            cart, and completing the checkout process.
          </p>
        </div>

        {/* FAQ 2 */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700">
            2. What payment methods are available?
          </h2>
          <p className="text-gray-600 mt-2">
            We accept credit cards, debit cards, UPI, and cash on delivery.
          </p>
        </div>

        {/* FAQ 3 */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700">
            3. How long does shipping take?
          </h2>
          <p className="text-gray-600 mt-2">
            Shipping usually takes 3-5 business days depending on your location.
          </p>
        </div>

        {/* FAQ 4 */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700">
            4. Can I return a product?
          </h2>
          <p className="text-gray-600 mt-2">
            Yes, you can return products within 7 days of delivery if they are
            unused and in original condition.
          </p>
        </div>

        {/* FAQ 5 */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700">
            5. How can I contact customer support?
          </h2>
          <p className="text-gray-600 mt-2">
            You can contact us through the Contact page or email our support
            team for help.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Faq;