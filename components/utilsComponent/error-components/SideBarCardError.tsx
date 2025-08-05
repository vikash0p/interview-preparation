'use client';
import { motion } from 'framer-motion';
import { FiAlertTriangle, FiRefreshCw } from 'react-icons/fi';
import React from 'react';

interface SideBarCardErrorProps {
  message?: string;
  description?: string;
  onRetry: () => void;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export const SideBarCardError: React.FC<SideBarCardErrorProps> = ({
  message = 'Something went wrong!',
  description = 'Unable to load sidebar content. Please check your connection or try again later.',
  onRetry,
}) => {
  return (
    <motion.div
      className="bg-red-50/80  border border-red-200 rounded-md p-4 flex flex-col items-center text-center mt-20 gap-4 shadow-sm text-red-800"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-center gap-2 text-red-700 font-medium text-base">
        <FiAlertTriangle className="text-xl" />
        <span>{message}</span>
      </div>

      <p className="text-sm text-red-600 leading-relaxed">{description}</p>

      <motion.button
        onClick={onRetry}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 text-sm px-3 py-1.5 bg-red-600 hover:bg-red-500 text-white rounded transition-all duration-200"
      >
        <FiRefreshCw className="text-base animate-spin-slow" />
        <span>Retry</span>
      </motion.button>
    </motion.div>
  );
};
