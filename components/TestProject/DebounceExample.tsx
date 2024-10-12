"use client";
import React, { useState, useEffect } from "react";

function useDebounce(value: string, delay: number): string {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {setDebouncedValue(value)}, delay);
    return () => {clearTimeout(handler)};
  }, [value, delay]);

  return debouncedValue;
}

const DebounceExample: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const debouncedSearchTerm = useDebounce(inputValue, 3000);

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log("Searching for:", debouncedSearchTerm);
      // Perform search here
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="p-4 border-2 border-black ">
        <h1 className="text-4xl"> DeBounce</h1>
      <h2 className="text-2xl font-bold mb-4">
        Definition: Debouncing ensures that a function is only called after a
        certain amount of time has passed since the last time it was invoked. It
        is useful for events that fire frequently, like key presses or window
        resizing.
      </h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
        className="border border-gray-300 rounded p-2 mb-4 w-full"
      />
      <h2 className="text-lg font-semibold">Debounced Value:</h2>
      <h1 className="text-xl mt-2">{debouncedSearchTerm}</h1>
    </div>
  );
};

export default DebounceExample;
