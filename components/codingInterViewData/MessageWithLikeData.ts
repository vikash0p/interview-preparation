export const MessageWithLikeData = `
"use client";
import React, { useState } from "react";

const MessageWithLikeComponent = () => {
  const [message, setMessage] = useState("");
  const [messageData, setMessageData] = useState<
    { text: string; isLiked: boolean }[]
  >([]);

  const messageHandlerFunction = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMessage(event.target.value);
    return;
  };

  const messageSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessageData((prev) => [...prev, { text: message, isLiked: true }]);
    setMessage(""); // Clear the input field after submitting
  };

  const likeHandlerFunction = (index: number) => {
    setMessageData((prev) =>
      prev.map((item, idx) =>
        idx === index ? { ...item, isLiked: !item.isLiked } : item
      )
    );
  };

  return (
    <div className="w-full min-h-screen flex flex-col gap-5 justify-center items-center">
      <form
        className="bg-gray-950 p-10 rounded-md"
        onSubmit={messageSubmitHandler}
      >
        <label className="flex flex-col gap-5">
          Message:
          <input
            type="text"
            name="message"
            value={message}
            className="w-96 h-12 rounded-md border border-white text-black ps-4"
            onChange={messageHandlerFunction}
          />
        </label>
        <button
          type="submit"
          className="mt-4 p-2 bg-blue-500 text-white rounded-md"
        >
          Submit
        </button>
      </form>

      {messageData.length > 0 ? (
        <div className="mt-5">
          {messageData.map((value, index) => (
            <div
              className="w-96 bg-gray-800 text-white rounded-md mb-2  p-5 flex flex-row gap-2 justify-between items-center"
              key={index}
            >
              <span>{value.text}</span>
              <button
                type="button"
                className="bg-blue-500 px-2 py-1 rounded-md"
                onClick={() => likeHandlerFunction(index)}
              >
                {value.isLiked ? "Unlike" : "Like"}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-5 text-gray-500">No Message found!</div>
      )}
    </div>
  );
};

export default MessageWithLikeComponent;

`;