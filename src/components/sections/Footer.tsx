"use client";

import {
  RiInstagramFill,
  RiFacebookFill,
  RiLinkedinFill,
} from "@remixicon/react";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sky-50 dark:bg-gray-900 text-black dark:text-gray-300 border-t border-gray-300 dark:border-gray-600">
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-10">
        {/* Contact Title Section */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-white uppercase">
            CONTACT US
          </h2>
          <p className="text-sm">
            Have questions or need more information? Get in touch with us, and we’ll be happy to assist you.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-sm">
          <div className="flex flex-col items-center space-y-1">
            <Phone className="w-6 h-6 mb-1" />
            <span className="font-medium text-base">Phone</span>
            <span>(+91) 9166410744</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <Mail className="w-6 h-6 mb-1" />
            <span className="font-medium text-base">Email</span>
            <span>info@vastuspaze.com</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <MapPin className="w-6 h-6 mb-1" />
            <span className="font-medium text-base">Address</span>
            <span>Udaipur, Rajasthan, India</span>
          </div>
        </div>

        {/* Socials and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-300 dark:border-gray-600">
          <div className="flex space-x-6 text-2xl mb-4 md:mb-0">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <RiInstagramFill />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <RiFacebookFill />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <RiLinkedinFill />
            </a>
          </div>
          <p className="text-xs text-center md:text-right">
            &copy; 2025 WikDup. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  