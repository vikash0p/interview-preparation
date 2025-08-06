// TechnologyHeader.tsx
'use client';
import React from 'react';
import { CategoryDropDown } from './CategoryDropDown';
import { DifficultyDropDown } from './DifficultyDropDown';
import { useInterviewFilters } from '@/main/hooks/useInterviewFiltersHook';

export const TechnologyHeader = () => {
  const { category, difficulty, updateSearchParams } = useInterviewFilters();
  return (
    <header className="border-b border-gray-800 pb-6 mb-8 pt-8">
      <div className="flex justify-between">
        <div></div>
        <div className="flex gap-4">
          <CategoryDropDown updateSearchParams={updateSearchParams } currentCategory={category} />
          <DifficultyDropDown updateSearchParams={updateSearchParams } currentDifficulty={difficulty} />
        </div>
      </div>
    </header>
  );
};
