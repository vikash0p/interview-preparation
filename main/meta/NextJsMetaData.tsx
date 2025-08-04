import { Metadata } from 'next';
import { nextjsKeywords } from './keywords';
import { url } from './LayoutMetadata';

export const NextJsMetaData: Metadata = {
  title: 'Next.js Interview Preparation ',
  description:
    'Prepare for Next.js interviews with our AI-driven platform. Practice real questions on SSR, API routes, routing, and deployment, with personalized feedback.',
  keywords: nextjsKeywords,
  alternates: {
    canonical: '/Next',
    languages: {
      'en-US': '/en-US/Next',
      'es-ES': '/es-ES/Next',
    },
  },

  openGraph: {
    title: 'Next.js Interview Preparation ',
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
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Interview Practice with SSR, API Routes & More',
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
};
