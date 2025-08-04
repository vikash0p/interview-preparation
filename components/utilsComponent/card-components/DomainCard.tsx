'use client';
import { motion } from 'framer-motion';
import { itemVariants, iconVariants, techItemVariants } from '@/main/animation/motionVariants';
import React from 'react';
import type { domainsDataInterface } from '@/main/data/home/domainsData';

const DomainCard: React.FC<domainsDataInterface> = ({ icon, name, tech }) => {
  return (
    <motion.article
      variants={itemVariants}
      whileHover="hover"
      whileTap="tap"
      className="group relative p-4 sm:p-5   rounded-2xl border-2 border-gray-700 bg-gray-800 shadow-xl hover:border-indigo-500 transition-all"
      style={{
        background: 'linear-gradient(45deg, rgba(31,41,55,1) 0%, rgba(17,24,39,1) 100%)',
      }}
      aria-label={`Domain card for ${name}`}
    >
      {/* Hover background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity pointer-events-none" />

      {/* Icon + Title */}
      <header className="flex flex-col items-center justify-center mb-6 text-center space-y-4">
        <motion.div
          className="text-3xl sm:text-4xl text-indigo-400 p-4 bg-gray-900 rounded-full w-fit"
          variants={iconVariants}
          whileHover="hover"
          aria-hidden="true"
        >
          {icon}
        </motion.div>

        <h3 className="text-xl sm:text-2xl font-bold group-hover:text-indigo-400 transition-colors">{name}</h3>
      </header>

      {/* Tech Tags */}
      <ul className="flex flex-wrap justify-center gap-2" aria-label={`Technologies used in ${name}`}>
        {tech.map((t, i) => (
          <motion.li
            key={i}
            variants={techItemVariants}
            whileHover="hover"
            className="px-3 py-1.5 text-sm rounded-full border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 text-white hover:bg-indigo-500/20 transition-colors"
            aria-label={`Technology: ${t}`}
          >
            {t}
          </motion.li>
        ))}
      </ul>
    </motion.article>
  );
};

export default DomainCard;
