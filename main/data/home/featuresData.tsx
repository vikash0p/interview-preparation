import {
	FaLightbulb,
	FaMicrophone,
	FaChartLine,
	FaBook,
	FaUsers,
	FaTasks,
} from 'react-icons/fa';

export interface FeatureInterface {
	id: string;
	title: string;
	description: string;
	icon: JSX.Element;
	bgColor: string;
}

export const featuresData: FeatureInterface[] = [
	{
		id: '1',
		title: 'Smart Question Bank',
		description:
			'Access thousands of curated questions across different difficulty levels and domains.',
		icon: <FaLightbulb className='text-indigo-600 text-3xl' />,
		bgColor: 'bg-indigo-100',
	},
	{
		id: '2',
		title: 'Mock Interviews',
		description:
			'Practice with AI-powered mock interviews and receive instant feedback.',
		icon: <FaMicrophone className='text-purple-600 text-3xl' />,
		bgColor: 'bg-purple-100',
	},
	{
		id: '3',
		title: 'Progress Tracking',
		description:
			'Monitor your progress with detailed analytics and performance metrics.',
		icon: <FaChartLine className='text-green-600 text-3xl' />,
		bgColor: 'bg-green-100',
	},
	{
		id: '4',
		title: 'Study Resources',
		description:
			'Access comprehensive guides, tips, and best practices for interview success.',
		icon: <FaBook className='text-red-600 text-3xl' />,
		bgColor: 'bg-red-100',
	},
	{
		id: '5',
		title: 'Community Support',
		description:
			"Connect with peers, share experiences, and learn from others' interview journeys.",
		icon: <FaUsers className='text-yellow-600 text-3xl' />,
		bgColor: 'bg-yellow-100',
	},
	{
		id: '6',
		title: 'Personalized Path',
		description:
			'Get customized learning paths based on your target role and experience level.',
		icon: <FaTasks className='text-blue-600 text-3xl' />,
		bgColor: 'bg-blue-100',
	},
];
