"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { IoMicSharp } from "react-icons/io5";
import { FaAward, FaGlobeAmericas } from "react-icons/fa";

const About = () => {
  const highlights = [
    {
      icon: <IoMicSharp />,
      title: "Senior News Anchor",
      description: "10+ years experience in broadcast journalism, delivering impactful stories"
    },
    {
      icon: <FaAward />,
      title: "Award Winner",
      description: "Multiple industry recognitions for excellence in journalism"
    },
    {
      icon: <FaGlobeAmericas />,
      title: "Global Coverage",
      description: "Extensive experience reporting major international events"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-50 py-24">
      <motion.div 
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className="max-w-4xl mx-auto space-y-12"
          variants={itemVariants}
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sky-950 tracking-tight">
              Hussain Rizvi
            </h1>
            <p className="text-xl md:text-2xl text-sky-700 font-medium">
              Senior News Anchor | Broadcast Journalist
            </p>
          </div>

          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
            variants={itemVariants}
          >
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Dedicated to delivering accurate and compelling news coverage that matters. With a decade of experience in broadcast journalism, I specialize in breaking news and in-depth reporting that connects with viewers and makes complex stories accessible.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="text-sky-600 text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-sky-950 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;