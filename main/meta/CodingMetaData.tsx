import { Metadata } from 'next';

const url =
	process.env.NEXT_PUBLIC_BASE_URL || 'https://interview-prap.vercel.app';

export const CodingMetaData: Metadata = {
	title:
		'Coding Interview Prep | Sharpen Your Problem-Solving with AI Coaching',
	description:
		'Ace coding interviews with our AI-powered platform. Practice data structures, algorithms, and system design questions with real-time feedback and personalized insights.',

	applicationName: 'InterViewPrep',
	authors: [{ name: 'InterViewPrep Team', url: url }],
	generator: 'Next.js',

	keywords: [
		'coding interview preparation',
		'data structures and algorithms',
		'DSA mock interviews',
		'system design questions',
		'technical coding assessments',
		'leetcode alternative with AI',
		'coding challenges with feedback',
		'FAANG interview prep',
		'big tech coding practice',
		'algorithm problem solving',
		'AI coding interview simulator',
		'real-time code review platform',
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
		canonical: '/coding',
		languages: {
			'en-US': '/en-US/coding',
			'es-ES': '/es-ES/coding',
		},
	},

	category: 'career development',

	openGraph: {
		title:
			'Coding Interview Practice | DSA, Algorithms & System Design with AI',
		description:
			'Practice live coding interviews with instant AI feedback. Conquer algorithms, optimize solutions, and grow your confidence for real tech interviews.',
		url: `${url}/coding`,
		siteName: 'InterViewPrep',
		images: [
			{
				url: '/coding-og-image.png',
				width: 1200,
				height: 630,
				alt: 'AI-Powered Coding Interview Practice',
			},
		],
		locale: 'en_US',
		type: 'website',
		videos: [
			{
				url: '/coding-demo.mp4',
				width: 1280,
				height: 720,
				type: 'video/mp4',
			},
		],
	},

	twitter: {
		card: 'summary_large_image',
		title: 'Coding Interview Prep | Practice DSA & Algorithms with AI',
		description:
			'Improve your coding interview performance with adaptive AI feedback. Handle data structures, algorithms, and system design with confidence.',
		site: '@InterViewPrep',
		creator: '@InterViewPrepTeam',
		images: {
			url: '/coding-twitter-card.png',
			alt: 'DSA & Coding Interview AI Coach',
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
