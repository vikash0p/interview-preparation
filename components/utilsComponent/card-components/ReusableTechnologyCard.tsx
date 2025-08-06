'use client';
import React, { useTransition } from 'react';
import { DifficultyRating } from '@/components/practical-interview-components/DifficultyRating';
import { BiShare, FiClock, FiEye, FiHeart, FiBookmark, FiShare2, FiCode, FiZap, FaSpinner } from '@/main/icons/react-global-icons';
import { IPracticalInterview } from '@/main/types/practical-interview.types';
import { getPopularityUtils, getDifficultyUtils } from '@/components/practical-interview-components/PracticalInterviewUtils';
import { useRouter } from 'next/navigation';

export const ReusableTechnologyCard: React.FC<{ interview: IPracticalInterview }> = ({ interview }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { label, icon, color } = getPopularityUtils(interview.popularity);
  const handleSolveClick = () => {
    if (isPending) return;
    startTransition(() => {
      router.push(`/practical-interviews/${interview.technology}/${interview.slug}`);
    });
  };

  return (
    <article className="group relative h-[530px] flex flex-col justify-between bg-gray-950/30 hover:bg-gray-950 rounded-md  overflow-hidden border border-gray-700 hover:shadow-lg transition-all duration-300" aria-labelledby={`card-title-${interview._id}`}>
      <div className="p-2 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-slate-800/50 text-gray-300">
            <FiCode /> {interview.technology.charAt(0).toUpperCase() + interview.technology.slice(1)}
          </span>
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm ${getDifficultyUtils(interview.difficulty)}`}>
            <FiZap /> {interview.difficulty}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-lg text-gray-300 font-semibold group-hover:text-white transition-colors">{interview.title}</h2>
          <p className="text-gray-400 text-sm ">
            {' '}
            <span className="font-semibold text-gray-300">Problem Statement -</span> {interview.problemStatement}
          </p>
          <p className="text-gray-400 text-sm ">
            {' '}
            <span className="font-semibold text-gray-300">Tips -</span> {interview.tips}
          </p>
          <p className="text-gray-400 text-sm ">
            {' '}
            <span className="font-semibold text-gray-300">Challenges -</span> {interview.challenges}
          </p>
          <p>
            <span className="font-semibold text-gray-300">Requirements -</span>{' '}
            {interview.requirements.map(value => (
              <span key={value} className="inline-block bg-gray-800 text-gray-300 px-3 py-1 rounded-full mr-2 mb-2 text-xs">
                {value}
              </span>
            ))}
          </p>
        </div>
        {/* Stats */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-800/50 text-gray-300">
            <FiClock className="text-teal-500" />
            {interview.estimatedTime.min}-{interview.estimatedTime.max} mins
          </span>

          {/* Popularity */}
          <span className={`flex items-center gap-1 px-3 py-1.5 rounded-full ${color}`}>
            {icon} {label}
          </span>
        </div>

        <div>
          <DifficultyRating rating={interview?.difficultyRating ?? 0} />
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-900/30 text-green-300">
            <FiEye className="text-green-400" />
            {interview.views}
          </span>

          <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-900/30 text-pink-300">
            <FiHeart className="text-pink-400" />
            {interview.likes}
          </span>

          <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/30 text-blue-300">
            <FiBookmark className="text-blue-400" />
            {interview.bookmarks}
          </span>

          <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-900/30 text-yellow-300">
            <BiShare className="text-yellow-400" />
            {interview.share}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="p-2 py-6 pt-0 mt-auto">
        <div className="pt-4 border-t border-gray-700 flex items-center justify-between flex-wrap gap-3">
          <button
            onClick={handleSolveClick}
            disabled={isPending}
            aria-label={`Solve ${interview.title} interview`}
            title={`Solve ${interview.title} interview`}
            className={`relative inline-flex items-center justify-center gap-2 px-5 py-2 text-sm font-medium rounded-md
    bg-indigo-600 text-white hover:bg-indigo-500 transition-all
    ${isPending ? 'opacity-70 cursor-not-allowed' : ''}
  `}
          >
            {isPending ? (
              <>
                <span className="invisible pointer-events-none">Solve This Challenge</span>

                <span className="absolute inset-0 flex items-center justify-center">
                  <FaSpinner className="w-4 h-4 text-white animate-spin" />
                </span>
              </>
            ) : (
              'Solve This Challenge'
            )}
          </button>

          <div className="flex gap-2">
            <button className="p-2 rounded-md hover:bg-white/10 text-gray-400 hover:text-indigo-400 transition-colors" aria-label="Bookmark this interview" title="Bookmark">
              <FiBookmark className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-md hover:bg-white/10 text-gray-400 hover:text-indigo-400 transition-colors" aria-label="Share this interview" title="Share">
              <FiShare2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
