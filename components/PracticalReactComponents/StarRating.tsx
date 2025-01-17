"use client";
import { StarIcon } from "lucide-react";
import React, { useState } from "react";


const StarRating = () => {
  const [star, setStar] = useState(0); // Initial star rating is 1

  // Function to handle when a star is clicked
  const StarHandlerFunction = (rating: number) => {
    setStar(rating); // Update the state with the clicked star value
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
              onClick={() => StarHandlerFunction(starRating)} // Set star rating based on the index
              className={`text-3xl ${
                starRating <= star ? "text-yellow-400" : "text-gray-400"
              }`} // Change color based on current rating
            >
              <StarIcon />
            </button>
          );
        })}
      </div>
      <div className="mt-2 text-lg font-semibold">{star} / 5</div>{" "}
      {/* Display the current star rating */}
    </div>
  );
};

export default StarRating;
