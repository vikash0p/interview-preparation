"use client";
import React, { useEffect, useState, useRef } from "react";

const TimeOne: React.FC = () => {
  const [time, setTime] = useState<number>(60); // Initial time set to 60 seconds
  const [isRunning, setIsRunning] = useState<boolean>(true); // Timer is running by default
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Ref to store the interval

  // Function to decrement the timer
  const decrementTime = () => {
    setTime((prevTime) => prevTime - 1);
  };

  // Effect to handle the timer logic
  useEffect(() => {
    if (isRunning && time > 0) {
      // Start the timer if running and time is greater than 0
      intervalRef.current = setTimeout(decrementTime, 1000);
    }

    // Clean up the timeout to avoid memory leaks
    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [time, isRunning]);

  // Function to stop the timer
  const handleStop = () => {
    setIsRunning(false); // Stop the timer
    if (intervalRef.current) {
      clearTimeout(intervalRef.current); // Clear the timeout
    }
  };

  // Function to resume the timer
  const handlePlay = () => {
    setIsRunning(true); // Resume the timer
  };

  return (
    <div>
      <div>Time: {time}</div>
      <button
        onClick={handleStop}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Stop
      </button>
      <button
        onClick={handlePlay}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded ml-4"
      >
        Play
      </button>
    </div>
  );
};

export default TimeOne;
