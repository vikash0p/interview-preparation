import DebounceExample from "@/components/PracticalReactComponents/DebounceExample";
import {
  ScrollToTop,
  Throttling,
} from "@/components/PracticalReactComponents/Throttling";
import React from "react";

const DeBouncePage = () => {
  return (
    <div>
      <DebounceExample />
      <Throttling />
      <ScrollToTop />
    </div>
  );
};

export default DeBouncePage;
