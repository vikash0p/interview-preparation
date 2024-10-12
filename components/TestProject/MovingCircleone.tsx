'use client';

import React, { useState, useEffect } from 'react';

const MovingCircleOne: React.FC = () => {
  // State to track the position of the circle
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update position when mouse moves
  const handleMouseMove = (event: MouseEvent) => {
    setPosition({ x: event.clientX - 50, y: event.clientY - 50 });
  };

  // Add mousemove event listener when the component mounts
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center relative">
      {/* Moving circle that follows the mouse on hover */}
      <div
        className={`w-20 h-20 rounded-full bg-blue-500 transition-transform duration-300 ease-in-out transform hover:scale-110`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          position: 'absolute',
        }}
      ></div>

      {/* Instruction */}
      <div className="absolute bottom-10 text-gray-700 text-lg">
        Move your mouse around to see the circle follow!
      </div>
    </div>
  );
};

export default MovingCircleOne;
