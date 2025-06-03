"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaComment,
  FaUser,
  FaCheckCircle,
  FaClock,
  FaMicrophone,
  FaCalendarAlt,
  FaChartLine,
  FaRobot,
  FaRegSmile,
} from "react-icons/fa";

type Feature = {
  icon: React.ComponentType;
  title: string;
  description: string;
  color: string;
};

type Message = {
  type: "ai" | "user";
  content: string;
  icon: React.ComponentType;
  color: string;
};

const interviewFeatures: Feature[] = [
  {
    icon: FaMicrophone,
    title: "AI-Powered Interviews",
    description:
      "Practice with our advanced AI interviewer that adapts to your responses.",
    color: "bg-indigo-600",
  },
  {
    icon: FaCheckCircle,
    title: "Real-time Feedback",
    description:
      "Get instant feedback on your answers and communication skills.",
    color: "bg-purple-600",
  },
  {
    icon: FaCalendarAlt,
    title: "Flexible Scheduling",
    description: "Book sessions with expert interviewers at your convenience.",
    color: "bg-green-600",
  },
  {
    icon: FaChartLine,
    title: "Progress Tracking",
    description: "Monitor your improvement over multiple practice sessions.",
    color: "bg-yellow-600",
  },
];
const chatMessages: Message[] = [
  {
    type: "ai",
    content:
      "Welcome to your mock interview! Let's start with your introduction.",
    icon: FaRobot,
    color: "bg-indigo-600",
  },
  {
    type: "user",
    content:
      "Thank you! I'm John, a full-stack developer with 3 years of experience...",
    icon: FaUser,
    color: "bg-green-600",
  },
  {
    type: "ai",
    content:
      "Great! Now explain how you would design a rate-limiting system for an API?",
    icon: FaComment,
    color: "bg-indigo-600",
  },
  {
    type: "user",
    content:
      "I'd use a token bucket algorithm with Redis for distributed tracking...",
    icon: FaRegSmile,
    color: "bg-green-600",
  },
];

const FeatureCard: React.FC<Feature> = ({
  icon: Icon,
  title,
  description,
  color,
}) => (
  <motion.div
    className="group relative bg-gradient-to-r from-gray-900 to-gray-800 border-2 border-gray-700 p-6 rounded-xl hover:border-indigo-500 transition-opacity duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.4 }}
    whileHover={{
      y: -5,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
    <div
      className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4`}
    >
      <Icon  />
    </div>
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <p className="text-neutral-400">{description}</p>
  </motion.div>
);

const ChatBubble: React.FC<{ message: Message }> = ({ message }) => (
  <motion.div
    className="flex items-start space-x-4"
    initial={{ opacity: 0, x: message.type === "ai" ? -20 : 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.02 }}
  >
    <motion.div
      className={`w-10 h-10 ${message.color} rounded-full flex items-center justify-center shadow-lg`}
      whileHover={{ scale: 1.1 }}
    >
      <message.icon  />
    </motion.div>
    <motion.div
      className={`rounded-lg p-4 flex-1 ${
        message.type === "ai"
          ? "bg-indigo-500/10 border border-indigo-500/30"
          : "bg-green-500/10 border border-green-500/30"
      }`}
      whileHover={{
        scale: 1.01,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.2)",
      }}
    >
      <p className="text-sm leading-relaxed">{message.content}</p>
    </motion.div>
  </motion.div>
);

const MockInterview: React.FC = () => {
  return (
    <section id="mockInterviews" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
            Mock Interviews
          </h2>
          <p className="text-lg text-gray-300">
            Enhance your interview skills with our AI-powered mock interviews.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Interview Demo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 rounded-xl p-6 shadow-2xl">
              <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_center,#4f46e510,transparent)]" />

              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="w-3 h-3 bg-red-500 rounded-full"
                    animate={{ scale: [1, 0.8, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-neutral-400 font-medium">
                    Live Session
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-neutral-400 bg-gray-800/50 px-3 py-1 rounded-lg">
                  <FaClock className="text-indigo-400" />
                  <span className="font-mono">00:15:23</span>
                </div>
              </div>

              <div className="space-y-6">
                {chatMessages.map((message, index) => (
                  <ChatBubble key={index} message={message} />
                ))}
              </div>

              <div className="mt-6 flex space-x-4">
                <motion.button
                  className="flex-1 bg-red-500/90 hover:bg-red-600 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  End Interview
                </motion.button>
                <motion.button
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Continue
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Features Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Interview Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {interviewFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>

            <motion.button
              className="w-full bg-indigo-600 hover:bg-indigo-700 py-4 rounded-xl transition-colors mt-8 font-medium flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaCalendarAlt />
              Schedule Mock Interview
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MockInterview;
