"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Page = () => {
    return (
        <div className="work-page p-4 pt-20 bg-sky-50 min-h-screen">
            <section className="programs mb-8">
                <motion.h2 
                    className="text-2xl font-bold mb-4 text-sky-700"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    My Programs
                </motion.h2>
                <div className="program-list grid grid-cols-1 gap-4">
                    {['Program 1', 'Program 2', 'Program 3'].map((program, index) => (
                        <motion.div 
                            key={index} 
                            className="program-item p-4 bg-sky-100 rounded shadow"
                            whileHover={{ scale: 1.05 }}
                        >
                            {program}
                        </motion.div>
                    ))}
                </div>
            </section>
            <section className="top-news mb-8">
                <motion.h2 
                    className="text-2xl font-bold mb-4 text-sky-700"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Top News
                </motion.h2>
                <div className="news-list grid grid-cols-1 gap-4">
                    {['News 1', 'News 2', 'News 3'].map((news, index) => (
                        <motion.div 
                            key={index} 
                            className="news-item p-4 bg-sky-100 rounded shadow"
                            whileHover={{ scale: 1.05 }}
                        >
                            {news}
                        </motion.div>
                    ))}
                </div>
            </section>
            <section className="election-coverage mb-8">
                <motion.h2 
                    className="text-2xl font-bold mb-4 text-sky-700"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Election Coverage
                </motion.h2>
                <div className="coverage-list grid grid-cols-1 gap-4">
                    {['Coverage 1', 'Coverage 2', 'Coverage 3'].map((coverage, index) => (
                        <motion.div 
                            key={index} 
                            className="coverage-item p-4 bg-sky-100 rounded shadow"
                            whileHover={{ scale: 1.05 }}
                        >
                            {coverage}
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Page