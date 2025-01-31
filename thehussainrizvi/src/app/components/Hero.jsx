"use client";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-200 via-sky-100 to-sky-50 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-sky-200 via-sky-100 to-sky-50 opacity-75"></div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Left Side: Name and Description */}
        <motion.div
          className="md:w-1/2 text-left space-y-6 relative"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-extrabold text-sky-950 tracking-tight relative z-30">
            Hussain Rizvi
          </h1>

          <p className="text-xl text-sky-900 leading-relaxed font-medium relative z-30">
            Senior News Anchor | Bringing you the most important stories from
            around the globe with integrity and precision.
          </p>

          <div className="flex items-center gap-6 relative z-30">
            {[
              {
                Icon: Twitter,
                href: "https://twitter.com",
                color: "text-sky-800 hover:text-sky-950",
              },
              {
                Icon: Linkedin,
                href: "https://linkedin.com",
                color: "text-sky-800 hover:text-sky-950",
              },
              {
                Icon: Mail,
                href: "mailto:example@example.com",
                color: "text-sky-800 hover:text-sky-950",
              },
            ].map(({ Icon, href, color }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-300 ease-in-out ${color}`}
              >
                <Icon className="w-9 h-9" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="w-full max-w-md">
            <img
              src="https://pbs.twimg.com/profile_images/1445602883710246912/qY0k7czZ_400x400.jpg"
              alt="Hussain Rizvi"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
