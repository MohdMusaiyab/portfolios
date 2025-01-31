"use client";
import React from "react";
import { motion } from "framer-motion";
import { Twitter, Instagram, Youtube, Facebook } from "lucide-react";

const Page = () => {
  // Placeholder data for latest posts
  const latestPosts = [
    {
      platform: "Twitter",
      icon: <Twitter className="w-6 h-6" />,
      content: "Just shared my thoughts on the latest news trends. Check it out!",
      link: "https://twitter.com",
    },
    {
      platform: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      content: "Behind the scenes of my latest interview. Swipe to see more!",
      link: "https://instagram.com",
    },
    {
      platform: "YouTube",
      icon: <Youtube className="w-6 h-6" />,
      content: "New video alert! Watch my latest report on global news.",
      link: "https://youtube.com",
    },
    {
      platform: "Facebook",
      icon: <Facebook className="w-6 h-6" />,
      content: "Join me live tomorrow for a special news segment.",
      link: "https://facebook.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-sky-900 text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Connect With Me
        </motion.h1>

        {/* Social Media Links */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {latestPosts.map((post, index) => (
            <motion.a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-sky-600 mb-4">{post.icon}</div>
              <h3 className="text-xl font-bold text-sky-900 mb-2">
                {post.platform}
              </h3>
              <p className="text-sky-700">{post.content}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Latest Posts Section */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-sky-900 mb-6">
            My Latest Posts
          </h2>
          <div className="space-y-6">
            {latestPosts.map((post, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              >
                <div className="text-sky-600">{post.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-sky-900">
                    {post.platform}
                  </h3>
                  <p className="text-sky-700">{post.content}</p>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:text-sky-700 transition-all"
                  >
                    View Post →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;