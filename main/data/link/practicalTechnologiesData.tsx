
import { ICategoryItem } from '../../types/global.types';

import { FaJsSquare, FaReact,    FaCode,   } from '@/main/icons/react-global-icons';




export const PRACTICAL_INTERVIEWS_DATA: ICategoryItem[] = [
  {
    id: 'cat-1',
    slug: 'frontend',
    label: 'FRONTEND',
    comingSoon: false,
    actionLabel: 'Solve Frontend Interview Tasks',
    icon: <FaCode className="text-blue-400" />,
    technologies: [
      {
        id: 'tech-3',
        slug: 'javascript',
        label: 'JAVASCRIPT',
        icon: <FaJsSquare className="text-yellow-400" />,
        category: 'frontend',
        actionLabel: 'Implement JS Interview Logic',
        comingSoon: false,
      },
      {
        id: 'tech-5',
        slug: 'react',
        label: 'REACT',
        icon: <FaReact className="text-sky-400" />,
        category: 'frontend',
        actionLabel: 'Build Components in React',
        comingSoon: false,
      },
     
    ],
  },

];
