import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FAQ_DESCRIPTION, FAQS } from "../data/faqData";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="mt-20 bg-sky-50" id="faq">
      <div className="container mx-auto flex flex-col gap-12 p-8 lg:flex-row">
        
        {/* Left column */}
        <div className="lg:w-1/3">
          <h2 className="mb-8 text-4xl font-semibold tracking-tighter">
            Frequently asked questions
          </h2>
          <p className="mb-12 text-lg">{FAQ_DESCRIPTION}</p>
        </div>

        {/* Right column */}
        <div className="lg:w-2/3">
          {FAQS.map((faq, index) => (
            <div key={index} className="mb-4 border-b pb-4">
              {/* Question row */}
              <div
                className="flex cursor-pointer items-center justify-between p-8"
                onClick={() => handleToggle(index)}
              >
                <h3 className="text-2xl">{faq.question}</h3>
                <div>
                  {activeIndex === index ? (
                    <FaMinus className="text-xl" />
                  ) : (
                    <FaPlus className="text-xl" />
                  )}
                </div>
              </div>

              {/* Answer content */}
              <div
                className={`mt-4 overflow-hidden text-lg transition-all duration-500 ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="p-8">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
