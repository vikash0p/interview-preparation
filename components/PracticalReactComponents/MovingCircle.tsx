"use client";
import React, { useEffect,  useState } from "react";

const MovingCircle: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center relative">
      <div
        className="w-20 h-20 rounded-full bg-red-500 transition-transform duration-300 ease-in-out transform hover:scale-110 absolute"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      ></div>
      <div className="absolute bottom-10 text-gray-700 text-lg">
        Move your mouse around to see the circle follow!
      </div>
    </div>
  );
};

export default MovingCircle;
