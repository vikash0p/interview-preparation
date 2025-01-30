import ReusableContainer from "@/components/ReusableComponents/ReusableContainer";
import { CodingLinkData } from "@/utils/data/ReactData/ReactPractical/ReactPracticalData";

import { LinkInterface } from "../../../../utils/types/types";

import React from "react";
const ReactById = ({ params }: { params: { id: string } }) => {

  const singleData = CodingLinkData.find((value) => String(value.url) === params.id) || {} as LinkInterface;

  return (
    <section className=" h-screen ">
      <ReusableContainer
        data={singleData}

      />
    </section>
  );
};

export default ReactById;
