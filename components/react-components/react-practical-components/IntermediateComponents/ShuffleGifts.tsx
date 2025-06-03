"use client";
import React, { useState } from "react";

const ShuffleGifts = () => {
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

  const shuffleGifts = () => {
    const shuffledGifts = [...giftNames].sort(() => Math.random() - 0.5);
    setGiftAssignments(shuffledGifts.slice(0, arr.length));
    setShow(true);
  };

  const resetHandler = () => {
    setGiftAssignments([]);
    setShow(false);
    setArr([]);
  };

  return (
    <div className=" bg-black flex flex-col items-center justify-center p-5 text-white">
      <form
        onSubmit={submitHandler}
        className="flex flex-row items-center gap-4 mb-6"
      >
        <input
          type="text"
          className="w-96 h-12 text-black px-4 rounded-md border border-gray-300"
          name="text"
          id="text"
          value={text}
          placeholder="Enter a name"
          onChange={(event) => setText(event.target.value)}
        />
        <button
          type="submit"
          className="px-5 h-11 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700"
        >
          Add Name
        </button>
      </form>

      <div className="w-full max-w-md">
        {arr.length > 0 ? (
          <div>
            {arr.map((value, index) => (
              <div
                key={index}
                className="flex justify-between items-center border border-indigo-600 p-4 rounded-md mb-4 bg-gray-800 shadow-md"
              >
                <span className="text-lg font-medium">{value}</span>
                <span className="text-indigo-400">
                  {show
                    ? giftAssignments[index] || "No gift assigned"
                    : "No gift assigned"}
                </span>
              </div>
            ))}

            <div className="flex gap-4 mt-6 justify-center">
              <button
                type="button"
                className="px-5 py-2 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700"
                onClick={shuffleGifts}
              >
                Shuffle Gifts
              </button>
              <button
                type="button"
                className="px-5 py-2 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700"
                onClick={resetHandler}
              >
                Reset
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-400">No data available</p>
        )}
      </div>
    </div>
  );
};

export default ShuffleGifts;


// !Shuffle Gifts data source
export const shuffleGiftsDataSource = `"use client";
import React, { useState } from "react";

const ShuffleGifts = () => {
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

  const shuffleGifts = () => {
    const shuffledGifts = [...giftNames].sort(() => Math.random() - 0.5);
    setGiftAssignments(shuffledGifts.slice(0, arr.length));
    setShow(true);
  };

  const resetHandler = () => {
    setGiftAssignments([]);
    setShow(false);
    setArr([]);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-5 text-white">
      <form
        onSubmit={submitHandler}
        className="flex flex-row items-center gap-4 mb-6"
      >
        <input
          type="text"
          className="w-96 h-12 text-black px-4 rounded-md border border-gray-300"
          name="text"
          id="text"
          value={text}
          placeholder="Enter a name"
          onChange={(event) => setText(event.target.value)}
        />
        <button
          type="submit"
          className="px-5 h-11 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700"
        >
          Add Name
        </button>
      </form>

      <div className="w-full max-w-md">
        {arr.length > 0 ? (
          <div>
            {arr.map((value, index) => (
              <div
                key={index}
                className="flex justify-between items-center border border-indigo-600 p-4 rounded-md mb-4 bg-gray-800 shadow-md"
              >
                <span className="text-lg font-medium">{value}</span>
                <span className="text-indigo-400">
                  {show
                    ? giftAssignments[index] || "No gift assigned"
                    : "No gift assigned"}
                </span>
              </div>
            ))}

            <div className="flex gap-4 mt-6 justify-center">
              <button
                type="button"
                className="px-5 py-2 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700"
                onClick={shuffleGifts}
              >
                Shuffle Gifts
              </button>
              <button
                type="button"
                className="px-5 py-2 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700"
                onClick={resetHandler}
              >
                Reset
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-400">No data available</p>
        )}
      </div>
    </div>
  );
};

export default ShuffleGifts;
`;