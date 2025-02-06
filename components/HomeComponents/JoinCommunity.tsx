'use client'
import React from "react";
import { motion } from "framer-motion";
import { FaComments, FaUsers, FaVideo } from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Discussion Forums",
    description:
      "Engage in topic-specific discussions, share experiences, and learn from peers.",
    icon: <FaComments className="w-8 h-8 text-white" />,
    bgColor: "bg-indigo-600",
    stats: "Active Users: 10.5K+",
    linkText: "Join Discussion →",
    linkColor: "text-indigo-400",
  },
  {
    id: 2,
    title: "Study Groups",
    description:
      "Join domain-specific study groups for collaborative learning and practice.",
    icon: <FaUsers className="w-8 h-8 text-white" />,
    bgColor: "bg-purple-600",
    stats: "Active Groups: 250+",
    linkText: "Find Group →",
    linkColor: "text-purple-400",
  },
  {
    id: 3,
    title: "Live Events",
    description:
      "Attend live coding sessions, workshops, and Q&A with industry experts.",
    icon: <FaVideo className="w-8 h-8 text-white" />,
    bgColor: "bg-green-600",
    stats: "Next Event: 2 hrs",
    linkText: "View Schedule →",
    linkColor: "text-green-400",
  },
];

const stats = [
  { id: 1, value: "50K+", label: "Active Members", color: "text-indigo-400" },
  {
    id: 2,
    value: "100+",
    label: "Daily Discussions",
    color: "text-purple-400",
  },
  { id: 3, value: "1000+", label: "Mock Interviews", color: "text-green-400" },
  { id: 4, value: "89%", label: "Success Rate", color: "text-yellow-400" },
];

const JoinCommunity = () => {
  return (
    <section id="community" className="py-20  text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Join Our Community
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Connect, learn, and grow with fellow interview candidates
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="group relative bg-gradient-to-r from-gray-900 to-gray-800 border-2 border-gray-700 p-6 rounded-xl hover:border-indigo-500 transition-opacity duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div
                className={`w-14 h-14 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-300 mb-6">{feature.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">{feature.stats}</span>
                <span className={`${feature.linkColor}`}>
                  {feature.linkText}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-neutral-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <motion.button
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg transition-all transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Join Our Community
          </motion.button>
          <motion.p
            className="mt-4 text-neutral-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            Already a member?{" "}
            <a href="#" className="text-indigo-400 hover:text-indigo-300">
              Sign in
            </a>
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
