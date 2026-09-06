'use client';
import React from 'react';
import Hero from '../home-components/home-hero/Hero';
import Features from '../home-components/Features';
import SuccessStory from '../home-components/SuccessStory';
import JoinCommunity from '../home-components/JoinCommunity';
import AskQuestion from '../home-components/AskQuestion';
import Footer from '@/components/layout-components/Footer';

const HomeContainer = () => {
  return (
    <div className="max-w-7xl m-auto px-1 md:px-4 lg:px-0">
      <Hero />
      <Features />
      <SuccessStory />
      <JoinCommunity />
      <AskQuestion />
      <Footer />
    </div>
  );
};

export default HomeContainer;


