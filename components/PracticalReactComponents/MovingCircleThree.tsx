"use client";

import React, { useEffect, useRef } from "react";

const MovingCircleThree: React.FC = () => {
  // useRef to reference the circle element
  const circleRef = useRef<HTMLDivElement | null>(null);

  // Handle mouse move to update circle position
  const handleMouseMove = (event: MouseEvent) => {
    console.log("🚀 ~ file: MovingCircleThree.tsx:11 ~ event:", event);
    if (circleRef.current) {
      const circle = circleRef.current;
      // Update the circle's position based on the mouse coordinates
      circle.style.left = `${event.clientX}px`;
      circle.style.top = `${event.clientY}px`;
    }
  };

  // Add mousemove event listener when the component mounts
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center relative">
      {/* Circle element, referenced by useRef */}
      <div
        ref={circleRef} // Attach useRef to this div
        className="w-20 h-20 rounded-full bg-blue-500 animate-pulse transition-transform duration-300 ease-in-out transform hover:scale-110 absolute"
        style={{
          left: "0px",
          top: "0px",
        }}
      ></div>

      {/* Instruction */}
      <div className="absolute bottom-10 text-gray-700 text-lg">
        Move your mouse around to see the circle follow!
      </div>
    </div>
  );
};

export default MovingCircleThree;
