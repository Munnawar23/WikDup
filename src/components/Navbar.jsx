import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { LINKS } from "../data/navLinks";
import { AnimatePresence, motion } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = (e) => {
      if (isOpen) {
        e.preventDefault();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const offset = -70;
    const element = document.getElementById(id);
    if (!element) return;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offSetPosition = elementPosition + offset;

    window.scrollTo({
      top: offSetPosition,
      behavior: "smooth",
    });
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const hoverVariants = {
    hover: {
      scale: 1.05,
      x: 20,
      color: "#60A5FA", // lighter blue
      textShadow: "0 0 20px rgba(96, 165, 250, 0.6)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <nav className="fixed z-10 w-full border-b border-blue-100 bg-blue-700">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <motion.a 
                href="/logo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <h1 className="text-2xl text-white font-semibold">WikDup</h1>
              </motion.a>
            </div>
            <div>
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center bg-blue-700 p-2 text-white cursor-pointer rounded-md"
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "#1E40AF",
                  rotate: 90 
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <FaBars className="h-6 w-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </nav>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-20 flex flex-col space-y-8 bg-blue-700 px-20 pt-42 md:pt-20 text-5xl font-bold uppercase text-white lg:text-6xl"
          >
            <motion.button
              className="absolute right-4 top-4 rounded-full bg-blue-700 p-2 text-gray-50 cursor-pointer lg:right-34"
              onClick={() => setIsOpen(false)}
              type="button"
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: "#1E40AF",
                rotate: 90,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <FaTimes className="h-8 w-8" />
            </motion.button>
            
            {LINKS.map((link, index) => (
              <motion.a
                key={link.id}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="transition-colors duration-500 relative cursor-pointer"
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
              >
                <motion.span
                  variants={hoverVariants}
                  className="relative inline-block"
                >
                  {link.name}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-blue-300 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ 
                      width: "100%",
                      boxShadow: "0 0 10px rgba(147, 197, 253, 0.8)"
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};