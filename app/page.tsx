import React from "react";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/HomeComponents/Hero"), {ssr: false,});
const Features = dynamic(() => import("@/components/HomeComponents/Features"),{ ssr:false});
const Domains = dynamic(() => import("@/components/HomeComponents/Domains"),{ ssr:false});
const Practice = dynamic(() => import("@/components/HomeComponents/Practice"),{ ssr:false});
const MokeInterView = dynamic(() => import("@/components/HomeComponents/MokeInterView"),{ ssr:false});
const Resources = dynamic(() => import("@/components/HomeComponents/Resources"),{ ssr:false});
const SuccessStory = dynamic(() => import("@/components/HomeComponents/SuccessStory"),{ ssr:false});
const JoinCommunity = dynamic(() => import("@/components/HomeComponents/JoinCommunity"),{ ssr:false});
const AskQuestion = dynamic(() => import("@/components/HomeComponents/AskQuestion"),{ ssr:false});
const Footer = dynamic(() => import("@/components/GlobalComponents/Footer"),{ ssr:false});

const Page = () => {
  return (
    <div className="max-w-7xl m-auto">
      <Hero />
      <Features />
      <Domains />
      <Practice />
      <MokeInterView />
      <Resources />
      <SuccessStory />
      <JoinCommunity />
      <AskQuestion />
      <Footer />
    </div>
  );
};

export default Page;
