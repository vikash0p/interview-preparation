
"use client";
import React, { useEffect, useState } from "react";

const CountDown: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (count === 50) return;

    // Start the countdown without using sessionStorage
    const timer = setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 100);

    // Cleanup the timeout on component unmount or when the count changes
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div>
      <h2 className="text-2xl text-center">Countdown: {count}</h2>
    </div>
  );
};

export default CountDown;
