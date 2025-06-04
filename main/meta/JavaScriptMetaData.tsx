import { Metadata } from 'next';

const url =
	process.env.NEXT_PUBLIC_BASE_URL || 'https://interview-prap.vercel.app';

export const JavaScriptMetaData: Metadata = {
	title:
		'JavaScript Interview Prep | Master JavaScript Interviews with AI Coaching',
	description:
		'Crack JavaScript interviews with confidence. Practice technical questions, coding challenges, and get personalized AI feedback tailored to your skill level.',

	applicationName: 'InterViewPrep',
	authors: [{ name: 'InterViewPrep Team', url: url }],
	generator: 'Next.js',

	keywords: [
		'JavaScript interview questions',
		'JavaScript coding practice',
		'JavaScript job preparation',
		'technical interview coaching',
		'JavaScript data structures',
		'frontend interview preparation',
		'JS mock interviews',
		'JavaScript coding challenges',
		'React interview prep',
		'algorithm and coding questions',
		'JavaScript developer career',
		'AI interview practice',
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
		canonical: '/Javascript',
		languages: {
			'en-US': '/en-US/javascript',
			'es-ES': '/es-ES/javascript',
		},
	},

	category: 'career development',

	openGraph: {
		title: 'JavaScript Interview Prep | AI-Powered Coaching & Feedback',
		description:
			'Sharpen your JavaScript skills with our AI-driven platform. Real-world questions, live coding practice, and expert feedback to help you land your next job.',
		url: `${url}/Javascript`,
		siteName: 'InterViewPrep',
		images: [
			{
				url: '/opengraph-image.png',
				width: 1200,
				height: 630,
				alt: 'JavaScript Interview Practice with AI Coaching',
			},
		],
		locale: 'en_US',
		type: 'website',
		videos: [
			{
				url: '/javascript-demo.mp4',
				width: 1280,
				height: 720,
				type: 'video/mp4',
			},
		],
	},

	twitter: {
		card: 'summary_large_image',
		title: 'JavaScript Interview Prep | AI Feedback & Practice',
		description:
			'Practice JavaScript coding questions with AI feedback. Get actionable tips, improve your skills, and prepare with confidence.',
		site: '@InterViewPrep',
		creator: '@InterViewPrepTeam',
		images: {
			url: '/twitter-image.png',
			alt: 'Practice JavaScript Interviews with Real-Time AI Feedback',
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

	other: {
		'msapplication-TileColor': '#2b5797',
		'msapplication-config': '/browserconfig.xml',
		'theme-color': '#ffffff',
	},
};
