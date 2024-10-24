import { JavascriptKnowData } from "@/components/javascriptComponets/javascriptData/JavascriptKnowData"
import ReactSynHighlighter from "@/components/ReactInterview/ReactSyntextHiglighter"
import React from 'react'

const JavascriptKnow = () => {
  return (
    <div>

      <ReactSynHighlighter exampleCode={JavascriptKnowData} />
    </div>
  )
}

export default JavascriptKnow
