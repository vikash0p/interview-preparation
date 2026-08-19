import React from 'react';
import LeftHero from './LeftHero';
import RightHero from './RightHero';

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-10 sm:gap-12 md:gap-14 lg:6 lg:justify-between lg:items-start pt-4 sm:pt-6 lg:pt-12  ">
      <LeftHero />
      <RightHero />
    </section>
  );
};

export default Hero;
