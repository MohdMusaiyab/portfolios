"use client";
import React from "react";
import { motion, easeOut } from "framer-motion";

const experienceData = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "TechVision Solutions",
    period: "2023 - Present",
    location: "San Francisco, CA",
    description: "Led development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and implemented CI/CD pipelines.",
    technologies: ["React", "TypeScript", "Node.js", "AWS", "MongoDB"],
    achievements: ["Reduced load time by 40%", "Led team of 5 developers", "Delivered 15+ projects"]
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Creative Digital Agency",
    period: "2021 - 2023",
    location: "New York, NY",
    description: "Crafted stunning user interfaces and interactive experiences for high-profile clients. Specialized in modern frameworks and responsive design.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Figma"],
    achievements: ["99% client satisfaction", "Created 50+ responsive designs", "Improved UX metrics by 35%"]
  },
  {
    id: 3,
    role: "Web Developer",
    company: "StartupHub Inc.",
    period: "2020 - 2021",
    location: "Austin, TX",
    description: "Developed MVP products for multiple startups. Focused on rapid prototyping and agile development methodologies.",
    technologies: ["JavaScript", "Vue.js", "Python", "Django", "PostgreSQL"],
    achievements: ["Built 8 MVP products", "Reduced development time by 30%", "Acquired 10K+ users"]
  },
  {
    id: 4,
    role: "Junior Developer",
    company: "CodeCraft Solutions",
    period: "2019 - 2020",
    location: "Remote",
    description: "Started my journey in web development, working on various client projects and learning modern development practices.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    achievements: ["Completed 25+ projects", "Learned 5 new technologies", "Built strong foundation"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: easeOut }
  }
};

const Experience = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-yellow-900/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-yellow-300/30 rounded-full blur-2xl"></div>
      </div>

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-32 right-16 w-6 h-6 border border-yellow-400/40 rotate-45"
          animate={{ rotate: [45, 135, 45], y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="absolute bottom-32 left-20 w-4 h-4 bg-yellow-400/30 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
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
              Experience
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-yellow-100/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            A journey through innovation, creativity, and continuous learning in the world of web development.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-amber-500 to-yellow-600 transform md:-translate-x-1/2"></div>

          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <motion.div
                className="absolute left-8 md:left-1/2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full transform md:-translate-x-1/2 z-10"
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-1 bg-black rounded-full"></div>
                <div className="absolute inset-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"></div>
              </motion.div>

              {/* Experience Card */}
              <motion.div
                className={`ml-20 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 shadow-xl hover:shadow-yellow-500/20 transition-all duration-300">
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>

                  {/* Role and Company */}
                  <motion.div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {exp.role}
                    </h3>
                    <h4 className="text-xl text-yellow-400 font-semibold mb-1">
                      {exp.company}
                    </h4>
                    <div className="flex flex-wrap gap-4 text-yellow-100/70">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {exp.period}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {exp.location}
                      </span>
                    </div>
                  </motion.div>

                  {/* Description */}
                  <p className="text-yellow-100/80 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h5 className="text-yellow-300 font-semibold mb-3">Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-yellow-400/20 to-amber-500/20 border border-yellow-400/30 rounded-full text-yellow-200 text-sm font-medium"
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(251, 191, 36, 0.3)" }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h5 className="text-yellow-300 font-semibold mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          className="flex items-start text-yellow-100/80"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: achIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-yellow-400 mr-2 mt-1">▸</span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold rounded-full shadow-xl hover:shadow-yellow-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Let's Work Together</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
