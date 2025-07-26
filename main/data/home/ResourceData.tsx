import { FaBook, FaVideo, FaCode, FaFileAlt } from 'react-icons/fa';
import {
	FaUserTie,
	FaFileSignature,
	FaLaptopCode,
	FaServer,
	FaComments,
} from 'react-icons/fa';

export interface Resource {
	id: number;
	title: string;
	description: string;
	icon: JSX.Element;
	tags: string[];
	color: string;
	linkText: string;
}
export const resourcesData: Resource[] = [
	{
		id: 1,
		title: 'Study Guides',
		description:
			'Comprehensive guides covering all major interview topics and concepts.',
		icon: <FaBook className='w-6 h-6 text-blue-600' />,
		tags: ['DSA', 'System Design', 'Behavioral'],
		color: 'blue',
		linkText: 'Access Guides',
	},
	{
		id: 2,
		title: 'Video Tutorials',
		description:
			'In-depth video explanations of common interview questions and solutions.',
		icon: <FaVideo className='w-6 h-6 text-green-600' />,
		tags: ['Algorithms', 'Design Patterns'],
		color: 'green',
		linkText: 'Watch Videos',
	},
	{
		id: 3,
		title: 'Practice Problems',
		description:
			'Curated collection of interview problems with detailed solutions.',
		icon: <FaCode className='w-6 h-6 text-purple-600' />,
		tags: ['LeetCode', 'HackerRank'],
		color: 'purple',
		linkText: 'Solve Problems',
	},
	{
		id: 4,
		title: 'Cheat Sheets',
		description: 'Quick reference guides for key concepts and patterns.',
		icon: <FaFileAlt className='w-6 h-6 text-red-600' />,
		tags: ['Big-O', 'Data Structures'],
		color: 'red',
		linkText: 'View Sheets',
	},
	{
		id: 5,
		title: 'Mock Interviews',
		description: 'Simulate real interview scenarios with expert feedback.',
		icon: <FaUserTie className='w-6 h-6 text-yellow-600' />,
		tags: ['Technical', 'Behavioral'],
		color: 'yellow',
		linkText: 'Start Mock Interview',
	},
	{
		id: 6,
		title: 'Resume Reviews',
		description: 'Get your resume reviewed by industry professionals.',
		icon: <FaFileSignature className='w-6 h-6 text-teal-600' />,
		tags: ['Resume', 'Career'],
		color: 'teal',
		linkText: 'Submit Resume',
	},
	{
		id: 7,
		title: 'Coding Challenges',
		description: 'Timed coding challenges to improve problem-solving skills.',
		icon: <FaLaptopCode className='w-6 h-6 text-indigo-600' />,
		tags: ['Competitive Programming', 'Codeforces'],
		color: 'indigo',
		linkText: 'Start Challenge',
	},
	{
		id: 8,
		title: 'System Design Case Studies',
		description:
			'Deep dive into real-world system design problems and solutions.',
		icon: <FaServer className='w-6 h-6 text-gray-600' />,
		tags: ['Scalability', 'Microservices'],
		color: 'yellow',
		linkText: 'Explore Case Studies',
	},
	{
		id: 9,
		title: 'Soft Skills Training',
		description:
			'Enhance your communication and leadership skills for interviews.',
		icon: <FaComments className='w-6 h-6 text-orange-600' />,
		tags: ['Communication', 'Leadership'],
		color: 'orange',
		linkText: 'Improve Soft Skills',
	},
];
