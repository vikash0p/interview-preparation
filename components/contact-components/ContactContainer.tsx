'use client';
import React from 'react';
import ContactHeader from './ContactHeader';
import ContactInfo from './ContactInfo';
import SocialMedia from './SocialMedia';
import LocationMap from './LocationMap';
import { socialLinks, contactDataFirst } from '@/main/data/contact/contact.data';
import ContactForm from "./ContactForm";

const ContactContainer = () => {
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <ContactHeader />
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-10">
            <ContactInfo sections={contactDataFirst} />
            <SocialMedia socialLinks={socialLinks} />
          </div>
          <div className="space-y-10">
            <ContactForm />
          </div>
        </div>
        <LocationMap />
      </div>
    </div>
  );
};

export default ContactContainer;
