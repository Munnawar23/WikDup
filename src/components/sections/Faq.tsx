"use client";

import { FAQ_DESCRIPTION, FAQS } from "@/data/faqData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Faq = () => {
  return (
    <section
      className=" w-full bg-sky-50 dark:bg-gray-900 text-emerald-950 dark:text-white px-4 md:py-16 py-8  md:px-8"
      id="faq"
    >
      <div className="flex flex-col gap-0 md:gap-12 lg:flex-row">
        {/* Left column */}
        <div className="lg:w-1/3">
          <h2 className="mb-8 text-4xl font-semibold tracking-tighter">
            Frequently asked questions
          </h2>
          <p className="mb-12 text-lg">{FAQ_DESCRIPTION}</p>
        </div>

        {/* Right column */}
        <div className="lg:w-2/3">
          <Accordion type="single" collapsible>
            {FAQS.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-2xl text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg px-4 py-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
