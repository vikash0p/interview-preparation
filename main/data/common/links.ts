import { NavLinkInterface } from '@/main/types/navLink.types';

export const navLinks: NavLinkInterface[] = [
	{ label: 'Home', href: '/' },
	{ label: 'AI Interviews', href: '/mock' },

	{
		label: 'Categories',
		href: '/interview',
		dropdown: [
			{
				label: 'Frontend',
				href: '/interview/frontend',
				comingSoon: false,
				children: [
					{ label: 'HTML', href: '/interview/frontend/html', comingSoon: true },
					{ label: 'CSS', href: '/interview/frontend/css', comingSoon: true },
					{
						label: 'JavaScript',
						href: '/interview/frontend/javascript',
						comingSoon: false,
					},
					{
						label: 'React',
						href: '/interview/frontend/react',
						comingSoon: false,
					},
					{
						label: 'Next.js',
						href: '/interview/frontend/nextjs',
						comingSoon: false,
					},
				],
			},
			{
				label: 'Backend',
				href: '/interview/backend',
				comingSoon: true,
				children: [
					{
						label: 'Node.js',
						href: '/interview/backend/nodejs',
						comingSoon: true,
					},
					{
						label: 'Express.js',
						href: '/interview/backend/express',
						comingSoon: true,
					},
					{
						label: 'NestJS',
						href: '/interview/backend/nestjs',
						comingSoon: true,
					},
					{
						label: 'REST APIs',
						href: '/interview/backend/rest-api',
						comingSoon: true,
					},
				],
			},
			{
				label: 'Mobile',
				href: '/interview/mobile',
				comingSoon: true,
				children: [
					{
						label: 'React Native',
						href: '/interview/mobile/react-native',
						comingSoon: true,
					},
					{
						label: 'Flutter',
						href: '/interview/mobile/flutter',
						comingSoon: true,
					},
					{
						label: 'Android',
						href: '/interview/mobile/android',
						comingSoon: true,
					},
				],
			},
			{
				label: 'Database',
				href: '/interview/database',
				comingSoon: true,
				children: [
					{
						label: 'MongoDB',
						href: '/interview/database/mongodb',
						comingSoon: true,
					},
					{
						label: 'MySQL',
						href: '/interview/database/mysql',
						comingSoon: true,
					},
					{
						label: 'PostgreSQL',
						href: '/interview/database/postgresql',
						comingSoon: true,
					},
					{
						label: 'Redis',
						href: '/interview/database/redis',
						comingSoon: true,
					},
				],
			},
			{
				label: 'UI/UX Design',
				href: '/interview/ui-ux',
				comingSoon: true,
				children: [
					{
						label: 'Design Principles',
						href: '/interview/ui-ux/principles',
						comingSoon: true,
					},
					{ label: 'Figma', href: '/interview/ui-ux/figma', comingSoon: true },
					{
						label: 'Accessibility',
						href: '/interview/ui-ux/accessibility',
						comingSoon: true,
					},
				],
			},
		],
	},

	{ label: 'Technical Rounds', href: '/practical' },
	{ label: 'Tips & Guides', href: '/tips' },
	{ label: 'Support', href: '/contact' },
	{ label: 'Sign In', href: '/login' },
];
