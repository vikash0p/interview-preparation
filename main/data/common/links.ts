import { NavLinkInterface } from '@/main/types/navLink.types';

export const navLinks: NavLinkInterface[] = [
	{ label: 'Home', href: '/' },
	{ label: 'AI Interviews', href: '/ai-interview' },

	{
		label: 'Categories',
		href: '/mock-interview',
		dropdown: [
			{
				label: 'Frontend',
				href: '/mock-interview/frontend',
				comingSoon: false,
				children: [
					{ label: 'HTML', href: '/mock-interview/frontend/html', comingSoon: true },
					{ label: 'CSS', href: '/mock-interview/frontend/css', comingSoon: true },
					{
						label: 'JavaScript',
						href: '/mock-interview/frontend/javascript',
						comingSoon: false,
					},
					{
						label: 'React',
						href: '/mock-interview/frontend/react',
						comingSoon: false,
					},
					{
						label: 'Next.js',
						href: '/mock-interview/frontend/nextjs',
						comingSoon: false,
					},
				],
			},
			{
				label: 'Backend',
				href: '/mock-interview/backend',
				comingSoon: true,
				children: [
					{
						label: 'Node.js',
						href: '/mock-interview/backend/nodejs',
						comingSoon: true,
					},
					{
						label: 'Express.js',
						href: '/mock-interview/backend/express',
						comingSoon: true,
					},
					{
						label: 'NestJS',
						href: '/mock-interview/backend/nestjs',
						comingSoon: true,
					},
					{
						label: 'REST APIs',
						href: '/mock-interview/backend/rest-api',
						comingSoon: true,
					},
				],
			},
			{
				label: 'Mobile',
				href: '/mock-interview/mobile',
				comingSoon: true,
				children: [
					{
						label: 'React Native',
						href: '/mock-interview/mobile/react-native',
						comingSoon: true,
					},
					{
						label: 'Flutter',
						href: '/mock-interview/mobile/flutter',
						comingSoon: true,
					},
					{
						label: 'Android',
						href: '/mock-interview/mobile/android',
						comingSoon: true,
					},
				],
			},
			{
				label: 'Database',
				href: '/mock-interview/database',
				comingSoon: true,
				children: [
					{
						label: 'MongoDB',
						href: '/mock-interview/database/mongodb',
						comingSoon: true,
					},
					{
						label: 'MySQL',
						href: '/mock-interview/database/mysql',
						comingSoon: true,
					},
					{
						label: 'PostgreSQL',
						href: '/mock-interview/database/postgresql',
						comingSoon: true,
					},
					{
						label: 'Redis',
						href: '/mock-interview/database/redis',
						comingSoon: true,
					},
				],
			},
			{
				label: 'UI/UX Design',
				href: '/mock-interview/ui-ux',
				comingSoon: true,
				children: [
					{
						label: 'Design Principles',
						href: '/mock-interview/ui-ux/principles',
						comingSoon: true,
					},
					{ label: 'Figma', href: '/mock-interview/ui-ux/figma', comingSoon: true },
					{
						label: 'Accessibility',
						href: '/mock-interview/ui-ux/accessibility',
						comingSoon: true,
					},
				],
			},
		],
	},

	{ label: 'Technical Rounds', href: '/practical-interview' },
	{ label: 'Tips & Guides', href: '/tips-&-guides' },
	{ label: 'Support', href: '/contact' },
	{ label: 'Login', href: '/login' },
];
