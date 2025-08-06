import { FaHome, FaRobot, FaComments, FaCode, FaBookmark } from '@/main/icons/react-global-icons';

interface MobileNavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

export const mobileLink: MobileNavItem[] = [
  {
    href: '/',
    label: 'Home',
    icon: <FaHome className="h-5 w-5 mb-1" />,
    ariaLabel: 'Navigate to Home',
  },
  {
    href: '/ai-interview',
    label: 'AI',
    icon: <FaRobot className="h-5 w-5 mb-1" />,
    ariaLabel: 'Navigate to AI Interview',
  },
  {
    href: '/mock-interview',
    label: 'Mock',
    icon: <FaComments className="h-5 w-5 mb-1" />,
    ariaLabel: 'Navigate to Mock Interview',
  },
  {
    href: '/practical-interview',
    label: 'Practical',
    icon: <FaCode className="h-5 w-5 mb-1" />,
    ariaLabel: 'Navigate to Practical Interview',
  },
  {
    href: '/bookmarks',
    label: 'Saved',
    icon: <FaBookmark className="h-5 w-5 mb-1" />,
    ariaLabel: 'Navigate to Saved Items',
  },
];
