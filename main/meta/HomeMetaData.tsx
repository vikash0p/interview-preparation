import { Metadata } from 'next';

const url =
	process.env.NEXT_PUBLIC_BASE_URL || 'https://interview-prap.vercel.app';

export const HomeMetaData: Metadata = {
	title: 'InterViewPrep | Master Your Job Interviews with AI Coaching',
	description:
		'Boost your interview success rate with our AI-powered platform. Practice mock interviews, get personalized feedback, and access 10,000+ questions tailored to your industry and experience level.',

	// Keep existing application info
	applicationName: 'InterViewPrep',
	authors: [{ name: 'InterViewPrep Team', url: url }],
	generator: 'Next.js',

	// Enhanced keywords
	keywords: [
		'AI interview practice',
		'job interview simulator',
		'career coaching platform',
		'behavioral interview preparation',
		'technical interview questions',
		'interview skills training',
		'career growth',
		'interview feedback analysis',
		'salary negotiation strategies',
		'job search assistance',
		'interview anxiety reduction',
		'competency-based interview practice',
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
		canonical: '/',
		languages: {
			'en-US': '/en-US',
			'es-ES': '/es-ES',
		},
	},

	category: 'career development',

	// Enhanced OpenGraph for homepage
	openGraph: {
		title: 'InterViewPrep | AI-Powered Interview Success Platform',
		description:
			'Practice with intelligent mock interviews that adapt to your responses. Get real-time feedback on your answers, body language, and communication style.',
		url: url,
		siteName: 'InterViewPrep',
		images: [
			{
				url: '/home-og-image.png', // Consider a homepage-specific image
				width: 1200,
				height: 630,
				alt: 'InterViewPrep - Transform Interview Anxiety into Confidence',
			},
			{
				url: '/home-og-image-wide.png',
				width: 1600,
				height: 900,
				alt: 'InterViewPrep - The Smart Way to Prepare for Interviews',
			},
		],
		locale: 'en_US',
		type: 'website',
		// Added optional OG parameters
		videos: [
			{
				url: '/homepage-demo.mp4',
				width: 1280,
				height: 720,
				type: 'video/mp4',
			},
		],
	},

	// Enhanced Twitter metadata
	twitter: {
		card: 'summary_large_image',
		title: 'InterViewPrep - Practice Interviews with AI Feedback',
		description:
			'Our AI analyzes your responses like a hiring manager would. Get detailed reports on how to improve after every practice session.',
		site: '@InterViewPrep',
		creator: '@InterViewPrepTeam',
		images: {
			url: '/home-twitter-card.png', // Homepage-specific Twitter image
			alt: 'AI Interview Practice Platform with Real-time Feedback',
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

	// App-related metadata
	appleWebApp: {
		title: 'InterViewPrep',
		statusBarStyle: 'black-translucent',
		capable: true,
		startupImage: '/app-splash-screen.png', // Added startup image
	},

	verification: {
		google: 'your-google-verification-code',
		yandex: 'your-yandex-verification-code',
		me: 'your-me-verification-code',
	},


	other: {
		'msapplication-TileColor': '#2b5797', // Changed to a more professional blue
		'msapplication-config': '/browserconfig.xml',
		'theme-color': '#ffffff',
	},
};
