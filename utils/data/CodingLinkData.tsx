import React from "react";
import BackgroundOneComponent, { backgroundOneData } from "@/components/PracticalReactComponents/BackgroundOneComponent";


export interface Link {
  id: number;
  name: string;
  url: string;
  component: React.ReactNode;
  data: string;
}



// Prepare the CodingLinkData array
export const CodingLinkData: Link[] = [
  {
    id: 2,
    name: "Dynamic Background Colors",
    url: "/coding/ReactJS/BackgroundColor",
    component: <BackgroundOneComponent />,
    data: backgroundOneData,
  },
];
