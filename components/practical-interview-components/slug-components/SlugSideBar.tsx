'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLightbulb, FaExclamationTriangle, FaCopy, MdTipsAndUpdates } from '@/main/icons/react-global-icons';
import { copyToClipboard } from '@/main/utils/copyToClipboard';
import { SlugSideBarHeader } from './SlugSideBarHeader';
import { ISlugDataProps } from '@/main/types/practical-interview.types';
import { ExpandableSectionButton } from '@/components/utilsComponent/button-components/ExpandableSectionButton';
import { collapseVariants, listItemVariant } from '@/main/animation/practical-interview.animation';

const expandData = {
  hints: false,
  mistakes: false,
  challenges: false,
};

export const SlugSideBar: React.FC<ISlugDataProps> = ({ data }) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(expandData);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="lg:col-span-1 space-y-6">
      <SlugSideBarHeader data={data} />

      {/* Hints Section */}
      <div className="bg-gray-800/50 rounded-md border border-gray-800 overflow-hidden">
        <ExpandableSectionButton
          onClick={() => toggleSection('hints')}
          expanded={expandedSections.hints}
          icon={<FaLightbulb className="text-yellow-400 text-xs bg-yellow-500/20 w-6 h-6 rounded-full p-1" />}
          title="Hints"
        />

        <AnimatePresence initial={false}>
          {expandedSections.hints && (
            <motion.div
              key="hints"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={collapseVariants}
              className="px-6 pb-6 pt-2 space-y-4 overflow-hidden"
            >
              {data.hints?.map((hint, idx) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  initial="hidden"
                  animate="visible"
                  variants={listItemVariant}
                  className="group"
                >
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
                          <div className="rounded-md bg-gray-900 border border-gray-700 p-4 overflow-auto max-h-[400px] text-sm">
                            <pre className="whitespace-pre-wrap break-words font-mono text-lime-400">
                              <code>{hint.codeSnippet}</code>
                            </pre>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mistakes Section */}
      <div className="bg-gray-800/50 rounded-md border border-gray-800 overflow-hidden">
        <ExpandableSectionButton
          onClick={() => toggleSection('mistakes')}
          expanded={expandedSections.mistakes}
          icon={<FaExclamationTriangle className="text-red-400 text-xs bg-red-500/20 w-6 h-6 rounded-full p-1" />}
          title="Common Mistakes"
        />

        <AnimatePresence initial={false}>
          {expandedSections.mistakes && (
            <motion.div
              key="mistakes"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={collapseVariants}
              className="px-6 pb-6 pt-2 space-y-3 overflow-hidden"
            >
              {data.commonMistakes?.map((mistake, idx) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  initial="hidden"
                  animate="visible"
                  variants={listItemVariant}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  </div>
                  <span className="text-gray-300">{mistake}</span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Challenges Section */}
      {data.challenges && (
        <div className="bg-gray-800/50 rounded-md border border-gray-800 overflow-hidden">
          <ExpandableSectionButton
            onClick={() => toggleSection('challenges')}
            expanded={expandedSections.challenges}
            icon={<MdTipsAndUpdates className="text-purple-400 text-xs bg-purple-500/20 w-6 h-6 rounded-full p-1" />}
            title="Extra Challenge"
          />

          <AnimatePresence initial={false}>
            {expandedSections.challenges && (
              <motion.div
                key="challenges"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={collapseVariants}
                className="px-6 pb-6 pt-2 overflow-hidden"
              >
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
                  className="text-gray-300"
                >
                  {data.challenges}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};
