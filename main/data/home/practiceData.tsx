import { FaCode, FaCheckCircle, FaChartLine } from 'react-icons/fa';

export const practiceData = [
  {
    id: 1,
    title: 'Real-time Compilation',
    description: 'Write and execute code in real-time with support for multiple programming languages.',
    icon: <FaCode className="w-5 h-5 text-indigo-600" />,
    bgColor: 'bg-indigo-100',
  },
  {
    id: 2,
    title: 'Test Cases',
    description: 'Run your solution against multiple test cases to ensure correctness.',
    icon: <FaCheckCircle className="w-5 h-5 text-green-600" />,
    bgColor: 'bg-green-100',
  },
  {
    id: 3,
    title: 'Performance Analysis',
    description: 'Get detailed insights about your code performance, including run-time and space complexity.',
    icon: <FaChartLine className="w-5 h-5 text-purple-600" />,
    bgColor: 'bg-purple-100',
  },
];
