import { Metadata } from 'next';
const url =
	process.env.NEXT_PUBLIC_BASE_URL || 'https://interview-prap.vercel.app';

export const NextJsMetaData: Metadata = {
	title:
		'Next.js Interview Prep | Master Fullstack React Interviews with AI Coaching',
	description:
		'Prepare for Next.js interviews with our AI-driven platform. Practice real questions on SSR, API routes, routing, and deployment, with personalized feedback.',

	applicationName: 'InterViewPrep',
	authors: [{ name: 'InterViewPrep Team', url: url }],
	generator: 'Next.js',

	keywords: [
		'Next.js interview questions',
		'Next.js job preparation',
		'fullstack React interview',
		'SSR and SSG interview prep',
		'Next.js mock interviews',
		'API route handling',
		'Next.js deployment tips',
		'React and Next.js integration',
		'Next.js routing and middleware',
		'Next.js performance optimization',
		'AI interview coaching',
		'frontend and backend prep',
	],

	referrer: 'origin-when-cross-origin',
	creator: 'InterViewPrep Team',
	publisher: 'InterViewPrep Inc.',

	formatDetection: {
		email: true,
		address: false,
		telephone: true,
	},

	metadataBase: new URL(url),
	alternates: {
		canonical: '/Next',
		languages: {
			'en-US': '/en-US/Next',
			'es-ES': '/es-ES/Next',
		},
	},

	category: 'career development',

	openGraph: {
		title:
			'Next.js Interview Prep | Fullstack Interview Practice with AI Feedback',
		description:
			'Sharpen your Next.js skills with smart mock interviews. Practice routing, data fetching, API routes, and deployment with detailed AI feedback.',
		url: `${url}/Next`,
		siteName: 'InterViewPrep',
		images: [
			{
				url: '/opengraph-image.png',
				width: 1200,
				height: 630,
				alt: 'Next.js Interview Coaching with AI',
			},
		],
		locale: 'en_US',
		type: 'website',
		videos: [
			{
				url: '/Next-demo.mp4',
				width: 1280,
				height: 720,
				type: 'video/mp4',
			},
		],
	},

	twitter: {
		card: 'summary_large_image',
		title: 'Next.js Interview Practice | Master SSR, API Routes & More',
		description:
			'Practice Next.js interview scenarios with AI feedback. Learn how to tackle server-side rendering, API endpoints, and modern routing strategies.',
		site: '@InterViewPrep',
		creator: '@InterViewPrepTeam',
		images: {
			url: '/twitter-image.png',
			alt: 'Next.js Interview Simulator with AI Guidance',
			width: 1200,
			height: 675,
		},
	},

	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			'max-video-preview': 'large',
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},

	appleWebApp: {
		title: 'InterViewPrep',
		statusBarStyle: 'black-translucent',
		capable: true,
		startupImage: '/app-splash-screen.png',
	},

	verification: {
		google: 'your-google-verification-code',
		yandex: 'your-yandex-verification-code',
		me: 'your-me-verification-code',
	},

	icons: {
		icon: '/favicon.ico',
		apple: '/apple-touch-icon.png',
		other: {
			rel: 'mask-icon',
			url: '/safari-pinned-tab.svg',
			color: '#5bbad5',
		},
	},

	other: {
		'msapplication-TileColor': '#2b5797',
		'msapplication-config': '/browserconfig.xml',
		'theme-color': '#ffffff',
	},
};
