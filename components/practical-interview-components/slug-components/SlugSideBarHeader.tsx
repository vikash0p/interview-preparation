import React from 'react';
import { ISlugDataProps } from '../../../main/types/practical-interview.types';
import { FaCheck } from '@/main/icons/react-global-icons';

export const SlugSideBarHeader: React.FC<ISlugDataProps> = ({ data }) => {
  return (
    <div className="space-y-6">
      <div className="bg-gray-800/50 p-6 rounded-md border border-gray-800">
        <h3 className="font-semibold text-lg text-white mb-4 flex items-center">
          <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
            <FaCheck className="text-green-400 text-xs" />
          </div>
          Objectives
        </h3>
        <ul className="space-y-3">
          {data.objectives?.map((obj, idx) => (
            <li key={idx} className="flex items-start">
              <div className="flex-shrink-0 mt-1 mr-3">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
              </div>
              <span className="text-gray-300">{obj}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Concepts Card */}
      <div className="bg-gray-800/50 p-6 rounded-md border border-gray-800">
        <h3 className="font-semibold text-lg text-white mb-4">Concepts Tested</h3>
        <div className="flex flex-wrap gap-2">
          {data.conceptsTested?.map((concept, idx) => (
            <span key={idx} className="px-3 py-1.5 bg-black/30 text-gray-300 rounded-md text-sm">
              {concept}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
