import { MultilevelSelectDropdownData } from "@/utils/data/codingInterViewData/MultilevelSelectDropdownData";
import ReactSynHighlighter from "@/components/GlobalComponents/SyntextHiglighter";
import MultilevelSelectDropdownComponent from "@/components/reactInterviewPracticalComponet/MultilevelSelectDropdownComponents";
import React from "react";

const multilevelSelectDropdown = () => {
  return (
    <div>
      <MultilevelSelectDropdownComponent />
      <div className="w-full lg:w-3/4 m-auto ">
        <ReactSynHighlighter exampleCode={MultilevelSelectDropdownData} />
      </div>
    </div>
  );
};

export default multilevelSelectDropdown;
