'use client';
import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Domains from './Domains';
import Practice from './Practice';
import MokeInterView from './MokeInterView';
import Resources from './Resources';
import SuccessStory from './SuccessStory';
import JoinCommunity from './JoinCommunity';
import AskQuestion from './AskQuestion';
import Footer from '@/components/layout-components/Footer';

const HomeContainer = () => {
  return (
    <div className="max-w-7xl m-auto px-1 md:px-4 lg:px-0">
      <Hero />
      <Features />
      <Domains />
      <Practice />
      <MokeInterView />
      <Resources />
      <SuccessStory />
      <JoinCommunity />
      <AskQuestion />
      <Footer />
    </div>
  );
};

export default HomeContainer;
