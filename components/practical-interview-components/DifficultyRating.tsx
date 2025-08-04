import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface Props {
  rating: number;
}

export const DifficultyRating: React.FC<Props> = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-gray-400" />);
    }
  }

  return (
    <div className="flex items-center gap-1 text-md">
      <span className="text-gray-300 font-medium">Difficulty Rating : </span>
      <div className="flex items-center gap-0.5">{stars}</div>
    </div>
  );
};
