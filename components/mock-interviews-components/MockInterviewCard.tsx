import React from 'react';
import type { CategoryItem } from '@/main/data/common/mockData';
import { Link } from 'next-view-transitions';
import { FaArrowRight } from 'react-icons/fa';



const MockInterviewCard = ({category,actionLabel,icon,comingSoon}: CategoryItem) => {
	const cat = category
	.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');

	return (
		<div
			className={`group relative ${
				comingSoon ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'
			} bg-gray-800/60 hover:bg-gray-950 border-2 border-gray-700 p-5 rounded-xl hover:border-indigo-400 transition-all duration-300 shadow-md `}
		>
			<Link
				href={`/mock-interviews/${category.toLowerCase()}`}
				passHref
				className='flex items-center gap-4'
			>
				<div className='text-3xl text-indigo-300 group-hover:scale-110 transition-transform duration-300'>
					{icon}
				</div>
				<div>
					<h2 className='text-xl font-semibold text-white group-hover:text-indigo-200 transition-colors duration-300'>
						{cat}
					</h2>
					<button
						type='button'
						className='mt-1 text-sm text-indigo-300 flex items-center gap-1 group-hover:text-indigo-400 transition-colors'
					>
						{actionLabel}
						<FaArrowRight className='inline text-xs group-hover:translate-x-1 transition-transform duration-300' />
					</button>
				</div>
			</Link>
		</div>
	);
};

export default MockInterviewCard;
