'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {listItemVariants,activeIndicatorVariants,} from '@/main/animation/practical-interview.animation';

interface SideBarCardProps {
	slug: string;
	index: number;
	isActive: boolean;
	onClick: (slug: string) => void;
	refCallback: (el: HTMLLIElement | null) => void;
}

const SideBarCard: React.FC<SideBarCardProps> = ({
	slug,
	index,
	isActive,
	onClick,
	refCallback,
}) => {
	const displayText = slug.replace(/-/g, ' ');

	return (
		<motion.li
			ref={refCallback}
			className='relative flex items-center gap-3'
			variants={listItemVariants}
			initial='hidden'
			animate='visible'
			exit='exit'
			custom={index}
		>
			<motion.div
				className='relative w-7 h-7 flex items-center justify-center rounded-full bg-gray-700 text-gray-400 z-10'
				animate={{
					backgroundColor: isActive ? '#3b82f6' : 'rgb(55, 65, 81)',
					color: isActive ? 'white' : 'rgb(156, 163, 175)',
				}}
				transition={{ duration: 0.2 }}
			>
				{index + 1}
			</motion.div>

			<AnimatePresence>
				{isActive && (
					<motion.div
						className='absolute left-4 w-[calc(100%-1rem)] h-full bg-blue-500/20 rounded-lg'
						variants={activeIndicatorVariants}
						initial='hidden'
						animate='visible'
						exit='exit'
					/>
				)}
			</AnimatePresence>

			<motion.button
				onClick={() => onClick(slug)}
				className='relative z-10 flex-1 text-left px-3 py-2 rounded-lg'
				animate={{
					color: isActive ? 'white' : 'rgb(229, 231, 235)',
					fontWeight: isActive ? 500 : 400,
				}}
				whileHover={{
					color: 'white',
				}}
				whileTap={{ scale: 0.98 }}
				transition={{ duration: 0.2 }}
				aria-current={isActive ? 'page' : undefined}
			>
				{displayText}
			</motion.button>
		</motion.li>
	);
};

export default SideBarCard;
