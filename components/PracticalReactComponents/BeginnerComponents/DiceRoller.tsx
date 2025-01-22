"use client";
import React, { useCallback,  useState } from "react";
const DiceRoller = () => {
  const [dice, setDice] = useState(0);

  const rollDice = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDice(randomNumber);
  },[]);

  return (
    <div className="flex flex-col items-center mt-5">
      <button
        type="button"
        className="px-8 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-all"
        onClick={rollDice}
      >
        Roll Dice
      </button>
      <div className="text-2xl font-bold mt-3">
        {dice > 0 ? <span className="text-white">You rolled: {dice}</span> : "Roll the dice!"}
      </div>
    </div>
  );
};
export default DiceRoller;


// !Dice Roller with data source

export const diceRollerDataSource = `
"use client";
import React, { useCallback,  useState } from "react";
const DiceRoller = () => {
  const [dice, setDice] = useState(0);

  const rollDice = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDice(randomNumber);
  },[]);

  return (
    <div className="flex flex-col items-center mt-5">
      <button
        type="button"
        className="px-8 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-all"
        onClick={rollDice}
      >
        Roll Dice
      </button>
      <div className="text-2xl font-bold mt-3">
        {dice > 0 ? <span className="text-white">You rolled: {dice}</span> : "Roll the dice!"}
      </div>
    </div>
  );
};
export default DiceRoller;
`;