"use client"
import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Tech Solutions Inc.',
    duration: 'Jan 2020 - Present',
    description: 'Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality products.'
  },
  {
    role: 'Frontend Developer',
    company: 'Web Innovations LLC',
    duration: 'Jun 2018 - Dec 2019',
    description: 'Implemented responsive web designs and optimized user interfaces for performance. Worked closely with designers to create seamless user experiences.'
  },
  {
    role: 'Intern',
    company: 'Startup Hub',
    duration: 'Jan 2018 - May 2018',
    description: 'Assisted in the development of a startup project, gaining hands-on experience in full-stack development and agile methodologies.'
  }
];

const Page = () => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center min-h-screen bg-blue-50 pt-24 mb-10"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full"
        whileHover={{ scale: 1.05 }} 
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <h1 className="text-blue-600 text-3xl font-bold mb-6">Professional Experience</h1>
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2 className="text-xl font-semibold text-gray-800">{exp.role}</h2>
            <h3 className="text-md text-gray-600">{exp.company} - {exp.duration}</h3>
            <p className="text-gray-700 mt-2">{exp.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Page;
