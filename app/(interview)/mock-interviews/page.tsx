import {ReusableInterviewCard} from '@/components/utilsComponent/card-components/ReusableInterviewCard';
import { MOCK_INTERVIEWS_DATA } from '@/main/data/link/mockTechnologiesData';
import React from 'react';

const MockInterviews = () => {
  const mock = MOCK_INTERVIEWS_DATA[0];

  if (!mock) return null;

  const sortedTechnologies = [...mock.technologies].sort((a, b) => Number(a.comingSoon) - Number(b.comingSoon));

  return (
    <div className="max-w-7xl m-auto mt-10 px-1 md:px-4 lg:px-0">
      <section className="relative rounded-3xl p-8 pb-14">
        <div className="relative z-10 flex flex-col items-center gap-5 text-center">
          <div className="rounded-2xl bg-white/5 p-5 text-4xl shadow-inner">{mock.icon}</div>

          <h2 className="font-mono text-2xl font-semibold uppercase tracking-wide text-gray-200 md:text-3xl">{mock.actionLabel}</h2>

          <div className="h-1 w-32 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
        </div>

        <div className="relative z-10 mt-10 flex flex-wrap justify-center gap-8">
          {sortedTechnologies.map(technology => (
            <ReusableInterviewCard key={technology.id} technology={technology} href={technology.comingSoon ? '#' : `/mock-interviews/${technology.slug}`} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MockInterviews;
