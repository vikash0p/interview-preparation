import MockInterviewCard from '@/components/mock-interviews-components/MockInterviewCard';
import ReusableHeading from '@/components/reusable-components/ReusableHeading';
import { MOCK_INTERVIEWS_DATA } from '@/main/data/common/mockData';
import React from 'react';

const MockInterviews = () => {
	return (
		<section className='max-w-7xl mx-auto h-screen flex flex-col gap-6 items-center'>
			<ReusableHeading
				heading='Mock Interview Questions'
				description='Practice real-time mock interviews powered by AI. Get instant feedback and improve your responses for top tech interviews.'
			/>
			{/* Flexbox wrapper */}
			<div className='flex flex-wrap justify-center gap-6 w-full'>
				{MOCK_INTERVIEWS_DATA.map((item, index) => (
					<MockInterviewCard key={index} {...item} />
				))}
			</div>
		</section>
	);
};

export default MockInterviews;
