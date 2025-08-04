import { motion } from 'framer-motion';
import React from 'react';

const PracticeCard = ({
	title,
	description,
	icon,
}: {
	title: string;
	description: string;
	icon: React.ReactElement;
}) => (
	<motion.div
		whileHover={{ y: -5, scale: 1.02 }}
		transition={{ type: 'spring', stiffness: 300 }}
		className='group border border-gray-800 p-6 rounded-sm bg-gradient-to-b from-gray-900 to-gray-800 hover:border-indigo-500 transition-all'
	>
		<h3 className='text-xl font-semibold mb-4 flex items-center'>
			<motion.span
				whileHover={{ rotate: [0, -10, 10, 0] }}
				className={`w-10 h-10  rounded-sm flex items-center justify-center mr-3`}
			>
				{React.cloneElement(icon, { className: 'w-6 h-6' })}
			</motion.span>
			{title}
		</h3>
		<p className='text-gray-400 group-hover:text-gray-200 transition-colors'>
			{description}
		</p>
	</motion.div>
);

export default PracticeCard;
