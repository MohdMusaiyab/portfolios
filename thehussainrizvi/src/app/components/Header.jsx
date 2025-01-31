"use client"
import { motion } from "framer-motion";
import {  Mail, Menu, GitHub, Briefcase, GraduationCap, Contact } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { 
      name: "Experience", 
      href: "#experience", 
      Icon: Briefcase 
    },
    { 
      name: "Education", 
      href: "#education", 
      Icon: GraduationCap 
    },
    { 
      name: "Contact", 
      href: "#contact", 
      Icon: Contact 
    }
  ];

  const socialLinks = [
    {
      Icon: Mail,
      href: "https://twitter.com",
      color: "text-sky-800 hover:text-sky-950",
    },
    {
      Icon: Mail,
      href: "https://linkedin.com",
      color: "text-sky-800 hover:text-sky-950",
    },
    {
      Icon: GitHub,
      href: "https://github.com",
      color: "text-sky-800 hover:text-sky-950",
    },
    {
      Icon: Mail,
      href: "mailto:example@example.com",
      color: "text-sky-800 hover:text-sky-950",
    }
  ];

  return (
    <header className="bg-gradient-to-br from-sky-200 via-sky-100 to-sky-50 p-4 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo/Name */}
        <motion.div
          className="text-2xl font-bold text-sky-950"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hussain Rizvi
        </motion.div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-sky-800 hover:text-sky-950"
          >
            <Menu />
          </button>
        </div>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex items-center gap-4"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {navLinks.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              className="flex items-center gap-2 text-sky-800 hover:text-sky-950 transition-colors"
            >
              <Icon className="w-5 h-5" />
              {name}
            </a>
          ))}

          {/* Social Links */}
          <div className="flex items-center gap-4 ml-4">
            {socialLinks.map(({ Icon, href, color }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-300 ease-in-out ${color}`}
              >
                <Mail className="w-6 h-6" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </motion.nav>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-sky-100 shadow-md md:hidden">
            <div className="flex flex-col">
              {navLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  className="flex items-center gap-3 p-3 hover:bg-sky-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  {name}
                </a>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex justify-center gap-6 py-4 border-t">
                {socialLinks.map(({ Icon, href, color }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${color} hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;