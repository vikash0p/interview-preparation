import { FaLightbulb, FaMicrophone, FaBook, FaUsers, FaFlask, FaRobot } from 'react-icons/fa';

import type { IFeature } from '@/main/types/home.types';

export const featuresData: IFeature[] = [
  {
    id: '1',
    title: 'Smart Question Bank',
    description: 'Access thousands of curated questions across different difficulty levels and domains.',
    icon: <FaLightbulb className="text-3xl" />,
    link: '/question-bank',
  },

  {
    id: '2',
    title: 'Mock Interviews',
    description: 'Practice with AI-powered mock interviews and receive instant feedback.',
    icon: <FaMicrophone className="text-3xl" />,
    link: '/mock-interviews',
  },
  {
    id: '3',
    title: 'Practical Interview',
    description: 'Hands-on coding scenarios designed to simulate real-world technical interview tasks.',
    icon: <FaFlask className="text-3xl" />,
    link: '/practical-interviews',
  },

  
];
