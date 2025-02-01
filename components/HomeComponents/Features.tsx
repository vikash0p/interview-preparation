"use client";
import { motion } from "framer-motion";
import React from "react";
import {
  FaLightbulb,
  FaMicrophone,
  FaChartLine,
  FaBook,
  FaUsers,
  FaTasks,
} from "react-icons/fa";

const featuresData = [
  {
    id: 1,
    title: "Smart Question Bank",
    description:
      "Access thousands of curated questions across different difficulty levels and domains.",
    icon: <FaLightbulb className="text-indigo-600 text-3xl" />,
    bgColor: "bg-indigo-100",
  },
  {
    id: 2,
    title: "Mock Interviews",
    description:
      "Practice with AI-powered mock interviews and receive instant feedback.",
    icon: <FaMicrophone className="text-purple-600 text-3xl" />,
    bgColor: "bg-purple-100",
  },
  {
    id: 3,
    title: "Progress Tracking",
    description:
      "Monitor your progress with detailed analytics and performance metrics.",
    icon: <FaChartLine className="text-green-600 text-3xl" />,
    bgColor: "bg-green-100",
  },
  {
    id: 4,
    title: "Study Resources",
    description:
      "Access comprehensive guides, tips, and best practices for interview success.",
    icon: <FaBook className="text-red-600 text-3xl" />,
    bgColor: "bg-red-100",
  },
  {
    id: 5,
    title: "Community Support",
    description:
      "Connect with peers, share experiences, and learn from others' interview journeys.",
    icon: <FaUsers className="text-yellow-600 text-3xl" />,
    bgColor: "bg-yellow-100",
  },
  {
    id: 6,
    title: "Personalized Path",
    description:
      "Get customized learning paths based on your target role and experience level.",
    icon: <FaTasks className="text-blue-600 text-3xl" />,
    bgColor: "bg-blue-100",
  },
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    hover: {
      y: -10,
      scale: 1.02,
      transition: { type: "spring", stiffness: 300 },
    },
    tap: { scale: 0.98 },
  };

  const iconVariants = {
    hover: {
      rotate: [0, -10, 10, 0],
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="features" className="py-20 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-300 mb-4">
            Comprehensive Interview Preparation
          </h2>
          <p className="text-lg text-neutral-400">
            Everything you need to succeed in your next interview
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuresData.map((feature,) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              className="group relative p-6 rounded-xl border-2 border-gray-700 bg-gray-800 shadow-xl hover:border-indigo-500 transition-colors"
              style={{
                background:
                  "linear-gradient(45deg, rgba(31,41,55,1) 0%, rgba(17,24,39,1) 100%)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

              <motion.div
                className={`w-14 h-14 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}
                variants={iconVariants}
                whileHover="hover"
              >
                {feature.icon}
              </motion.div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-neutral-400 group-hover:text-gray-200 transition-colors">
                {feature.description}
              </p>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
