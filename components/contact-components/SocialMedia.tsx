import React from 'react';
import Link from 'next/link';

interface SocialLink {
  icon: JSX.Element;
  name: string;
  url: string;
}

interface SocialMediaProps {
  socialLinks: SocialLink[];
}

const SocialMedia: React.FC<SocialMediaProps> = ({ socialLinks }) => {
  return (
    <div
   
      className="bg-gray-800/50 p-8 rounded-md border border-gray-700"
    >
      <h3 className="text-2xl font-bold mb-6 text-indigo-400">Stay Connected</h3>
      <div className="grid grid-cols-2 gap-4">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            className="flex items-center gap-3 p-4 bg-gray-700 rounded-md hover:bg-indigo-500 transition-colors"
          >
            <span className="text-2xl">{link.icon}</span>
            <span className="font-medium">{link.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
