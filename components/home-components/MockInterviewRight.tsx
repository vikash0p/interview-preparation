import React from 'react';
import MockInterviewCard from '../utilsComponent/card-components/MockInterviewCard';
import { interviewFeatures } from '@/main/data/home/mockInterviewData';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';

const MockInterviewRight = () => {
	return (
		<div>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				{interviewFeatures.map((feature, index) => (
					<MockInterviewCard key={index} {...feature} />
				))}
			</div>

			<motion.button
				className='w-full bg-indigo-600 hover:bg-indigo-700 py-4 rounded-sm transition-colors mt-8 font-medium flex items-center justify-center gap-2'
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}
			>
				<FaCalendarAlt />
				Schedule Mock Interview
			</motion.button>
		</div>
	);
};

export default MockInterviewRight;
