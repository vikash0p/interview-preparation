import { FiTrendingUp, FiActivity, FiTrendingDown } from '@/main/icons/react-global-icons';

export const getPopularityUtils = (popularity: string) => {
  switch (popularity) {
    case 'high':
      return {
        label: 'Most Popular',
        color: 'bg-red-500/20 text-red-400',
        icon: <FiTrendingUp className="mr-1" />,
      };
    case 'normal':
      return {
        label: 'Popular',
        color: 'bg-sky-500/20 text-sky-400',
        icon: <FiActivity className="mr-1" />,
      };
    case 'low':
      return {
        label: 'Less Popular',
        color: 'bg-gray-500/20 text-gray-400',
        icon: <FiTrendingDown className="mr-1" />,
      };
    default:
      return {
        label: 'Less Popular',
        color: 'bg-gray-500/20 text-gray-400',
        icon: <FiTrendingDown className="mr-1" />,
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
