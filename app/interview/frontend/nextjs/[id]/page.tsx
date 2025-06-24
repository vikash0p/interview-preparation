"use client";

import { NextMockData } from "@/main/data/nextData/NextMockData";
import React, { useMemo,  } from "react";
const ReactId = ({ params }: { params: { id: string } }) => {
  console.log("🚀 ~ file: page.tsx:4 ~ params:", params);

  const ReactSingleData = useMemo(() => {
    return NextMockData.find((value) => String(value.customLink) === params.id);
  }, [params.id]);

  return (
    <div className=" min-h-screen flex  justify-center text-white  ">
      {ReactSingleData ? (
        <div className="flex flex-col ">
          <h5 className="w-full  p-4  rounded-lg  text-gray-300 font-semibold text-2xl">
            {ReactSingleData.question}
          </h5>

          <p className="w-full  p-4    text-gray-400 text-xl ">
            {ReactSingleData.answer}
          </p>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-semibold">Data Not Found</h2>
          <p className="text-gray-400">The requested item does not exist.</p>
        </div>
      )}
    </div>
  );
};

export default ReactId;
