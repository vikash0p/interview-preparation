'use client'
import React, { useState } from "react";
import Code from "./Code";
import ModelOne from "../PracticalReactComponents/ModelOne";
const ReusableContainer = ({
  data,
  component,
  heading,
}: {
  data: string;
  component: React.ReactNode;
  heading: string;
}) => {

      const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full flex flex-row gap-2 px-2 h-[85%]   ">
      <div className="border border-gray-700 w-[60%] h-full rounded-sm flex flex-col items-center pt-20 relative">
        <div className="flex flex-col items-center  gap-5">
          <h1 className="text-2xl font-bold text-center">{heading}</h1>
          <div>{component}</div>
        </div>
        <p className="text-red-500 text-center absolute bottom-10">
          Notes: customize the css to fit your needs
        </p>
      </div>
      <div className="w-[40%] h-full ">
        <Code data={data} toggleOpen={toggleOpen} open={open} />
      </div>
      <ModelOne open={open} toggleOpen={toggleOpen} data={data} heading={heading} />
    </div>
  );
};

export default ReusableContainer;
