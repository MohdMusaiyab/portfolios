"use client"
import React from 'react';
import { Award, Mic, Globe, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const professionalHighlights = [
    {
      icon: <Mic className="w-8 h-8 text-sky-700" />,
      title: "Experienced Broadcast Journalist",
      description: "Over 10 years of reporting experience across national and international news networks"
    },
    {
      icon: <Award className="w-8 h-8 text-sky-700" />,
      title: "Multiple Industry Awards",
      description: "Emmy Award winner for Outstanding Breaking News Coverage"
    },
    {
      icon: <Globe className="w-8 h-8 text-sky-700" />,
      title: "Global News Reporting",
      description: "Extensive coverage of international political and humanitarian stories"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-sky-900 mb-6">
            Sarah Rodriguez
          </h1>
          <p className="text-xl text-sky-700 mb-12">
            Award-Winning Broadcast Journalist | Storyteller | News Anchor
          </p>

          <div className="bg-white shadow-lg rounded-xl p-8 mb-12">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              With a passion for delivering truth and context, I've dedicated my career to bringing comprehensive, unbiased news to viewers. My approach combines rigorous journalistic integrity with compelling storytelling, bridging complex global narratives for audiences nationwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {professionalHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-sky-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  {highlight.icon}
                </div>
                <h3 className="font-bold text-sky-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;