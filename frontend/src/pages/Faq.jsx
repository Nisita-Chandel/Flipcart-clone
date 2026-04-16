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
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-white to-purple-200 flex items-center justify-center px-4 py-16">
      
      <div className="w-full max-w-5xl">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            FAQs
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Everything you need to know about our services ✨
          </p>
        </div>

        {/* FAQ Container */}
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className={`cursor-pointer rounded-2xl p-[1px] bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 ${
                activeIndex === index ? "scale-[1.02]" : ""
              }`}
            >
              <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">

                {/* Question */}
                <div className="flex justify-between items-center">
                  <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                    {faq.question}
                  </h2>

                  <div
                    className={`p-2 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-indigo-600 text-white rotate-180"
                        : "bg-indigo-100 text-indigo-600"
                    }`}
                  >
                    <FaChevronDown />
                  </div>
                </div>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    activeIndex === index
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            We’re always here to help you 💜
          </p>

          <button className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white rounded-full group bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
            <span className="relative">Contact Support</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Faq;