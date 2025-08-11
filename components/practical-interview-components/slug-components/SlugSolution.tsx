'use client';
import React, { useState } from 'react';
import { FaCopy, FaLightbulb } from '@/main/icons/react-global-icons';
import { ISlugDataProps } from '@/main/types/practical-interview.types';
import { copyToClipboard } from '@/main/utils/copyToClipboard';
import { ReusableCodeHighlighter } from "@/components/reusable-components/ReusableCodeHighlighter";

export const SlugSolution: React.FC<ISlugDataProps> = ({ data }) => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="space-y-8">
      <div className="p-5 bg-indigo-500/10 rounded-md border border-indigo-500/30">
        <div className="flex items-start gap-4">
          <FaLightbulb className="text-indigo-400 text-xl mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-indigo-400 mb-2">Before You Look</h3>
            <p className="text-gray-300 leading-relaxed">
              Try solving the problem yourself first! You will learn much more by attempting it before viewing the
              solution.
            </p>
          </div>
        </div>
      </div>

      {!showSolution ? (
        <div className="text-center py-12">
          <button
            onClick={() => setShowSolution(true)}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium transition-colors shadow-lg hover:shadow-indigo-500/20"
          >
            Reveal Solution
          </button>
          <p className="text-gray-400 mt-4 text-sm">This will show the complete solution code</p>
        </div>
      ) : (
        <div>
          <section>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold text-gray-300">Solution Code</h2>
              <button
                onClick={() => copyToClipboard(data.solutionCode)}
                className="flex items-center gap-2 px-3 py-1.5 text-xs bg-gray-800 hover:bg-gray-700 rounded-md transition-colors"
              >
                <FaCopy /> Copy
              </button>
            </div>
            <ReusableCodeHighlighter code={data.solutionCode} language="javascript" />

          </section>
        </div>
      )}
    </div>
  );
};
