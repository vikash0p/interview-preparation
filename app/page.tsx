"use client";
import React, { useState, useEffect } from "react";

const CountDownTimer = () => {
  const [times, setTimes] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isCountingDown, setIsCountingDown] = useState(false);

  // Handler to update time values based on user input
  const timesHandlerChangeFunction = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, name } = event.target;

    setTimes((prev) => ({
      ...prev,
      [name]: Math.max(0, Number(value)), // Ensure non-negative values
    }));
  };

  // Countdown logic
  useEffect(() => {
    let countdownInterval: NodeJS.Timeout;
    if(times.hours===0 && times.minutes===0 && times.seconds===0) return;

    if (isCountingDown &&(times.hours > 0 || times.minutes > 0 || times.seconds > 0) ) {
      countdownInterval = setInterval(() => {
        setTimes((prev) => {
          const { hours, minutes, seconds } = prev;

          if (seconds > 0) {
            return { ...prev, seconds: seconds - 1 };
          } else if (minutes > 0) {
            return { ...prev, minutes: minutes - 1, seconds: 59 };
          } else if (hours > 0) {
            return { ...prev, hours: hours - 1, minutes: 59, seconds: 59 };
          } else {
            setIsCountingDown(false);
            clearInterval(countdownInterval);
            return prev;
          }
        });
      }, 1000);
    }

    // Clean up the interval on component unmount or when the timer stops
    return () => clearInterval(countdownInterval);
  }, [isCountingDown, times]);

  // Start countdown
  const startCountdown = () => {
    setIsCountingDown(true);
  };

  // Reset countdown
  const resetCountdown = () => {
    setIsCountingDown(false);
    setTimes({
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  };

  return (
    <div className="w-full min-h-screen flex flex-col gap-5 items-center justify-center">
      <div className="w-96 space-y-5">
        <div>
          <h1 className="text-3xl font-bold text-center">CountDown Timer</h1>
        </div>
        <div className="flex gap-3 justify-between items-center w-full">
          <div className="flex flex-col gap-4 items-center">
            <span className="text-2xl font-bold">Hours</span>
            <input
              type="text"
              className="w-16 h-10 text-black"
              name="hours"
              id="hours"
              value={times.hours}
              onChange={timesHandlerChangeFunction}
              disabled={isCountingDown}
            />
          </div>
          <div>:</div>
          <div className="flex flex-col gap-4 items-center">
            <span className="text-2xl font-bold">Minutes</span>
            <input
              type="text"
              className="w-16 h-10 text-black"
              name="minutes"
              id="minutes"
              value={times.minutes}
              onChange={timesHandlerChangeFunction}
              disabled={isCountingDown}
            />
          </div>
          <div>:</div>
          <div className="flex flex-col gap-4 items-center">
            <span className="text-2xl font-bold">Seconds</span>
            <input
              type="text"
              className="w-16 h-10 text-black"
              name="seconds"
              id="seconds"
              value={times.seconds}
              onChange={timesHandlerChangeFunction}
              disabled={isCountingDown}
            />
          </div>
        </div>
        <div className="w-full flex flex-row gap-5">
          <button
            type="button"
            className="bg-green-800 w-full py-2 text-white"
            onClick={startCountdown}
            disabled={isCountingDown}
          >
            Start
          </button>
          <button
            type="button"
            className="bg-red-800 w-full py-2 text-white"
            onClick={resetCountdown}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;
