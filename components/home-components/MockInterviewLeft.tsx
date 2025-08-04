import React from 'react';
import { motion } from 'framer-motion';
import { FaClock } from 'react-icons/fa';
import { chatMessages } from '@/main/data/home/mockInterviewData';
import ChatBubbleCard from '../utilsComponent/card-components/ChatBubbleCard';
const MockInterviewLeft = () => {
	return (
		<div className='relative'>
			<div className='relative bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 rounded-sm p-6 shadow-2xl'>
				<div className='absolute inset-0 rounded-sm bg-[radial-gradient(circle_at_center,#4f46e510,transparent)]' />

				<div className='flex justify-between items-center mb-6'>
					<div className='flex items-center space-x-3'>
						<motion.div
							className='w-3 h-3 bg-red-500 rounded-full'
							animate={{ scale: [1, 0.8, 1] }}
							transition={{ duration: 1.5, repeat: Infinity }}
						/>
						<span className='text-neutral-400 font-medium'>Live Session</span>
					</div>
					<div className='flex items-center space-x-2 text-neutral-400 bg-gray-800/50 px-3 py-1 rounded-sm'>
						<FaClock className='text-indigo-400' />
						<span className='font-mono'>00:15:23</span>
					</div>
				</div>

				<div className='space-y-6'>
					{chatMessages.map((message, index) => (
						<ChatBubbleCard key={index} message={message} />
					))}
				</div>

				<div className='mt-6 flex space-x-4'>
					<motion.button
						className='flex-1 bg-red-500/90 hover:bg-red-600 py-3 rounded-sm transition-colors flex items-center justify-center gap-2 font-medium'
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
					>
						End Interview
					</motion.button>
					<motion.button
						className='flex-1 bg-indigo-600 hover:bg-indigo-700 py-3 rounded-sm transition-colors flex items-center justify-center gap-2 font-medium'
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
					>
						Continue
					</motion.button>
				</div>
			</div>
		</div>
	);
};

export default MockInterviewLeft;
