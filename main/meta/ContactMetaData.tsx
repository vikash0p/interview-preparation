import { Metadata } from 'next';

const url =
	process.env.NEXT_PUBLIC_BASE_URL || 'https://interview-prap.vercel.app';

export const ContactMetaData: Metadata = {
	title: 'Contact Us | InterViewPrep - Talk to Our AI Interview Coaching Team',
	description:
		'Have questions or feedback? Get in touch with the InterViewPrep team. We’re here to help you master interviews with personalized AI support.',

	applicationName: 'InterViewPrep',
	authors: [{ name: 'InterViewPrep Team', url }],
	generator: 'Next.js',

	keywords: [
		'contact InterViewPrep',
		'customer support',
		'AI coaching inquiries',
		'technical support',
		'interview preparation help',
		'platform questions',
		'contact interview training platform',
		'feedback',
		'business inquiries',
		'support team contact',
	],

	referrer: 'origin-when-cross-origin',
	creator: 'InterViewPrep Team',
	publisher: 'InterViewPrep Inc.',

	formatDetection: {
		email: true,
		address: true,
		telephone: true,
	},

	metadataBase: new URL(url),
	alternates: {
		canonical: '/contact',
		languages: {
			'en-US': '/en-US/contact',
			'es-ES': '/es-ES/contact',
		},
	},

	category: 'customer support',

	openGraph: {
		title: 'Contact InterViewPrep | Reach Our Support & Coaching Team',
		description:
			'We’re here to assist you on your interview prep journey. Reach out for support, partnership, or coaching help.',
		url: `${url}/contact`,
		siteName: 'InterViewPrep',
		images: [
			{
				url: '/contact-og-image.png',
				width: 1200,
				height: 630,
				alt: 'Get in Touch with InterViewPrep',
			},
		],
		locale: 'en_US',
		type: 'website',
	},

	twitter: {
		card: 'summary_large_image',
		title: 'Contact InterViewPrep | Support, Feedback & Business Inquiries',
		description:
			'Have a question or want to work with us? Contact the InterViewPrep team — we’re here to help you succeed.',
		site: '@InterViewPrep',
		creator: '@InterViewPrepTeam',
		images: {
			url: '/contact-twitter-card.png',
			alt: 'Contact InterViewPrep - We’re Here to Help',
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
