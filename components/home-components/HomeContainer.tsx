'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import Hero from './Hero';

const Features = dynamic(() => import('./Features'), { ssr: false });
const Domains = dynamic(() => import('./Domains'), { ssr: false });
const Practice = dynamic(() => import('./Practice'), { ssr: false });
const MokeInterView = dynamic(() => import('./MokeInterView'), { ssr: false });
const Resources = dynamic(() => import('./Resources'), { ssr: false });
const SuccessStory = dynamic(() => import('./SuccessStory'), { ssr: false });
const JoinCommunity = dynamic(() => import('./JoinCommunity'), { ssr: false });
const AskQuestion = dynamic(() => import('./AskQuestion'), { ssr: false });
const Footer = dynamic(() => import('@/components/layout-components/Footer'), {
  ssr: false,
});

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
