"use client"; // Enables client-side rendering in Next.js
import React, { useState } from "react";

// Parent Component: ChildToParent
export const ChildToParent = () => {
  // State to hold the count received from the child
  const [childCount, setChildCount] = useState(0);

  // Handler function to update `childCount` when data is received from the child
  const handleChildData = (count: number) => {
    setChildCount(count);
  };

  return (
    <div>
      {/* Definition of the parent component */}
      <h5>
        This is the parent component. It receives the count from the child
        component and displays it here.
      </h5>

      {/* Display the count received from the child */}
      <h1>Child Count in Parent: {childCount}</h1>

      {/* Render the Child component and pass the handler function as a prop */}
      <Child onCountChange={handleChildData} />
    </div>
  );
};

// Interface defining the props for the Child component
interface ChildProps {
  onCountChange: (count: number) => void; // Callback function to send the count to the parent
}

// Child Component: Child
const Child = ({ onCountChange }: ChildProps) => {
  // Local state to track the count within the child
  const [count, setCount] = useState(0);

  // Function to increment the count
  const handleIncrease = () => {
    const newCount = count + 1; // Increment the count
    setCount(newCount); // Update local state
    onCountChange(newCount); // Notify parent of updated count
  };

  // Function to decrement the count
  const handleDecrease = () => {
    const newCount = count - 1; // Decrement the count
    setCount(newCount); // Update local state
    onCountChange(newCount); // Notify parent of updated count
  };

  return (
    <div className="space-x-5">
      {/* Definition of the child component */}
      <h5>
        This is the child component. It manages its own count and sends the
        updated count to the parent component when the count changes.
      </h5>

      {/* Display the current count */}
      <h1>Count: {count}</h1>

      {/* Button to increase count */}
      <button
        className="px-6 py-2 rounded-sm bg-yellow-500 text-black"
        onClick={handleIncrease}
      >
        Increase Count
      </button>

      {/* Button to decrease count */}
      <button
        className="px-6 py-2 rounded-sm bg-yellow-500 text-black"
        onClick={handleDecrease}
      >
        Decrease Count
      </button>
    </div>
  );
};
