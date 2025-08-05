import React from 'react';

export const TechnologySkeleton = () => {
  return (
    <article className="w-full max-w-sm h-[420px] flex flex-col justify-between bg-gray-900/20 border border-gray-700 rounded-md shadow-sm animate-pulse p-4">
      <div className="flex justify-between mb-4">
        <div className="h-6 w-24 rounded-full bg-white/10"></div>
        <div className="h-6 w-20 rounded-full bg-white/10"></div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="h-6 w-3/4 rounded bg-white/10"></div>
        <div className="h-4 w-full rounded bg-white/10"></div>
        <div className="h-4 w-5/6 rounded bg-white/10"></div>
        <div className="h-4 w-2/3 rounded bg-white/10"></div>
        <div className="flex flex-wrap gap-2 mt-2">
          {[1, 2, 3].map(item => (
            <div key={item} className="h-6 w-16 rounded-full bg-white/10"></div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 flex-wrap mb-4">
        <div className="h-6 w-24 rounded-full bg-white/10"></div>
        <div className="h-6 w-28 rounded-full bg-white/10"></div>
      </div>

      <div className="h-5 w-32 rounded bg-white/10 mb-3"></div>

      <div className="flex gap-2 flex-wrap mb-4">
        <div className="h-6 w-16 rounded-full bg-white/10"></div>
        <div className="h-6 w-16 rounded-full bg-white/10"></div>
        <div className="h-6 w-16 rounded-full bg-white/10"></div>
        <div className="h-6 w-16 rounded-full bg-white/10"></div>
      </div>

      <div className="flex justify-between items-center pt-3 border-t border-gray-700">
        <div className="h-10 w-44 rounded bg-white/10"></div>
        <div className="flex gap-2">
          <div className="h-9 w-9 rounded-full bg-white/10"></div>
          <div className="h-9 w-9 rounded-full bg-white/10"></div>
        </div>
      </div>
    </article>
  );
};
