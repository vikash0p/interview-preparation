import InterviewCard from '@/components/card-components/InterviewCard';
import ReusableHeading from '@/components/reusable-components/ReusableHeading';
import { practicalChallengesData } from '@/main/data/common/practicalChallengesData';
import React from 'react';

const Practical = () => {
	return (
		<main className='min-h-screen px-4 py-16 text-white'>
			<section className='max-w-6xl mx-auto'>
				<ReusableHeading
					heading='Hands-On Coding Practice'
					description='Sharpen your problem-solving skills with real-world coding assessments across JavaScript, React, Node.js, and more.'
				/>

				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
					{practicalChallengesData.map((topic, index) => (
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

export default Practical;
