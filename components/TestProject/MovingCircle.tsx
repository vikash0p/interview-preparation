// "use client";

// import React, { useEffect, useRef } from "react";

// const MovingCircle: React.FC = () => {
//   // useRef to reference the circle element
//   const circleRef = useRef<HTMLDivElement | null>(null);

//   // Handle mouse move to update circle position
//   const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
//     if (circleRef.current) {
//       const circle = circleRef.current;
//       const circleSize = 30; // Adjust to center the circle on cursor

//       // Update the circle's position based on the mouse coordinates
//       circle.style.left = `${event.clientX - circleSize}px`;
//       circle.style.top = `${event.clientY - circleSize}px`;
//     }
//   };



//   return (
//     <div className="h-screen w-screen bg-gray-100 flex items-center justify-center relative">
//       {/* Circle element, referenced by useRef */}
//       <div
//         ref={circleRef} // Attach useRef to this div
//         onMouseMove={handleMouseMove}
//         className="w-20 h-20 rounded-full bg-red-500 transition-transform duration-300 ease-in-out transform hover:scale-110 absolute"
//         style={{
//           left: "0px",
//           top: "0px",
//         }}
//       ></div>

//       {/* Instruction */}
//       <div className="absolute bottom-10 text-gray-700 text-lg">
//         Move your mouse around to see the circle follow!
//       </div>
//     </div>
//   );
// };

// export default MovingCircle;

// 2. option is best
"use client";

import React, { useEffect,  useState } from "react";

const MovingCircle: React.FC = () => {
  // State to track mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse move event
  const handleMouseMove = (event: MouseEvent) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  // Add mouse move event listener on mount and clean up on unmount
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center relative">
      {/* Circle element */}
      <div
        className="w-20 h-20 rounded-full bg-red-500 transition-transform duration-300 ease-in-out transform hover:scale-110 absolute"
        style={{
          left: `${mousePosition.x}px`, // Adjust circle position
          top: `${mousePosition.y}px`, // Adjust circle position
        }}
      ></div>

      {/* Instruction */}
      <div className="absolute bottom-10 text-gray-700 text-lg">
        Move your mouse around to see the circle follow!
      </div>
    </div>
  );
};

export default MovingCircle;
