import { FaCode, FaDatabase, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';
import { SiNodedotjs, SiTypescript } from 'react-icons/si';

export interface domainsDataInterface {
  name: string;
  icon: JSX.Element;
  tech: string[];
}

export const domainsData: domainsDataInterface[] = [
  {
    name: 'Frontend',
    icon: <FaCode />,
    tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js'],
  },
  {
    name: 'Backend',
    icon: <SiNodedotjs />,
    tech: ['Node.js', 'Express.js', 'MongoDB', 'SQL'],
  },
  { name: 'Mobile', icon: <FaMobileAlt />, tech: ['React Native', 'Flutter'] },
  {
    name: 'Database',
    icon: <FaDatabase />,
    tech: ['MongoDB', 'PostgreSQL', 'Firebase'],
  },
  {
    name: 'UI/UX Design',
    icon: <FaPaintBrush />,
    tech: ['Figma', 'Adobe XD', 'Tailwind CSS'],
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
    tech: ['Type Safety', 'Interfaces', 'Generics'],
  },
];
