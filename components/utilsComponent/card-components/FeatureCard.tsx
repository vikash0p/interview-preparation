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
      className={`card ${ isPending && 'opacity-60 pointer-events-none' } `}
    >
      <div className="icon">{icon}</div>
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
