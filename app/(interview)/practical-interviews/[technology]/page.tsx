'use client';
import React from 'react';
import { notFound, useParams } from 'next/navigation';
import { ReusableTechnologyCard } from '@/components/utilsComponent/card-components/ReusableTechnologyCard';
import { useGetInterviewsByTechnologyQuery } from '@/main/redux-toolkit/services/practical-interviews/practicalInterviewApi';
import { useInterviewFilters } from '@/main/hooks/useInterviewFiltersHook';
import { TechnologyHeader } from '@/components/practical-interview-components/TechnologyHeader';
import { TechnologySkeleton } from '@/components/utilsComponent/skeleton-components/TechnologySkeleton';
import { IPracticalInterview } from '../../../../main/types/practical-interview.types';
import { TechnologyHeaderSkeleton } from '@/components/utilsComponent/skeleton-components/TechnologyHeaderSkeleton';

const PracticalInterviewContainer = () => {
  const { technology } = useParams() as { technology?: string };

  if (!technology) {
    notFound();
  }

  const { category, difficulty } = useInterviewFilters();

  const { data, isLoading, isFetching, error } = useGetInterviewsByTechnologyQuery(
    { technology, category, difficulty },
    {  refetchOnMountOrArgChange: true,
}
  );

  const isBusy = isLoading || isFetching;
  const interviews = data?.data ?? [];

  return (
    <section>
      <div className="min-h-20">{isBusy ? <TechnologyHeaderSkeleton /> : interviews.length > 18 && <TechnologyHeader />}</div>

      <div className="mt-4 grid grid-cols-1 gap-4 w-full justify-items-center p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {isBusy && Array.from({ length: 20 }).map((_, index) => <TechnologySkeleton key={index} />)}

        {!isBusy && error && (
          <div className="col-span-full py-12 text-center text-red-500">
            <div className="mb-2 text-3xl">⚠️</div>
            <h3 className="text-xl font-semibold">Network Error</h3>
            <p className="mt-2">Failed to load interviews. Please try again later.</p>
          </div>
        )}

        {!isBusy && !error && interviews.length === 0 && (
          <div className="col-span-full py-12 text-center text-gray-400">
            <div className="mb-2 text-3xl">🔍</div>
            <h3 className="text-xl font-semibold">No Interviews Found</h3>
            <p className="mt-2">
              No interviews found for <strong>{category || 'all categories'}</strong> /<strong>{difficulty || 'all levels'}</strong>
            </p>
          </div>
        )}

        {!isBusy &&
          !error &&
          interviews.map((interview: IPracticalInterview) => (
            <div key={interview._id} className="h-full">
              <ReusableTechnologyCard interview={interview} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default PracticalInterviewContainer;
