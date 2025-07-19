import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaAngular, FaVuejs, FaNodeJs, FaPhp, FaPython, FaJava,
   FaGitAlt, FaDocker, FaAws, FaDatabase, FaMobileAlt, FaCogs, FaTools, FaUsers } from 'react-icons/fa';
import { SiTypescript, SiSvelte, SiNextdotjs, SiDjango, SiRubyonrails, SiSpring, SiDotnet, SiPostgresql,
   SiMongodb, SiMysql, SiRedis, SiGraphql, SiFlutter, SiKotlin, SiSwift, SiGooglecloud } from 'react-icons/si';
import { FaCode, FaServer, FaBrain, FaNetworkWired } from 'react-icons/fa6';
import { ReactNode } from 'react';



export interface TechnologyItem {
	technology: string;
	actionLabel: string;
	comingSoon: boolean;
	icon: ReactNode;
	iconClassName: string;
}

export interface CategoryItem {
	category: string;
	comingSoon: boolean;
	actionLabel: string;
	icon: ReactNode;
	technologies: TechnologyItem[];
}
export const MOCK_INTERVIEWS_DATA: CategoryItem[] = [
  {
    category: 'frontend',
    comingSoon: false,
    actionLabel: 'Master Frontend Development',
    icon: <FaCode className="text-blue-400" />,
    technologies: [
      { technology: 'html', comingSoon: false, actionLabel: 'Learn HTML Fundamentals', icon: <FaHtml5 />, iconClassName: 'text-orange-500 text-2xl' },
      { technology: 'css', comingSoon: false, actionLabel: 'Explore CSS Techniques', icon: <FaCss3Alt />, iconClassName: 'text-blue-500 text-2xl' },
      { technology: 'javascript', comingSoon: false, actionLabel: 'Master JavaScript Concepts', icon: <FaJsSquare />, iconClassName: 'text-yellow-400 text-2xl' },
      { technology: 'typescript', comingSoon: false, actionLabel: 'TypeScript Deep Dive', icon: <SiTypescript />, iconClassName: 'text-blue-600 text-2xl' },
      { technology: 'react', comingSoon: false, actionLabel: 'Become a React Pro', icon: <FaReact />, iconClassName: 'text-sky-500 text-2xl' },
      { technology: 'angular', comingSoon: false, actionLabel: 'Angular Framework Guide', icon: <FaAngular />, iconClassName: 'text-red-500 text-2xl' },
      { technology: 'vue', comingSoon: false, actionLabel: 'Vue.js Mastery', icon: <FaVuejs />, iconClassName: 'text-green-500 text-2xl' },
      { technology: 'svelte', comingSoon: false, actionLabel: 'Modern Svelte Development', icon: <SiSvelte />, iconClassName: 'text-orange-400 text-2xl' },
      { technology: 'next.js', comingSoon: false, actionLabel: 'Next.js Optimization', icon: <SiNextdotjs />, iconClassName: 'text-black text-2xl' }
    ]
  },
  {
    category: 'backend',
    comingSoon: false,
    actionLabel: 'Advance Backend Skills',
    icon: <FaServer className="text-green-400" />,
    technologies: [
      { technology: 'node.js', comingSoon: false, actionLabel: 'Node.js Performance', icon: <FaNodeJs />, iconClassName: 'text-green-500 text-2xl' },
      { technology: 'express', comingSoon: false, actionLabel: 'Express Framework Guide', icon: <FaServer />, iconClassName: 'text-gray-500 text-2xl' },
      { technology: 'php', comingSoon: false, actionLabel: 'PHP Best Practices', icon: <FaPhp />, iconClassName: 'text-indigo-500 text-2xl' },
      { technology: 'python', comingSoon: false, actionLabel: 'Python Backend Development', icon: <FaPython />, iconClassName: 'text-yellow-500 text-2xl' },
      { technology: 'django', comingSoon: false, actionLabel: 'Django Framework Mastery', icon: <SiDjango />, iconClassName: 'text-green-700 text-2xl' },
      { technology: 'ruby-on-rails', comingSoon: false, actionLabel: 'Rails Development', icon: <SiRubyonrails />, iconClassName: 'text-red-500 text-2xl' },
      { technology: 'java', comingSoon: false, actionLabel: 'Enterprise Java', icon: <FaJava />, iconClassName: 'text-red-700 text-2xl' },
      { technology: 'spring', comingSoon: false, actionLabel: 'Spring Framework Guide', icon: <SiSpring />, iconClassName: 'text-green-600 text-2xl' },
      { technology: '.net', comingSoon: false, actionLabel: '.NET Core Development', icon: <SiDotnet />, iconClassName: 'text-purple-600 text-2xl' }
    ]
  },
  {
    category: 'database',
    comingSoon: false,
    actionLabel: 'Database Expertise',
    icon: <FaDatabase className="text-yellow-400" />,
    technologies: [
      { technology: 'mongodb', comingSoon: false, actionLabel: 'MongoDB NoSQL Patterns', icon: <SiMongodb />, iconClassName: 'text-green-700 text-2xl' },
      { technology: 'postgresql', comingSoon: false, actionLabel: 'PostgreSQL Optimization', icon: <SiPostgresql />, iconClassName: 'text-blue-700 text-2xl' },
      { technology: 'mysql', comingSoon: false, actionLabel: 'MySQL Database Design', icon: <SiMysql />, iconClassName: 'text-blue-500 text-2xl' },
      { technology: 'redis', comingSoon: false, actionLabel: 'Redis Caching Strategies', icon: <SiRedis />, iconClassName: 'text-red-600 text-2xl' },
      { technology: 'graphql', comingSoon: false, actionLabel: 'GraphQL API Design', icon: <SiGraphql />, iconClassName: 'text-pink-500 text-2xl' }
    ]
  },
  {
    category: 'mobile-development',
    comingSoon: false,
    actionLabel: 'Mobile App Mastery',
    icon: <FaMobileAlt className="text-purple-400" />,
    technologies: [
      { technology: 'react-native', comingSoon: false, actionLabel: 'Cross-Platform Apps', icon: <FaReact />, iconClassName: 'text-blue-400 text-2xl' },
      { technology: 'flutter', comingSoon: false, actionLabel: 'Flutter UI Development', icon: <SiFlutter />, iconClassName: 'text-sky-400 text-2xl' },
      { technology: 'swift', comingSoon: false, actionLabel: 'iOS Development', icon: <SiSwift />, iconClassName: 'text-orange-400 text-2xl' },
      { technology: 'kotlin', comingSoon: false, actionLabel: 'Android Development', icon: <SiKotlin />, iconClassName: 'text-purple-500 text-2xl' }
    ]
  },
  {
    category: 'computer-science',
    comingSoon: false,
    actionLabel: 'CS Fundamentals',
    icon: <FaBrain className="text-red-400" />,
    technologies: [
      { technology: 'data-structures', comingSoon: false, actionLabel: 'Data Structure Concepts', icon: <FaCogs />, iconClassName: 'text-gray-500 text-2xl' },
      { technology: 'algorithms', comingSoon: false, actionLabel: 'Algorithm Design', icon: <FaCogs />, iconClassName: 'text-gray-500 text-2xl' },
      { technology: 'oop', comingSoon: false, actionLabel: 'Object-Oriented Principles', icon: <FaCogs />, iconClassName: 'text-gray-500 text-2xl' },
      { technology: 'functional-programming', comingSoon: false, actionLabel: 'Functional Paradigms', icon: <FaCogs />, iconClassName: 'text-gray-500 text-2xl' },
      { technology: 'design-patterns', comingSoon: false, actionLabel: 'Software Design Patterns', icon: <FaCogs />, iconClassName: 'text-gray-500 text-2xl' },
      { technology: 'system-architecture', comingSoon: false, actionLabel: 'System Design Principles', icon: <FaCogs />, iconClassName: 'text-gray-500 text-2xl' },
      { technology: 'compilers', comingSoon: false, actionLabel: 'Compiler Theory', icon: <FaCogs />, iconClassName: 'text-gray-500 text-2xl' },
      { technology: 'operating-systems', comingSoon: false, actionLabel: 'OS Concepts', icon: <FaCogs />, iconClassName: 'text-gray-500 text-2xl' }
    ]
  },
  {
    category: 'behavioral',
    comingSoon: false,
    actionLabel: 'Professional Skills',
    icon: <FaUsers className="text-pink-400" />,
    technologies: [
      { technology: 'teamwork', comingSoon: false, actionLabel: 'Team Collaboration', icon: <FaUsers />, iconClassName: 'text-purple-400 text-2xl' },
      { technology: 'leadership', comingSoon: false, actionLabel: 'Leadership Skills', icon: <FaUsers />, iconClassName: 'text-purple-400 text-2xl' },
      { technology: 'conflict-resolution', comingSoon: false, actionLabel: 'Conflict Management', icon: <FaUsers />, iconClassName: 'text-purple-400 text-2xl' },
      { technology: 'time-management', comingSoon: false, actionLabel: 'Productivity Techniques', icon: <FaUsers />, iconClassName: 'text-purple-400 text-2xl' },
      { technology: 'communication', comingSoon: false, actionLabel: 'Effective Communication', icon: <FaUsers />, iconClassName: 'text-purple-400 text-2xl' },
      { technology: 'problem-solving', comingSoon: false, actionLabel: 'Problem-Solving Strategies', icon: <FaUsers />, iconClassName: 'text-purple-400 text-2xl' },
      { technology: 'adaptability', comingSoon: false, actionLabel: 'Adapting to Change', icon: <FaUsers />, iconClassName: 'text-purple-400 text-2xl' }
    ]
  },
  {
    category: 'system-design',
    comingSoon: false,
    actionLabel: 'Architecture Patterns',
    icon: <FaNetworkWired className="text-indigo-400" />,
    technologies: [
      { technology: 'microservices', comingSoon: false, actionLabel: 'Microservices Architecture', icon: <FaNetworkWired />, iconClassName: 'text-indigo-500 text-2xl' },
      { technology: 'monolith', comingSoon: false, actionLabel: 'Monolithic Systems', icon: <FaNetworkWired />, iconClassName: 'text-indigo-500 text-2xl' },
      { technology: 'serverless', comingSoon: false, actionLabel: 'Serverless Computing', icon: <FaNetworkWired />, iconClassName: 'text-indigo-500 text-2xl' },
      { technology: 'cloud-architecture', comingSoon: false, actionLabel: 'Cloud Solutions', icon: <FaNetworkWired />, iconClassName: 'text-indigo-500 text-2xl' },
      { technology: 'load-balancing', comingSoon: false, actionLabel: 'Load Balancing Strategies', icon: <FaNetworkWired />, iconClassName: 'text-indigo-500 text-2xl' },
      { technology: 'caching', comingSoon: false, actionLabel: 'Caching Mechanisms', icon: <FaNetworkWired />, iconClassName: 'text-indigo-500 text-2xl' },
      { technology: 'cdn', comingSoon: false, actionLabel: 'Content Delivery Networks', icon: <FaNetworkWired />, iconClassName: 'text-indigo-500 text-2xl' },
      { technology: 'database-sharding', comingSoon: false, actionLabel: 'Database Scaling', icon: <FaNetworkWired />, iconClassName: 'text-indigo-500 text-2xl' },
      { technology: 'message-queues', comingSoon: false, actionLabel: 'Message Queue Systems', icon: <FaNetworkWired />, iconClassName: 'text-indigo-500 text-2xl' },
      { technology: 'event-driven-architecture', comingSoon: false, actionLabel: 'Event-Based Systems', icon: <FaNetworkWired />, iconClassName: 'text-indigo-500 text-2xl' }
    ]
  },
  {
    category: 'others',
    comingSoon: false,
    actionLabel: 'DevOps & Tools',
    icon: <FaTools className="text-gray-400" />,
    technologies: [
      { technology: 'git', comingSoon: false, actionLabel: 'Version Control Mastery', icon: <FaGitAlt />, iconClassName: 'text-red-500 text-2xl' },
      { technology: 'docker', comingSoon: false, actionLabel: 'Containerization', icon: <FaDocker />, iconClassName: 'text-blue-500 text-2xl' },
      { technology: 'aws', comingSoon: false, actionLabel: 'AWS Cloud Services', icon: <FaAws />, iconClassName: 'text-orange-500 text-2xl' },
      { technology: 'gcp', comingSoon: false, actionLabel: 'Google Cloud Platform', icon: <SiGooglecloud />, iconClassName: 'text-yellow-400 text-2xl' }
    ]
  }
];