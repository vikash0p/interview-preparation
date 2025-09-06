'use client';
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const footerData = {
  description: {
    title: 'InterviewPrep',
    text: 'Your trusted resource for cracking interviews with confidence — practice, learn, and grow with us.',
  },
  socialLinks: [
    { href: 'https://facebook.com', icon: FaFacebookF, label: 'Facebook' },
    { href: 'https://twitter.com', icon: FaTwitter, label: 'Twitter' },
    { href: 'https://linkedin.com', icon: FaLinkedinIn, label: 'LinkedIn' },
  ],
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'Practical Interview', href: '/practical-interviews' },
    { label: 'Mock Interviews', href: '/mock-interviews' },
    { label: 'interview with ai', href: '/ai-interview' },
  ],
  support: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Tips & Guides', href: '/tips-&-guides' },
    { label: 'Contact Us', href: '/contact' },
  ],
  contact: [
    { label: 'support@interviewprep.com', icon: FaEnvelope },
    { label: '+91 8448925560', icon: FaPhoneAlt },
    { label: 'House no 225, sector 34, Faridabad Haryana 121003', icon: FaMapMarkerAlt },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white font-mono">{footerData.description.title}</h3>
          <p className="text-sm">{footerData.description.text}</p>
          <div className="flex space-x-4">
            {footerData.socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a key={index} href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600 text-gray-400 hover:text-white transition-colors">
                  <IconComponent className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {footerData.quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:text-gray-300 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-2">
            {footerData.support.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:text-indigo-400 transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3">
            {footerData.contact.map((info, index) => {
              const Icon = info.icon;
              return (
                <li key={index} className="flex items-center space-x-2">
                  <Icon className="text-gray-400 h-4 w-4" />
                  <span>{info.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 py-6">
        <div className="">
          <p className="text-sm text-center">© 2025 InterviewPrep. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
