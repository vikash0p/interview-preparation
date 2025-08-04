import React from 'react';
import { DifficultyRating } from '../DifficultyRating';
import { FaClock, FaEye, FaThumbsUp, FaShareAlt, FaBookmark, FaFire, FaChartLine, FaHistory } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { ISlugDataProps } from '../../../main/types/practical-interview.types';

const SlugHeader: React.FC<ISlugDataProps> = ({ data }) => {
  return (
    <header className="border-b border-gray-800 pb-6 mb-8   pt-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                data.difficulty === 'easy'
                  ? 'bg-green-900/30 text-green-400'
                  : data.difficulty === 'medium'
                    ? 'bg-yellow-900/30 text-yellow-400'
                    : 'bg-red-900/30 text-red-400'
              }`}
            >
              {data.difficulty.charAt(0).toUpperCase() + data.difficulty.slice(1)}
            </span>
            <span className="px-3 py-1 bg-indigo-900/30 text-indigo-400 rounded-full text-xs font-semibold">
              {data.technology.charAt(0).toUpperCase() + data.technology.slice(1)}
            </span>
            <span className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-xs font-semibold">
              {data.category}
            </span>
            <PopularityBadge popularity={data.popularity} />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-300 mb-3">{data.title}</h1>
          <p className="text-lg text-gray-400 mb-4">{data.problemStatement}</p>

          <div className="flex flex-wrap items-center gap-6 mt-4">
            <DifficultyRating rating={data?.difficultyRating ?? 0} />

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm bg-gray-800/50 px-3 py-1.5 rounded-sm">
                <FaEye className="text-indigo-400" />
                <span>{data.views} views</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-gray-800/50 px-3 py-1.5 rounded-sm">
                <FaThumbsUp className="text-green-400" />
                <span>{data.likes}</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-gray-800/50 px-3 py-1.5 rounded-sm">
                <FaBookmark className="text-blue-400" />
                <span>{data.bookmarks}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <TimeMetric icon={<FaClock />} value={data.totalTimeSpent} label="Minutes spent" />
              <TimeMetric icon={<FaHistory />} value={data.revisions} label="Revisions" />
            </div>
          </div>
        </div>

        <div className="flex gap-3 group">
          {/* Like Button */}
          <button
            aria-label="Like"
            className="py-3 px-5 rounded-sm bg-gray-800/50 hover:bg-gray-800 transition-colors tooltip"
            data-tooltip="Like this challenge"
          >
            <FaThumbsUp className="text-gray-300 group-hover:text-green-400 transition-colors duration-300" />
          </button>

          {/* Share Button */}
          <button
            aria-label="Share"
            className="py-3 px-5 rounded-sm bg-gray-800/50 hover:bg-gray-800 transition-colors tooltip"
            data-tooltip="Share challenge"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              toast.success('Link copied to clipboard!');
            }}
          >
            <FaShareAlt className="text-gray-300 group-hover:text-fuchsia-400 transition-colors duration-300" />
          </button>

          {/* Bookmark / Save Button */}
          <button
            aria-label="Bookmark"
            className="flex items-center px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-sm text-sm font-medium transition-colors duration-300"
          >
            <FaBookmark className="mr-2" />
            Save
          </button>
        </div>
      </div>
    </header>
  );
};

export default SlugHeader;

const PopularityBadge = ({ popularity }: { popularity: string }) => {
  const popularityMap = {
    high: {
      text: 'Trending',
      color: 'bg-red-500/20 text-red-400',
      icon: <FaFire className="mr-1" />,
    },
    normal: {
      text: 'Popular',
      color: 'bg-blue-500/20 text-blue-400',
      icon: <FaChartLine className="mr-1" />,
    },
    low: {
      text: 'New',
      color: 'bg-gray-500/20 text-gray-400',
      icon: null,
    },
    'most popular': {
      text: 'Most Popular',
      color: 'bg-purple-500/20 text-purple-400',
      icon: <FaFire className="mr-1" />,
    },
  };

  const { text, color, icon } =
    popularityMap[popularity.toLowerCase() as keyof typeof popularityMap] || popularityMap.normal;

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center ${color}`}>
      {icon}
      {text}
    </span>
  );
};

const TimeMetric = ({ icon, value, label }: { icon: React.ReactNode; value: number; label: string }) => (
  <div className="flex items-center gap-2 bg-gray-800/50 px-3 py-1.5 rounded-sm border border-gray-800">
    <div className="text-indigo-400">{icon}</div>
    <div className="flex gap-1 items-center">
      <div className="text-sm font-medium text-white">{value}</div>
      <div className="text-xs text-gray-400">{label}</div>
    </div>
  </div>
);
