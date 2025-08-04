'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
	listItemVariants,
	activeIndicatorVariants,
} from '../../main/animation/practical-interview.animation';
import { ISideBarCardProps } from '../../main/types/practical-interview.types';
import { useSidebarStore } from '@/main/zustand/store/useSidebarStore';

const SideBarCard: React.FC<ISideBarCardProps> = ({
	slug,
	index,
	isActive,
	onClick,
	setRef,
}) => {
	const { isSidebarOpen } = useSidebarStore();
	return (
		<motion.li
			ref={setRef}
			className={`relative flex flex-row items-center gap-1 px-1 py-1.5  `}
			variants={listItemVariants}
			initial='hidden'
			animate='visible'
			exit='exit'
			custom={index}
		>
			<motion.button
				type='button'
				onClick={() => onClick(slug)}
				className='relative text-sm w-6 h-6 flex items-center justify-center rounded-full bg-gray-700 text-gray-400 z-10'
				animate={{
					backgroundColor: isActive ? ' #4f46e5' : 'rgb(55, 65, 81)',
					color: isActive ? 'white' : 'rgb(156, 163, 175)',
				}}
				transition={{ duration: 0.2 }}
			>
				{index + 1}
			</motion.button>

			<AnimatePresence>
				{isActive && (
					<motion.div
						className={` absolute left-4 w-[calc(100%-1rem)] h-full  bg-indigo-500/30 rounded-sm   ${
							!isSidebarOpen && 'hidden'
						}`}
						variants={activeIndicatorVariants}
						initial='hidden'
						animate='visible'
						exit='exit'
					/>
				)}
			</AnimatePresence>

			<motion.button
				onClick={() => onClick(slug)}
				className={`relative z-10 flex-1 text-left ${
					!isSidebarOpen && 'hidden'
				}`}
				animate={{
					color: isActive ? 'white' : '#374151)',
					fontWeight: isActive ? 500 : 400,
				}}
				whileHover={{
					color: 'white',
				}}
				whileTap={{ scale: 0.98 }}
				transition={{ duration: 0.2 }}
				aria-current={isActive ? 'page' : undefined}
			>
				{slug.replace(/-/g, ' ')}
			</motion.button>
		</motion.li>
	);
};

export default SideBarCard;
