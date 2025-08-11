'use client';
import React from 'react';
import { ISlugDataProps } from '@/main/types/practical-interview.types';
import { FaCheck, FaCopy, MdTipsAndUpdates } from '@/main/icons/react-global-icons';
import { copyToClipboard } from '@/main/utils/copyToClipboard';
import { ReusableCodeHighlighter } from "@/components/reusable-components/ReusableCodeHighlighter";

export const SlugProblemStatement: React.FC<ISlugDataProps> = ({ data }) => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-semibold text-gray-300 mb-4">Description</h2>
        <div className="prose prose-invert max-w-none bg-gray-800/50 p-6 rounded-md border border-gray-800">
          <p className=" leading-relaxed">{data.description}</p>
          <p className="mt-4  leading-relaxed">{data.detailedExplanation}</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-300 mb-4">Requirements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {data.requirements?.map((req, idx) => (
            <div
              key={idx}
              className="flex items-start px-4 py-3 bg-gray-800/50 rounded-md border border-gray-800 hover:border-gray-700 transition-colors"
            >
              <div className="flex-shrink-0 mt-0.5 mr-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                  <FaCheck className="text-green-400 text-xs" />
                </div>
              </div>
              <span className="">{req}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-300 mb-4">Prerequisites</h2>
        <div className="flex flex-wrap gap-2">
          {data.prerequisites?.map((req, idx) => (
            <span
              key={idx}
              className="px-6 py-2 bg-gray-800/50  rounded-md border border-gray-800 hover:bg-gray-800 transition-colors"
            >
              {req}
            </span>
          ))}
        </div>
      </section>

      <section>
        <div className="p-5 bg-yellow-500/10 rounded-md border border-yellow-500/30">
          <div className="flex items-start gap-4">
            <MdTipsAndUpdates className="text-yellow-400 text-xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-yellow-400 mb-2">Pro Tip</h3>
              <p className="text-gray-300 leading-relaxed">{data.tips || 'No tips available for this interview.'}</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold text-gray-300">Starter Code</h2>
          <button
            onClick={() => copyToClipboard(data.starterCode)}
            className="flex items-center gap-2 px-3 py-1.5 text-xs bg-gray-800 hover:bg-gray-700 rounded-md transition-colors"
          >
            <FaCopy /> Copy
          </button>
        </div>
        <ReusableCodeHighlighter  code={data.starterCode} language="javascript" />
      </section>
    </div>
  );
};
