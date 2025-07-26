import { Home, Bot, MessageSquare, Code, Bookmark } from 'lucide-react';

// Type definition for navigation items
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
		icon: <Home className='h-5 w-5 mb-1' />,
		ariaLabel: 'Navigate to Home',
	},
	{
		href: '/ai-interview',
		label: 'AI ',
		icon: <Bot className='h-5 w-5 mb-1' />,
		ariaLabel: 'Navigate to AI Interview',
	},
	{
		href: '/mock-interview',
		label: 'Mock',
		icon: <MessageSquare className='h-5 w-5 mb-1' />,
		ariaLabel: 'Navigate to Mock Interview',
	},
	{
		href: '/practical-interview',
		label: 'Practical',
		icon: <Code className='h-5 w-5 mb-1' />,
		ariaLabel: 'Navigate to Practical Interview',
	},
	{
		href: '/bookmarks',
		label: 'Saved',
		icon: <Bookmark className='h-5 w-5 mb-1' />,
		ariaLabel: 'Navigate to Saved Items',
	},
];
