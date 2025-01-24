import { JavaScriptLogicalData } from "@/utils/data/JavaScriptData/JavaScriptLogicalData"
import React from 'react'


const LogicalSingle = ({params}:{params:{logical:string}}) => {
    const singleData=JavaScriptLogicalData.find((value) => String(value.link) === params.logical);
  return (
    <div>
        <pre>
            <code>{singleData?.content} </code>
        </pre>
    </div>
  )
}

export default LogicalSingle