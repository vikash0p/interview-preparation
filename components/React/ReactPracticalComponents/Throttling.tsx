"use client";

import React, { useEffect, useRef,useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useThrottleOne<T extends any[]>(callback: (...args: T) => void,limit: number) {
  const lastRan = useRef<number>(0);

  const throttledCallback = (...args: T) => {
    const now = Date.now();
    if (now - lastRan.current >= limit) {
      callback(...args);
      lastRan.current = now;
    }
  };

  return throttledCallback;
}

export const Throttling: React.FC = () => {
  const handleScroll = useThrottleOne(() => {
    console.log("Scroll position:", window.scrollY);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="p-4 border-2 border-black mt-20 ">
        <h1 className="text-4xl">Throttling...</h1>
        <h2 className="text-4xl">Example One</h2>
      <h3 className="text-2xl font-bold">
        Definition: Throttling limits the number of times a function can be
        called over time. It ensures that a function is executed at most once in
        a specified interval.
      </h3>
      <h4 className="text-xl mt-2">
        Use Case: Handling scroll events—execute a function at most every 100
        milliseconds, regardless of how often the scroll event occurs.
      </h4>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Summary</h3>
        <ul className="list-disc list-inside">
          <li>
            Debounce is used for input fields to wait until the user stops
            typing before executing a function (like a search).
          </li>
          <li>
            Throttle is used for high-frequency events (like scrolling) to limit
            how often a function is executed.
          </li>
        </ul>
      </div>

      <div style={{ height: "100vh" }} className="mt-8 bg-red-500">
        <h1 className="text-2xl">Scroll down to see the effect</h1>
      </div>
    </div>
  );
};





// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useThrottle<T extends any[]>( callback: (...args: T) => void,limit: number) {
  const lastRan = useRef<number>(0);

  const throttledCallback = useRef((...args: T) => {
    const now = Date.now();
    if (now - lastRan.current >= limit) {
      callback(...args);
      lastRan.current = now;
    }
  }).current;

  return throttledCallback;
}

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useThrottle(() => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, 100);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="p-4">
    <h1 className="text-4xl">Second example</h1>
      <h2 className="text-2xl font-bold">Scroll to Top Example</h2>
      <div style={{ height: "200vh", marginTop: "20px" }}>
        <h2 className="text-lg">Scroll down to see the button appear!</h2>
      </div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded shadow-md hover:bg-blue-600 transition"
        >
          Scroll to Top
        </button>
      )}
    </div>
  );
};

