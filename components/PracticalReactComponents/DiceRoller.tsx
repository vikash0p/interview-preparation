"use client";
import React, { useCallback,  useState } from "react";

const DiceRoller = () => {
  const [dice, setDice] = useState(0);

  const rollDice = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * 6) + 1; // Generates a number between 1 and 6
    setDice(randomNumber);
  },[]);

  return (
    <div className="flex flex-col items-center mt-5">
      <button
        type="button"
        className="px-8 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-all"
        onClick={rollDice}
      >
        Roll Dice
      </button>
      <div className="text-2xl font-bold mt-3">
        {dice > 0 ? `You rolled: ${dice}` : "Roll the dice!"}
      </div>
    </div>
  );
};

export default DiceRoller;
