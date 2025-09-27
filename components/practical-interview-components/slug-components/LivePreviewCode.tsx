import { ISlugDataProps } from "@/main/types/practical-interview.types";
import React from 'react'



export const LivePreviewCode :React.FC<ISlugDataProps> = ({data}) => {
  console.log("🚀 ~ LivePreviewCode.tsx:7 ~ data:", data);
  return (
    <div>
      <h2 className="font-semibold text-2xl">Live Preview</h2>
      <div className="w-full h-[500px] bg-gray-950 rounded-xl"></div>
    </div>
  );
}
