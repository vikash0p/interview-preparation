'use client'
import React, { useState } from "react";

const StateInReact = () => {
  // Declare a state variable 'count' and set its initial value to 0
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <h1 className="text-2xl font-bold">State in React</h1>
      <p>
        In React, state allows components to maintain and manage dynamic data
        that can change over time. When the state changes, React re-renders the
        component to update the user interface.
      </p>
      <h3 className="text-2xl">Example:-</h3>
      <h5 className="text-4xl font-bold text-blue-600 mb-5">
        Counter: {count}
      </h5>
      <div className="space-x-4">
        {/* Decrease button */}
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
          onClick={() => setCount(count - 1)}
        >
          Decrease
        </button>

        {/* Increase button */}
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
          onClick={() => setCount(count + 1)}
        >
          Increase
        </button>

        {/* Reset button */}
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default StateInReact;
