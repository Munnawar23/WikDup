import React from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "../data/testimonialsData";

const Testimonials = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-sky-50 px-8 py-20" id="reviews">
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
        What Client say
      </h2>
      <div className="container mx-auto flex flex-wrap gap-8">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={index}
            className={`rounded-3xl p-4 ${testimonial.bgColor} ${testimonial.textColor} flex min-w-[250px] flex-1 flex-col items-start`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.author}
              className="mb-4 rounded-3xl object-cover"
            />
            <p className="mb-4 text-lg md:text-xl lg:text-2xl">{testimonial.text}</p>
            <div className="mt-6">
              <p className="font-bold">{testimonial.author}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
