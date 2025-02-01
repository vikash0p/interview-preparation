'use client'
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaCheckCircle, FaChartLine, FaChevronRight } from "react-icons/fa";
const practiceFeatures = [
  {
    id: 1,
    title: "Real-time Compilation",
    description: "Write and execute code in real-time with support for multiple programming languages.",
    icon: <FaCode className="w-5 h-5 text-indigo-600" />,
    bgColor: "bg-indigo-100",
  },
  {
    id: 2,
    title: "Test Cases",
    description: "Run your solution against multiple test cases to ensure correctness.",
    icon: <FaCheckCircle className="w-5 h-5 text-green-600" />,
    bgColor: "bg-green-100",
  },
  {
    id: 3,
    title: "Performance Analysis",
    description: "Get detailed insights about your code performance, including run-time and space complexity.",
    icon: <FaChartLine className="w-5 h-5 text-purple-600" />,
    bgColor: "bg-purple-100",
  },
];

const FeatureCard = ({ title, description, icon, bgColor }:{title: string, description: string, icon: React.ReactElement, bgColor: string}) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="group border border-gray-800 p-6 rounded-xl bg-gradient-to-b from-gray-900 to-gray-800 hover:border-indigo-500 transition-all"
  >
    <h3 className="text-xl font-semibold mb-4 flex items-center">
      <motion.span
        whileHover={{ rotate: [0, -10, 10, 0] }}
        className={`w-10 h-10 ${bgColor} rounded-lg flex items-center justify-center mr-3`}
      >
        {React.cloneElement(icon, { className: "w-6 h-6" })}
      </motion.span>
      {title}
    </h3>
    <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
      {description}
    </p>
  </motion.div>
);

const Practice = () => {
  return (
    <section id="practiceArea" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
            Practice Area
          </h2>
          <p className="text-lg text-gray-400">
            Interactive coding environment and problem-solving platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Interactive Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#181d28] rounded-2xl p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" />
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              </div>
              <span className="text-sm text-gray-400">JavaScript</span>
            </div>

            <div className="font-mono bg-gray-900 p-4 rounded-lg text-gray-300 text-sm h-96 overflow-y-auto relative">
              <div className="absolute left-0 top-0 w-8 h-full text-right pr-2 text-gray-600 text-sm">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="h-6">
                    {i + 1}
                  </div>
                ))}
              </div>
              <pre className="pl-10">
                <code className="language-javascript">
                  {`// Example of var, let, and const in JavaScript
var x = 10;
x = 20;
console.log(x); // Output: 20

let y = 15;
y = 25;
console.log(y); // Output: 25

const z = 30;
console.log(z); // Output: 30`}
                </code>
              </pre>
            </div>

            <div className="mt-6 p-4 bg-gray-900 rounded-lg">
              <div className="text-sm text-gray-400 mb-2">Console Output:</div>
              <div className="text-green-400 font-mono text-sm"></div>
            </div>

            <div className="flex justify-end mt-4 space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors"
              >
                Reset
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md hover:from-indigo-700 hover:to-purple-700 transition-colors flex items-center"
              >
                Run Code
                <FaChevronRight className="ml-2 w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>

          {/* Practice Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {practiceFeatures.map((feature) => (
              <FeatureCard key={feature.id} {...feature} />
            ))}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-6 bg-gray-900 text-white py-4 rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center group"
            >
              <span>View More Practice Questions</span>
              <FaChevronRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Practice;