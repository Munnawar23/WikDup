"use client";

import {
  RiInstagramFill,
  RiFacebookFill,
  RiTwitterFill,
} from "@remixicon/react";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sky-50 dark:bg-gray-900 text-black dark:text-gray-300 border-t border-gray-00 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-10">
        {/* Contact Title Section */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-white">
            CONTACT US
          </h2>
          <p className="text-base">
            Have questions or need more information? Get in touch with us, and we’ll be happy to assist you.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-base">
          <div className="flex flex-col items-center space-y-1">
            <Phone className="w-6 h-6 mb-1" />
            <span className="font-medium text-lg">Phone</span>
            <span>(123) 456‑7890</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <Mail className="w-6 h-6 mb-1" />
            <span className="font-medium text-lg">Email</span>
            <span>info@vastuspaze.com</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <MapPin className="w-6 h-6 mb-1" />
            <span className="font-medium text-lg">Address</span>
            <span>1234 Renovation Ave, Suite 100, Your City, ST 56789</span>
          </div>
        </div>

        {/* Socials and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-300 dark:border-gray-700">
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
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <RiTwitterFill />
            </a>
          </div>
          <p className="text-sm text-center md:text-right">
            &copy; 2024 VastuSpaze. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
