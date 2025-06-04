import { Metadata } from 'next';

const url =
	process.env.NEXT_PUBLIC_BASE_URL || 'https://interview-prap.vercel.app';

export const ReactMetaData: Metadata = {
	title: 'React Interview Prep | Ace React Interviews with AI Coaching',
	description:
		'Master React job interviews with AI-powered mock sessions. Practice real-world scenarios, get personalized feedback, and build confidence in your React skills.',

	applicationName: 'InterViewPrep',
	authors: [{ name: 'InterViewPrep Team', url: url }],
	generator: 'Next.js',

	keywords: [
		'React interview questions',
		'React hooks practice',
		'React job preparation',
		'frontend developer interview',
		'React mock interviews',
		'React coding challenges',
		'component architecture',
		'state management interview',
		'React performance optimization',
		'React developer career',
		'React interview tips',
		'AI React interview simulator',
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
		canonical: '/React',
		languages: {
			'en-US': '/en-US/react',
			'es-ES': '/es-ES/react',
		},
	},

	category: 'career development',

	openGraph: {
		title: 'React Interview Prep | Practice with AI & Real Feedback',
		description:
			'Train for React interviews with adaptive AI coaching. Handle hooks, state, lifecycle methods, and architecture challenges with real-time insights.',
		url: `${url}/react`,
		siteName: 'InterViewPrep',
		images: [
			{
				url: '/opengraph-image.png',
				width: 1200,
				height: 630,
				alt: 'React Interview Practice with AI Guidance',
			},
		],
		locale: 'en_US',
		type: 'website',
		videos: [
			{
				url: '/react-demo.mp4',
				width: 1280,
				height: 720,
				type: 'video/mp4',
			},
		],
	},

	twitter: {
		card: 'summary_large_image',
		title: 'React Interview Practice | AI Feedback & Real-Time Coaching',
		description:
			'Nail your next React interview. Get AI analysis on your responses, handle component design and state management questions like a pro.',
		site: '@InterViewPrep',
		creator: '@InterViewPrepTeam',
		images: {
			url: '/twitter-image.png',
			alt: 'AI-Powered React Interview Platform',
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
