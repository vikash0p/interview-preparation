import React from 'react'
import ReactSynHighlighter from "@/components/ReactInterview/ReactSyntextHiglighter"
import MultiLevelFormComponent from "@/components/reactInterviewPracticalComponet/MultilevelFormComponent"
import { MultiLevelFromData } from "@/components/codingInterViewData/MultilevelFormData"


const MultiLevelForm = () => {
  return (
    <div>
      <MultiLevelFormComponent />
      <div className="w-full lg:w-3/4 m-auto">

      <ReactSynHighlighter exampleCode={MultiLevelFromData} />
      </div>
    </div>
  );
}

export default MultiLevelForm
