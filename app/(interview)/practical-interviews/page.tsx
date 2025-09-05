import React from 'react';
import { ReusableInterviewCard } from '@/components/utilsComponent/card-components/ReusableInterviewCard';
import { PRACTICAL_INTERVIEWS_DATA } from '@/main/data/link/practicalTechnologiesData';
import { ReusableHeading } from '@/components/reusable-components/ReusableHeading';

const PracticalInterviews = () => {
  return (
    <div className="px-4 flex flex-col gap-10 mb-16">
      <ReusableHeading heading="Hands-On Coding Practice" description="Sharpen your problem-solving skills with real-world coding assessments across JavaScript, React, Node.js, and more." />

      <div className="flex flex-col gap-14">
        {PRACTICAL_INTERVIEWS_DATA.map(practical => {
          const sortedTechnologies = [...practical.technologies].sort((a, b) => Number(a.comingSoon) - Number(b.comingSoon));

          return (
            <section
              key={practical.id}
              className="relative bg-gray-950/60
                         border border-gray-700 rounded-3xl
                         p-8 pb-14 shadow-2xl
                         hover:shadow-gray-950 transition-all duration-300"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top_left,#6366f110,transparent)] pointer-events-none" />

              {/* Section heading */}
              <div className="relative z-10 text-center flex flex-col items-center gap-5">
                <div className="text-4xl bg-white/5 p-5 rounded-2xl shadow-inner">{practical.icon}</div>
                <h2 className="text-2xl md:text-3xl font-semibold font-mono text-gray-200 uppercase tracking-wide">{practical.actionLabel}</h2>
                <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
              </div>

              {/* Tech cards */}
              <div className="relative z-10 mt-10 flex flex-wrap gap-8 justify-center">
                {sortedTechnologies.map(technology => (
                  <ReusableInterviewCard key={technology.id} technology={technology} href={technology.comingSoon ? '#' : `/practical-interviews/${technology.slug}`} />
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
