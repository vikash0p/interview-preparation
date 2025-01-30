import { ReactMockData } from "@/utils/data/ReactData/ReactMockData";
import React, { useMemo } from "react";

const ReactId = ({ params }: { params: { id: string } }) => {
  console.log("🚀 ~ file: page.tsx:4 ~ params:", params);

  const ReactSingleData = useMemo(() => {
    return ReactMockData.find((value) => String(value.link) === params.id);
  }, [params.id]);

  return (
    <div className=" min-h-screen flex  justify-center text-white  ">
      {ReactSingleData ? (
        <div className="w-full  p-4  rounded-lg shadow-lg text-gray-300">
          {ReactSingleData.component}
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
