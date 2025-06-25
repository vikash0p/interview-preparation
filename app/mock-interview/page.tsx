'use client';
import React from 'react';
import { interviewCategories } from '@/main/data/common/interviewData';
import ReusableHeading from '@/components/reusable-components/ReusableHeading';
import InterviewCard from '@/components/utilsComponent/card-components/InterviewCard';

const Interview = () => {
	return (
		<main className='min-h-screen px-4 py-16 text-white'>
			<section className='max-w-6xl mx-auto'>
				<ReusableHeading
					heading='Interview Categories'
					description='Choose your area to start preparing for real-world interview questions.'
				/>

				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
					{interviewCategories.map((topic, index) => (
						<InterviewCard
							key={index}
							name={topic.name}
							href={topic.href}
							icon={topic.icon}
							comingSoon={topic.comingSoon}
							animationDelay={index * 0.1}
							actionLevel={topic.actionLabel}
						/>
					))}
				</div>
			</section>
		</main>
	);
};

export default Interview;
