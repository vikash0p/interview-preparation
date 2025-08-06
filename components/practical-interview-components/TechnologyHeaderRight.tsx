'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useGetAllCategoriesByTechnologyQuery } from '@/main/redux-toolkit/services/practical-interviews/practicalInterviewApi';
import { useInterviewFilters } from '@/main/hooks/useInterviewFiltersHook';
import { ReusableDropDown } from '../reusable-components/ReusableDropDown';

export const TechnologyHeaderRight = () => {
  const { technology } = useParams() as { technology: string };

  const { data } = useGetAllCategoriesByTechnologyQuery(technology);

  const { category, difficulty, updateSearchParams } = useInterviewFilters();

  const categories = ['all category', ...(data?.data || [])];

  const handleUpdate = (name: string, value: string | null) => {
    updateSearchParams({ [name]: value });
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <ReusableDropDown options={categories} heading="Filter by Category" selectedValue={category} paramName="category" updateSearchParams={handleUpdate} />
      
      <ReusableDropDown options={['all difficulties', 'easy', 'medium', 'hard']} heading="Filter by Difficulty" selectedValue={difficulty} paramName="difficulty" updateSearchParams={handleUpdate} />
    </div>
  );
};
