import { ICategoryItem } from '../../types/global.types';

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaCode, SiTypescript, SiNextdotjs } from '@/main/icons/react-global-icons';

export const MOCK_INTERVIEWS_DATA: ICategoryItem[] = [
  {
    id: 'cat-1',
    slug: 'frontend',
    label: 'FRONTEND',
    comingSoon: true,
    actionLabel: 'Master Frontend Development',
    icon: <FaCode className="text-blue-400" />,
    technologies: [
      {
        id: 'tech-1',
        slug: 'html',
        label: 'HTML',
        icon: <FaHtml5 className="text-orange-500" />,
        category: 'frontend',
        actionLabel: 'Learn web page structure',
        comingSoon: false,
      },
      {
        id: 'tech-2',
        slug: 'css',
        label: 'CSS',
        icon: <FaCss3Alt className="text-blue-500" />,
        category: 'frontend',
        actionLabel: 'Style beautiful websites',
        comingSoon: false,
      },
      {
        id: 'tech-3',
        slug: 'javascript',
        label: 'JAVASCRIPT',
        icon: <FaJsSquare className="text-yellow-400" />,
        category: 'frontend',
        actionLabel: 'Master dynamic web development',
        comingSoon: false,
      },
      {
        id: 'tech-4',
        slug: 'typescript',
        label: 'TYPESCRIPT',
        icon: <SiTypescript className="text-blue-600" />,
        category: 'frontend',
        actionLabel: 'Build type-safe applications',
        comingSoon: false,
      },
      {
        id: 'tech-5',
        slug: 'react',
        label: 'REACT',
        icon: <FaReact className="text-sky-500" />,
        category: 'frontend',
        actionLabel: 'Create interactive UIs',
        comingSoon: true,
      },
      {
        id: 'tech-9',
        slug: 'nextjs',
        label: 'NEXT.JS',
        icon: <SiNextdotjs className="text-white" />,
        category: 'frontend',
        actionLabel: 'Create SSR applications',
        comingSoon: true,
      },
    ],
  },
];
