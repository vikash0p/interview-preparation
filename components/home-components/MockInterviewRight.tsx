import React from 'react';
import MockInterviewCard from '../utilsComponent/card-components/MockInterviewCard';
import { interviewFeatures } from '@/main/data/home/mockInterviewData';
import { FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'next-view-transitions';

const MockInterviewRight = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {interviewFeatures.map((feature, index) => (
          <MockInterviewCard key={index} {...feature} />
        ))}
      </div>

      <Link href="/ai-interview"
      className="w-full text-white text-lg bg-indigo-600 hover:bg-indigo-700 py-4 rounded-md transition-colors mt-8 font-medium flex items-center justify-center gap-2">
        <FaCalendarAlt />
        Schedule Interview
      </Link>
    </div>
  );
};

export default MockInterviewRight;
