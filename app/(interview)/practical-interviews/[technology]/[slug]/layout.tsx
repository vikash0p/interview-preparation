import SlugLayoutContainer from "@/components/practical-interview-components/SlugLayoutContainer";
import React from 'react'


interface Props {
  children: React.ReactNode;
  sideBar: React.ReactNode;
}

const SlugLayout: React.FC<Props> = ({children,sideBar}) => {
  return (
<div>
  <SlugLayoutContainer child={children} sideBar={sideBar} />
</div>
  )
}

export default SlugLayout