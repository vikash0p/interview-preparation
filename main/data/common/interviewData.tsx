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
		href: '/interview/frontend',
		comingSoon: false,
		icon: <FaCode className='text-blue-400 text-2xl' />,
	},
	{
		name: 'Backend',
		href: '/interview/backend',
		comingSoon: true,
		icon: <FaServer className='text-green-400 text-2xl' />,
	},
	{
		name: 'Mobile',
		href: '/interview/mobile',
		comingSoon: true,
		icon: <FaMobileAlt className='text-purple-400 text-2xl' />,
	},
	{
		name: 'Database',
		href: '/interview/database',
		comingSoon: true,
		icon: <FaDatabase className='text-yellow-400 text-2xl' />,
	},
	{
		name: 'UI/UX Design',
		href: '/interview/ui-ux',
		comingSoon: true,
		icon: <FaPaintBrush className='text-pink-400 text-2xl' />,
	},
];
