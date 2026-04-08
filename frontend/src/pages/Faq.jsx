import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "How can I place an order?",
    answer:
      "You can place an order by selecting a product, adding it to your cart, and completing the checkout process."
  },
  {
    question: "What payment methods are available?",
    answer:
      "We accept Credit Cards, Debit Cards, UPI, Net Banking, and Cash on Delivery."
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping usually takes 3-5 business days depending on your delivery location."
  },
  {
    question: "Can I return a product?",
    answer:
      "Yes, products can be returned within 7 days of delivery if they are unused and in original packaging."
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact our support team through the Contact page or email us at support@example.com."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-lg">
            Find answers to the most common questions about our services.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`group bg-white border border-gray-200 rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${
                activeIndex === index ? "ring-2 ring-indigo-400" : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition">
                  {faq.question}
                </h2>

                <div
                  className={`bg-indigo-100 text-indigo-600 p-2 rounded-full transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180 bg-indigo-500 text-white" : ""
                  }`}
                >
                  <FaChevronDown />
                </div>
              </div>

              {/* Answer Section */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? "max-h-40 mt-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you anytime.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition shadow-lg">
            Contact Support
          </button>
        </div>

      </div>
    </div>
  );
};

export default Faq;