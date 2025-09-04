import {
  FaComment,
  FaUser,
  FaCheckCircle,
  FaMicrophone,
  FaCalendarAlt,
  FaChartLine,
  FaRobot,
  FaRegSmile,
} from 'react-icons/fa';

export type Feature = {
  icon: React.ComponentType;
  title: string;
  description: string;
};

export type Message = {
  type: 'ai' | 'user';
  content: string;
  icon: React.ComponentType;
};

export const interviewFeatures: Feature[] = [
  {
    icon: FaMicrophone,
    title: 'AI-Powered Interviews',
    description: 'Practice with our advanced AI interviewer that adapts to your responses.',

  },
  {
    icon: FaCheckCircle,
    title: 'Real-time Feedback',
    description: 'Get instant feedback on your answers and communication skills.',

  },
  {
    icon: FaCalendarAlt,
    title: 'Flexible Scheduling',
    description: 'Book sessions with expert interviewers at your convenience.',
      },
  {
    icon: FaChartLine,
    title: 'Progress Tracking',
    description: 'Monitor your improvement over multiple practice sessions.',
     },
];
export const chatMessages: Message[] = [
  {
    type: 'ai',
    content: "Welcome to your mock interview! Let's start with your introduction.",
    icon: FaRobot,

  },
  {
    type: 'user',
    content: "Thank you! I'm John, a full-stack developer with 3 years of experience...",
    icon: FaUser,
      },
  {
    type: 'ai',
    content: 'Great! Now explain how you would design a rate-limiting system for an API?',
    icon: FaComment,

  },
  {
    type: 'user',
    content: "I'd use a token bucket algorithm with Redis for distributed tracking...",
    icon: FaRegSmile,
      },
];
