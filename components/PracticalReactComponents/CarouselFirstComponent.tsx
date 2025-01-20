"use client";

import { myImage } from "@/utils/data/ImageData";
import Image from "next/image";
import React, { useState } from "react";

const CarouselFirstComponent = () => {
  const [index, setIndex] = useState<number>(0);
  const totalImages = myImage.length;

  const handlePrev = () => setIndex((prev) => (prev > 0 ? prev - 1 : prev));

  const handleNext = () =>
    setIndex((prev) => (prev < totalImages - 1 ? prev + 1 : prev));

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-4">
      <div className="relative w-80 h-60 border rounded-md shadow-md overflow-hidden">
        <Image
          src={myImage[index].img}
          alt={`Image ${myImage[index].imgId}`}
          className="object-cover"
          fill
          priority
        />
      </div>
      <p className="text-lg font-medium">
        Image {myImage[index].imgId} of {totalImages}
      </p>
      <div className="flex space-x-4">
        <button
          type="button"
          className={`px-5 py-2 rounded-md font-medium transition-all duration-200 text-white ${
            index === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
          onClick={handlePrev}
          disabled={index === 0}
        >
          Prev
        </button>
        <button
          type="button"
          className={`px-5 py-2 rounded-md font-medium transition-all duration-200 text-white ${
            index === totalImages - 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
          onClick={handleNext}
          disabled={index === totalImages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CarouselFirstComponent
