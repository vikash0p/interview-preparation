'use client';
import { useTransition } from 'react';
import { ICategoryItem } from '../../../main/types/global.types';
import { FaSpinner } from '@/main/icons/react-global-icons';
import { useTransitionRouter } from 'next-view-transitions';
import { slideInOut } from '@/main/animation/practical-interview.animation';

interface IDomainCardProps {
  domain: ICategoryItem;
}

const DomainCard: React.FC<IDomainCardProps> = ({ domain }) => {
  const router = useTransitionRouter();
  const [isPending, startTransition] = useTransition();

  const domainFunction = (slug: string) => {
    startTransition(() => {
      router.push(`/practical-interviews/${slug}`, {
        onTransitionReady: slideInOut,
      });
    });
  };

  return (
    <article
     className={`card ${isPending && 'opacity-60 pointer-events-none'} `}
     aria-labelledby={`domain-${domain.label}-title`}>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity pointer-events-none" aria-hidden="true" />

      <header className="flex flex-col items-center justify-center mb-6 text-center space-y-4">
        <div className="icon text-3xl" aria-hidden="true">
          {domain.icon}
        </div>
        <h3 id={`domain-${domain.label}-title`} className="text-xl sm:text-2xl font-bold group-hover:text-indigo-400 transition-colors">
          {domain.label}
        </h3>
      </header>

      <ul className="flex flex-wrap justify-center gap-2 relative" aria-label={`Technologies included in ${domain.label}`}>
        {domain.technologies.map((t, i) => (
          <li key={i}>
            <button
              type="button"
              disabled={isPending || t.comingSoon} // ✅ disable when comingSoon
              onClick={() => !t.comingSoon && domainFunction(t.slug)}
              className={`px-5 py-1.5 text-sm rounded-full border transition-colors focus:outline-none focus:ring-2
                ${t.comingSoon ? 'bg-yellow-500/20 border-yellow-500 text-yellow-200 cursor-not-allowed' : 'border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 text-white hover:bg-indigo-500/30 focus:ring-indigo-400'}`}
              aria-label={t.comingSoon ? `${t.label} is coming soon` : `Open interview questions for ${t.label}`}
            >
              {t.label}
            </button>
          </li>
        ))}
      </ul>

      {isPending && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-20" role="status" aria-live="polite">
          <FaSpinner className="w-6 h-6 text-white animate-spin" />
          <span className="sr-only">Loading interview questions…</span>
        </div>
      )}
    </article>
  );
};

export default DomainCard;
