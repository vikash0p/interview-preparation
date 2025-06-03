"use client";
import React, { useState } from "react";
interface Color {
  id: string;
  text: string;
  back: string;
}
const colors: Color[] = [
  {
    id: "1",
    text: "white",
    back: "red",
  },
  {
    id: "2",
    text: "white",
    back: "gray",
  },
  {
    id: "3",
    text: "black",
    back: "blue",
  },
];

const BackgroundOneComponent: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const ColorChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIndex(Number(event.target.value));
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Display the color block with dynamic background and text */}
      <div
        className="w-80 h-80 flex items-center justify-center text-center p-4 rounded-md shadow-lg"
        style={{
          backgroundColor: colors[index].back,
          color: colors[index].text,
        }}
      >
        <h1 className="text-lg font-bold">
          Dynamic Color Block - {colors[index].back.toUpperCase()}
        </h1>
      </div>

      {/* Radio buttons for selecting background color */}
      <div className="flex space-x-6">
        {colors.map((color, idx) => (
          <label
            key={color.id}
            htmlFor={`color-${color.id}`}
            className="flex items-center space-x-2"
          >
            <input
              type="checkbox"
              id={`color-${color.id}`}
              name="color"
              value={idx}
              checked={index === idx}
              onChange={ColorChangeHandler}
              className="form-radio h-5 w-5"
            />
            <span className="text-lg">{color.back}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default BackgroundOneComponent

// ! background one data source
export const backgroundOneData=`
"use client";
import React, { useState } from "react";
interface Color {
  id: string;
  text: string;
  back: string;
}
const colors: Color[] = [
  {
    id: "1",
    text: "white",
    back: "red",
  },
  {
    id: "2",
    text: "white",
    back: "gray",
  },
  {
    id: "3",
    text: "black",
    back: "blue",
  },
];

const BackgroundOneComponent: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const ColorChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIndex(Number(event.target.value));
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Display the color block with dynamic background and text */}
      <div
        className="w-80 h-80 flex items-center justify-center text-center p-4 rounded-md shadow-lg"
        style={{
          backgroundColor: colors[index].back,
          color: colors[index].text,
        }}
      >
        <h1 className="text-lg font-bold">
          Dynamic Color Block - {colors[index].back.toUpperCase()}
        </h1>
      </div>

      {/* Radio buttons for selecting background color */}
      <div className="flex space-x-6">
        {colors.map((color, idx) => (
          <label
            key={color.id}
            htmlFor={'backgroundColor'}
            className="flex items-center space-x-2"
          >
            <input
              type="checkbox"
              id={'color1'}
              name="color"
              value={idx}
              checked={index === idx}
              onChange={ColorChangeHandler}
              className="form-radio h-5 w-5"
            />
            <span className="text-lg">{color.back}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default BackgroundOneComponent
`
