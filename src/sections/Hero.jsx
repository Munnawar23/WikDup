import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-wrap items-center bg-sky-50 text-blue-900"
    >
      <div className="main w-full pt-24 md:pt-0 p-8 md:w-1/2">
        <div className="mb-4 flex space-x-2">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            src="/heroImage-1.webp"
            alt="image-1"
            className="h-12 w-12 rounded-full border-2 border-blue-700"
          />
          <motion.img
            src="/heroImage-2.webp"
            alt="image-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-12 w-12 rounded-full border-2 border-blue-700"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            src="/heroImage-3.webp"
            alt="image-3"
            className="h-12 w-12 rounded-full border-2 border-blue-700"
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl tracking-tighter md:text-5xl lg:text-7xl"
        >
          WikDup builds meaningful experiences that
          <span className="text-blue-700"> elevate</span> your brand.
        </motion.h1>

        <motion.button
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 flex items-center gap-2 rounded-full bg-blue-700 px-4 py-3 text-white transition duration-200 cursor-pointer hover:bg-[#1e40af]"
          onClick={() => window.open("mailto:munawwarh48@gmail.com")}
        >
          <span>Contact Us</span>
          <IoArrowForward />
        </motion.button>
      </div>
      <div className="heroImage w-full md:w-1/2 lg:pl-28 lg:p-8">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="h-auto w-full"
          src="/hero-image.webp"
          alt="WikDup"
        />
      </div>
    </section>
  );
};

export default Hero;
