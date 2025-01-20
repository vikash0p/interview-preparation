import BackgroundOneComponent from "@/components/PracticalReactComponents/BackgroundOneComponent";
import ReusableContainer from "@/components/ReusableComponents/ReusableContainer";
import { backgroundColorData } from "@/utils/data/codingReactData/BackgroundOneData";

import React from "react";
const BackgroundColor = () => {
  return (
    <ReusableContainer
      data={backgroundColorData}
      component={<BackgroundOneComponent />}
    />
  );
};

export default BackgroundColor;
