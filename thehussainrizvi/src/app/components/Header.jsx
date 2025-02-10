"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiBriefcase, FiMail, FiMenu, FiX } from "react-icons/fi";
import { IoSchoolOutline } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Experience", href: "/experience", Icon: FiBriefcase },
    { name: "Education", href: "/education", Icon: IoSchoolOutline },
    { name: "Contact", href: "/contact", Icon: RiContactsLine }
  ];

  const socialLinks = [
    { Icon: FaGithub, href: "https://github.com", label: "GitHub" },
    { Icon: FiMail, href: "mailto:example@example.com", label: "Email" }
  ];

  const headerVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.header 
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="bg-gradient-to-br from-sky-200 via-sky-100 to-sky-50 py-4 px-6 shadow-lg fixed w-full top-0 z-50 backdrop-blur-sm bg-opacity-90"
    >
      <div className="container mx-auto flex justify-between items-center relative">
        <motion.a
          href="/"
          variants={itemVariants}
          className="text-2xl font-bold text-sky-950 hover:text-sky-800 transition-colors"
        >
          Hussain Rizvi
        </motion.a>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-sky-800 hover:text-sky-950 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <motion.nav
          variants={itemVariants}
          className="hidden md:flex items-center gap-6"
        >
          {navLinks.map(({ name, href, Icon }) => (
            <motion.a
              key={name}
              href={href}
              className="flex items-center gap-2 text-sky-800 hover:text-sky-950 transition-all hover:scale-105"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-4 h-4" />
              <span className="font-medium">{name}</span>
            </motion.a>
          ))}

          <div className="flex items-center gap-4 ml-6 pl-6 border-l border-sky-300">
            {socialLinks.map(({ Icon, href, label }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-sky-800 hover:text-sky-950 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.nav>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 left-0 mt-2 bg-white rounded-lg shadow-xl md:hidden border border-sky-100"
          >
            <nav className="flex flex-col py-2">
              {navLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  className="flex items-center gap-3 px-6 py-3 text-sky-800 hover:bg-sky-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{name}</span>
                </a>
              ))}
              
              <div className="flex justify-center gap-6 py-4 mt-2 border-t border-sky-100">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-sky-800 hover:text-sky-950 hover:scale-110 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;