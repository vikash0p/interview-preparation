import {
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaReact,

} from 'react-icons/fa';
import { SiNextdotjs } from  'react-icons/si';


export const frontendTopics = [
  {
    name: 'HTML',
    icon: <FaHtml5 className='text-orange-400 text-3xl' />,
    href: '/interview/frontend/html',
    comingSoon: true,
  },
  {
    name: 'CSS',
    icon: <FaCss3Alt className='text-blue-400 text-3xl' />,
    href: '/interview/frontend/css',
    comingSoon: true,
  },
  {
    name: 'JavaScript',
    icon: <FaJs className='text-yellow-400 text-3xl' />,
    href: '/interview/frontend/javascript',
    comingSoon: false,
  },
  {
    name: 'React',
    icon: <FaReact className='text-cyan-300 text-3xl' />,
    href: '/interview/frontend/react',
    comingSoon: false,
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs className='text-white text-3xl' />,
    href: '/interview/frontend/nextjs',
    comingSoon: false,
  },
];