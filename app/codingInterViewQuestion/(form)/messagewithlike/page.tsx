import { MessageWithLikeData } from "@/data/codingInterViewData/MessageWithLikeData";
import ReactSynHighlighter from "@/components/ReactInterview/ReactSyntextHiglighter";
import MessageWithLikeComponent from "@/components/reactInterviewPracticalComponet/MessageWithLikeComponent";
import React from "react";

const MessageWithLike = () => {
  return (
    <div>
      <MessageWithLikeComponent />
      <div className="w-full lg:w-3/4 m-auto">
        <ReactSynHighlighter exampleCode={MessageWithLikeData} />
      </div>
    </div>
  );
};

export default MessageWithLike;
