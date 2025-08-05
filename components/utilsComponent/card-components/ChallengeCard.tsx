'use client';
import { Link } from 'next-view-transitions';
import { FiChevronRight } from 'react-icons/fi';
import { IoStar } from 'react-icons/io5';

interface ChallengeCardProps {
  id: string;
  name: string;
  url: string;
  level: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Beginner':
      return 'bg-emerald-500/15 text-emerald-400 ring-emerald-400/30';
    case 'Intermediate':
      return 'bg-amber-500/15 text-amber-400 ring-amber-400/30';
    case 'Advanced':
      return 'bg-rose-500/15 text-rose-400 ring-rose-400/30';
    default:
      return 'bg-gray-500/15 text-gray-400 ring-gray-400/30';
  }
};

const getStarCount = (level: string) => {
  switch (level) {
    case 'Beginner':
      return 2;
    case 'Intermediate':
      return 3;
    case 'Advanced':
      return 5;
    default:
      return 1;
  }
};

export const ChallengeCard: React.FC<ChallengeCardProps> = ({ id, name, url, level }) => {
  const starCount = getStarCount(level);

  return (
    <Link
      href={`/practical-interview/react/${url}`}
      key={id}
      className="group relative border border-gray-800 p-6 rounded-md bg-gradient-to-l from-gray-800 to-gray-900 hover:border-indigo-500 transition-all hover:shadow-lg hover:shadow-indigo-500/10"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
            {name}
          </h3>
          <span className={`${getLevelColor(level)} px-3 py-1 rounded-full text-sm font-medium`}>{level}</span>
        </div>
        <FiChevronRight className="text-gray-400 text-xl group-hover:text-indigo-400 transition-colors mt-1" />
      </div>

      <div className="mt-4 flex items-center text-gray-400 text-sm">
        <div className="flex mr-1.5">
          {[...Array(starCount)].map((_, i) => (
            <IoStar key={i} className={`${i < starCount ? 'text-amber-400' : 'text-gray-600'}`} />
          ))}
        </div>
        <span>{level} Challenge</span>
      </div>
    </Link>
  );
};
