import { ReactMockData } from "@/utils/data/ReactData/ReactMockData";
import React from "react";

const ReactId = ({ params }: { params: { id: string } }) => {
  console.log("🚀 ~ file: page.tsx:4 ~ params:", params);

  const ReactSingleData=ReactMockData.find((value) => String(value.link) === params.id);
  return <div>{ReactSingleData?.component} </div>;
};

export default ReactId;
