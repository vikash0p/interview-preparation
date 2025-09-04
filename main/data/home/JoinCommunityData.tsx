import { FaComments, FaUsers, FaVideo } from 'react-icons/fa';

export type FeatureItem = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  stats: string;
  linkText: string;
  linkColor: string;
};

export type StatItem = {
  id: number;
  value: string;
  label: string;
  color: string;
};

export const JoinCommunityData: FeatureItem[] = [
  {
    id: 1,
    title: 'Discussion Forums',
    description: 'Engage in topic-specific discussions, share experiences, and learn from peers.',
    icon: <FaComments className="w-8 h-8 text-white" />,
    bgColor: 'bg-indigo-600',
    stats: 'Active Users: 10.5K+',
    linkText: 'Join Discussion →',
    linkColor: 'text-indigo-400',
  },
  {
    id: 2,
    title: 'Study Groups',
    description: 'Join domain-specific study groups for collaborative learning and practice.',
    icon: <FaUsers className="w-8 h-8 text-white" />,
    bgColor: 'bg-red-500',
    stats: 'Active Groups: 250+',
    linkText: 'Find Group →',
    linkColor: 'text-purple-400',
  },
  {
    id: 3,
    title: 'Live Events',
    description: 'Attend live coding sessions, workshops, and Q&A with industry experts.',
    icon: <FaVideo className="w-8 h-8 text-white" />,
    bgColor: 'bg-green-600',
    stats: 'Next Event: 2 hrs',
    linkText: 'View Schedule →',
    linkColor: 'text-green-400',
  },
];

export const statsData: StatItem[] = [
  { id: 1, value: '50K+', label: 'Active Members', color: 'text-lime-400' },
  { id: 2, value: '100+', label: 'Daily Discussions', color: 'text-purple-400' },
  { id: 3, value: '1000+', label: 'Mock Interviews', color: 'text-green-400' },
  { id: 4, value: '89%', label: 'Success Rate', color: 'text-yellow-400' },
  { id: 5, value: '200+', label: 'Expert Mentors', color: 'text-rose-400' },
];
