'use client';

import { motion } from 'framer-motion';
import type { Resource } from '@/main/data/common/ResourceData';

interface ResourceCardProps {
	resource: Resource;
	animationDelay: number;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
	resource,
	animationDelay,
}) => {
	return (
		<motion.div
			className='group relative bg-gradient-to-r from-gray-900 to-gray-800 border-2 border-gray-700 p-6 rounded-xl hover:border-indigo-500 transition-all duration-300'
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-100px' }}
			whileHover={{
				y: -5,
				boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
			}}
			transition={{ delay: animationDelay }}
		>
			<div className='absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl' />

			<div
				className={`relative inset-0 bg-gradient-to-r from-gray-900 to-gray-800 border-2 border-gray-700 rounded-xl p-6 hover:shadow-xl h-full shadow-2xl group-hover:border-indigo-500 transition-opacity    `}
			>
				<div className='mb-6'>
					<div
						className={`w-12 h-12 bg-${resource.color}-100 rounded-lg flex items-center justify-center mb-4`}
					>
						{resource.icon}
					</div>
					<h3 className='text-xl font-semibold mb-2'>{resource.title}</h3>
					<p className='text-gray-400 mb-4'>{resource.description}</p>
					<div className='flex flex-wrap gap-2'>
						{resource.tags.map((tag, index) => (
							<span
								key={index}
								className={`px-3 py-1 bg-gray-100 text-${resource.color}-600 rounded-full text-sm border`}
							>
								{tag}
							</span>
						))}
					</div>
				</div>
				<button
					type='button'
					className={`text-${resource.color}-600 hover:text-${resource.color}-700 font-medium flex items-center`}
				>
					{resource.linkText}
					<svg
						className='w-4 h-4 ml-2'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M9 5l7 7-7 7'
						/>
					</svg>
				</button>
			</div>
		</motion.div>
	);
};

export default ResourceCard;
