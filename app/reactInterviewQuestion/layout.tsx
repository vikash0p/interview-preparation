import React from 'react'
import { ReactInterViewQuestionLink } from "@/components/ReactInterview/ReactInterViewQuestionLink";
import Link from "next/link";
const ReactInterviewQuestionLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='w-full min-h-screen lg:flex '>
      <div className="lg:w-1/4 h-screen overflow-y-scroll sticky top-0  bg-zinc-900 py-5">
        {ReactInterViewQuestionLink.map((value) => {
          return (
            <Link
              className="ps-4 hover:underline "
              href={value.link}
              key={value.id}
            >
              {value.title}
            </Link>
          );
        })}
      </div>
      <div className="lg:w-3/4 p-5"> {children}</div>
    </div>
  );
}

export default ReactInterviewQuestionLayout
