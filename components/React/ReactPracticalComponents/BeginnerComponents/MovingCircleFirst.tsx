"use client";
import React, { useState, useEffect } from "react";
const MovingCircleFirst: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (event: MouseEvent) => {
    setPosition({ x: event.clientX - 50, y: event.clientY - 50 });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="h-full w-full  flex items-center justify-center relative">
      <div
        className="w-20 h-20 rounded-full bg-indigo-600 transition-transform duration-300 ease-in-out transform hover:scale-110"
        style={{
          left: position.x + "px",
          top: position.y + "px",
          position: "absolute",
        }}
      ></div>
    </div>
  );
};

export default MovingCircleFirst;

// !---------------------------------------------------------------- move circle first data source --------------------------------
export const moveCircleFirstDataSource = `
'use client';
import React, { useState, useEffect } from 'react';
const MovingCircleFirst: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (event: MouseEvent) => {
    setPosition({ x: event.clientX - 50, y: event.clientY - 50 });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="h-full w-full  flex items-center justify-center relative">
<div
  className="w-20 h-20 rounded-full bg-indigo-600 transition-transform duration-300 ease-in-out transform hover:scale-110"
  style={{
    left: "(position.x) + px",
    top: "(position.y) + px",
    position: 'absolute',
  }}
></div>
    </div>
  );
};

export default MovingCircleFirst;
`;
