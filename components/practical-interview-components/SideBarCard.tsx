'use client';
import React, { useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { listItemVariants, activeIndicatorVariants } from '../../main/animation/practical-interview.animation';
import { ISideBarCardProps } from '@/main/types/practical-interview.types';
import { useSidebarStore } from '@/main/zustand/store/useSidebarStore';
import { FaSpinner } from '@/main/icons/react-global-icons';

export const SideBarCard: React.FC<ISideBarCardProps> = ({ slug, index, isActive, onClick, setRef }) => {
  const { isSidebarOpen } = useSidebarStore();
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      onClick(slug);
    });
  };

  return (
    <motion.li
      ref={setRef}
      className="relative flex flex-row items-center gap-1 px-1 py-1.5"
      variants={listItemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      custom={index}
    >
      <motion.button
        type="button"
        onClick={handleClick}
        className="relative text-sm w-6 h-6 flex items-center justify-center rounded-full bg-gray-700 text-gray-400 z-10"
        animate={{
          backgroundColor: isActive ? '#4f46e5' : 'rgb(55, 65, 81)',
          color: isActive ? 'white' : 'rgb(156, 163, 175)',
        }}
        transition={{ duration: 0.2 }}
      >
        {index + 1}
      </motion.button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            className={
              `absolute left-4 w-[calc(100%-1rem)] h-full bg-indigo-500/30 rounded-md ` +
              (!isSidebarOpen ? 'hidden' : '')
            }
            variants={activeIndicatorVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          />
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleClick}
        className={`relative z-10 flex-1 text-left  ${!isSidebarOpen ? 'hidden' : ''}`}
        animate={{
          color: isActive ? 'white' : 'rgb(156, 163, 175)',
          fontWeight: isActive ? 500 : 400,
        }}
        whileHover={{
          color: 'white',
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        aria-current={isActive ? 'page' : undefined}
      >
        <div className="flex items-center justify-between">
          <span>{slug.replace(/-/g, ' ').replace(/^./, c => c.toUpperCase())}</span>
          {isPending ? (
            <FaSpinner className="animate-spin h-3 w-3 text-white" />
          ) : (
            <span
              className={`relative flex items-center justify-center w-2.5 h-2.5 bg-green-400 rounded-full transition-opacity duration-200 ${
                isActive ? 'opacity-100 animate-pulse' : 'opacity-0'
              }`}
              aria-hidden={!isActive}
            />
          )}
        </div>
      </motion.button>
    </motion.li>
  );
};
