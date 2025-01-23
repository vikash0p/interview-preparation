import { dropDownMenuData } from "@/utils/data/codingReactData/dropDownMenuData";
import ReactSynHighlighter from "@/components/GlobalComponents/SyntextHiglighter";
import MultilevelDropDownComp from "@/components/PracticalReactComponents/IntermediateComponents/MultilevelDropdown";
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
