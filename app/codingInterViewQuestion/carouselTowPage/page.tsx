"use client";
import { products } from "@/data/product";
import Image from "next/image";
import React, { useState } from "react";

const CarouselTowPage = () => {
  const [index, setIndex] = useState(0);

  const itemsInView = 5;
  const itemWidth = 307; // Width of each item in pixels

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
      <h1 className="text-3xl font-bold text-center my-5">Products Page</h1>

      <section className="relative container m-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(index - Math.floor(itemsInView / 2)) * itemWidth}px)`,
          }}
        >
          {products.map((pro, indx) => {
            return (
              <div
                key={pro.id}
                className={`flex-none w-[307px] transition-all duration-300 transform hover:scale-105 p-1 ${
                  index === indx ? "" : ""
                }`}
              >
                <div
                  className={`relative w-full h-52 overflow-hidden rounded-lg shadow-lg ${
                    index === indx ? "border-4 border-red-700" : ""
                  }`}
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
          className="px-4 py-2 rounded-full bg-gray-800 text-white absolute top-1/2 left-4 transform -translate-y-1/2 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 transition disabled:bg-red-600 disabled:cursor-not-allowed"
          onClick={PrevSliderFunction}
          disabled={index === 0}
        >
          Prev
        </button>
        <button
          type="button"
          className="px-4 py-2 rounded-full bg-gray-800 text-white absolute top-1/2 right-4 transform -translate-y-1/2 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 transition disabled:bg-red-600 disabled:cursor-not-allowed"
          onClick={NextSliderFunction}
          disabled={index >= products.length - itemsInView}
        >
          Next
        </button>
      </section>
    </div>
  );
};

export default CarouselTowPage;
