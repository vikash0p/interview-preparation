'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot } from 'react-icons/fa';

export default function AIInterviewPage() {
	return (
		<main className='min-h-screen px-6 py-16 bg-gradient-to-br from-gray-900 to-black text-white'>
			<section className='max-w-4xl mx-auto text-center'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<div className='flex justify-center mb-6'>
						<FaRobot className='text-6xl text-indigo-400' />
					</div>

					<h1 className='text-4xl md:text-5xl font-bold mb-4'>
						AI-Powered Interview Practice
					</h1>

					<p className='text-lg text-gray-300 mb-10 max-w-xl mx-auto'>
						Practice real-time mock interviews powered by AI. Get instant
						feedback and improve your responses for top tech interviews.
					</p>

					<button className='bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg transition duration-300 font-medium'>
						Start AI Interview
					</button>
				</motion.div>
			</section>
		</main>
	);
}
