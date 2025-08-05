import React from 'react';
import {ReusableInterviewCard} from '@/components/utilsComponent/card-components/ReusableInterviewCard';
import { PRACTICAL_INTERVIEWS_DATA } from '@/main/data/link/practicalTechnologiesData';
import { ReusableHeading } from '@/components/reusable-components/ReusableHeading';

const PracticalInterviews = () => {
  return (
    <div className=" px-4 flex flex-col gap-4 mb-12">
      <ReusableHeading
        heading="Hands-On Coding Practice"
        description="Sharpen your problem-solving skills with real-world coding assessments across JavaScript, React, Node.js, and more."
      />

      <div className="flex flex-wrap justify-center gap-14">
        {PRACTICAL_INTERVIEWS_DATA.map(value => {
          return (
            <section className="bg-gray-950/60 p-6 pb-12 rounded-2xl space-y-10 w-full" key={value.id}>
              <div className="text-center flex flex-col items-center gap-4">
                <div className="text-3xl bg-white/10 p-4 rounded-full">{value.icon} </div>
                <h2 className="text-3xl font-medium font-mono bg-clip-text  text-gray-300  pb-2 uppercase">
                  {value.actionLabel}
                </h2>
                <div className="w-48 h-1 bg-gray-400 mx-auto rounded-full" />
              </div>
              <div className="flex flex-wrap gap-6 justify-center">
                {value.technologies.map(technology => {
                  return (
                    <ReusableInterviewCard
                      key={technology.id}
                      technology={technology}
                      href={`/practical-interviews/${technology.slug}`}
                    />
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default PracticalInterviews;
