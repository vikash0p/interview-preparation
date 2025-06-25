import {
	SiJavascript,
	SiReact,
	SiTypescript,
	SiNextdotjs,
	SiNodedotjs,
} from 'react-icons/si';
import { FaLaptopCode } from 'react-icons/fa';
import { GiNotebook } from 'react-icons/gi';

export const practicalChallengesData = [
	{
		name: 'JavaScript',
		href: '/practical-interview/javascript',
		comingSoon: false,
		actionLabel: 'Start Javascript coding Interview',
		icon: <SiJavascript className='text-yellow-400 text-4xl' />,
	},
	{
		name: 'React',
		href: '/practical-interview/react',
		comingSoon: false,
		actionLabel: 'Start React coding Interview',
		icon: <SiReact className='text-cyan-400 text-4xl' />,
	},
	{
		name: 'TypeScript',
		href: '/practical-interview/typescript',
		comingSoon: true,
		actionLabel: 'Coming Soon',
		icon: <SiTypescript className='text-blue-500 text-4xl' />,
	},
	{
		name: 'Next.js',
		href: '/practical-interview/nextjs',
		comingSoon: true,
		actionLabel: 'Coming Soon',
		icon: <SiNextdotjs className='text-white text-4xl' />,
	},
	{
		name: 'Node.js',
		href: '/practical-interview/nodejs',
		comingSoon: true,
		actionLabel: 'Coming Soon',
		icon: <SiNodedotjs className='text-green-500 text-4xl' />,
	},
	{
		name: 'Fullstack',
		href: '/practical-interview/fullstack',
		comingSoon: true,
		actionLabel: 'Coming Soon',
		icon: <FaLaptopCode className='text-pink-400 text-4xl' />,
	},
	{
		name: 'DSA (JavaScript)',
		href: '/practical-interview/dsa-javascript',
		comingSoon: true,
		actionLabel: 'Coming Soon',
		icon: <GiNotebook className='text-indigo-400 text-4xl' />,
	},
];
