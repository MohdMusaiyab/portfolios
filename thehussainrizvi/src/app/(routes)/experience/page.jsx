"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { RiBuilding4Line, RiTimeLine, RiFileTextLine } from 'react-icons/ri';

const experiences = [
  {
    role: 'Senior News Anchor',
    company: 'Global News Network',
    duration: '2020 - Present',
    description: 'Lead anchor for prime-time news broadcasts, covering major international events and conducting high-profile interviews.',
    achievements: [
      'Awarded Best News Presenter 2022',
      'Led coverage of major global events',
      'Increased viewership by 40%'
    ]
  },
  {
    role: 'News Correspondent',
    company: 'News24',
    duration: '2018 - 2020',
    description: 'Field reporter covering breaking news and investigative stories across multiple regions.',
    achievements: [
      'Special coverage of international summits',
      'Produced award-winning documentary series',
      'Regular contributor to digital platforms'
    ]
  },
  {
    role: 'Broadcast Journalist',
    company: 'Metro Media',
    duration: '2016 - 2018',
    description: 'Developed and presented news segments focusing on local and national stories.',
    achievements: [
      'Daily live broadcasts',
      'Editorial team lead',
      'Social media integration specialist'
    ]
  }
];

const Page = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-50 py-24 px-6">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-sky-950 mb-12 text-center">
          Professional Journey
        </h1>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-sky-900 mb-2">{exp.role}</h2>
                    <div className="flex items-center gap-2 text-sky-700 mb-4">
                      <RiBuilding4Line className="w-5 h-5" />
                      <span className="font-medium">{exp.company}</span>
                      <span className="text-sky-300">•</span>
                      <RiTimeLine className="w-5 h-5" />
                      <span>{exp.duration}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-2 text-gray-600"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.3 + (i * 0.1) }}
                        >
                          <RiFileTextLine className="w-4 h-4 text-sky-500" />
                          <span>{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Page;