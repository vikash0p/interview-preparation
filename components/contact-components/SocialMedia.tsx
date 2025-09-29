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
    <div className="bg-gray-950/60 backdrop-blur-sm p-8 rounded-xl border border-gray-800 shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-gray-200">Stay Connected</h3>
      <div className="grid grid-cols-2  gap-4">
        {socialLinks.map((link, index) => (
          <Link key={index} href={link.url} className="flex flex-col items-center justify-center gap-2 p-5 bg-gray-900/70 rounded-lg border border-gray-700 hover:border-indigo-500 hover:bg-gray-800/80 transition-all duration-300 transform hover:scale-105 group">
            <span className="text-3xl text-gray-400 group-hover:text-indigo-400 transition-colors">{link.icon}</span>
            <span className="font-medium text-gray-300 group-hover:text-indigo-300">{link.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
