'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { notFound, useParams } from 'next/navigation';
import { ReusableTechnologyCard } from '@/components/utilsComponent/card-components/ReusableTechnologyCard';
import { useGetInterviewsByTechnologyQuery } from '@/main/redux-toolkit/services/practical-interviews/practicalInterviewApi';
import { IPracticalInterview } from '../../main/types/practical-interview.types';
import { TechnologySkeleton } from '../utilsComponent/skeleton-components/TechnologySkeleton';
import { TechnologyHeader } from './TechnologyHeader';
import { useInterviewFilters } from '@/main/hooks/useInterviewFiltersHook';
import { motionVariants } from '@/main/animation/practical-interview.animation';

const SKELETON_COUNT = 20;

const PracticalInterviewContainer: React.FC = () => {
  const { technology } = useParams() as { technology?: string };
  if (!technology) notFound();

  const { category, difficulty } = useInterviewFilters();
  const { data, isLoading, isFetching, error } = useGetInterviewsByTechnologyQuery({ technology, category, difficulty }, { refetchOnMountOrArgChange: true });

  const isBusy = isLoading || isFetching;
  const interviews = data?.data ?? [];

  return (
    <div className="">
      {interviews.length > 18 && <TechnologyHeader />}

      <AnimatePresence mode="wait">
        <motion.div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center w-full p-4" variants={motionVariants.container} initial="hidden" animate="visible" exit="exit" key={`${technology}-${category}-${difficulty}`}>
          {isBusy && Array.from({ length: SKELETON_COUNT }).map((_, i) => <TechnologySkeleton key={i} />)}

          <AnimatePresence>
            {!isBusy && error && (
              <motion.div className="col-span-full text-center py-12 text-red-500" variants={motionVariants.message}>
                <div className="text-3xl mb-2">⚠️</div>
                <h3 className="text-xl font-semibold">Network Error</h3>
                <p className="mt-2">Failed to load interviews. Please try again later.</p>
              </motion.div>
            )}

            {!isBusy && !error && interviews.length === 0 && (
              <motion.div className="col-span-full text-center py-12 text-gray-400" variants={motionVariants.message}>
                <div className="text-3xl mb-2">🔍</div>
                <h3 className="text-xl font-semibold">No Interviews Found</h3>
                <p className="mt-2">
                  No interviews found for <strong>{category || 'all categories'}</strong> /<strong>{difficulty || 'all levels'}</strong>
                </p>
              </motion.div>
            )}

            {!isBusy &&
              !error &&
              interviews.map((interview: IPracticalInterview) => (
                <motion.div key={interview._id} variants={motionVariants.card} whileHover="hover" layout className="h-full">
                  <ReusableTechnologyCard interview={interview} />
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PracticalInterviewContainer;
