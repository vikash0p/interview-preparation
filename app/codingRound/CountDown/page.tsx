// "use client";
// import React, { useEffect, useState, useRef } from "react";

// const CountDown: React.FC = () => {
//   const [count, setCount] = useState<number>(0);
//   const countRef = useRef<number>(0); // Use useRef to store the initial value

//   useEffect(() => {
//     // On initial load, check if there's a saved count in sessionStorage
//     const savedCount = sessionStorage.getItem("count");
//     if (savedCount) {
//       const parsedCount = parseInt(savedCount, 10);
//       setCount(parsedCount); // Set the state count
//       countRef.current = parsedCount; // Set the ref to the current value
//     }
//   }, []);

//   useEffect(() => {
//     if (count === 140) return;

//     // Start the countdown and save the updated count to sessionStorage
//     const timer = setTimeout(() => {
//       setCount((prevCount) => {
//         const newCount = prevCount + 1;
//         countRef.current = newCount; // Update the ref with the new count
//         sessionStorage.setItem("count", newCount.toString()); // Persist count to sessionStorage
//         return newCount;
//       });
//     }, 1000);

//     // Cleanup the timeout on component unmount or when the count changes
//     return () => clearTimeout(timer);
//   }, [count]);

//   return (
//     <div>
//       <h2 className="text-2xl text-center">Countdown: {countRef.current}</h2>
//     </div>
//   );
// };

// export default CountDown;


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
