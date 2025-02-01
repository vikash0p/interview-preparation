'use client'
import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between h-full py-16 lg:py-24  max-w-7xl m-auto ">
      {/* Left Column */}
      <motion.div
        className="lg:w-1/2 space-y-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
          Crack Your Dream Job Interview with
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
            {" "}
            Confidence
          </span>
        </h1>
        <p className="text-lg text-neutral-300 leading-relaxed">
          Prepare for technical interviews across multiple domains with our
          comprehensive question bank, mock interviews, and expert guidance.
        </p>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold transition-all"
          >
            Start Practicing
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-white hover:bg-neutral-800 rounded-lg text-white font-semibold transition-all"
          >
            View Questions
          </motion.button>
        </div>
        {/* Stats */}
        <div className="flex items-center gap-6 text-sm text-neutral-400 mt-4">
          <div className="flex items-center gap-2">
            <FaUsers className="text-indigo-400 w-5 h-5" />
            <span>10,000+ Users</span>
          </div>
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-400 w-5 h-5" />
            <span>4.9/5 Rating</span>
          </div>
        </div>
      </motion.div>

      {/* Right Column */}
      <motion.div
        className="lg:w-1/2 mt-12 lg:mt-0 relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl transform rotate-6 blur-xl opacity-30"></div>
        <div className="relative bg-[#181d28] p-8 rounded-2xl border border-neutral-700 shadow-lg">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-neutral-400 text-sm">Interview Question</div>
          </div>
          {/* Question */}
          <p className="text-neutral-300 text-base leading-relaxed mb-4">
            What is the difference between <code>var</code>, <code>let</code>,
            and <code>const</code> in JavaScript?
          </p>
          {/* Code Snippet */}
          <pre className="bg-gray-900 text-neutral-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>
              {`// Example of var, let, and const in JavaScript

var x = 10;
x = 20;
console.log(x); // Output: 20

let y = 15;
y = 25;
console.log(y); // Output: 25

const z = 30;
// z = 40; // Error: Assignment to constant variable
console.log(z); // Output: 30`}
            </code>
          </pre>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
