'use client';
import React, { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { IPracticalCardProps } from '@/main/types/practical-interview.types';
import { FaLock,  FaSpinner } from '@/main/icons/react-global-icons';
import { FaArrowRightLong } from 'react-icons/fa6';

export const ReusableInterviewCard: React.FC<IPracticalCardProps> = ({ technology, href }) => {
  const { slug, icon, label, actionLabel, comingSoon } = technology;
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    if (comingSoon || isPending) return;
    startTransition(() => {
      router.push(href);
    });
  };

  return (
    <div
      onClick={handleClick}
      className={`group relative overflow-hidden w-full max-w-sm p-6 rounded-md transition-all duration-300 bg-gradient-to-r from-gray-950 to-gray-900
  cursor-pointer hover:bg-gradient-to-r hover:from-gray-950 hover:to-gray-900 hover:border-gray-500 hover:shadow-lg hover:shadow-indigo-500/10 border border-gray-700
  ${comingSoon && 'opacity-80 cursor-not-allowed border border-yellow-400/30'}
  ${isPending && 'pointer-events-none opacity-70'}
`}
    >
      {/* Loading spinner */}
      {isPending && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-20">
          {/* <div className="w-8 h-8 border-4 border-t-transparent border-white rounded-full animate-spin" /> */}
          <FaSpinner className="w-8 h-8 text-white animate-spin" />
        </div>
      )}

      {comingSoon ? (
        <div className="flex gap-5 items-center relative z-10 opacity-70">
          <div className="p-3 rounded-md bg-gray-700/50 transition-all duration-300">
            <div className="text-3xl text-gray-500 transition-colors duration-300">
              <FaLock className="text-yellow-400" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-yellow-400 transition-colors duration-300">{label}</h3>
            <p className="text-sm text-yellow-500 mt-1 flex items-center transition-colors duration-300">{`Available ${slug} coming soon`}</p>
          </div>
        </div>
      ) : (
        <div className="flex gap-5 items-center relative z-10">
          <div className="icon text-3xl">
          {icon}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">{label}</h3>
            <p className="text-sm text-gray-400 mt-1 flex items-center group-hover:text-indigo-300 transition-colors duration-300">
              {actionLabel}
              <FaArrowRightLong className="ml-2 text-xs group-hover:translate-x-1 transition-transform duration-300" />
            </p>
          </div>
        </div>
      )}

      {comingSoon && (
        <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400/80 to-yellow-500/80 text-xs text-gray-900 font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm z-10">
          <FaLock className="text-[0.6rem]" />
          <span>Coming Soon</span>
        </div>
      )}
    </div>
  );
};
