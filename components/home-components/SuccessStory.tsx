import React from 'react';
import { testimonialsData } from '@/main/data/home/testimonialsData';
import TestimonialCard from '../utilsComponent/card-components/TestimonialCard';
import { ReusableHeading } from '../reusable-components/ReusableHeading';
const SuccessStory = () => {
  return (
    <section className="mt-10 md:mt-14 lg:mt-20">
      <ReusableHeading
        heading="Inspiring Success Stories from Our Learners"
        description="Discover how aspiring professionals transformed their careers through dedication and our guided interview prep"
      />

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} index={index} />
        ))}
      </div>
    </section>
  );
};

export default SuccessStory;
