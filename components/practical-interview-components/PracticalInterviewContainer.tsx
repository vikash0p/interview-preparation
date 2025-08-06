'use client';
import React  from 'react';
import { notFound, useParams, } from 'next/navigation';
import { ReusableTechnologyCard } from '@/components/utilsComponent/card-components/ReusableTechnologyCard';
import { useGetInterviewsByTechnologyQuery } from '@/main/redux-toolkit/services/practical-interviews/practicalInterviewApi';
import { IPracticalInterview } from '../../main/types/practical-interview.types';
import { TechnologySkeleton } from '../utilsComponent/skeleton-components/TechnologySkeleton';
import { TechnologyHeader } from './TechnologyHeader';
import { useInterviewFilters } from "@/main/hooks/useInterviewFiltersHook";


const SKELETON_COUNT = 20;

const PracticalInterviewContainer: React.FC = () => {

  const { technology } = useParams() as { technology?: string };
  if (!technology) notFound();

  const { category, difficulty } = useInterviewFilters();
  const { data, isLoading, isFetching, error } = useGetInterviewsByTechnologyQuery({ technology, category, difficulty }, { refetchOnMountOrArgChange: true });

  const isBusy = isLoading || isFetching;
  const interviews = data?.data ?? [];

  return (
    <div className="p-4">
      <TechnologyHeader  />

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center w-full">
        {isBusy && Array.from({ length: SKELETON_COUNT }).map((_, i) => <TechnologySkeleton key={i} />)}

        {!isBusy && error && <div className="col-span-full text-center py-12 text-red-500">Oops! Something went wrong loading interviews.</div>}

        {!isBusy && !error && interviews.length === 0 && (
          <div className="col-span-full text-center py-12 text-gray-400">
            No interviews found for <strong>{category || 'all categories'}</strong> / <strong>{difficulty || 'all levels'}</strong>.
          </div>
        )}

        {!isBusy && !error && interviews.map((interview: IPracticalInterview) => <ReusableTechnologyCard key={interview._id} interview={interview} />)}
      </div>
    </div>
  );
};

export default PracticalInterviewContainer;
