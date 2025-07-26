'use client';
import { products } from '@/main/data/common/product';
import Image from 'next/image';
import React, { useState } from 'react';

const ImageSliderComponent = () => {
	const [index, setIndex] = useState(0);
	const itemsInView = 2; // Default items in view
	const itemWidth = 207; // Default item width

	const PrevSliderFunction = () => {
		setIndex((prevIndex) => Math.max(0, prevIndex - 1));
	};

	const NextSliderFunction = () => {
		setIndex((prevIndex) =>
			Math.min(prevIndex + 1, products.length - itemsInView)
		);
	};

	return (
		<div>
			<section className='relative max-w-3xl m-auto overflow-hidden  '>
				<div
					className='flex transition-transform duration-500 ease-in-out'
					style={{
						transform:
							'translateX(-' +
							(index - Math.floor(itemsInView / 2)) * itemWidth +
							'px)',
					}}
				>
					{products.map((pro, indx) => {
						return (
							<div
								key={pro.id}
								className={
									'flex-none px-1 sm:w-[250px] md:w-[207px] lg:w-[207px] transition-all duration-300 transform hover:scale-105'
								}
							>
								<div
									className={
										'relative w-full h-40 sm:h-48 md:h-52 lg:h-64 overflow-hidden rounded-lg shadow-lg ' +
										(index === indx ? 'border-4 border-indigo-700' : '')
									}
								>
									<Image
										src={pro.imageUrl}
										alt={pro.name}
										className='object-cover'
										fill
									/>
								</div>
							</div>
						);
					})}
				</div>

				{/* Button Controls */}
				<button
					type='button'
					className='px-4 py-2 rounded-full bg-indigo-600 text-white absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 transition disabled:bg-red-600 disabled:cursor-not-allowed'
					onClick={PrevSliderFunction}
					disabled={index === 0}
				>
					Prev
				</button>
				<button
					type='button'
					className='px-4 py-2 rounded-full bg-indigo-600 text-white absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 transition disabled:bg-red-600 disabled:cursor-not-allowed'
					onClick={NextSliderFunction}
					disabled={index >= products.length - itemsInView}
				>
					Next
				</button>
			</section>
		</div>
	);
};

export default ImageSliderComponent;

// ! Image slider data source

export const imageSliderDataSource = `
import { products } from "@/main/data/product";
import Image from "next/image";
import React, { useState } from "react";

const ImageSliderComponent = () => {
  const [index, setIndex] = useState(0);
  const itemsInView = 5;
  const itemWidth = 307;
  const PrevSliderFunction = () => {
    setIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };
  const NextSliderFunction = () => {
    setIndex((prevIndex) =>
      Math.min(prevIndex + 1, products.length - itemsInView)
    );
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-5">slider Page</h1>
      <section className="relative container m-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform:
              "translateX(-" +
              (index - Math.floor(itemsInView / 2)) * itemWidth +
              "px)",
          }}
        >
          {products.map((pro, indx) => {
            return (
              <div
                key={pro.id}
                className={
                  "flex-none w-[307px] transition-all duration-300 transform hover:scale-105 p-1" +
                  (index === indx ? "" : "")
                }
              >
                <div
                  className={
                    "elative w-full h-52 overflow-hidden rounded-lg shadow-lg " +
                    (index === indx ? "border-4 border-red-700" : "")
                  }
                >
                  <Image
                    src={pro.imageUrl}
                    alt={pro.name}
                    className="object-cover"
                    fill
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Button Controls */}
        <button
          type="button"
          className="px-4 py-2 rounded-full bg-indigo-600 text-white absolute top-1/2 left-4 transform -translate-y-1/2 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 transition disabled:bg-red-600 disabled:cursor-not-allowed"
          onClick={PrevSliderFunction}
          disabled={index === 0}
        >
          Prev
        </button>
        <button
          type="button"
          className="px-4 py-2 rounded-full bg-indigo-600 text-white absolute top-1/2 right-4 transform -translate-y-1/2 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 transition disabled:bg-red-600 disabled:cursor-not-allowed"
          onClick={NextSliderFunction}
          disabled={index >= products.length - itemsInView}
        >
          Next
        </button>
      </section>
    </div>
  );
};

export default ImageSliderComponent;
`;
