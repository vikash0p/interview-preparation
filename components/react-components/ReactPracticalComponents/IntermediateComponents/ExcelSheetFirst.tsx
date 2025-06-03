"use client";
import React, { useState } from "react";

type ExcelGrid = string[][];

const ExcelSheet: React.FC = () => {
  const [bgColor, setBgColor] = useState<string>("bg-gray-300");
  const [isBold, setIsBold] = useState<boolean>(false);
  const [isItalic, setIsItalic] = useState<boolean>(false);

  const [excel, setExcel] = useState<ExcelGrid>(
    Array.from({ length: 3 }, () => Array(3).fill(""))
  );

  const handleTextChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    rowIndex: number,
    colIndex: number
  ): void => {
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

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  const toggleBackgroundColor = (): void => {
    setBgColor((prev) => (prev === "bg-white" ? "bg-indigo-400" : "bg-white"));
  };

  const toggleBold = (): void => {
    setIsBold((prev) => !prev);
  };

  const toggleItalic = (): void => {
    setIsItalic((prev) => !prev);
  };

  return (
    <>
      <form
        className="grid grid-cols-3 gap-1 w-full px-5 m-auto mt-20"
        onSubmit={handleFormSubmit}
      >
        {excel.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <input
              key={(rowIndex + 1) * (colIndex + 1)}
              type="text"
              className={
                " py-2 text-black ps-3 border border-gray-300 " +
                bgColor +
                (isBold ? " font-bold " : "") +
                (isItalic ? " italic " : "")
              }
              value={cell}
              onChange={(event) => handleTextChange(event, rowIndex, colIndex)}
            />
          ))
        )}
      </form>
      <div className="mt-20 flex justify-center  gap-5">
        <button
          onClick={toggleBackgroundColor}
          className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700 text-white focus:outline-none"
        >
          Toggle Background
        </button>
        <button
          onClick={toggleBold}
          className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700 text-white focus:outline-none"
        >
          Toggle Bold
        </button>
        <button
          onClick={toggleItalic}
          className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700 text-white focus:outline-none"
        >
          Toggle Italic
        </button>
      </div>
    </>
  );
};

export default ExcelSheet;


// !Excel Sheet data source


export const excelSheetDataSource = `
"use client";
import React, { useState } from "react";

type ExcelGrid = string[][];

const ExcelSheet: React.FC = () => {
  const [bgColor, setBgColor] = useState<string>("bg-white");
  const [isBold, setIsBold] = useState<boolean>(false);
  const [isItalic, setIsItalic] = useState<boolean>(false);

  const [excel, setExcel] = useState<ExcelGrid>(
    Array.from({ length: 3 }, () => Array(3).fill(""))
  );

  const handleTextChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    rowIndex: number,
    colIndex: number
  ): void => {
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

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  const toggleBackgroundColor = (): void => {
    setBgColor((prev) => (prev === "bg-white" ? "bg-gray-200" : "bg-white"));
  };

  const toggleBold = (): void => {
    setIsBold((prev) => !prev);
  };

  const toggleItalic = (): void => {
    setIsItalic((prev) => !prev);
  };

  return (
    <>
      <form
        className="grid grid-cols-3 gap-1 w-full px-5 m-auto mt-20"
        onSubmit={handleFormSubmit}
      >
        {excel.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <input
              key={(rowIndex + 1) * (colIndex + 1)}
              type="text"
              className={
                " py-2 text-black ps-3 border border-gray-300 " +
                bgColor +
                (isBold ? " font-bold " : "") +
                (isItalic ? " italic " : "")
              }
              value={cell}
              onChange={(event) => handleTextChange(event, rowIndex, colIndex)}
            />
          ))
        )}
      </form>
      <div className="mt-20 flex justify-center  gap-5">
        <button
          onClick={toggleBackgroundColor}
          className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700 text-white focus:outline-none"
        >
          Toggle Background
        </button>
        <button
          onClick={toggleBold}
          className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700 text-white focus:outline-none"
        >
          Toggle Bold
        </button>
        <button
          onClick={toggleItalic}
          className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700 text-white focus:outline-none"
        >
          Toggle Italic
        </button>
      </div>
    </>
  );
};

export default ExcelSheet;`;