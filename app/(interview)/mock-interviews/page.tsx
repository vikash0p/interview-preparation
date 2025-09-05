import { ReusableHeading } from '@/components/reusable-components/ReusableHeading';
import {ReusableInterviewCard} from '@/components/utilsComponent/card-components/ReusableInterviewCard';
import { MOCK_INTERVIEWS_DATA } from '@/main/data/link/mockTechnologiesData';
import React from 'react';

const MockInterviews = () => {
  return (
    <section className="px-4 flex flex-col gap-6 mb-16 w-full">
      <ReusableHeading
        heading="Mock Interview Questions"
        description="Practice real-time mock interviews powered by AI. Get instant feedback and improve your responses for top tech interviews."
      />
      {/* Flexbox wrapper */}
      <div className="flex flex-wrap justify-center gap-14">
        {MOCK_INTERVIEWS_DATA.map(value => {
          return (
            <section
              className="bg-gradient-to-t w-full border border-gray-700 from-gray-900/10 to-gray-950 p-6 pb-12 rounded-2xl  shadow-2xl space-y-10"
              key={value.id}
            >
              <div className="text-center flex flex-col items-center gap-4">
                <div className="text-3xl bg-white/10 p-4 rounded-full">{value.icon} </div>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-400 pb-2 uppercase">
                  {value.actionLabel}
                </h2>
                <div className="w-48 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
              </div>
              <div className="flex flex-wrap gap-6 justify-center">
                {value.technologies.map(technology => {
                  return (
                    <ReusableInterviewCard
                      key={technology.id}
                      technology={technology}
                      href={`/mock-interviews/${technology.slug}`}
                    />
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default MockInterviews;
