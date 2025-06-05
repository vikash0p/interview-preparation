'use client';
import React from 'react';
import LeftHero from './LeftHero';
import RightHero from './RightHero';

const Hero = () => {
	return (
		<section className='w-full flex flex-col gap-4 lg:flex-row items-center justify-between h-full py-4 lg:py-10 xl:py-24 max-w-7xl m-auto px-2 '>
			<LeftHero />
			<RightHero />
		</section>
	);
};

export default Hero;
