import { NavLinkInterface } from '@/main/types/navLink.types';

export const navLinks: NavLinkInterface[] = [
	{ label: 'Home', href: '/' },
	{ label: 'AI Interviews', href: '/ai-interview' },

	{
		label: 'Mock Interviews',
		href: '/mock-interviews',
	},
	{ label: 'Technical Rounds', href: '/practical-interview' },
	{ label: 'Tips & Guides', href: '/tips-&-guides' },
	{ label: 'Support', href: '/contact' },
	{ label: 'Login', href: '/login' },
];
