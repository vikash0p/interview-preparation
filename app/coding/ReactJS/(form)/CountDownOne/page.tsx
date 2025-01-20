import { CountDownOneData } from "@/utils/data/codingReactData/CountDownOneData";
import ReactSynHighlighter from "@/components/GlobalComponents/SyntextHiglighter";
import CountDownComponent from "@/components/reactInterviewPracticalComponet/CountDownComponent";
import React from "react";

const CountDown = () => {
  return (
    <div>
      <CountDownComponent />
      <div className="w-full md:w-3/4 m-auto">
        <ReactSynHighlighter exampleCode={CountDownOneData} />
      </div>
    </div>
  );
};

export default CountDown;
