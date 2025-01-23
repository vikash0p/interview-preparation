"use client";
import { StarIcon } from "lucide-react";
import React, { useState } from "react";
const StarRating = () => {
  const [star, setStar] = useState(0);
  const StarHandlerFunction = (rating: number) => {
    setStar(rating);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-1">
        {Array.from({ length: 5 }).map((_, index) => {
          const starRating = index + 1;
          return (
            <button
              type="button"
              key={index}
              onClick={() => StarHandlerFunction(starRating)}
              className={" text-3xl " + (starRating <= star ? "text-yellow-400" : "text-gray-400")} >
              <StarIcon />
            </button>
          );
        })}
      </div>
      <div className="mt-2 text-lg font-semibold">{star} / 5</div>{" "}
    </div>
  );
};

export default StarRating;

// !Star Rating with data source

export const starRatingDataSource = `"use client";
import { StarIcon } from "lucide-react";
import React, { useState } from "react";
const StarRating = () => {
  const [star, setStar] = useState(0);
  const StarHandlerFunction = (rating: number) => {
    setStar(rating);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-1">
        {Array.from({ length: 5 }).map((_, index) => {
          const starRating = index + 1;
          return (
            <button
              type="button"
              key={index}
              onClick={() => StarHandlerFunction(starRating)}
              className={" text-3xl " + (starRating <= star ? "text-yellow-400" : "text-gray-400")} >
              <StarIcon />
            </button>
          );
        })}
      </div>
      <div className="mt-2 text-lg font-semibold">{star} / 5</div>{" "}
    </div>
  );
};

export default StarRating;`;
