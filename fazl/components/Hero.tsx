"use client";
import React from "react";
import { motion } from "framer-motion";

const svgVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
};

const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 1.2 } },
};

const floatingVariants = {
    floating: {
        y: [0, -20, 0],
        rotate: [0, 5, 0],
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as any }
    }
};

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
                    {/* Fallback for older browsers */}
                    Your browser does not support the video tag.
                </video>
                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-yellow-900/50 to-black/80"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-yellow-500/20"></div>
            </div>

            {/* Animated Geometric Shapes */}
            <motion.div
                variants={svgVariants}
                initial="hidden"
                animate="visible"
                className="absolute inset-0 pointer-events-none"
            >
                {/* Golden hexagons */}
                <motion.div
                    variants={floatingVariants}
                    animate="floating"
                    className="absolute top-20 left-10 w-16 h-16 border-2 border-yellow-400/30 rotate-45"
                    style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" }}
                ></motion.div>
                
                <motion.div
                    variants={floatingVariants}
                    animate="floating"
                    className="absolute top-1/3 right-16 w-12 h-12 bg-gradient-to-r from-yellow-400/20 to-amber-300/20 rounded-full"
                    style={{ animationDelay: "1s" }}
                ></motion.div>

                <motion.div
                    variants={floatingVariants}
                    animate="floating"
                    className="absolute bottom-32 left-1/4 w-8 h-8 border border-yellow-300/40 rotate-12"
                    style={{ animationDelay: "2s" }}
                ></motion.div>

                {/* Dynamic SVG Background */}
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 800 600"
                    className="absolute inset-0 opacity-20"
                >
                    <motion.path
                        d="M0,300 Q200,100 400,300 T800,300"
                        stroke="url(#goldGradient)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 3, delay: 1 }}
                    />
                    <motion.circle
                        cx="400"
                        cy="300"
                        r="150"
                        fill="url(#radialGold)"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.3 }}
                        transition={{ duration: 2, delay: 0.5 }}
                    />
                    <defs>
                        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#fbbf24" />
                            <stop offset="50%" stopColor="#f59e0b" />
                            <stop offset="100%" stopColor="#d97706" />
                        </linearGradient>
                        <radialGradient id="radialGold" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
                            <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#92400e" stopOpacity="0.1" />
                        </radialGradient>
                    </defs>
                </svg>
            </motion.div>

            {/* Hero Content */}
            <motion.div
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="relative z-20 text-center px-4"
            >
                <motion.h1 
                    className="text-5xl md:text-8xl font-black mb-6 leading-tight"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <span className="block text-white drop-shadow-2xl">Welcome to</span>
                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-600 drop-shadow-lg">
                        Fazl's
                    </span>
                    <span className="block text-white drop-shadow-2xl">Portfolio</span>
                </motion.h1>
                
                <motion.p 
                    className="text-xl md:text-3xl text-yellow-100/90 mb-12 font-light tracking-wide max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    Crafting <span className="text-yellow-300 font-medium">extraordinary</span> web experiences with 
                    <span className="text-yellow-300 font-medium"> creativity</span> and <span className="text-yellow-300 font-medium">cutting-edge</span> code.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    <motion.a
                        href="#projects"
                        className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold rounded-full shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300 transform hover:scale-105"
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(245, 158, 11, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10">View Projects</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.a>
                    
                    <motion.a
                        href="#contact"
                        className="px-8 py-4 border-2 border-yellow-400 text-yellow-300 font-bold rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Let's Connect
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 1 }}
            >
                <motion.div
                    className="w-6 h-10 border-2 border-yellow-400/60 rounded-full flex justify-center"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <motion.div
                        className="w-1 h-3 bg-yellow-400 rounded-full mt-2"
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    ></motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
