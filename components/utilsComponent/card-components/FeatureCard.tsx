'use client';
import React, { useTransition } from 'react';
import { IFeature } from '@/main/types/home.types';
import { FaSpinner } from "@/main/icons/react-global-icons";
import { useTransitionRouter } from 'next-view-transitions';
import { slideInOut } from "@/main/animation/practical-interview.animation";

const FeatureCard = ({ feature }: {feature:IFeature}) => {
  const { title, description, icon, link }= feature;
  const router = useTransitionRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <div
      onClick={() =>
        startTransition(() => {
          router.push(link,{
            onTransitionReady:slideInOut,
          });
        })
      }
      className={`relative overflow-hidden w-full p-6 rounded-md transition-all duration-500 ease-in-out
        cursor-pointer border-2 border-gray-700
        ${isPending ? 'opacity-60 pointer-events-none' : 'hover:bg-gradient-to-r hover:from-gray-950 hover:to-gray-900 hover:border-gray-500'}
        bg-gradient-to-t from-gray-900/10 to-gray-950`}
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-md flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-400">{title}</h3>
      <p className="text-sm sm:text-base text-neutral-400">{description}</p>
       {isPending && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-20">
                <FaSpinner className="w-8 h-8 text-white animate-spin" />
              </div>
            )}
    </div>
  );
};

export default FeatureCard;
