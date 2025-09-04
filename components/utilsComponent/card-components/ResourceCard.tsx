'use client';

import type { Resource } from '@/main/data/home/ResourceData';
import { Link } from "next-view-transitions";

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  return (
    <div className=" relative overflow-hidden w-full p-6 rounded-lg transition-all duration-300 ease-in-out border border-gray-700 hover:bg-gradient-to-r hover:from-gray-950 hover:to-gray-900 hover:border-gray-500 bg-gradient-to-t from-gray-900/20 to-gray-950/40">


      <div className="mb-3 relative z-10">
        <div className={`w-12 h-12  rounded-md flex items-center justify-center mb-2`}>{resource.icon}</div>
        <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
        <p className="text-gray-400 mb-2">{resource.description}</p>

      </div>

      <Link href={resource.link} className="  font-medium flex items-center relative z-10 text-indigo-400">
        {resource.linkText}
        <svg className="w-4 h-4 ml-2 hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

export default ResourceCard;
