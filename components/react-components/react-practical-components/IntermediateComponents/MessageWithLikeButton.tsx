"use client";
import React, { useState } from "react";

const MessageWithLikeButton = () => {
  const [message, setMessage] = useState("");
  const [messageData, setMessageData] = useState<
    { text: string; isLiked: boolean }[]
  >([]);

  const messageHandlerFunction = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMessage(event.target.value);
  };

  const messageSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim() !== "") {
      setMessageData((prev) => [...prev, { text: message, isLiked: false }]);
      setMessage("");
    }
  };

  const likeHandlerFunction = (index: number) => {
    setMessageData((prev) =>
      prev.map((item, idx) =>
        idx === index ? { ...item, isLiked: !item.isLiked } : item
      )
    );
  };

  return (
    <div className="w-full bg-black flex flex-col items-center justify-center p-5">
      <form
        className=" p-6 rounded-lg shadow-lg flex flex-col items-center"
        onSubmit={messageSubmitHandler}
      >
        <div className="flex items-center gap-3 w-full border">
          <input
            type="text"
            name="message"
            value={message}
            className="w-96 h-12 rounded-md border border-gray-300 text-black px-4"
            onChange={messageHandlerFunction}
            placeholder="Type your message..."
          />
          <button
            type="submit"
            className={
              " px-6 py-2 rounded-md text-white font-bold shadow-md transition-all " +
              (message.trim() === ""
                ? "bg-red-600 cursor-not-allowed"
                : "bg-indigo-500 hover:bg-blue-600")
            }
            disabled={message.trim() === ""}
          >
            Submit
          </button>
        </div>
      </form>

      {messageData.length > 0 ? (
        <div className="mt-8 w-full max-w-md">
          {messageData.map((value, index) => (
            <div
              className="bg-gray-800 text-white rounded-md mb-4 p-4 flex items-center justify-between shadow-md"
              key={index}
            >
              <span className="text-lg font-medium">{value.text}</span>
              <button
                type="button"
                className={
                  (value.isLiked
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-green-500 hover:bg-green-600") +
                  " px-3 py-1 rounded-md font-semibold transition-all"
                }
                onClick={() => likeHandlerFunction(index)}
              >
                {value.isLiked ? "Unlike" : "Like"}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-8 text-gray-400 text-lg">No messages found!</div>
      )}
    </div>
  );
};

export default MessageWithLikeButton;



// !Message with like button data source
export const messageWithLikeDataSource = `
import React, { useState } from "react";

const MessageWithLikeButton = () => {
  const [message, setMessage] = useState("");
  const [messageData, setMessageData] = useState<
    { text: string; isLiked: boolean }[]
  >([]);

  const messageHandlerFunction = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMessage(event.target.value);
  };

  const messageSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim() !== "") {
      setMessageData((prev) => [...prev, { text: message, isLiked: false }]);
      setMessage("");
    }
  };

  const likeHandlerFunction = (index: number) => {
    setMessageData((prev) =>
      prev.map((item, idx) =>
        idx === index ? { ...item, isLiked: !item.isLiked } : item
      )
    );
  };

  return (
    <div className="w-full bg-black flex flex-col items-center justify-center p-5">
      <form
        className=" p-6 rounded-lg shadow-lg flex flex-col items-center"
        onSubmit={messageSubmitHandler}
      >
        <div className="flex items-center gap-3 w-full border">
          <input
            type="text"
            name="message"
            value={message}
            className="w-96 h-12 rounded-md border border-gray-300 text-black px-4"
            onChange={messageHandlerFunction}
            placeholder="Type your message..."
          />
          <button
            type="submit"
            className={
              " px-6 py-2 rounded-md text-white font-bold shadow-md transition-all " +
              (message.trim() === ""
                ? "bg-red-600 cursor-not-allowed"
                : "bg-indigo-500 hover:bg-blue-600")
            }
            disabled={message.trim() === ""}
          >
            Submit
          </button>
        </div>
      </form>

      {messageData.length > 0 ? (
        <div className="mt-8 w-full max-w-md">
          {messageData.map((value, index) => (
            <div
              className="bg-gray-800 text-white rounded-md mb-4 p-4 flex items-center justify-between shadow-md"
              key={index}
            >
              <span className="text-lg font-medium">{value.text}</span>
              <button
                type="button"
                className={
                  (value.isLiked
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-green-500 hover:bg-green-600") +
                  " px-3 py-1 rounded-md font-semibold transition-all"
                }
                onClick={() => likeHandlerFunction(index)}
              >
                {value.isLiked ? "Unlike" : "Like"}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-8 text-gray-400 text-lg">No messages found!</div>
      )}
    </div>
  );
};

export default MessageWithLikeButton;
`;