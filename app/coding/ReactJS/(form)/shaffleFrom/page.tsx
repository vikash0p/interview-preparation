"use client";
import React, { useState } from "react";

const ShaffleGame = () => {
  const giftNames = [
    "Elegant Watch",
    "Silk Scarf",
    "Scented Candle Set",
    "Personalized Mug",
    "Leather Wallet",
  ];

  const [text, setText] = useState<string>("");
  const [arr, setArr] = useState<string[]>([]);
  const [show, setShow] = useState(false);
  const [giftAssignments, setGiftAssignments] = useState<string[]>([]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      setArr((prev) => [...prev, text.trim()]);
      setText("");
    }
  };

  // Shuffle function for gifts
  const shuffleGifts = () => {
    const shuffledGifts = [...giftNames].sort(() => Math.random() - 0.5);
    setGiftAssignments(shuffledGifts.slice(0, arr.length));
    setShow(true);
  };

  // Reset function
  const resetHandler = () => {
    // setArr([]);
    setGiftAssignments([]);
    setShow(false);
  };

  return (
    <div className="p-4">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="w-96 h-12 text-black ps-4 mb-4"
          name="text"
          id="text"
          value={text}
          placeholder="Enter a name"
          onChange={(event) => setText(event.target.value)}
        />
        <button
          type="submit"
          className="ml-2 px-5 py-2 rounded-sm bg-blue-600 text-white"
        >
          Add Name
        </button>
      </form>

      <div>
        {arr.length > 0 ? (
          <div>
            {arr.map((value, index) => (
              <div
                key={index}
                className="flex flex-row gap-4 border-2 border-red-600 p-4 mb-2"
              >
                <span className="flex flex-row gap-5 py-2">
                  {value} --{" "}
                  {show ? (
                    <div>{giftAssignments[index] || "No gift assigned"}</div>
                  ) : (
                    <div>No gift assigned</div>
                  )}
                </span>
              </div>
            ))}

            <div className="flex gap-5 mt-4">
              <button
                type="button"
                className="px-5 py-2 rounded-sm bg-green-600 text-white"
                onClick={shuffleGifts}
              >
                Shuffle Gifts
              </button>
              <button
                type="button"
                className="px-5 py-2 rounded-sm bg-red-600 text-white"
                onClick={resetHandler}
              >
                Reset
              </button>
            </div>
          </div>
        ) : (
          <p>No data</p>
        )}
      </div>
    </div>
  );
};

export default ShaffleGame;
