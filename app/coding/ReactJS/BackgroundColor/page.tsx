import BackgroundOneComponent from "@/components/PracticalReactComponents/BackgroundOneComponent"
import Code from "@/components/ReusableComponents/Code"
import { CountDownOneData } from "@/utils/data/codingInterViewData/CountDownOneData"
import React from 'react'
const BackgroundColor = () => {
  return (
    <div className="w-full flex flex-row gap-2 px-2 ">
      <div className=" border border-gray-700 w-[60%] h-screen rounded-sm flex flex-col items-center pt-20 ">
        <BackgroundOneComponent />
      </div>
      <div className="w-[40%]  ">
        <Code data={CountDownOneData} />
      </div>
    </div>
  )
}

export default BackgroundColor