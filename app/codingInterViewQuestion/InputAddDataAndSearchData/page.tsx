import { InputAddDataAndSearchHighlighterData } from "@/components/codingInterViewData/InputAddDataAndSearchHighlighterData";
import ReactSynHighlighter from "@/components/ReactInterview/ReactSyntextHiglighter";
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
