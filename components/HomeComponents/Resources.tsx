"use client";
import React from "react";
import { FaBook, FaVideo, FaCode, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import {

  FaUserTie,
  FaFileSignature,
  FaLaptopCode,
  FaServer,
  FaComments,
} from "react-icons/fa";


interface ResourceCardProps {
  resource: Resource;
  animationDelay: number;
}
export interface Resource {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  tags: string[];
  color: string;
  linkText: string;
}
const resources: Resource[] = [
  {
    id: 1,
    title: "Study Guides",
    description:
      "Comprehensive guides covering all major interview topics and concepts.",
    icon: <FaBook className="w-6 h-6 text-blue-600" />,
    tags: ["DSA", "System Design", "Behavioral"],
    color: "blue",
    linkText: "Access Guides",
  },
  {
    id: 2,
    title: "Video Tutorials",
    description:
      "In-depth video explanations of common interview questions and solutions.",
    icon: <FaVideo className="w-6 h-6 text-green-600" />,
    tags: ["Algorithms", "Design Patterns"],
    color: "green",
    linkText: "Watch Videos",
  },
  {
    id: 3,
    title: "Practice Problems",
    description:
      "Curated collection of interview problems with detailed solutions.",
    icon: <FaCode className="w-6 h-6 text-purple-600" />,
    tags: ["LeetCode", "HackerRank"],
    color: "purple",
    linkText: "Solve Problems",
  },
  {
    id: 4,
    title: "Cheat Sheets",
    description: "Quick reference guides for key concepts and patterns.",
    icon: <FaFileAlt className="w-6 h-6 text-red-600" />,
    tags: ["Big-O", "Data Structures"],
    color: "red",
    linkText: "View Sheets",
  },
  {
    id: 5,
    title: "Mock Interviews",
    description: "Simulate real interview scenarios with expert feedback.",
    icon: <FaUserTie className="w-6 h-6 text-yellow-600" />,
    tags: ["Technical", "Behavioral"],
    color: "yellow",
    linkText: "Start Mock Interview",
  },
  {
    id: 6,
    title: "Resume Reviews",
    description: "Get your resume reviewed by industry professionals.",
    icon: <FaFileSignature className="w-6 h-6 text-teal-600" />,
    tags: ["Resume", "Career"],
    color: "teal",
    linkText: "Submit Resume",
  },
  {
    id: 7,
    title: "Coding Challenges",
    description: "Timed coding challenges to improve problem-solving skills.",
    icon: <FaLaptopCode className="w-6 h-6 text-indigo-600" />,
    tags: ["Competitive Programming", "Codeforces"],
    color: "indigo",
    linkText: "Start Challenge",
  },
  {
    id: 8,
    title: "System Design Case Studies",
    description:
      "Deep dive into real-world system design problems and solutions.",
    icon: <FaServer className="w-6 h-6 text-gray-600" />,
    tags: ["Scalability", "Microservices"],
    color: "yellow",
    linkText: "Explore Case Studies",
  },
  {
    id: 9,
    title: "Soft Skills Training",
    description:
      "Enhance your communication and leadership skills for interviews.",
    icon: <FaComments className="w-6 h-6 text-orange-600" />,
    tags: ["Communication", "Leadership"],
    color: "orange",
    linkText: "Improve Soft Skills",
  },

];


const Resources: React.FC = () => {
  return (
    <section id="resources" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Learning Resources
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive materials to enhance your interview preparation
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              animationDelay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;

const ResourceCard: React.FC<ResourceCardProps> = ({
  resource,
  animationDelay,
}) => {
  return (
    <motion.div
      className="group relative bg-gradient-to-r from-gray-900 to-gray-800 border-2 border-gray-700 p-6 rounded-xl hover:border-indigo-500 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
      }}
      transition={{ delay: animationDelay }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

      <div
        className={`relative inset-0 bg-gradient-to-r from-gray-900 to-gray-800 border-2 border-gray-700 rounded-xl p-6 hover:shadow-xl h-full shadow-2xl group-hover:border-indigo-500 transition-opacity    `}
      >
        <div className="mb-6">
          <div
            className={`w-12 h-12 bg-${resource.color}-100 rounded-lg flex items-center justify-center mb-4`}
          >
            {resource.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
          <p className="text-gray-400 mb-4">{resource.description}</p>
          <div className="flex flex-wrap gap-2">
            {resource.tags.map((tag, index) => (
              <span
                key={index}
                className={`px-3 py-1 bg-gray-100 text-${resource.color}-600 rounded-full text-sm border`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <button
          className={`text-${resource.color}-600 hover:text-${resource.color}-700 font-medium flex items-center`}
        >
          {resource.linkText}
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};
