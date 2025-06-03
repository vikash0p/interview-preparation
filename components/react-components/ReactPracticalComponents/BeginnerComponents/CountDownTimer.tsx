"use client";
import React, { useEffect, useState } from "react";

const CountDownTimers: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (count === 50) return;

    const timer = setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 100);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div>
      <h2 className="text-2xl text-center">Countdown: {count}</h2>
    </div>
  );
};

export default CountDownTimers;

// !Countdown Timer with data source

export const countDownTimersDataSource = `
"use client";
import React, { useEffect, useState } from "react";

const CountDownTimers: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (count === 50) return;

    const timer = setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 100);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div>
      <h2 className="text-2xl text-center">Countdown: {count}</h2>
    </div>
  );
};

export default CountDownTimers;
`;