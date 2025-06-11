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
      className="flex min-h-screen flex-wrap items-center bg-sky-50 text-blue-900 dark:bg-gray-900 dark:text-white"
    >
      {/* Left section */}
      <div className="w-full md:pt-0 -mt-16 md:mt-0 p-8 md:w-1/2">
        {/* Small round images → now Avatar */}
        <div className="mb-4 flex space-x-2">
          {[1, 2, 3].map((n, index) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 * (index + 1) }}
            >
              <Avatar className="h-12 w-12 border-2 border-blue-700">
                <AvatarImage src={`/heroImage-${n}.webp`} alt={`image-${n}`} />
                <AvatarFallback>IMG</AvatarFallback>
              </Avatar>
            </motion.div>
          ))}
        </div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl tracking-tighter md:text-5xl lg:text-7xl"
        >
          WikDup builds meaningful experiences that{" "}
          <span className="text-blue-700 dark:text-blue-400">elevate</span> your brand.
        </motion.h1>

        {/* Contact Us button */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button
            size="lg"
            className="mt-8 flex items-center gap-2 cursor-pointer rounded-full bg-blue-700 text-white hover:bg-[#1e40af]"
            onClick={() => window.open("mailto:munawwarh48@gmail.com")}
          >
            <span>Contact Us</span>
            <IoArrowForward />
          </Button>
        </motion.div>
      </div>

      {/* Right section (main hero image) */}
     <div className="heroImage w-full md:w-1/2 lg:pl-28 lg:p-8 -mt-36 md:mt-0">
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
