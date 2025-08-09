"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const servicesData = [
  {
    id: 1,
    title: "Video Production",
    subtitle: "Cinematic Excellence",
    description: "From concept to final cut, we create stunning promotional videos, documentaries, and brand stories that captivate your audience.",
    features: ["4K/8K Recording", "Drone Cinematography", "Color Grading", "Sound Design"],
    price: "Starting at $2,500",
    icon: "🎬",
    gradient: "from-yellow-400 to-amber-600",
    bgPattern: "video-camera"
  },
  {
    id: 2,
    title: "Motion Graphics",
    subtitle: "Animated Storytelling",
    description: "Bring your ideas to life with dynamic motion graphics, logo animations, and visual effects that make your content stand out.",
    features: ["2D/3D Animation", "Logo Animation", "Visual Effects", "Kinetic Typography"],
    price: "Starting at $1,200",
    icon: "✨",
    gradient: "from-amber-400 to-yellow-600",
    bgPattern: "motion-waves"
  },
  {
    id: 3,
    title: "Video Editing",
    subtitle: "Post-Production Magic",
    description: "Transform raw footage into polished masterpieces with professional editing, color correction, and audio enhancement.",
    features: ["Multi-cam Editing", "Color Correction", "Audio Mixing", "Subtitle/Captions"],
    price: "Starting at $800",
    icon: "🎞️",
    gradient: "from-yellow-500 to-amber-500",
    bgPattern: "film-strip"
  },
  {
    id: 4,
    title: "Live Streaming",
    subtitle: "Real-Time Broadcasting",
    description: "Professional live streaming setup and management for events, webinars, and social media broadcasts.",
    features: ["Multi-Platform Streaming", "Real-time Graphics", "Technical Support", "Quality Monitoring"],
    price: "Starting at $500/event",
    icon: "📡",
    gradient: "from-amber-500 to-yellow-400",
    bgPattern: "broadcast"
  },
  {
    id: 5,
    title: "Video SEO & Distribution",
    subtitle: "Maximize Your Reach",
    description: "Optimize your videos for search engines and distribute across multiple platforms to maximize visibility and engagement.",
    features: ["YouTube Optimization", "Social Media Strategy", "Analytics Tracking", "Thumbnail Design"],
    price: "Starting at $400",
    icon: "📈",
    gradient: "from-yellow-600 to-amber-400",
    bgPattern: "network"
  },
  {
    id: 6,
    title: "Video Consultation",
    subtitle: "Strategic Planning",
    description: "Get expert advice on video strategy, equipment recommendations, and workflow optimization for your projects.",
    features: ["Strategy Development", "Equipment Consultation", "Workflow Optimization", "Training Sessions"],
    price: "$150/hour",
    icon: "💡",
    gradient: "from-amber-600 to-yellow-500",
    bgPattern: "lightbulb"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    }
  }
};

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-yellow-900/10 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="absolute bottom-40 right-20 w-56 h-56 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="absolute top-1/2 left-1/3 w-32 h-32 bg-yellow-300/40 rounded-full blur-2xl"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        ></motion.div>
      </div>

      {/* Floating Video Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {["🎥", "🎬", "📹", "🎞️", "📽️"].map((icon, index) => (
          <motion.div
            key={index}
            className="absolute text-4xl opacity-10"
            style={{
              left: `${20 + index * 15}%`,
              top: `${30 + index * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              delay: index * 0.5
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-black mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-600">
              Video Services
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-yellow-100/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            From concept to screen, we craft compelling visual stories that engage, inspire, and convert your audience into loyal customers.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="relative group"
              onHoverStart={() => setHoveredCard(service.id)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
            >
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-yellow-400/20 rounded-3xl p-8 shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 cursor-pointer overflow-hidden h-full">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <motion.div
                    className={`w-full h-full bg-gradient-to-br ${service.gradient}`}
                    animate={{
                      scale: hoveredCard === service.id ? 1.1 : 1,
                      opacity: hoveredCard === service.id ? 0.1 : 0.05
                    }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </div>

                {/* Glowing border effect */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-sm`}
                  animate={{
                    scale: hoveredCard === service.id ? 1.02 : 1
                  }}
                ></motion.div>

                {/* Service Icon */}
                <motion.div 
                  className="text-6xl mb-6 relative z-10"
                  animate={{
                    scale: hoveredCard === service.id ? 1.2 : 1,
                    rotate: hoveredCard === service.id ? 10 : 0
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>

                {/* Service Title */}
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold text-white mb-2"
                  animate={{
                    y: hoveredCard === service.id ? -5 : 0
                  }}
                >
                  {service.title}
                </motion.h3>

                <motion.h4 
                  className={`text-lg font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-4`}
                  animate={{
                    y: hoveredCard === service.id ? -5 : 0
                  }}
                  transition={{ delay: 0.1 }}
                >
                  {service.subtitle}
                </motion.h4>

                {/* Description */}
                <motion.p 
                  className="text-yellow-100/80 mb-6 leading-relaxed"
                  animate={{
                    y: hoveredCard === service.id ? -5 : 0
                  }}
                  transition={{ delay: 0.2 }}
                >
                  {service.description}
                </motion.p>

                {/* Features */}
                <motion.div 
                  className="mb-6"
                  animate={{
                    y: hoveredCard === service.id ? -5 : 0
                  }}
                  transition={{ delay: 0.3 }}
                >
                  <h5 className="text-yellow-300 font-semibold mb-3">What's Included:</h5>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center text-yellow-100/80 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-yellow-400 mr-2">✓</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Price */}
                <motion.div 
                  className="flex items-center justify-between"
                  animate={{
                    y: hoveredCard === service.id ? -5 : 0
                  }}
                  transition={{ delay: 0.4 }}
                >
                  <div className={`text-xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.price}
                  </div>
                  <motion.button
                    className={`px-4 py-2 bg-gradient-to-r ${service.gradient} text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Quote
                  </motion.button>
                </motion.div>

                {/* Expand indicator */}
                <motion.div
                  className="absolute bottom-4 right-4 text-yellow-400/60"
                  animate={{
                    scale: hoveredCard === service.id ? 1.2 : 1,
                    opacity: hoveredCard === service.id ? 1 : 0.6
                  }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Bring Your Vision to Life?
          </motion.h3>
          <motion.p 
            className="text-xl text-yellow-100/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss your project and create something extraordinary together.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold rounded-full shadow-xl hover:shadow-yellow-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.a>
            <motion.a
              href="#portfolio"
              className="px-8 py-4 border-2 border-yellow-400 text-yellow-300 font-bold rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Work
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
