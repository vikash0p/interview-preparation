

import {FiTrendingUp,FiActivity,FiTrendingDown,} from '@/main/icons/practical-interview.icons';

 export const getPopularityUtils = (popularity: string) => {
	switch (popularity) {
		case 'high':
			return {
				label: 'Most Popular',
				icon: <FiTrendingUp className='text-orange-400' />,
			};
		case 'normal':
			return {
				label: 'Popular',
				icon: <FiActivity className='text-yellow-400' />,
			};
		case 'low':
			return {
				label: 'Less Popular',
				icon: <FiTrendingDown className='text-gray-400' />,
			};
		default:
			return {
				label: 'Less Popular',
				icon: <FiTrendingDown className='text-gray-400' />,
			};
	}
};

export const getDifficultyUtils = (diff: string) => {
	switch (diff) {
		case 'easy':
			return 'bg-green-900/30 text-green-300';
		case 'medium':
			return 'bg-yellow-900/30 text-yellow-300';
		case 'hard':
			return 'bg-red-900/30 text-red-300';
		default:
			return 'bg-gray-900/30 text-gray-300';
	}
};
