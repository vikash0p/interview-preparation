'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface ReusableHeadingProps {
	heading?: string;
	description?: string;
}

const ReusableHeading = ({ heading, description }: ReusableHeadingProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true, amount: 0.2 }}
			className='text-center  px-4 mb-8'
		>
			<h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400'>
				{heading}
			</h2>
			<p className='text-sm sm:text-base md:text-lg lg:text-xl  max-w-2xl mx-auto'>
				{description}
			</p>
		</motion.div>
	);
};

export default ReusableHeading;
