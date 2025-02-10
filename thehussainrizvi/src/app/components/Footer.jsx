"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const socialLinks = [
    { Icon: FaGithub, href: "https://github.com", label: "GitHub" },
    { Icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
    { Icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { Icon: MdEmail, href: "mailto:example@email.com", label: "Email" }
  ];

  return (
    <footer className="bg-gradient-to-br from-sky-900 to-sky-950 text-white py-16">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-sky-200 mb-6 max-w-md">
                Open for collaborations and exciting opportunities. Feel free to reach out!
              </p>
              <div className="flex gap-5">
                {socialLinks.map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-200 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={label}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Stay Updated</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-sky-800/50 text-white placeholder:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400/50 transition-all"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-3 w-full md:w-auto px-6 py-3 bg-sky-600 hover:bg-sky-500 rounded-lg font-medium transition-colors"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </form>
            </div>
          </div>

          <div className="border-t border-sky-800/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sky-300 text-sm">
              <p>&copy; {new Date().getFullYear()} Syed Hussain Rizvi. All rights reserved.</p>
              <nav className="flex gap-6">
                {["Terms", "Privacy", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;