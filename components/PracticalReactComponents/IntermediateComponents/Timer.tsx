"use client";
import React, { useEffect, useState, useRef } from "react";
const Timer: React.FC = () => {
  const [time, setTime] = useState<number>(60);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const decrementTime = () => {
    setTime((prevTime) => prevTime - 1);
  };

  useEffect(() => {
    if (isRunning && time > 0) {
      intervalRef.current = setTimeout(decrementTime, 1000);
    }
    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [time, isRunning]);

  const handleStop = () => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearTimeout(intervalRef.current);
    }
  };

  const handlePlay = () => {
    setIsRunning(true);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="text-4xl font-bold text-gray-200 mb-6">
        Time Left: {time}s
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handleStop}
          className="px-6 py-2 bg-red-500 text-white font-medium rounded-md shadow-md hover:bg-red-600 transition"
        >
          Stop
        </button>
        <button
          onClick={handlePlay}
          className="px-6 py-2 bg-green-500 text-white font-medium rounded-md shadow-md hover:bg-green-600 transition"
        >
          Play
        </button>
      </div>
    </div>
  );
};

export default Timer;


// !Countdown Timer data source

export const timerDataSource = `"use client";
import React, { useEffect, useState, useRef } from "react";
const Timer: React.FC = () => {
  const [time, setTime] = useState<number>(60);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const decrementTime = () => {
    setTime((prevTime) => prevTime - 1);
  };

  useEffect(() => {
    if (isRunning && time > 0) {
      intervalRef.current = setTimeout(decrementTime, 1000);
    }
    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [time, isRunning]);

  const handleStop = () => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearTimeout(intervalRef.current);
    }
  };

  const handlePlay = () => {
    setIsRunning(true);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="text-4xl font-bold text-gray-200 mb-6">
        Time Left: {time}s
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handleStop}
          className="px-6 py-2 bg-red-500 text-white font-medium rounded-md shadow-md hover:bg-red-600 transition"
        >
          Stop
        </button>
        <button
          onClick={handlePlay}
          className="px-6 py-2 bg-green-500 text-white font-medium rounded-md shadow-md hover:bg-green-600 transition"
        >
          Play
        </button>
      </div>
    </div>
  );
};

export default Timer;`;