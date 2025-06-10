'use client';
import React from 'react';
import ReusableHeading from '../reusable-components/ReusableHeading';
import PracticeFeatures from "./PracticeFeatures";
import InteractiveEditor from "./InteractiveEditor";

const Practice = () => {
	return (
		<section id='practiceArea' className='py-20'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<ReusableHeading
					heading='Practice Area'
					description='Interactive coding environment and problem-solving platform'
				/>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<InteractiveEditor />
					<PracticeFeatures />
				</div>
			</div>
		</section>
	);
};

export default Practice;
