'use client';

import { ChallengeCard } from "@/components/utilsComponent/card-components/ChallengeCard";
import { CodingLinkData } from '@/main/data/ReactData/ReactPractical/ReactPracticalData';
import React, { useState } from 'react';

const  PracticalReactFilter = () => {
  
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [codingData, setCodingData] = useState(CodingLinkData);

  const levels = ['All',...Array.from(new Set(CodingLinkData.map((v) => v.level))),];

  const filterCodingLinkData = (level: string) => {
    setSelectedFilter(level);
    setCodingData(
      level === 'All'
        ? CodingLinkData
        : CodingLinkData.filter((v) => v.level === level)
    );
  };

  return (
    <section className='py-12 bg-gradient-to-b from-gray-900 to-gray-900 min-h-screen'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Filter Buttons */}
        <div className='flex flex-wrap gap-3 justify-center mb-16'>
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => filterCodingLinkData(level)}
              className={`relative px-5 py-2.5 rounded-full font-medium transition-all duration-200 ${
                selectedFilter === level
                  ? 'bg-indigo-500/20 border-indigo-500 text-white shadow-[0_0_12px_-2px_rgba(99,102,241,0.3)]'
                  : 'bg-gray-950 border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600'
              } border-2`}
            >
              <span className='relative flex items-center justify-center gap-2'>
                {level}
                <span
                  className={`ml-2 px-2 py-1 rounded-full text-xs ${
                    selectedFilter === level
                      ? 'bg-white/10 text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]'
                      : 'bg-gray-800/70 text-gray-300 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]'
                  }`}
                >
                  {level === 'All'
                    ? CodingLinkData.length
                    : CodingLinkData.filter((v) => v.level === level).length}
                </span>
              </span>

              {/* Active indicator */}
              {selectedFilter === level && (
                <div className='absolute inset-0 rounded-full border-2 border-indigo-400/50 pointer-events-none animate-pulse' />
              )}
            </button>
          ))}
        </div>

        {/* Challenges Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {codingData.map((value) => (
            <ChallengeCard
              key={value.id}
              id={value.id}
              name={value.name}
              url={value.url}
              level={value.level}
            />
          ))}
        </div>

        {/* Empty State */}
        {codingData.length === 0 && (
          <div className='text-center py-24 text-gray-400'>
            No challenges found for this level
          </div>
        )}
      </div>
    </section>
  );
};

export default  PracticalReactFilter
