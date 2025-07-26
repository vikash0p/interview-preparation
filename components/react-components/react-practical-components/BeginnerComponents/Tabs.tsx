"use client";
import React, { useState } from "react";

const data = [
  {
    title: "Web",
    description:
      "This concept involves creating websites that automatically adjust to fit different screen sizes, ensuring that the user experience remains optimal whether accessed on a mobile device, tablet, or desktop.",
  },
  {
    title: "React",
    description:
      "Managing state in React can be achieved through hooks like `useState` and `useReducer`, or external libraries like Redux. State management helps in controlling how data flows between components.",
  },
  {
    title: "JavaScript",
    description:
      "Asynchronous JavaScript allows code execution without waiting for long-running tasks, such as API calls or file reads, by utilizing callbacks, promises, or async/await for better performance.",
  },
];

const Tabs = () => {
  const [index, setIndex] = useState(0);
  const filterData = Array.from(new Set(data.map((value) => value.title)));
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="flex space-x-4 mb-8">
        {filterData.map((value, ind) => (
          <button
            type="button"
            key={value}
            onClick={() => setIndex(ind)}
            className={
              "px-6 py-2 text-sm font-medium rounded-md transition " +
              (ind === index
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300")
            }
          >
            {value}
          </button>
        ))}
      </div>

      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6 text-center">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">
          {data[index].title}
        </h1>
        <p className="text-gray-600">{data[index].description}</p>
      </div>
    </div>
  );
};

export default Tabs;

// !Tabs with data source

export const tabsDataSource = `
import React, { useState } from "react";

const data = [
  {
    title: "Web",
    description:
      "This concept involves creating websites that automatically adjust to fit different screen sizes, ensuring that the user experience remains optimal whether accessed on a mobile device, tablet, or desktop.",
  },
  {
    title: "React",
    description:
      "Managing state in React can be achieved through hooks like useState and useReducer, or external libraries like Redux. State management helps in controlling how data flows between components.",
  },
  {
    title: "JavaScript",
    description:
      "Asynchronous JavaScript allows code execution without waiting for long-running tasks, such as API calls or file reads, by utilizing callbacks, promises, or async/await for better performance.",
  },
];

const Tabs = () => {
  const [index, setIndex] = useState(0);
  const filterData = Array.from(new Set(data.map((value) => value.title)));
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="flex space-x-4 mb-8">
        {filterData.map((value, ind) => (
          <button
            type="button"
            key={value}
            onClick={() => setIndex(ind)}
            className={
              "px-6 py-2 text-sm font-medium rounded-md transition " +
              (ind === index
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300")
            }
          >
            {value}
          </button>
        ))}
      </div>

      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6 text-center">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">
          {data[index].title}
        </h1>
        <p className="text-gray-600">{data[index].description}</p>
      </div>
    </div>
  );
};

export default Tabs;`;