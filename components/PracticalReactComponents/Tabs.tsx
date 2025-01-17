'use client'
import React, { useState } from 'react'

const data = [
  {
    title: " Web ",
    description:
      "This concept involves creating websites that automatically adjust to fit different screen sizes, ensuring that the user experience remains optimal whether accessed on a mobile device, tablet, or desktop.",
  },
  {
    title: " React",
    description:
      "Managing state in React can be achieved through hooks like `useState` and `useReducer`, or external libraries like Redux. State management helps in controlling how data flows between components.",
  },
  {
    title: " JavaScript",
    description:
      "Asynchronous JavaScript allows code execution without waiting for long-running tasks, such as API calls or file reads, by utilizing callbacks, promises, or async/await for better performance.",
  },
];

const Tabs = () => {
    const[index,setIndex]=useState(0);
// const filterDat=[...new Set(data.map((value)=>value.title))]
const filterData1=Array.from(new Set(data.map((value)=>value.title)))
  // console.log("🚀 ~ file: Tabs.tsx:25 ~ filterData1:", filterData1);
  return (
    <div className='space-x-20 mt-4'>
            {
                filterData1.map((value, ind)=>{
                    return (
                      <button
                        type="button"
                        className={`px-8 py-2 rounded-md bg-green-600 ${ind === index ? "bg-orange-500":""}`}
                        onClick={() => setIndex(ind)}
                        key={value}
                      >
                        {value}{" "}
                      </button>
                    );
                })
            }


            <div>
                <h1>{data[index].title} </h1>
                <p>{data[index].description} </p>
            </div>
    </div>
  )
}

export default Tabs
