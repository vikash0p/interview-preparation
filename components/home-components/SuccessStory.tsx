import React from 'react';
import { testimonialsData } from '@/main/data/common/testimonialsData';
import TestimonialCard from '../utilsComponent/card-components/TestimonialCard';
import ReusableHeading from '../reusable-components/ReusableHeading';

const SuccessStory = () => {
	return (
		<section id='testimonials' className='py-20'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Heading and Description */}
				<ReusableHeading
					heading='Success Stories'
					description='Hear from our successful candidates'
				/>

				{/* Testimonials Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{testimonialsData.map((testimonial, index) => (
						<TestimonialCard
							key={index}
							testimonial={testimonial}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default SuccessStory;
