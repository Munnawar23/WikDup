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
      className="bg-sky-50 py-6 md:mt-0 dark:bg-[#0f172a] px-4 "
      id="reviews"
    >
      <h2 className="text-center text-4xl font-semibold tracking-tighter text-emerald-950 dark:text-white">
        What Clients Say
      </h2>

      <div className="container mx-auto mt-12 flex flex-col items-center gap-y-6 gap-x-8 lg:flex-row lg:justify-between lg:items-stretch">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={index}
            className="flex w-full max-w-[300px] flex-1 flex-col items-start rounded-2xl bg-white dark:bg-zinc-900 p-6 text-zinc-800 dark:text-zinc-100 shadow-md min-h-[500px]"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.author}
              className="mb-4 h-40 w-full rounded-xl object-cover"
            />
            <p className="mb-4 text-xl leading-snug">{testimonial.text}</p>
            <div className="mt-auto w-full border-t border-zinc-300 dark:border-zinc-700 pt-4">
              <p className="font-bold">{testimonial.author}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Udaipur</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
