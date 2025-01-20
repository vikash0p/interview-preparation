import { InputAddDataAndSearchHighlighterData } from "@/utils/data/codingReactData/InputAddDataAndSearchHighlighterData";
import ReactSynHighlighter from "@/components/GlobalComponents/SyntextHiglighter";
import InputAddDataAndSearchDataComponent from "@/components/reactInterviewPracticalComponet/InputAddDataAndSearchDataComponent";

import React from "react";

const InputAddDataAndSearchData = () => {
  return (
    <div className="">
      <InputAddDataAndSearchDataComponent />
      <div className="w-full lg:w-3/4 m-auto ">
        <ReactSynHighlighter
          exampleCode={InputAddDataAndSearchHighlighterData}
        />
      </div>
    </div>
  );
};

export default InputAddDataAndSearchData;
