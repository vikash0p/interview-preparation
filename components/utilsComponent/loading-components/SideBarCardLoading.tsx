import { listItemVariants } from '@/main/animation/practical-interview.animation';
import { motion } from 'framer-motion';
import React from 'react';

export const SideBarCardLoading = () => {
  return (
    <>
      {[...Array(20)].map(i => (
        <motion.li
          key={`skeleton-${i}`}
          className="relative flex items-center gap-2 h-12"
          variants={listItemVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          custom={i}
        >
          <div className="w-7 h-7 rounded-full bg-gray-700 animate-pulse" />
          <div className="flex-1 h-4 bg-gray-700 rounded animate-pulse" />
        </motion.li>
      ))}
    </>
  );
};
