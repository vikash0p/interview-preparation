import React from 'react';
import { DifficultyRating } from '../DifficultyRating';
import { FaClock, FaEye, FaThumbsUp, FaShareAlt, FaBookmark, FiClock } from '@/main/icons/react-global-icons';
import { ISlugDataProps } from '@/main/types/practical-interview.types';
import { getDifficultyUtils, getPopularityUtils } from '../PracticalInterviewUtils';

export const SlugHeader: React.FC<ISlugDataProps> = ({ data }) => {
  const { icon, label, color } = getPopularityUtils(data.popularity);

  return (
    <header className="border-b border-gray-800 pb-6 mb-8   pt-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className={`px-5 py-1 rounded-full text-xs font-semibold ${getDifficultyUtils(data.difficulty)} `}>
              {data.difficulty.charAt(0).toUpperCase() + data.difficulty.slice(1)}
            </span>
            <span className="px-5 py-1 bg-indigo-900/30 text-indigo-400 rounded-full text-xs font-semibold">
              {data.technology.charAt(0).toUpperCase() + data.technology.slice(1)}
            </span>
            <span className="px-5 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-semibold">
              {data.category}
            </span>
            <span className={`flex items-center gap-1 px-5 py-1 font-semibold rounded-full text-xs ${color}`}>
              {icon} {label}
            </span>

            <span className="flex items-center gap-1 px-5 py-1 rounded-full bg-lime-400/10 text-lime-300 text-xs ">
              <FiClock className="text-lime-300" />
              {data.estimatedTime.min}-{data.estimatedTime.max} mins
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl  text-gray-300 mb-3">{data.title}</h1>
          <p className="text-lg text-gray-400 mb-4">{data.problemStatement}</p>

          <div className="flex flex-wrap items-center gap-6 mt-4">
            <DifficultyRating rating={data?.difficultyRating ?? 0} />

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm bg-gray-800/50 px-3 py-1.5 rounded-md">
                <FaEye className="text-indigo-400" />
                <span>{data.views} views</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-gray-800/50 px-3 py-1.5 rounded-md">
                <FaThumbsUp className="text-green-400" />
                <span>{data.likes}</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-gray-800/50 px-3 py-1.5 rounded-md">
                <FaBookmark className="text-blue-400" />
                <span>{data.bookmarks}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-gray-800/50 px-3 py-1.5 rounded-md border border-gray-800">
                <div className="text-indigo-400">{<FaClock />}</div>
                <div className="flex gap-1 items-center">
                  <div className="text-sm font-medium text-white">{data.totalTimeSpent}</div>
                  <div className="text-xs text-gray-400">{'Minutes spent all Users'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 group">
          {/* Like Button */}
          <button
            aria-label="Like"
            className="py-3 px-5 rounded-md bg-gray-800/50 hover:bg-gray-800 transition-colors tooltip"
            data-tooltip="Like this challenge"
          >
            <FaThumbsUp className="text-gray-300 group-hover:text-green-400 transition-colors duration-300" />
          </button>

          {/* Share Button */}
          <button
            aria-label="Share"
            className="py-3 px-5 rounded-md bg-gray-800/50 hover:bg-gray-800 transition-colors tooltip"
            data-tooltip="Share challenge"
          >
            <FaShareAlt className="text-gray-300 group-hover:text-fuchsia-400 transition-colors duration-300" />
          </button>

          {/* Bookmark / Save Button */}
          <button
            aria-label="Bookmark"
            className="flex items-center px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm font-medium transition-colors duration-300"
          >
            <FaBookmark className="mr-2" />
            Save
          </button>
        </div>
      </div>
    </header>
  );
};
