'use client';

import type { Resource } from '@/main/data/home/ResourceData';
import { Link } from 'next-view-transitions';
import { useTransition } from 'react';
import { FaSpinner } from 'react-icons/fa'; // spinner icon

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="card group relative overflow-hidden">

      <div className="mb-3 relative z-10">
        <div className="icon text-2xl">{resource.icon}</div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-300 transition-colors">{resource.title}</h3>
        <p className="text-gray-400 mb-2">{resource.description}</p>
      </div>


      <Link
        href={resource.link}
        onClick={e => {
          e.preventDefault();
          startTransition(() => {
            window.location.href = resource.link; // or use router.push(resource.link)
          });
        }}
        className="inline-flex items-center gap-2 text-indigo-400 font-medium relative z-10 group/link"
      >
        {isPending ? (
          <FaSpinner className="w-4 h-4 animate-spin" />
        ) : (
          <>
            {resource.linkText}
            <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </>
        )}
      </Link>
    </div>
  );
};

export default ResourceCard;
