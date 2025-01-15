"use client";
import { myImage } from "@/data/ImageData"; // Assuming this contains an array of image objects
import Image from "next/image";
import React, { useState } from "react";

// type ImageDataType = {
//   img: string;
//   imgId: string | number; // Adjust according to your actual data type
// };

const Carousel = () => {
  const [index, setIndex] = useState<number>(0);
  // console.log("🚀 ~ file: page.tsx:13 ~ index:", index);

  // Ensure 'myImage' is defined and is an array
  const totalImages = myImage.length;
  // console.log("🚀 ~ file: page.tsx:16 ~ totalImages:",index + "< ",totalImages - 1);

  const handlePrevFunction = () => {
    setIndex((prev) => {
      // console.log("🚀 ~ file: page.tsx:21 ~ prev:", prev);
      // Ensure that the index doesn't go below 0
      return prev > 0 ? prev - 1 : 0;
    });
  };

  const handleNextFunction = () => {
    setIndex((prev) => {
      // console.log("🚀 ~ file: page.tsx:28 ~ prev:", prev);
      // Ensure that the index doesn't exceed the length of the images array
      return prev < totalImages - 1 ? prev + 1 : prev;
    });
  };

  return (
    <div>
      <div className="relative w-80 h-60">
        <Image
          src={myImage[index].img}
          alt={`Image ${myImage[index].imgId}`}
          className="object-contain w-full h-full"
          fill
          priority
        />
      </div>
      <div>{myImage[index].imgId}</div>
      <div>{index} </div>
      <button
        type="button"
        className="px-5 py-2 bg-green-800 text-white rounded-md"
        onClick={handlePrevFunction}
        disabled={index === 0} // Disable button if at the first image
      >
        Prev
      </button>
      <button
        type="button"
        className="px-5 py-2 bg-green-800 text-white rounded-md"
        onClick={handleNextFunction}
        disabled={index === totalImages - 1} // Disable button if at the last image
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
