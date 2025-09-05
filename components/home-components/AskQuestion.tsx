'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { faqData } from '@/main/data/home/faqData';
import { ReusableHeading } from '../reusable-components/ReusableHeading';

const AskQuestion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="mt-10 md:mt-14 lg:mt-20">
      <ReusableHeading
        heading="Frequently Asked Questions for interview"
        description="From platform features to mock interview tips, find all the answers you need to start preparing smarter and faster"
      />

      <div className="max-w-7xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            className="group card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <button
              type="button"
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full text-left focus:outline-none"
            >
              <h3 className="text-xl font-semibold ">{item.question}</h3>
              <motion.span
                animate={{
                  rotate: activeIndex === index ? 180 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {activeIndex === index ? (
                  <FiChevronUp className="w-6 h-6 text-indigo-400" />
                ) : (
                  <FiChevronDown className="w-6 h-6 text-neutral-400" />
                )}
              </motion.span>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: 1,
                    height: 'auto',
                    transition: {
                      opacity: { duration: 0.2 },
                      height: { duration: 0.3 },
                    },
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    transition: {
                      opacity: { duration: 0.2 },
                      height: { duration: 0.3 },
                    },
                  }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 text-neutral-400">{item.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AskQuestion;
