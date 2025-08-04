'use client';
import React, { useState } from 'react';
import { ISlugDataProps } from '../../../main/types/practical-interview.types';
import SlugProblemStatement from './SlugProblemStatement';
import SlugSolution from './SlugSolution';
import { motion, AnimatePresence } from 'framer-motion';
import SlugDiscussion from '../SlugDiscussion';
import { contentVariants } from '@/main/animation/practical-interview.animation';

const tabs = [{ label: 'Problem Statement' }, { label: 'Solution' }, { label: 'Discussion' }];

const SlugMainContent: React.FC<ISlugDataProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="lg:col-span-2">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-800 mb-8 ">
        {tabs.map((tab, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`relative px-6 py-3 font-medium text-sm tracking-wide transition-colors duration-200 focus:outline-none ${
              activeTab === index ? 'text-indigo-400' : 'text-gray-500 hover:text-gray-300'
            }`}
            // hover and tap animations
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab.label}

            {/* Underline indicator with shared layout animation */}
            {activeTab === index && (
              <motion.span
                layoutId="underline"
                className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500"
                transition={{ type: 'spring', stiffness: 500, damping: 40 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Tab Content with AnimatePresence for smooth transitions */}
      <AnimatePresence initial={false} custom={activeTab} mode="wait">
        <motion.div
          key={activeTab}
          custom={activeTab}
          variants={contentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="overflow-hidden"
        >
          {activeTab === 0 ? (
            <SlugProblemStatement data={data} />
          ) : activeTab === 1 ? (
            <SlugSolution data={data} />
          ) : (
            <SlugDiscussion />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SlugMainContent;
