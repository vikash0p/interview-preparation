'use client';

import { motion } from 'framer-motion';
import { iconVariants, itemVariants } from '@/main/animation/motionVariants';
import React from 'react';
import { IFeature } from '@/main/types/home.types';
import { Link } from 'next-view-transitions';

const FeatureCard: React.FC<{ feature: IFeature }> = ({ feature }) => {
  const { id, title, description, icon, link } = feature;

  return (
    <Link href={link} aria-label={title}>
      <motion.div
        key={id}
        variants={itemVariants}
        whileHover="hover"
        whileTap="tap"
        className="group relative p-4 sm:p-5 md:p-6 rounded-md border-2 border-gray-700 bg-gray-800 shadow-2xl hover:border-indigo-500 transition-colors cursor-pointer"
        style={{
          background: 'linear-gradient(45deg, rgba(31,41,55,1) 0%, rgba(17,24,39,1) 100%)',
        }}
      >
        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-md pointer-events-none" />

        {/* Icon */}
        <motion.div
          className="w-12 h-12 sm:w-14 sm:h-14 bg-black/30 rounded-md flex items-center justify-center mb-4"
          variants={iconVariants}
          whileHover="hover"
        >
          {icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-neutral-400 group-hover:text-gray-200 transition-colors">
          {description}
        </p>
      </motion.div>
    </Link>
  );
};

export default FeatureCard;
