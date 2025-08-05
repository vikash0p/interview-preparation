'use client';
import React from 'react';
import { FaChevronDown, FaChevronUp } from '@/main/icons/react-global-icons';
import { motion } from 'framer-motion';

interface ExpandableSectionButtonProps {
  onClick: () => void;
  expanded: boolean;
  icon: React.ReactNode;
  title: string;
  className?: string;
}

export const ExpandableSectionButton: React.FC<ExpandableSectionButtonProps> = ({
  onClick,
  expanded,
  icon,
  title,
  className = '',
}) => {
  return (
    <button
      className={`w-full p-6 text-left flex justify-between items-center hover:bg-gray-800/30 transition-colors ${className}`}
      onClick={onClick}
    >
      <h3 className="font-semibold text-lg text-white flex items-center">
        <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3">{icon}</div>
        {title}
      </h3>
      <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
        {expanded ? <FaChevronUp /> : <FaChevronDown />}
      </motion.div>
    </button>
  );
};
