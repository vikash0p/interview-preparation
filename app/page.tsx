import Footer from "@/components/GlobalComponents/Footer";
import AskQuestion from "@/components/HomeComponents/AskQuestion";
import Domains from "@/components/HomeComponents/Domains";
import Features from "@/components/HomeComponents/Features";
import Hero from "@/components/HomeComponents/Hero";
import JoinCommunity from "@/components/HomeComponents/JoinCommunity";
import MokeInterView from "@/components/HomeComponents/MokeInterView";
import Practice from "@/components/HomeComponents/Practice";
// import Pricing from "@/components/HomeComponents/Pricing";
import Resources from "@/components/HomeComponents/Resources";
import SuccessStory from "@/components/HomeComponents/SuccessStory";
import React from "react";

const page = () => {
  return (
    <div className="max-w-7xl m-auto">
      <Hero />
      <Features />
      <Domains />
      <Practice />
      <MokeInterView />
      <Resources />
      {/* <Pricing /> */}
      <SuccessStory />
      <JoinCommunity />
      <AskQuestion />
      <Footer />
    </div>
  );
};

export default page;
