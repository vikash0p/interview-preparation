import ReusableContainer from "@/components/ReusableComponents/ReusableContainer";
import { CodingLinkData } from "@/utils/data/CodingLinkData";

import React from 'react'
const ReactById = ({params}:{params:{id:string}}) => {
  console.log("🚀 ~ file: page.tsx:4 ~ params:", params.id);


  const singleData=CodingLinkData.find((value)=> String(value.id) === params.id)

  return (

    <ReusableContainer
    data={singleData?.data || ""}
    component={singleData?.component}
     />
  )
}

export default ReactById