'use client';
import React from 'react';
import PracticeFeatures from './PracticeFeatures';
import InteractiveEditor from './InteractiveEditor';
import { ReusableHeading } from '../reusable-components/ReusableHeading';

const Practice = () => {
  return (
    <section className="mt-10 md:mt-14 lg:mt-20  ">
      <ReusableHeading
        heading="Practice Area for Coding Interviews"
        description="An interactive coding environment with real-world challenges to sharpen your problem-solving and technical skills"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <InteractiveEditor />
        <PracticeFeatures />
      </div>
    </section>
  );
};

export default Practice;
