'use client';

import React from 'react';

export const TechnologyHeaderSkeleton = () => {
  return (
    <header className="sticky top-0 z-20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <div className="size-9 animate-pulse rounded-full bg-gray-800" />

          <div className="h-8 w-52 animate-pulse rounded-md bg-gray-800" />
        </div>

        {/* Desktop Filters */}
        <div className="hidden md:flex items-center gap-3">
          <div className="h-7 w-24 animate-pulse rounded bg-gray-800" />

          <div className="h-10 w-48 animate-pulse rounded-lg bg-gray-800" />
          <div className="h-10 w-48 animate-pulse rounded-lg bg-gray-800" />
        </div>

        {/* Mobile Filter Button */}
        <div className="md:hidden">
          <div className="h-10 w-24 animate-pulse rounded-lg bg-gray-800" />
        </div>
      </div>

      {/* Active Filters Skeleton */}
      {/* <div className="container mx-auto px-4 pb-4 flex flex-wrap gap-2">
        <div className="h-7 w-28 animate-pulse rounded-full bg-gray-800" />
        <div className="h-7 w-32 animate-pulse rounded-full bg-gray-800" />
        <div className="h-7 w-24 animate-pulse rounded-full bg-gray-800" />
      </div> */}
    </header>
  );
};
