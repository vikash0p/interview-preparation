import { FaLightbulb, FaBook, FaMicrophone, FaRegClock, FaBrain, FaUserTie } from 'react-icons/fa';

export const tipsGuidesData = [
  {
    title: 'Interview Preparation Strategies',
    slug: 'preparation-strategies',
    icon: <FaLightbulb className="text-yellow-400 text-3xl" />,
    description: 'Learn how to structure your preparation for different types of interviews.',
  },
  {
    title: 'Behavioral Interview Tips',
    slug: 'behavioral-interview',
    icon: <FaUserTie className="text-green-400 text-3xl" />,
    description: 'Handle situational and behavioral questions with the STAR method and more.',
  },
  {
    title: 'Resume & Portfolio Writing',
    slug: 'resume-portfolio',
    icon: <FaBook className="text-blue-500 text-3xl" />,
    description: 'Craft compelling resumes and tech portfolios to stand out.',
  },
  {
    title: 'System Design Approach',
    slug: 'system-design',
    icon: <FaBrain className="text-purple-400 text-3xl" />,
    description: 'Learn the essentials of designing scalable systems in interviews.',
  },
  {
    title: 'Communication & Soft Skills',
    slug: 'communication-skills',
    icon: <FaMicrophone className="text-pink-400 text-3xl" />,
    description: 'Improve your communication, confidence, and clarity during interviews.',
  },
  {
    title: 'Time Management During Interviews',
    slug: 'time-management',
    icon: <FaRegClock className="text-indigo-400 text-3xl" />,
    description: 'Learn how to manage time effectively during interviews and assessments.',
  },
];
