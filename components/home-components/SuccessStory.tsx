'use client';
import React from 'react';
import { testimonialsData } from '@/main/data/home/testimonialsData';
import TestimonialCard from '../utilsComponent/card-components/TestimonialCard';
import { ReusableHeading } from '../reusable-components/ReusableHeading';
import { motion } from 'framer-motion';

const SuccessStory = () => {
  // Split testimonials into 2 groups for 2 rows
  const mid = Math.ceil(testimonialsData.length / 2);
  const firstRow = testimonialsData.slice(0, mid);
  const secondRow = testimonialsData.slice(mid);

  return (
    <section className="mt-10 md:mt-14 lg:mt-20 overflow-hidden">
      <ReusableHeading heading="Inspiring Success Stories from Our Learners" description="Discover how aspiring professionals transformed their careers through dedication and our guided interview prep" />

      <div className="relative w-full mt-10 space-y-10">
        {/* First Row */}
        <motion.div
          className="flex space-x-6"
          initial={{ x: 0 }}
          animate={{ x: ['0%', '-100%'] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: 'linear',
          }}
        >
          {[...firstRow, ...firstRow].map((testimonial, index) => (
            <div key={index} className="min-w-[320px] md:min-w-[400px] lg:min-w-[450px]">
              <TestimonialCard testimonial={testimonial} index={index} />
            </div>
          ))}
        </motion.div>

        {/* Second Row (opposite direction for variety) */}
        <motion.div
          className="flex space-x-6"
          initial={{ x: 0 }}
          animate={{ x: ['-100%', '0%'] }}
          transition={{
            repeat: Infinity,
            duration: 35,
            ease: 'linear',
          }}
        >
          {[...secondRow, ...secondRow].map((testimonial, index) => (
            <div key={index} className="min-w-[320px] md:min-w-[400px] lg:min-w-[450px]">
              <TestimonialCard testimonial={testimonial} index={index} />
            </div>
          ))}
        </motion.div>

        {/* Gradient Fades */}
        <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default SuccessStory;
