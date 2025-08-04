'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
const ContactHeader = dynamic(() => import('./ContactHeader'));
const ContactInfo = dynamic(() => import('./ContactInfo'));
const SocialMedia = dynamic(() => import('./SocialMedia'));
const ContactForm = dynamic(() => import('./ContactForm'));
const LocationMap = dynamic(() => import('./LocationMap'));

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaRegSmile,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';

const ContactContainer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sections = [
    {
      title: 'Connect With Us',
      items: [
        {
          icon: <FaPhone className="w-6 h-6" />,
          text: '+1 (555) 123-4567',
          link: 'tel:+15551234567',
        },
        {
          icon: <FaEnvelope className="w-6 h-6" />,
          text: 'support@interviewprep.com',
          link: 'mailto:support@interviewprep.com',
        },
        {
          icon: <FaMapMarkerAlt className="w-6 h-6" />,
          text: 'Tech Valley Hub\n789 Coding Blvd\nSan Francisco, CA 94107',
        },
      ],
    },
    {
      title: 'Operation Hours',
      items: [
        {
          icon: <FaClock className="w-6 h-6" />,
          text: 'Weekdays: 8:00 AM - 8:00 PM PST',
        },
        {
          icon: <FaClock className="w-6 h-6" />,
          text: 'Weekends: 10:00 AM - 6:00 PM PST',
        },
        {
          icon: <FaRegSmile className="w-6 h-6" />,
          text: '24/7 Online Support Available',
        },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, name: 'Facebook', url: '#' },
    { icon: <FaTwitter />, name: 'Twitter', url: '#' },
    { icon: <FaLinkedin />, name: 'LinkedIn', url: '#' },
    { icon: <FaGithub />, name: 'GitHub', url: '#' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen px-4 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <ContactHeader />
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-10">
            <ContactInfo sections={sections} />
            <SocialMedia socialLinks={socialLinks} />
          </div>
          <div className="space-y-10">
            <ContactForm
              formData={formData}
              setFormData={setFormData}
              submitted={submitted}
              isLoading={isLoading}
              handleSubmit={handleSubmit}
            />
            <LocationMap />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactContainer;
