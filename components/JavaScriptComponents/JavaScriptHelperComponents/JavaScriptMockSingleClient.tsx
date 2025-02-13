'use client'
import React from 'react'
import dynamic from "next/dynamic"

const JavaScriptSingleNavigation = dynamic(() => import('./JavaScriptSingleNavigation'), { ssr: false })
const JavaScriptMockSingleClient = ({id}:{id:string}) => {
  return (
    <div>
      <JavaScriptSingleNavigation id={id} />
    </div>
  )
}

export default JavaScriptMockSingleClient