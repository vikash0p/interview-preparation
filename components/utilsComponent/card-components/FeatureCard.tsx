'use client';
import { IFeature } from '@/main/types/home.types';
import { FaSpinner } from '@/main/icons/react-global-icons';
import { usePageTransition } from "@/main/hooks/usePageTransitionHook";

const FeatureCard = ({ feature }: { feature: IFeature }) => {
  const { title, description, icon, link } = feature;
  const { isPending, navigate } = usePageTransition();

  return (
    <div
      onClick={() => navigate(link)}
      className={`relative overflow-hidden w-full p-6 rounded-md transition-all duration-500 ease-in-out
        cursor-pointer border border-gray-700
        ${isPending ? 'opacity-60 pointer-events-none' : 'hover:bg-gradient-to-r hover:from-gray-950 hover:to-gray-900 hover:border-gray-500'}
        bg-gradient-to-t from-gray-900/20 to-gray-950/40`}
    >
      {/* Icon */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-md flex items-center justify-center mb-4">{icon}</div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-400">{title}</h3>

      {/* Description */}
      <p className="text-sm sm:text-base text-neutral-400">{description}</p>

      {/* Spinner */}
      {isPending && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-20">
          <FaSpinner className="w-8 h-8 text-white animate-spin" />
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
