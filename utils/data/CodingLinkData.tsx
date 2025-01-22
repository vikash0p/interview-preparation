import React from "react";
import BackgroundOneComponent, { backgroundOneData } from "@/components/PracticalReactComponents/BackgroundOneComponent";
import CarouselFirstComponent, { carouselFirstData } from "@/components/PracticalReactComponents/CarouselFirstComponent";
import ImageSliderComponent, { imageSliderDataSource } from "@/components/PracticalReactComponents/ImageSlider";
import FilterWithCheckBox, { filterWithCheckDataSource } from "@/components/PracticalReactComponents/FilterWithCheckBox";
import CountDownTimers, { countDownTimersDataSource } from "@/components/PracticalReactComponents/CountDownTimer";



export interface Link {
  id: string;
  name: string;
  url: string;
  component: React.ReactNode;
  data: string;
}



//! Prepare the CodingLinkData array

export const CodingLinkData: Link[] = [
  {
    id: "1",
    name: "Dynamic Background Colors",
    url: "theme-switcher",
    component: <BackgroundOneComponent />,
    data: backgroundOneData,
  },
  {
    id: "2",
    name: "Image Carousel",
    url: "image-carousel",
    component: React.createElement(CarouselFirstComponent),
    data: carouselFirstData,
  },
  {
    id: "3",
    name: "Image slider",
    url: "image-Slider",
    component: React.createElement(ImageSliderComponent),
    data: imageSliderDataSource,
  },
  {
    id: "4",
    name: "Filter With checkbox",
    url: "filter-with-checkbox",
    component: React.createElement(FilterWithCheckBox),
    data: filterWithCheckDataSource,
  },
  {
    id: "5 ",
    name: "CountDown Timer",
    url: "countdown-timer",
    component: React.createElement(CountDownTimers),
    data: countDownTimersDataSource,
  },
];
