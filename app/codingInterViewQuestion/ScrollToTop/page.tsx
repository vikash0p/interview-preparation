"use client";

import React, { useEffect, useRef, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useThrottle<T extends any[]>(
  callback: (...args: T) => void,
  limit: number
) {
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

const ScrollToTop: React.FC = () => {
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
      <h1 className="text-2xl font-bold">Scroll to Top Example</h1>
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

export default ScrollToTop;
