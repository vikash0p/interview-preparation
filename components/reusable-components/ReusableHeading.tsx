'use client';
import React from 'react';
import { IReusableHeadingProps } from '@/main/types/global.types';

export const ReusableHeading = ({ heading, description }: IReusableHeadingProps) => {
	return (
		<div className='text-center  px-4 mb-8'>
			<h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-mono text-gray-400'>
				{heading}
			</h2>
			<p className='text-sm sm:text-base md:text-lg lg:text-xl  max-w-3xl mx-auto'>
				{description}
			</p>
		</div>
	);
};
