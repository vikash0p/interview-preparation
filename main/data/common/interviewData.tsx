import {
	FaServer,
	FaMobileAlt,
	FaDatabase,
	FaPaintBrush,
} from 'react-icons/fa';
import { FaCode } from 'react-icons/fa6';

export const interviewCategories = [
	{
		name: 'Frontend',
		href: '/mock-interview/frontend',
		comingSoon: false,
		actionLabel: 'Start frontend Interview',
		icon: <FaCode className='text-blue-400 text-2xl' />,
	},
	{
		name: 'Backend',
		href: '/mock-interview/backend',
		comingSoon: true,
		actionLabel: 'Coming Soon',
		icon: <FaServer className='text-green-400 text-2xl' />,
	},
	{
		name: 'Mobile',
		href: '/mock-interview/mobile',
		comingSoon: true,
		actionLabel: 'Coming Soon',
		icon: <FaMobileAlt className='text-purple-400 text-2xl' />,
	},
	{
		name: 'Database',
		href: '/mock-interview/database',
		comingSoon: true,
		actionLabel: 'Coming Soon',
		icon: <FaDatabase className='text-yellow-400 text-2xl' />,
	},
	{
		name: 'UI/UX Design',
		href: '/mock-interview/ui-ux',
		comingSoon: true,
		actionLabel: 'Coming Soon',
		icon: <FaPaintBrush className='text-pink-400 text-2xl' />,
	},
];
