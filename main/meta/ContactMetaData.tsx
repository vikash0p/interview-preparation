import { Metadata } from 'next';
import { url } from './LayoutMetadata';
import { contactKeywords } from './keywords';

export const ContactMetaData: Metadata = {
  title: 'Talk to Our AI Interview Coaching Team',
  description:
    'Have questions or feedback? Get in touch with the InterViewPrep team. We’re here to help you master interviews with personalized AI support.',
  keywords: contactKeywords,
  alternates: {
    canonical: '/contact',
    languages: {
      'en-US': '/en-US/contact',
      'es-ES': '/es-ES/contact',
    },
  },

  openGraph: {
    title: 'Reach Our Support & Coaching Team',
    description:
      'We’re here to assist you on your interview prep journey. Reach out for support, partnership, or coaching help.',
    url: `${url}/contact`,
    siteName: 'InterViewPrep',
    images: [
      {
        url: '/opengraph-image.png',
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
    title: 'Support, Feedback & Business Inquiries',
    description:
      'Have a question or want to work with us? Contact the InterViewPrep team — we’re here to help you succeed.',
    site: '@InterViewPrep',
    creator: '@InterViewPrepTeam',
    images: {
      url: '/twitter-image.png',
      alt: 'Contact InterViewPrep - We’re Here to Help',
      width: 1200,
      height: 675,
    },
  },
};
