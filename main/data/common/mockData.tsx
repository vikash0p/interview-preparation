import {
	FaHtml5,
	FaCss3Alt,
	FaJsSquare,
	FaReact,
	FaAngular,
	FaVuejs,
	FaNodeJs,
	FaPhp,
	FaPython,
	FaJava,
	FaGitAlt,
	FaDocker,
	FaAws,
	FaDatabase,
	FaMobileAlt,
	FaCogs,
	FaTools,
	FaUsers,
} from 'react-icons/fa';
import {
	SiTypescript,
	SiSvelte,
	SiNextdotjs,
	SiDjango,
	SiRubyonrails,
	SiSpring,
	SiDotnet,
	SiPostgresql,
	SiMongodb,
	SiMysql,
	SiRedis,
	SiGraphql,
	SiFlutter,
	SiKotlin,
	SiSwift,
	SiGooglecloud,
} from 'react-icons/si';
import { FaCode, FaServer, FaBrain, FaNetworkWired } from 'react-icons/fa6';

import { ReactNode } from 'react';

export interface TechnologyItem {
	name: string;
	actionLabel: string;
	comingSoon: boolean;
	icon: ReactNode;
	iconClassName: string;
}

export interface CategoryItem {
	name: string;
	comingSoon: boolean;
	actionLabel: string;
	icon: ReactNode;
	technology: TechnologyItem[];
}
export const mockData = [
  {
    name: 'frontend',
    comingSoon: true,
    actionLabel: 'Master Frontend Development',
    icon: <FaCode className="text-blue-400" />,
    technologies: [
      { name: 'html', comingSoon: true, actionLabel: 'Learn HTML Fundamentals', icon: <FaHtml5 />, iconClassName: 'text-orange-500 text-xl' },
      { name: 'css', comingSoon: true, actionLabel: 'Explore CSS Techniques', icon: <FaCss3Alt />, iconClassName: 'text-blue-500 text-xl' },
      { name: 'javascript', comingSoon: true, actionLabel: 'Master JavaScript Concepts', icon: <FaJsSquare />, iconClassName: 'text-yellow-400 text-xl' },
      { name: 'typescript', comingSoon: true, actionLabel: 'TypeScript Deep Dive', icon: <SiTypescript />, iconClassName: 'text-blue-600 text-xl' },
      { name: 'react', comingSoon: true, actionLabel: 'Become a React Pro', icon: <FaReact />, iconClassName: 'text-sky-500 text-xl' },
      { name: 'angular', comingSoon: true, actionLabel: 'Angular Framework Guide', icon: <FaAngular />, iconClassName: 'text-red-500 text-xl' },
      { name: 'vue', comingSoon: true, actionLabel: 'Vue.js Mastery', icon: <FaVuejs />, iconClassName: 'text-green-500 text-xl' },
      { name: 'svelte', comingSoon: true, actionLabel: 'Modern Svelte Development', icon: <SiSvelte />, iconClassName: 'text-orange-400 text-xl' },
      { name: 'next.js', comingSoon: true, actionLabel: 'Next.js Optimization', icon: <SiNextdotjs />, iconClassName: 'text-black text-xl' }
    ]
  },
  {
    name: 'backend',
    comingSoon: true,
    actionLabel: 'Advance Backend Skills',
    icon: <FaServer className="text-green-400" />,
    technologies: [
      { name: 'node.js', comingSoon: true, actionLabel: 'Node.js Performance', icon: <FaNodeJs />, iconClassName: 'text-green-500 text-xl' },
      { name: 'express', comingSoon: true, actionLabel: 'Express Framework Guide', icon: <FaServer />, iconClassName: 'text-gray-500 text-xl' },
      { name: 'php', comingSoon: true, actionLabel: 'PHP Best Practices', icon: <FaPhp />, iconClassName: 'text-indigo-500 text-xl' },
      { name: 'python', comingSoon: true, actionLabel: 'Python Backend Development', icon: <FaPython />, iconClassName: 'text-yellow-500 text-xl' },
      { name: 'django', comingSoon: true, actionLabel: 'Django Framework Mastery', icon: <SiDjango />, iconClassName: 'text-green-700 text-xl' },
      { name: 'ruby-on-rails', comingSoon: true, actionLabel: 'Rails Development', icon: <SiRubyonrails />, iconClassName: 'text-red-500 text-xl' },
      { name: 'java', comingSoon: true, actionLabel: 'Enterprise Java', icon: <FaJava />, iconClassName: 'text-red-700 text-xl' },
      { name: 'spring', comingSoon: true, actionLabel: 'Spring Framework Guide', icon: <SiSpring />, iconClassName: 'text-green-600 text-xl' },
      { name: '.net', comingSoon: true, actionLabel: '.NET Core Development', icon: <SiDotnet />, iconClassName: 'text-purple-600 text-xl' }
    ]
  },
  {
    name: 'database',
    comingSoon: true,
    actionLabel: 'Database Expertise',
    icon: <FaDatabase className="text-yellow-400" />,
    technologies: [
      { name: 'mongodb', comingSoon: true, actionLabel: 'MongoDB NoSQL Patterns', icon: <SiMongodb />, iconClassName: 'text-green-700 text-xl' },
      { name: 'postgresql', comingSoon: true, actionLabel: 'PostgreSQL Optimization', icon: <SiPostgresql />, iconClassName: 'text-blue-700 text-xl' },
      { name: 'mysql', comingSoon: true, actionLabel: 'MySQL Database Design', icon: <SiMysql />, iconClassName: 'text-blue-500 text-xl' },
      { name: 'redis', comingSoon: true, actionLabel: 'Redis Caching Strategies', icon: <SiRedis />, iconClassName: 'text-red-600 text-xl' },
      { name: 'graphql', comingSoon: true, actionLabel: 'GraphQL API Design', icon: <SiGraphql />, iconClassName: 'text-pink-500 text-xl' }
    ]
  },
  {
    name: 'mobile-development',
    comingSoon: true,
    actionLabel: 'Mobile App Mastery',
    icon: <FaMobileAlt className="text-purple-400" />,
    technologies: [
      { name: 'react-native', comingSoon: true, actionLabel: 'Cross-Platform Apps', icon: <FaReact />, iconClassName: 'text-blue-400 text-xl' },
      { name: 'flutter', comingSoon: true, actionLabel: 'Flutter UI Development', icon: <SiFlutter />, iconClassName: 'text-sky-400 text-xl' },
      { name: 'swift', comingSoon: true, actionLabel: 'iOS Development', icon: <SiSwift />, iconClassName: 'text-orange-400 text-xl' },
      { name: 'kotlin', comingSoon: true, actionLabel: 'Android Development', icon: <SiKotlin />, iconClassName: 'text-purple-500 text-xl' }
    ]
  },
  {
    name: 'computer-science',
    comingSoon: true,
    actionLabel: 'CS Fundamentals',
    icon: <FaBrain className="text-red-400" />,
    technologies: [
      { name: 'data-structures', comingSoon: true, actionLabel: 'Data Structure Concepts', icon: <FaCogs />, iconClassName: 'text-gray-500 text-xl' },
      { name: 'algorithms', comingSoon: true, actionLabel: 'Algorithm Design', icon: <FaCogs />, iconClassName: 'text-gray-500 text-xl' },
      { name: 'oop', comingSoon: true, actionLabel: 'Object-Oriented Principles', icon: <FaCogs />, iconClassName: 'text-gray-500 text-xl' },
      { name: 'functional-programming', comingSoon: true, actionLabel: 'Functional Paradigms', icon: <FaCogs />, iconClassName: 'text-gray-500 text-xl' },
      { name: 'design-patterns', comingSoon: true, actionLabel: 'Software Design Patterns', icon: <FaCogs />, iconClassName: 'text-gray-500 text-xl' },
      { name: 'system-architecture', comingSoon: true, actionLabel: 'System Design Principles', icon: <FaCogs />, iconClassName: 'text-gray-500 text-xl' },
      { name: 'compilers', comingSoon: true, actionLabel: 'Compiler Theory', icon: <FaCogs />, iconClassName: 'text-gray-500 text-xl' },
      { name: 'operating-systems', comingSoon: true, actionLabel: 'OS Concepts', icon: <FaCogs />, iconClassName: 'text-gray-500 text-xl' }
    ]
  },
  {
    name: 'behavioral',
    comingSoon: true,
    actionLabel: 'Professional Skills',
    icon: <FaUsers className="text-pink-400" />,
    technologies: [
      { name: 'teamwork', comingSoon: true, actionLabel: 'Team Collaboration', icon: <FaUsers />, iconClassName: 'text-purple-400 text-xl' },
      { name: 'leadership', comingSoon: true, actionLabel: 'Leadership Skills', icon: <FaUsers />, iconClassName: 'text-purple-400 text-xl' },
      { name: 'conflict-resolution', comingSoon: true, actionLabel: 'Conflict Management', icon: <FaUsers />, iconClassName: 'text-purple-400 text-xl' },
      { name: 'time-management', comingSoon: true, actionLabel: 'Productivity Techniques', icon: <FaUsers />, iconClassName: 'text-purple-400 text-xl' },
      { name: 'communication', comingSoon: true, actionLabel: 'Effective Communication', icon: <FaUsers />, iconClassName: 'text-purple-400 text-xl' },
      { name: 'problem-solving', comingSoon: true, actionLabel: 'Problem-Solving Strategies', icon: <FaUsers />, iconClassName: 'text-purple-400 text-xl' },
      { name: 'adaptability', comingSoon: true, actionLabel: 'Adapting to Change', icon: <FaUsers />, iconClassName: 'text-purple-400 text-xl' }
    ]
  },
  {
    name: 'system-design',
    comingSoon: true,
    actionLabel: 'Architecture Patterns',
    icon: <FaNetworkWired className="text-indigo-400" />,
    technologies: [
      { name: 'microservices', comingSoon: true, actionLabel: 'Microservices Architecture', icon: <FaNetworkWired />, iconClassName: 'text-indigo-500 text-xl' },
      { name: 'monolith', comingSoon: true, actionLabel: 'Monolithic Systems', icon: <FaNetworkWired />, iconClassName: 'text-indigo-500 text-xl' },
      { name: 'serverless', comingSoon: true, actionLabel: 'Serverless Computing', icon: <FaNetworkWired />, iconClassName: 'text-indigo-500 text-xl' },
      { name: 'cloud-architecture', comingSoon: true, actionLabel: 'Cloud Solutions', icon: <FaNetworkWired />, iconClassName: 'text-indigo-500 text-xl' },
      { name: 'load-balancing', comingSoon: true, actionLabel: 'Load Balancing Strategies', icon: <FaNetworkWired />, iconClassName: 'text-indigo-500 text-xl' },
      { name: 'caching', comingSoon: true, actionLabel: 'Caching Mechanisms', icon: <FaNetworkWired />, iconClassName: 'text-indigo-500 text-xl' },
      { name: 'cdn', comingSoon: true, actionLabel: 'Content Delivery Networks', icon: <FaNetworkWired />, iconClassName: 'text-indigo-500 text-xl' },
      { name: 'database-sharding', comingSoon: true, actionLabel: 'Database Scaling', icon: <FaNetworkWired />, iconClassName: 'text-indigo-500 text-xl' },
      { name: 'message-queues', comingSoon: true, actionLabel: 'Message Queue Systems', icon: <FaNetworkWired />, iconClassName: 'text-indigo-500 text-xl' },
      { name: 'event-driven-architecture', comingSoon: true, actionLabel: 'Event-Based Systems', icon: <FaNetworkWired />, iconClassName: 'text-indigo-500 text-xl' }
    ]
  },
  {
    name: 'others',
    comingSoon: true,
    actionLabel: 'DevOps & Tools',
    icon: <FaTools className="text-gray-400" />,
    technologies: [
      { name: 'git', comingSoon: true, actionLabel: 'Version Control Mastery', icon: <FaGitAlt />, iconClassName: 'text-red-500 text-xl' },
      { name: 'docker', comingSoon: true, actionLabel: 'Containerization', icon: <FaDocker />, iconClassName: 'text-blue-500 text-xl' },
      { name: 'aws', comingSoon: true, actionLabel: 'AWS Cloud Services', icon: <FaAws />, iconClassName: 'text-orange-500 text-xl' },
      { name: 'gcp', comingSoon: true, actionLabel: 'Google Cloud Platform', icon: <SiGooglecloud />, iconClassName: 'text-yellow-400 text-xl' }
    ]
  }
];