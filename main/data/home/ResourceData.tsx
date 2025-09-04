import { FaBook, FaVideo, FaFileAlt, FaFileSignature, FaComments } from 'react-icons/fa';

export interface Resource {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  linkText: string;
  link: string;
}

export const resourcesData: Resource[] = [
  {
    id: 1,
    title: 'Study Guides',
    description: 'Comprehensive guides covering all major interview topics and concepts.',
    icon: <FaBook className="w-6 h-6 " />,
    linkText: 'Access Guides',
    link: '/resources/study-guides',
  },
  {
    id: 2,
    title: 'Video Tutorials',
    description: 'In-depth video explanations of common interview questions and solutions.',
    icon: <FaVideo className="w-6 h-6 " />,
    linkText: 'Watch Videos',
    link: '/resources/video-tutorials',
  },
  {
    id: 4,
    title: 'Cheat Sheets',
    description: 'Quick reference guides for key concepts and patterns.',
    icon: <FaFileAlt className="w-6 h-6 " />,
    linkText: 'View Sheets',
    link: '/resources/cheat-sheets',
  },
  {
    id: 6,
    title: 'Resume Reviews',
    description: 'Get your resume reviewed by industry professionals.',
    icon: <FaFileSignature className="w-6 h-6 " />,
    linkText: 'Submit Resume',
    link: '/resources/resume-reviews',
  },
  {
    id: 9,
    title: 'Soft Skills Training',
    description: 'Enhance your communication and leadership skills for interviews.',
    icon: <FaComments className="w-6 h-6 " />,
    linkText: 'Improve Soft Skills',
    link: '/resources/soft-skills',
  },
];
