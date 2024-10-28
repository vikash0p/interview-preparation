"use client";
import React, { useState } from "react";

const ExcelSheetComponent = () => {
  const [bgColor, setBgColor] = useState("bg-white");
  console.log("🚀 ~ file: ExcelSheetComponent.tsx:6 ~ setBgColor:", setBgColor);
  const [isBold, setIsBold] = useState(false);
  console.log("🚀 ~ file: ExcelSheetComponent.tsx:7 ~ setIsBold:", setIsBold);

  const [isItalic, setIsItalic] = useState(false);
  console.log(
    "🚀 ~ file: ExcelSheetComponent.tsx:11 ~ setIsItalic:",
    setIsItalic
  );
  // Initialize excel state with an empty 2D array of strings
  const [excel, setExcel] = useState<string[][]>(
    Array.from({ length: 3 }, () => Array(3).fill(""))
  );
  console.log("🚀 ~ file: page.tsx:7 ~ excel:", excel);

  // Handler function to update the value of a specific input field
  const textHandlerFunction = (
    event: React.ChangeEvent<HTMLInputElement>,
    rowIndex: number,
    colIndex: number
  ) => {
    // const updatedExcel = [...excel];
    // updatedExcel[rowIndex][colIndex] = event.target.value;
    // setExcel(updatedExcel);
    setExcel((prevExcel) =>
      prevExcel.map((row, rIdx) =>
        rIdx === rowIndex
          ? row.map((cell, cIdx) =>
              cIdx === colIndex ? event.target.value : cell
            )
          : row
      )
    );
  };
  const excelHandlerFunction = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const changeBackgroundColorFunction = () => {
    return;
  };
  return (
    <>
      <form
        className="grid grid-cols-3 gap-1 max-w-7xl m-auto mt-20"
        onSubmit={excelHandlerFunction}
      >
        {excel.map((row, rowIndex) =>
          row.map((col, colIndex) => {
            return (
              <input
                key={`${rowIndex}-${colIndex}`}
                type="text"
                className={`py-2 text-black ps-3 border border-gray-300 ${bgColor} ${
                  isBold ? "font-bold" : ""
                } ${isItalic ? "italic" : ""} `}
                value={excel[rowIndex][colIndex]}
                onChange={(event) =>
                  textHandlerFunction(event, rowIndex, colIndex)
                }
              />
            );
          })
        )}
      </form>
      <div className="mt-20">
        <div className="mt-4 space-x-4">
          <button
            onClick={changeBackgroundColorFunction}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none"
          >
            Change Background
          </button>
        </div>
      </div>
    </>
  );
};

export default ExcelSheetComponent;
