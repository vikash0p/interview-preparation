"use client";
import React, { useState } from "react";

const LikeButton = () => {
  const [like, setLike] = useState(false); // Track whether liked or not
  const [count, setCount] = useState(0); // Track the count of likes

  // Handler for like button
  const likeHandler = () => {
    if (!like) {
      // Only increase count if not already liked
      setLike(true);
      setCount((prevCount) => prevCount + 1);
    }else{
        setLike(false);
        setCount((prevCount) => prevCount - 1);

    }
  };



  return (
    <div className="flex flex-col items-center gap-4">
      <button
        type="button"
        className={`text-2xl p-2 ${like ? "text-green-500" : "text-red-500"}`}
        onClick={likeHandler}
      >
        {like ? ` 👍 Like: ${count}` : `👎 Dislike: ${count}`}
      </button>
    </div>
  );
};

export default LikeButton;
