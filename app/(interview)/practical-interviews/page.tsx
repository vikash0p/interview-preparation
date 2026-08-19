import React from 'react';
import { ReusableInterviewCard } from '@/components/utilsComponent/card-components/ReusableInterviewCard';
import { PRACTICAL_INTERVIEWS_DATA } from '@/main/data/link/practicalTechnologiesData';

const PracticalInterviews = () => {
  
  const practical = PRACTICAL_INTERVIEWS_DATA[0];

  if (!practical) return null;

  const sortedTechnologies = [...practical.technologies].sort((a, b) => Number(a.comingSoon) - Number(b.comingSoon));

  return (
    <div className="max-w-7xl m-auto px-1 md:px-4 lg:px-0 mt-10">
      <section
        className="relative  rounded-3xl p-8 pb-14 ">
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
    </div>
  );
};

export default PracticalInterviews;
