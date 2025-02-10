"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  IoSchoolOutline,
  IoCalendarOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { MdCastForEducation } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi";

const Education = () => {
  const education = [
    {
      degree: "Master's in Broadcast Journalism",
      institution: "Columbia School of Journalism",
      duration: "2014 - 2016",
      location: "New York, NY",
      achievements: [
        "Graduated with Honors",
        "Student News Network Lead Anchor",
        "Dean's List All Semesters",
      ],
    },
    {
      degree: "Bachelor's in Mass Communication",
      institution: "University of Texas",
      duration: "2010 - 2014",
      location: "Austin, TX",
      achievements: [
        "First Class Honors",
        "Campus Radio Host",
        "Journalism Society President",
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-50 py-24 relative overflow-hidden">
      {/* Background SVG Elements */}

      <motion.div
        className="container mx-auto px-6 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="flex items-center justify-center mb-12 gap-3"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
          >
            <HiAcademicCap className="text-5xl text-sky-700" />
            <h1 className="text-4xl md:text-5xl font-bold text-sky-950">
              Education
            </h1>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 relative group hover:shadow-xl transition-shadow"
              >
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10 transform group-hover:scale-110 transition-transform">
                  <MdCastForEducation className="w-full h-full text-sky-700" />
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-sky-900">
                    {edu.degree}
                  </h2>

                  <div className="flex flex-wrap gap-4 text-sky-700">
                    <div className="flex items-center gap-2">
                      <IoSchoolOutline className="w-5 h-5" />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IoCalendarOutline className="w-5 h-5" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IoLocationOutline className="w-5 h-5" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <motion.ul className="space-y-2 ml-6 list-disc text-gray-600">
                    {edu.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
