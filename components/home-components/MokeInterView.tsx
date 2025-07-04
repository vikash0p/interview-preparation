import React from 'react';
import ReusableHeading from '../reusable-components/ReusableHeading';
import MockInterviewRight from './MockInterviewRight';
import MockInterviewLeft from './MockInterviewLeft';

const MockInterview: React.FC = () => {
	return (
		<section id='mockInterviews' className='py-20 '>
			<ReusableHeading
				heading='Mock Interviews with AI for Practice & Progress'
				description='Enhance your interview skills with our AI-powered mock interviews.'
			/>

			<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 '>
				{/* Enhanced Interview Demo */}
				<MockInterviewLeft />

				{/* Enhanced Features Section */}
				<MockInterviewRight />
			</div>
		</section>
	);
};

export default MockInterview;
