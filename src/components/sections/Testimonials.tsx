"use client";

import React from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/data/testimonialsData";

const Testimonials = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="reviews"
      className="flex flex-col items-center bg-sky-50 text-gray-900 dark:bg-gray-900 dark:text-white border-b border-gray-600 dark:border-gray-300 py-16 md:py-24 px-4 md:px-8"
    >
      <h2 className="mb-12 text-center text-4xl font-semibold tracking-tighter text-blue-900 dark:text-white">
        What Clients Say
      </h2>

      <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between w-full max-w-7xl">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={index}
            className="flex w-full max-w-sm flex-1 flex-col items-start rounded-2xl bg-white dark:bg-zinc-900 p-6 shadow-md min-h-[500px]"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.author}
              className="mb-4 h-40 w-full rounded-xl object-cover"
            />
            <p className="mb-4 text-lg leading-snug text-black dark:text-gray-300">
              {testimonial.text}
            </p>
            <div className="mt-auto w-full border-t border-gray-300 dark:border-gray-700 pt-4">
              <p className="font-bold text-blue-900 dark:text-white">
                {testimonial.author}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Udaipur</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
