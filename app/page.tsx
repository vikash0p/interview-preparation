// export const dynamic = "force-dynamic";
import HomeContainer from "@/components/home-components/HomeContainer";
import { HomeMetaData } from "@/main/meta/HomeMetaData";
import React from "react";

export const metadata = HomeMetaData;
const page =  () => {
  // throw new Error("This is a test error for the home page");
  // const randomNumber = Math.random();
  // console.log("🚀 ~ page.tsx:10 ~ randomNumber:", randomNumber);
  // if (randomNumber > 0.5) {
  //   throw new Error("This is a test error for the home page");
  // }
  // console.log("Home page loaded successfully");
  return <HomeContainer />;
};

export default page;
