import { Metadata } from 'next';
import { codingKeywords } from './keywords';
import { url } from './LayoutMetadata';

export const CodingMetaData: Metadata = {
  title: 'Sharpen Your Problem-Solving with AI Coaching',
  description:
    'Ace coding interviews with our AI-powered platform. Practice data structures, algorithms, and system design questions with real-time feedback and personalized insights.',
  keywords: codingKeywords,
  alternates: {
    canonical: '/coding',
    languages: {
      'en-US': '/en-US/coding',
      'es-ES': '/es-ES/coding',
    },
  },
  openGraph: {
    title: 'Coding Interview Practice & DSA, Algorithms & System Design with AI',
    description:
      'Practice live coding interviews with instant AI feedback. Conquer algorithms, optimize solutions, and grow your confidence for real tech interviews.',
    url: `${url}/coding`,
    siteName: 'InterViewPrep',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'AI-Powered Coding Interview Practice',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Coding Interview Practice & DSA, Algorithms & System Design with AI',
    description:
      'Improve your coding interview performance with adaptive AI feedback. Handle data structures, algorithms, and system design with confidence.',
    site: '@InterViewPrep',
    creator: '@InterViewPrepTeam',
    images: {
      url: '/twitter-image.png',
      alt: 'DSA & Coding Interview AI Coach',
      width: 1200,
      height: 675,
    },
  },
};
