// ReusableContainer Component
import React from "react";
import Code from "./Code";


// Add this component if missing
// const Code = ({ data }: { data: string }) => (
//   <pre className="bg-gray-100 p-4 rounded text-sm">
//     {JSON.stringify(data, null, 2)}
//   </pre>
// );

const ReusableContainer = ({
  data,
  component,
}: {
  data: string;
  component: React.ReactNode;
}) => {
  return (
    <div className="w-full flex flex-row gap-2 px-2">
      <div className="border border-gray-700 w-[60%] h-screen rounded-sm flex flex-col items-center pt-20">
        {component}
      </div>
      <div className="w-[40%]">
        <Code data={data} />
      </div>
    </div>
  );
};

export default ReusableContainer;
