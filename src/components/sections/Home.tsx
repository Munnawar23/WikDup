"use client";

import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-wrap items-center bg-sky-50 text-blue-900 dark:bg-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600 py-16 md:py-8"
    >
      {/* Left section */}
      <div className="w-full px-6 md:w-1/2">
        <div className="mb-6 flex space-x-2">
          {[1, 2, 3].map((n, index) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 * (index + 1) }}
            >
              <Avatar className="h-12 w-12 border-2 border-blue-700 dark:border-blue-400">
                <AvatarImage src={`/heroImage-${n}.webp`} alt={`image-${n}`} />
                <AvatarFallback>IMG</AvatarFallback>
              </Avatar>
            </motion.div>
          ))}
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl tracking-tight font-bold leading-tight"
        >
          WikDup builds meaningful experiences that{" "}
          <span className="text-blue-700 dark:text-blue-400">elevate</span> your brand.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button
            size="lg"
            className="mt-8 flex items-center gap-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition"
            onClick={() => window.open("mailto:munawwarh48@gmail.com")}
          >
            <span>Contact Us</span>
            <IoArrowForward />
          </Button>
        </motion.div>
      </div>

      {/* Right section image */}
      <div className="w-full px-6 md:w-1/2 mt-12 md:mt-0">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src="/hero-image.webp"
          alt="WikDup Hero"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
