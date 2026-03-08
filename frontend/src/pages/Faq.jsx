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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-8">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h1>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 cursor-pointer hover:shadow-md transition"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-700">
                  {faq.question}
                </h2>
                <FaChevronDown
                  className={`transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {activeIndex === index && (
                <p className="text-gray-600 mt-3">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Faq;