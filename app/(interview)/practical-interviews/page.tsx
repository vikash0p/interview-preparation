import React from 'react';
import { ReusableInterviewCard } from '@/components/utilsComponent/card-components/ReusableInterviewCard';
import { PRACTICAL_INTERVIEWS_DATA } from '@/main/data/link/practicalTechnologiesData';
import { ReusableHeading } from '@/components/reusable-components/ReusableHeading';

const PracticalInterviews = () => {
  return (
    <div className="px-4 flex flex-col gap-4 mb-12">
      <ReusableHeading heading="Hands-On Coding Practice" description="Sharpen your problem-solving skills with real-world coding assessments across JavaScript, React, Node.js, and more." />

      <div className="flex flex-wrap justify-center gap-14">
        {PRACTICAL_INTERVIEWS_DATA.map(practical => {
          // Sort technologies: available first, comingSoon later
          const sortedTechnologies = [...practical.technologies].sort((a, b) => {
            return Number(a.comingSoon) - Number(b.comingSoon);
          });

          return (
            <section className="bg-gray-950/60 p-6 pb-12 rounded-2xl space-y-10 w-full" key={practical.id}>
              <div className="text-center flex flex-col items-center gap-4">
                <div className="text-3xl bg-white/10 p-4 rounded-full">{practical.icon}</div>
                <h2 className="text-3xl font-medium font-mono bg-clip-text text-gray-300 pb-2 uppercase">{practical.actionLabel}</h2>
                <div className="w-48 h-1 bg-gray-400 mx-auto rounded-full" />
              </div>

              <div className="flex flex-wrap gap-6 justify-center">
                {sortedTechnologies.map(technology => (
                  <ReusableInterviewCard
                    key={technology.id}
                    technology={technology}
                    href={
                      technology.comingSoon
                        ? '#' // disabled or placeholder
                        : `/practical-interviews/${technology.slug}`
                    }
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default PracticalInterviews;
