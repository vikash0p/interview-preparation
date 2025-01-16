import { PasswordGeneratorData } from "@/utils/data/codingInterViewData/PasswrodGeneratorData";
import ReactSynHighlighter from "@/components/ReactInterview/ReactSyntextHiglighter";
import PasswordGeneratorComponent from "@/components/reactInterviewPracticalComponet/PasswordGeneratorComponent";
import React from "react";

const PasswordGenerator = () => {
  return (
    <>
      <div>
        <PasswordGeneratorComponent />
      </div>
      <div className="w-full lg:w-3/4 m-auto">
        <ReactSynHighlighter exampleCode={PasswordGeneratorData} />
      </div>
    </>
  );
};

export default PasswordGenerator;
