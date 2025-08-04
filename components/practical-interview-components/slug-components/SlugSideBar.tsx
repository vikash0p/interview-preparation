'use client';
import React, { useState } from 'react';
import { FaLightbulb, FaExclamationTriangle, FaChevronDown, FaChevronUp, FaCopy,MdTipsAndUpdates} from '@/main/icons/practical-interview.icons';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { copyToClipboard } from '@/main/utils/copyToClipboard';
import SlugSideBarHeader from './SlugSideBarHeader';
import { ISlugDataProps } from '@/main/types/practical-interview.types';
import { motion, AnimatePresence } from 'framer-motion';
import { sectionVariants } from '@/main/animation/practical-interview.animation';

const expendData = {
  hints: false,
  mistakes: false,
  challenges: false,
};

const SlugSideBar: React.FC<ISlugDataProps> = ({ data }) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(expendData);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="lg:col-span-1 space-y-6">
      <SlugSideBarHeader data={data} />

      {/* Hints */}
      <div className="bg-gray-800/50 rounded-sm border border-gray-800 overflow-hidden">
        <button
          className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-800/30 transition-transform duration-500 ease-in-out"
          onClick={() => toggleSection('hints')}
        >
          <h3 className="font-semibold text-lg text-white flex items-center">
            <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center mr-3">
              <FaLightbulb className="text-yellow-400 text-xs" />
            </div>
            Hints
          </h3>
          {expandedSections.hints ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        <AnimatePresence initial={false}>
          {expandedSections.hints && (
            <motion.div
              variants={sectionVariants}
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="px-6 pb-6 pt-2 space-y-4"
            >
              {data.hints?.map((hint, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-700 text-xs font-medium">
                        {idx + 1}
                      </span>
                    </div>
                    <div>
                      <p className="text-gray-300">{hint.text}</p>
                      {hint.codeSnippet && (
                        <div className="mt-3 relative">
                          <button
                            onClick={() => copyToClipboard(hint.codeSnippet as string)}
                            className="absolute right-2 top-2 p-1.5 text-xs bg-gray-700 hover:bg-gray-600 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <FaCopy />
                          </button>
                          <SyntaxHighlighter
                            language="javascript"
                            style={a11yDark}
                            customStyle={{
                              margin: 0,
                              borderRadius: '0.5rem',
                              background: '#1e1e2d',
                              fontSize: '13px',
                              padding: '1rem',
                            }}
                          >
                            {hint.codeSnippet}
                          </SyntaxHighlighter>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mistakes */}
      <div className="bg-gray-800/50 rounded-sm border border-gray-800 overflow-hidden">
        <button
          className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-800/30 transition-colors"
          onClick={() => toggleSection('mistakes')}
        >
          <h3 className="font-semibold text-lg text-white flex items-center">
            <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mr-3">
              <FaExclamationTriangle className="text-red-400 text-xs" />
            </div>
            Common Mistakes
          </h3>
          {expandedSections.mistakes ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        <AnimatePresence initial={false}>
          {expandedSections.mistakes && (
            <motion.div
              variants={sectionVariants}
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="px-6 pb-6 pt-2 space-y-3"
            >
              {data.commonMistakes?.map((mistake, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  </div>
                  <span className="text-gray-300">{mistake}</span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Challenge */}
      {data.challenges && (
        <div className="bg-gray-800/50 rounded-sm border border-gray-800 overflow-hidden">
          <button
            className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-800/30 transition-colors"
            onClick={() => toggleSection('challenges')}
          >
            <h3 className="font-semibold text-lg text-white flex items-center">
              <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                <MdTipsAndUpdates className="text-purple-400 text-xs" />
              </div>
              Extra Challenge
            </h3>
            {expandedSections.challenges ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          <AnimatePresence initial={false}>
            {expandedSections.challenges && (
              <motion.div
                variants={sectionVariants}
                initial="collapsed"
                animate="expanded"
                exit="collapsed"
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="px-6 pb-6 pt-2"
              >
                <p className="text-gray-300">{data.challenges}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default SlugSideBar;
