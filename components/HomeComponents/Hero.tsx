"use client";
import React from "react";
import LeftHero from "./LeftHero";
import RightHero from "./RightHero";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between h-full py-16 lg:py-24 max-w-7xl m-auto px-4">
      <LeftHero />
      <RightHero />
    </section>
  );
};

export default Hero;
