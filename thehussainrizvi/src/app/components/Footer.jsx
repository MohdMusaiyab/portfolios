"use client";
import { motion } from "framer-motion";
import {  Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sky-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sky-200">
              Bringing you the latest news and stories from around the globe.
              Stay informed with our trusted reporting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sky-200 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sky-200 hover:text-white">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="text-sky-200 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sky-200 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-sky-200 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-l-lg bg-sky-800 text-white placeholder-sky-400 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-sky-600 px-4 py-2 rounded-r-lg hover:bg-sky-700 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-200 hover:text-white transition-all"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-200 hover:text-white transition-all"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-200 hover:text-white transition-all"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-200 hover:text-white transition-all"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-sky-800 my-8"></div>

        {/* Copyright */}
        <motion.div
          className="text-center text-sky-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;