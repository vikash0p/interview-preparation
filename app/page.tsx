import HomeContainer from "@/components/HomeComponents/HomeContainer";
import { HomeMetaData } from "@/main/meta/HomeMetaData";
import React from "react";

export const metadata = HomeMetaData;
const page =  () => {
  return <HomeContainer />;
};

export default page;
