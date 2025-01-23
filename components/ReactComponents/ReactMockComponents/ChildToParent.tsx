"use client";
import React, { useState } from "react";

export const ChildToParent = () => {
  const [childCount, setChildCount] = useState(0);

  const handleChildData = (count: number) => {
    setChildCount(count);
  };

  return (
    <div>
      <h1>Child Count in Parent: {childCount}</h1>
      <Child onCountChange={handleChildData} />
    </div>
  );
};





interface ChildProps {
  onCountChange: (count: number) => void;
}

const Child = ({ onCountChange }: ChildProps) => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange(newCount); // Send updated count to Parent
  };

  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
    onCountChange(newCount); // Send updated count to Parent
  };

  return (
    <div className="space-x-5">
      <h1>Count: {count}</h1>
      <button
        className="px-6 py-2 rounded-sm bg-yellow-500 text-black"
        onClick={handleIncrease}
      >
        Increase Count
      </button>
      <button
        className="px-6 py-2 rounded-sm bg-yellow-500 text-black"
        onClick={handleDecrease}
      >
        Decrease Count
      </button>
    </div>
  );
};
