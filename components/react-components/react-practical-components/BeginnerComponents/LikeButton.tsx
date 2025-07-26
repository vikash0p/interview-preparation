'use client'
import React, { useState } from "react";

const LikeButton = () => {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  const likeHandler = () => {
    setLike(!like);
    setCount((prevCount) => prevCount + (like ? -1 : 1));
  };

  // Store JSX in a variable
  const buttonJSX = (
    <button
      type="button"
      className={`text-2xl p-2 ${like ? "text-green-500" : "text-red-500"}`}
      onClick={likeHandler}
    >
      {like ? <span>👍 Like: {count}</span> : <span>👎 Unlike {count}</span>}
    </button>
  );

  return (
    <div className="flex flex-col items-center gap-4">
      {buttonJSX} {/* Render the JSX variable here */}
    </div>
  );
};

export default LikeButton;

// !Like Button with data source

export const likeButtonDataSource = `
import React, { useState } from "react";
const LikeButton = () => {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);
  const likeHandler = () => {
    if (!like) {
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
        // using the string literal
        className={"text-2xl p-2 " + (like ? "text-green-500" : "text-red-500")}
        onClick={likeHandler}
      >
        {like ?  <span>👍 Like: {count}</span> : <span>👎Unlike {count} </span> }
      </button>
    </div>
  );
};

export default LikeButton;`;
