'use client';
import { motion } from 'framer-motion';
import { iconVariants, itemVariants } from '@/main/animation/motionVariants';
import React from 'react';

type FeatureCardProps = {
	id: string;
	icon: React.ReactNode;
	title: string;
	description: string;
	bgColor: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
	id,
	icon,
	title,
	description,
	bgColor,
}) => {
	return (
		<motion.div
			key={id}
			variants={itemVariants}
			whileHover='hover'
			whileTap='tap'
			className='group relative p-4 sm:p-5 md:p-6 rounded-xl border-2 border-gray-700 bg-gray-800 shadow-2xl hover:border-indigo-500 transition-colors  '
			style={{
				background:
					'linear-gradient(45deg, rgba(31,41,55,1) 0%, rgba(17,24,39,1) 100%)',
			}}
		>
			<div className='absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl' />

			<motion.div
				className={`w-12 h-12 sm:w-14 sm:h-14 ${bgColor} rounded-lg flex items-center justify-center mb-4`}
				variants={iconVariants}
				whileHover='hover'
			>
				{icon}
			</motion.div>

			<h3 className='text-lg sm:text-xl md:text-2xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors'>
				{title}
			</h3>

			<p className='text-sm sm:text-base text-neutral-400 group-hover:text-gray-200 transition-colors'>
				{description}
			</p>
		</motion.div>
	);
};

export default FeatureCard;
