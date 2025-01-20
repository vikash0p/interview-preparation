import React from "react"; // Ensure React is imported in this file
import BackgroundOneComponent from "@/components/PracticalReactComponents/BackgroundOneComponent";
import { backgroundColorData } from "./codingReactData/BackgroundOneData";
import CarouselFirstComponent from "@/components/PracticalReactComponents/CarouselFirstComponent";
import { CarouselFirstData } from "./codingReactData/CarouselFirstData";

export interface Link {
  id: number;
  name: string;
  url: string;
  component: React.ReactNode;
  data: string;
}

export const CodingLinkData: Link[] = [
  {
    id: 2,
    name: "Dynamic Background Colors",
    url: "/coding/ReactJS/BackgroundColor",
    component: React.createElement(BackgroundOneComponent),
    data: backgroundColorData,
  },
  {
    id: 3,
    name: "Image Carousel",
    url: "/coding/ReactJS/carouselPage",
    component: React.createElement(CarouselFirstComponent),
    data: CarouselFirstData,
  },
];
