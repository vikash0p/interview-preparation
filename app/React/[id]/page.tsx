'use client'
import Code from "@/components/ReusableComponents/Code";
import { ReactMockData } from "@/main/data/ReactData/ReactMockData";
import React, { useMemo, useState } from "react";

const ReactId = ({ params }: { params: { id: string } }) => {
  console.log("🚀 ~ file: page.tsx:4 ~ params:", params);

  const[open,setOpen]=useState(false);
  const toggleOpen=()=>{
    setOpen(!open);
  }
  const ReactSingleData = useMemo(() => {
    return ReactMockData.find((value) => String(value.link) === params.id);
  }, [params.id]);

  return (
    <div className=" min-h-screen flex  justify-center text-white  ">
      {ReactSingleData ? (
        <div className="flex flex-col gap-10">
          <div className="w-full  p-4  rounded-lg shadow-lg text-gray-300">
            {ReactSingleData.component}
          </div>
          {ReactSingleData.data && <Code data={ReactSingleData.data} open={open} toggleOpen={toggleOpen} />}
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
