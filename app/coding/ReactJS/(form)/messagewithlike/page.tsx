import { MessageWithLikeData } from "@/utils/data/codingReactData/MessageWithLikeData";
import ReactSynHighlighter from "@/components/GlobalComponents/SyntextHiglighter";
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
