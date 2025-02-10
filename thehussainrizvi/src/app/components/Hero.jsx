"use client";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-200 via-sky-100 to-sky-50 overflow-hidden p-4 sm:p-6 lg:p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.75, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-sky-200 via-sky-100 to-sky-50"
      >
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8"
      >
        <div className="lg:w-1/2 text-left space-y-8">
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              initial={{ height: "100%" }}
              animate={{ height: "0%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute inset-0 bg-sky-200 z-10"
            />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-sky-950 tracking-tight">
              Hussain Rizvi
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-sky-900 leading-relaxed font-medium max-w-xl"
          >
            Senior News Anchor | Bringing you the most important stories from
            around the globe with integrity and precision.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6"
          >
            {[
              {
                Icon: Twitter,
                href: "https://twitter.com",
                label: "Twitter"
              },
              {
                Icon: Linkedin,
                href: "https://linkedin.com",
                label: "LinkedIn"
              },
              {
                Icon: Mail,
                href: "mailto:example@example.com",
                label: "Email"
              },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-800 hover:text-sky-950 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="w-8 h-8 sm:w-9 sm:h-9" strokeWidth={1.5} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={imageVariants}
          className="lg:w-1/2 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute inset-0 bg-gradient-to-tr from-sky-200/40 to-transparent pointer-events-none"
            />
            <motion.img
              src="/api/placeholder/400/400"
              alt="Hussain Rizvi"
              className="w-full h-auto object-cover shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;