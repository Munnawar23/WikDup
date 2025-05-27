import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const socialIcons = [
    { Icon: FaFacebookF, label: "Facebook", href: "#" },
    { Icon: FaTwitter, label: "Twitter", href: "#" },
    { Icon: FaInstagram, label: "Instagram", href: "#" },
    { Icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
  ];

  const iconVariants = {
    hover: {
      scale: 1.2,
      y: -5,
      color: "#60A5FA", // lighter blue
      rotate: [0, -10, 10, 0],
      transition: {
        duration: 0.3,
        ease: "easeOut",
        rotate: {
          duration: 0.5,
          ease: "easeInOut"
        }
      }
    },
    tap: {
      scale: 0.9,
      transition: { duration: 0.1 }
    }
  };

  const containerVariants = {
    hover: {
      boxShadow: "0 0 25px rgba(96, 165, 250, 0.4)",
      backgroundColor: "rgba(30, 64, 175, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-blue-700 py-6 text-white" id="contact">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4 md:space-y-0">
        {/* Social Icons */}
        <div className="mb-4 flex space-x-6">
          {socialIcons.map(({ Icon, label, href }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.a
                href={href}
                aria-label={label}
                className="relative flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 transition-colors duration-300"
                variants={containerVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="relative z-10"
                >
                  <Icon size={20} />
                </motion.div>
                
                {/* Ripple effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-blue-400 opacity-0"
                  whileHover={{
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                />
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  whileHover={{
                    boxShadow: [
                      "0 0 0px rgba(96, 165, 250, 0)",
                      "0 0 20px rgba(96, 165, 250, 0.6)",
                      "0 0 30px rgba(96, 165, 250, 0.4)"
                    ],
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Footer Text */}
        <motion.div 
          className="text-sm opacity-50 transition-opacity duration-300"
          whileHover={{ 
            opacity: 0.8,
            scale: 1.05,
            textShadow: "0 0 10px rgba(255, 255, 255, 0.3)"
          }}
          transition={{ duration: 0.2 }}
        >
          &copy; {new Date().getFullYear()} WikDup. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;