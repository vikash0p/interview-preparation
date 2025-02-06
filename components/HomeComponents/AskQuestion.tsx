"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqData = [
  {
    question: "How should I prepare for technical interviews?",
    answer:
      "Practice coding problems regularly, review fundamental concepts, study data structures and algorithms, and participate in mock interviews.",
  },
  {
    question: "What should I wear to an interview?",
    answer:
      "Dress professionally in business attire. When in doubt, it's better to be slightly overdressed than underdressed.",
  },
  {
    question: "How early should I arrive for an interview?",
    answer:
      "Aim to arrive 10-15 minutes early. This shows punctuality and gives you time to compose yourself.",
  },
  {
    question: "How should I handle difficult interview questions?",
    answer:
      "Stay calm, take a moment to think, and it's okay to ask for clarification. Structure your answers using the STAR method when applicable.",
  },
  {
    question: "What questions should I ask the interviewer?",
    answer:
      "Ask about company culture, team dynamics, growth opportunities, and specific projects you might work on.",
  },
];

const AskQuestion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300">
            Find answers to common questions about interview preparation
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-r from-gray-900 to-gray-800 border-2 border-gray-700 p-6 rounded-xl hover:border-indigo-500 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className="text-xl font-semibold text-white">
                  {item.question}
                </h3>
                {activeIndex === index ? (
                  <FiChevronUp className="w-6 h-6 text-neutral-400 transition-transform duration-300 transform rotate-180" />
                ) : (
                  <FiChevronDown className="w-6 h-6 text-neutral-400 transition-transform duration-300 transform rotate-0" />
                )}
              </button>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mt-4 text-neutral-400">{item.answer}</div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AskQuestion;
