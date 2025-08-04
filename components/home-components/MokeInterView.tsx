import React from 'react';
import MockInterviewRight from './MockInterviewRight';
import MockInterviewLeft from './MockInterviewLeft';
import { ReusableHeading } from '../reusable-components/ReusableHeading';

const MockInterview: React.FC = () => {
  return (
    <section id="mockInterviews" className="py-20 ">
      <ReusableHeading
        heading="Mock Interviews with AI for Practice & Progress"
        description="Practice common and role-specific questions in real-time with AI feedback to build confidence and refine your answers"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        {/* Enhanced Interview Demo */}
        <MockInterviewLeft />

        {/* Enhanced Features Section */}
        <MockInterviewRight />
      </div>
    </section>
  );
};

export default MockInterview;
