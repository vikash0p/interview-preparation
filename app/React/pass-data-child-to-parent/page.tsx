"use client";
import { Child } from "@/components/MockReactComponents/ReactChildToParent";
import React, { useState } from "react";

const Parent = () => {
  const [childCount, setChildCount] = useState(0);

  const handleChildData = (count: number) => {
    setChildCount(count);
  };

  return (
    <div>
      <h1>Child Count in Parent: {childCount}</h1>
      <Child onCountChange={handleChildData} />
    </div>
  );
};

export default Parent;


