import { dropDownMenuData } from "@/utils/data/codingInterViewData/dropDownMenuData";
import ReactSynHighlighter from "@/components/ReactInterview/ReactSyntextHiglighter";
import MultilevelDropDownComp from "@/components/reactInterviewPracticalComponet/MultilevelDropDownComp";
import React from "react";

const MultilevelDropDown = () => {
  return (
    <div className="-z-30">
      <MultilevelDropDownComp />
      <div className="w-full lg:w-1/2 m-auto ">
        <ReactSynHighlighter exampleCode={dropDownMenuData} />
      </div>
    </div>
  );
};

export default MultilevelDropDown;
