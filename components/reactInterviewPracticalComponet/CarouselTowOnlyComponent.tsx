// 'use client'
// import React, { useRef } from "react";

// interface PostsData {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

// const CarouselTowComponent = ({ data }: { data: PostsData[] }) => {
//   const carouselRef = useRef<HTMLDivElement>(null);

//   const scrollNext = () => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollBy({ left: 394, behavior: "smooth" });
//     }
//   };

//   const scrollPrev = () => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollBy({ left: -394, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="relative w-full p-4 bg-gray-50 rounded-lg shadow-lg">
//       <div
//         ref={carouselRef}
//         className="flex overflow-x-auto gap-4 scroll-smooth snap-x  snap-start snap-mandatory hide-scrollbar"
//       >
//         {data.map((value, index) => (
//           <div
//             key={index}
//             className="bg-green-700 text-white w-[404px] p-6 rounded-lg shadow-md snap-center flex-shrink-0 hover:shadow-lg transition-shadow duration-300"
//           >
//             <h5 className="text-lg font-semibold">{value.title}</h5>
//             <p className="mt-2 text-sm text-gray-200">{value.body}</p>
//           </div>
//         ))}
//       </div>

//       {/* Button Controls */}
//       <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
//         <button
//           onClick={scrollPrev}
//           className="p-2 rounded-full bg-green-700 text-white shadow-md hover:bg-green-800 transition duration-300"
//         >
//           Prev
//         </button>
//       </div>
//       <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
//         <button
//           onClick={scrollNext}
//           className="p-2 rounded-full bg-green-700 text-white shadow-md hover:bg-green-800 transition duration-300"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CarouselTowComponent;
