import Grid from "@/components/animata/background/grid";
import { ReactInterViewQuestionLink } from "@/components/ReactInterview/ReactInterViewQuestionLink";
import Link from "next/link";
import React from "react";

const ReactInterviewQuestion = () => {
  return (
    <Grid>
      <div className="container m-auto  py-20  flex gap-10 flex-wrap ">
        {ReactInterViewQuestionLink.map((value) => {
          return (
            <Link
              className="bg-gray-950 text-white px-8 py-3 text-xl hover:bg-gray-800"
              href={value.link}
              key={value.id}
            >
              {value.title}
            </Link>
          );
        })}
      </div>{" "}
    </Grid>
  );
};

export default ReactInterviewQuestion;
