import { Metadata } from 'next';
import { layoutKeywords } from './keywords';
import { appleWebApp } from './appleWebApp';

export const url = Object.freeze(process.env.NEXT_PUBLIC_BASE_URL || 'https://interview-prap.vercel.app');

export const LayoutMeta: Metadata = {
  title: {
    default: 'InterViewPrep  ',
    template: 'InterViewPrep - %s   ',
  },
  description:
    'Comprehensive interview preparation platform with AI-powered mock interviews, personalized feedback, and industry-specific question banks.',
  applicationName: 'InterViewPrep',
  authors: [{ name: 'InterViewPrep Team', url: url }],
  generator: 'Next.js',
  keywords: layoutKeywords,
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
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // opengraph metadata
  openGraph: {
    title: 'InterViewPrep AI-Powered Interview Coaching',
    description:
      'AI-powered interview coaching with real-time feedback. Practice with 10,000+ questions across 50+ industries and job levels.',
    url: url,
    siteName: 'InterViewPrep',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'InterViewPrep - Transform Your Interview Performance',
      },
      {
        url: '/opengraph-image.png',
        width: 1600,
        height: 900,
        alt: 'InterViewPrep - AI-Powered Interview Coaching',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  // twitter metadata
  twitter: {
    card: 'summary_large_image',
    title: 'InterViewPrep AI-Powered Interview Coaching',
    description:
      'Get interview-ready with our smart platform. Practice, get feedback, and gain confidence for your next career move.',
    site: '@InterViewPrep',
    creator: '@InterViewPrepTeam',
    images: {
      url: '/twitter-image.png',
      alt: 'InterViewPrep - Your Interview Success Partner',
      width: 1200,
      height: 675,
    },
  },

  appleWebApp: appleWebApp,

  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    me: 'your-me-verification-code',
  },
};
