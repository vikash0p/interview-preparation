'use client';
import { featuresData } from '@/main/data/home/featuresData';
import React from 'react';
import FeatureCard from '../utilsComponent/card-components/FeatureCard';
import { ReusableHeading } from '../reusable-components/ReusableHeading';

const Features = () => {
  return (
    <section className="mt-10 md:mt-14 lg:mt-20 ">
      <ReusableHeading
        heading="Master Your Interview Preparation"
        description="Everything you need to succeed in your next interview — from preparation tips to real-world practice"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuresData.map(feature => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
