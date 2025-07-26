'use client';

import React from 'react';
import { PRACTICAL_INTERVIEW_DATA } from '@/main/data/practical-interview-data/practicalTechnologiesData';
import ReusableHeading from '@/components/reusable-components/ReusableHeading';
import ReusableInterviewCard from '@/components/utilsComponent/card-components/ReusableInterviewCard';

const PracticalInterviews = () => {
	const categories = Array.from(
		new Set(PRACTICAL_INTERVIEW_DATA.map((technology) => technology.category))
	);

	return (
		<div className='max-w-7xl mx-auto px-4 flex flex-col gap-4 mb-12'>
			<ReusableHeading
				heading='Hands-On Coding Practice'
				description='Sharpen your problem-solving skills with real-world coding assessments across JavaScript, React, Node.js, and more.'
			/>

			<div className='flex flex-col gap-14'>
				{categories.map((category) => {
					const filteredTech = PRACTICAL_INTERVIEW_DATA.filter(
						(technology) => technology.category === category
					);

					return (
						<section
							key={category}
							className='bg-gradient-to-t from-gray-900/10 to-gray-950 p-6 pb-12 rounded-2xl  shadow-2xl'
						>
							<div className='space-y-8'>
								<div className='text-center'>
									<h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-400 pb-2 uppercase'>
										{category}
									</h2>
									<div className='w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full' />
								</div>

								<div className='flex flex-wrap gap-6 justify-center'>
									{filteredTech.map((technology) => (
										<ReusableInterviewCard
											key={technology.id}
											technology={technology}
											href={`/practical-interviews/${technology.slug}`}
										/>
									))}
								</div>
							</div>
						</section>
					);
				})}
			</div>
		</div>
	);
};

export default PracticalInterviews;
