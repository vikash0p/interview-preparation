import { JavaScriptLogicalData } from "@/utils/data/JavaScriptData/JavaScriptLogicalData";
import React from 'react'
import {JavaScriptLogicalInterface} from '../../../utils/types/types'
import Link from "next/link";

const JavaScriptLogicalNavigation = () => {
  return (
    <div className="flex flex-col gap-3">
        {JavaScriptLogicalData.map((question: JavaScriptLogicalInterface) => (
          <Link href={`/JavaScript/logical/${question.link}`} key={question.id}>
            {question.title}
          </Link>
        ))}
    </div>
  )
}

export default JavaScriptLogicalNavigation