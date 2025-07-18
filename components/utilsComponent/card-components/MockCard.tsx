import React from 'react';
import type { CategoryItem } from '@/main/data/common/mockData';
import { Link } from 'next-view-transitions';
import { FaArrowRight } from 'react-icons/fa';

interface mockCardInterface {
	value: CategoryItem;
}

const MockCard: React.FC<mockCardInterface> = ({ value }) => {
	return (
		<div className='bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-indigo-500 group'>
			<div className='flex items-center gap-4 mb-4'>
				<div className='p-3 bg-gray-700/50 rounded-lg group-hover:bg-indigo-500/20 transition-colors duration-300'>
					{value.icon}
				</div>
				<h2 className='text-xl font-semibold text-white'>{value.name}</h2>
			</div>

			<div className='mt-6'>
				{value.comingSoon ? (
					<div className='px-4 py-2 bg-yellow-500/10 rounded-lg border border-yellow-500/30'>
						<p className='text-yellow-400 text-sm font-medium'>
							{value.actionLabel}
						</p>
					</div>
				) : (
					<Link
						href={`/mock/${value.name.toLowerCase()}`}
						className='flex items-center justify-between gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg transition-all duration-300 group/link'
					>
						<span className='font-medium'>{value.actionLabel}</span>
						<FaArrowRight className='text-xs opacity-80 group-hover/link:translate-x-1 group-hover/link:opacity-100 transition-all duration-300' />
					</Link>
				)}
			</div>
		</div>
	);
};

export default MockCard;
