'use client';
import { products } from '@/main/data/product';
import Image from 'next/image';
import React, { useState } from 'react';

const CarouselFirstComponent = () => {
	const [index, setIndex] = useState<number>(0);
	const totalImages = products.length;

	const handlePrev = () => setIndex((prev) => (prev > 0 ? prev - 1 : prev));

	const handleNext = () =>
		setIndex((prev) => (prev < totalImages - 1 ? prev + 1 : prev));

	return (
		<div className={'flex flex-col items-center justify-center space-y-4 p-4'}>
			<div
				className={
					'relative w-80 h-60 border rounded-md shadow-md overflow-hidden'
				}
			>
				<Image
					src={products[index].imageUrl}
					alt={'Image ' + products[index].id}
					className={'object-cover'}
					fill
					priority
				/>
			</div>
			<p className={'text-lg font-medium'}>
				{'Image ' + products[index].id + ' of ' + products.length}
			</p>
			<div className={'flex space-x-4'}>
				<button
					type='button'
					className={
						'px-5 py-2 rounded-md font-medium transition-all duration-200 text-white ' +
						(index === 0
							? 'bg-gray-400 cursor-not-allowed'
							: 'bg-indigo-600 hover:bg-indigo-700')
					}
					onClick={handlePrev}
					disabled={index === 0}
				>
					Prev
				</button>
				<button
					type='button'
					className={
						'px-5 py-2 rounded-md font-medium transition-all duration-200 text-white ' +
						(index === totalImages - 1
							? 'bg-gray-400 cursor-not-allowed'
							: 'bg-indigo-600 hover:bg-indigo-700')
					}
					onClick={handleNext}
					disabled={index === totalImages - 1}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default CarouselFirstComponent;

//! carousel data source
export const carouselFirstData = `
"use client";
import { products } from "@/main/data/product";
import Image from "next/image";
import React, { useState } from "react";

const CarouselFirstComponent = () => {
  const [index, setIndex] = useState<number>(0);
  const totalImages = products.length;

  const handlePrev = () => setIndex((prev) => (prev > 0 ? prev - 1 : prev));

  const handleNext = () =>
    setIndex((prev) => (prev < totalImages - 1 ? prev + 1 : prev));

  return (
    <div className={"flex flex-col items-center justify-center space-y-4 p-4"}>
      <div
        className={
          "relative w-80 h-60 border rounded-md shadow-md overflow-hidden"
        }
      >
        <Image
          src={products[index].imageUrl}
          alt={"Image " + products[index].id}
          className={"object-cover"}
          fill
          priority
        />
      </div>
      <p className={"text-lg font-medium"}>
        {"Image " + products[index].id + " of " + products.length}
      </p>
      <div className={"flex space-x-4"}>
        <button
          type="button"
          className={
            "px-5 py-2 rounded-md font-medium transition-all duration-200 text-white " +
            (index === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700")
          }
          onClick={handlePrev}
          disabled={index === 0}
        >
          Prev
        </button>
        <button
          type="button"
          className={
            "px-5 py-2 rounded-md font-medium transition-all duration-200 text-white " +
            (index === totalImages - 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700")
          }
          onClick={handleNext}
          disabled={index === totalImages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CarouselFirstComponent;


`;
