import { FaCode, FaKeyboard, FaPlayCircle, } from 'react-icons/fa';

export const practiceData = [
  {
    id: 1,
    title: 'Code Editor',
    description: 'Write clean, structured, and organized code with a distraction-free coding editor designed for practice.',
    icon: <FaKeyboard className="w-5 h-5 text-gray-700" />,
     },
  {
    id: 2,
    title: 'Run Code',
    description: 'Execute your programs instantly with one click and view real-time output results for better learning.',
    icon: <FaPlayCircle className="w-5 h-5 text-blue-600" />,
     },

  {
    id: 4,
    title: 'Real-time Compilation',
    description: 'Compile and run code seamlessly across multiple programming languages with instant feedback and error handling.',
    icon: <FaCode className="w-5 h-5 text-indigo-600" />,

  },
];
