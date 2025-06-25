import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

export const frontendTopics = [
	{
		name: 'HTML',
		icon: <FaHtml5 className='text-orange-400 text-3xl' />,
		href: '/mock-interview/frontend/html',
		comingSoon: true,
		actionLabel: 'Coming Soon',
	},
	{
		name: 'CSS',
		icon: <FaCss3Alt className='text-blue-400 text-3xl' />,
		href: '/mock-interview/frontend/css',
		comingSoon: true,
		actionLabel: 'Coming Soon',
	},
	{
		name: 'JavaScript',
		icon: <FaJs className='text-yellow-400 text-3xl' />,
		href: '/mock-interview/frontend/javascript',
		comingSoon: false,
		actionLabel: 'Start Mock Javascript Interview',
	},
	{
		name: 'React',
		icon: <FaReact className='text-cyan-300 text-3xl' />,
		href: '/mock-interview/frontend/react',
		comingSoon: false,
		actionLabel: 'Start Mock React Interview',
	},
	{
		name: 'Next.js',
		icon: <SiNextdotjs className='text-white text-3xl' />,
		href: '/mock-interview/frontend/nextjs',
		comingSoon: false,
		actionLabel: 'Start Mock NextJs Interview',
	},
];
