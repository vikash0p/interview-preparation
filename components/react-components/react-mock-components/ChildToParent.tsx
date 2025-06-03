"use client";
import React, { useState } from "react";

 const ChildToParent = () => {
  const [childCount, setChildCount] = useState(0);
  const handleChildData = (count: number) => {
    setChildCount(count);
  };
  return (
    <div>
      <h5>
        This is the parent component. It receives the count from the child
        component and displays it here.
      </h5>
      <h1>Child Count in Parent: {childCount}</h1>
      <Child onCountChange={handleChildData} />
    </div>
  );
};

export default ChildToParent;

interface ChildProps {
  onCountChange: (count: number) => void;
}

const Child = ({ onCountChange }: ChildProps) => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange(newCount);
  };

  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
    onCountChange(newCount);
  };

  return (
    <div className="space-x-5">
      <h5>
        This is the child component. It manages its own count and sends the
        updated count to the parent component when the count changes.
      </h5>

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



export const ChildToParentData = `
"use client";
import React, { useState } from "react";

const ChildToParent = () => {
  const [childCount, setChildCount] = useState(0);
  const handleChildData = (count: number) => {
    setChildCount(count);
  };
  return (
    <div>
      <h5>
        This is the parent component. It receives the count from the child
        component and displays it here.
      </h5>
      <h1>Child Count in Parent: {childCount}</h1>
      <Child onCountChange={handleChildData} />
    </div>
  );
};
export default ChildToParent;

interface ChildProps {
  onCountChange: (count: number) => void;
}

const Child = ({ onCountChange }: ChildProps) => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange(newCount);
  };

  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
    onCountChange(newCount);
  };

  return (
    <div className="space-x-5">
      <h5>
        This is the child component. It manages its own count and sends the
        updated count to the parent component when the count changes.
      </h5>

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

`;