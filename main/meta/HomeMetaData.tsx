import { Metadata } from 'next';
import { homeKeywords } from './keywords';
import { url } from './LayoutMetadata';

export const HomeMetaData: Metadata = {
  title: {
    absolute: 'InterViewPrep - AI-Powered Interview preparation platform',
  },
  description:
    'Boost your interview success rate with our AI-powered platform. Practice mock interviews, get personalized feedback, and access 10,000+ questions tailored to your industry and experience level.',
  keywords: homeKeywords,

  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'es-ES': '/es-ES',
    },
  },

  // Enhanced OpenGraph for homepage
  openGraph: {
    title: 'InterViewPrep AI-Powered Interview Coaching',
    description:
      'Practice with intelligent mock interviews that adapt to your responses. Get real-time feedback on your answers, body language, and communication style.',
    url: url,
    siteName: 'InterViewPrep',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'InterViewPrep - Transform Interview Anxiety into Confidence',
      },
      {
        url: '/opengraph-image.png',
        width: 1600,
        height: 900,
        alt: 'InterViewPrep - The Smart Way to Prepare for Interviews',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Enhanced Twitter metadata
  twitter: {
    card: 'summary_large_image',
    title: 'InterViewPrep AI-Powered Interview Coaching',
    description:
      'Our AI analyzes your responses like a hiring manager would. Get detailed reports on how to improve after every practice session.',
    site: '@InterViewPrep',
    creator: '@InterViewPrepTeam',
    images: {
      url: '/twitter-image.png',
      alt: 'AI Interview Practice Platform with Real-time Feedback',
      width: 1200,
      height: 675,
    },
  },
};
