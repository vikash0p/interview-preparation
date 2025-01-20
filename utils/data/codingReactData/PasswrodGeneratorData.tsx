export const PasswordGeneratorData = `
"use client";
import React, { useState } from "react";

interface PasswordOptions {
  range: number;
  uppercase: boolean;
  lowercase: boolean;
  number: boolean;
  symbol: boolean;
}

const checkData = [
  { id: "1", label: "Include Uppercase Letter", name: "uppercase" },
  { id: "2", label: "Include Lowercase Letter", name: "lowercase" },
  { id: "3", label: "Include Number", name: "number" },
  { id: "4", label: "Include Symbol", name: "symbol" },
];

const Home: React.FC = () => {
  const [password, setPassword] = useState<PasswordOptions>({
    range: 10,
    uppercase: false,
    lowercase: false,
    number: false,
    symbol: false,
  });
  const [generatedPassword, setGeneratedPassword] = useState<string>("");
  const[copyData,setCopyData]=useState<boolean>(false);

  const PasswordChangeHandlerFunction = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, type, checked, value } = event.target;

    setPassword((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : Math.max(0, Number(value)),
    }));
  };

  const generateHadlerFunction = (): void => {
    const { range, uppercase, lowercase, number, symbol } = password;
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()";
    let charPool = "";

    if (uppercase) charPool += upper;
    if (lowercase) charPool += lower;
    if (number) charPool += numbers;
    if (symbol) charPool += symbols;

    let generated = "";
    for (let i = 0; i < range; i++) {
      generated += charPool.charAt(Math.floor(Math.random() * charPool.length));
    }
    setGeneratedPassword(generated);
  };

  return (
    <div className="w-full min-h-screen flex flex-col gap-5 justify-center items-center text-white">
      <div className="w-1/2 m-auto bg-gray-900 space-y-10 p-8 rounded-md">
        <h1 className="text-3xl font-bold text-center">
          Password Generator with React
        </h1>
        <div className="w-full flex flex-row justify-between items-center px-10">
          <p className="text-xl">
            {generatedPassword || "Your generated password"}
          </p>
          <button
            type="button"
            className="px-5 py-2 rounded-md bg-blue-500"
            onClick={() =>{
              navigator.clipboard.writeText(generatedPassword);
              setCopyData(true)
            } }
          >{
            copyData ? <div>Copied</div>: <div>Copy</div>
          }
          </button>
        </div>

        <div>
          <label htmlFor="range" className="text-xl px-10 space-y-3">
            Character Length: {password.range}
            <input
              type="range"
              name="range"
              id="range"
              min="1"
              max="20"
              value={password.range}
              className="w-[90%] m-auto block"
              onChange={PasswordChangeHandlerFunction}
            />
          </label>
        </div>

        <div className="grid grid-cols-2 gap-5 w-full place-items-center">
          {checkData.map((value) => (
            <label key={value.id} className="flex gap-5 items-center">
              {value.label}
              <input
                type="checkbox"
                name={value.name}
                id={value.id}
                checked={password[value.name as keyof Omit<PasswordOptions,"range" >]}
                onChange={PasswordChangeHandlerFunction}
              />
            </label>
          ))}
        </div>

        <div className="mt-6">
          <button
            type="button"
            className="block w-52 h-12 rounded-md bg-blue-500 m-auto"
            onClick={generateHadlerFunction}
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;


// second method.

// const generateHadlerFunction = () => {
//   const { range, uppercase, lowercase, number, symbol } = password;

//   const characterSets: { [key: string]: string } = {
//     uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//     lowercase: "abcdefghijklmnopqrstuvwxyz",
//     number: "0123456789",
//     symbol: "!@#$%^&*();
//   };

//   // Build the pool of characters based on the selected options
//   const stringdata = [
//     uppercase && characterSets.uppercase,
//     lowercase && characterSets.lowercase,
//     number && characterSets.number,
//     symbol && characterSets.symbol,
//   ]
//     .filter(Boolean)
//     .join("");

//   // Generate the password
//   const passwordGenerated = Array.from({ length: range }, () =>
//     stringdata.charAt(Math.floor(Math.random() * stringdata.length))
//   ).join("");

//   setGeneratePassword(passwordGenerated);
// };

// third method.
// const generateHadlerFunction = () => {
//   const { range, uppercase, lowercase, number, symbol } = password;

//   // Set up character pool based on selected options
//   const stringdata =
//     (uppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "") +
//     (lowercase ? "abcdefghijklmnopqrstuvwxyz" : "") +
//     (number ? "0123456789" : "") +
//     (symbol ? "!@#$%^&*()" : "");

//   // Generate the password using random characters from the pool
//   let passwordGenerated = Array.from({ length: range }, () =>
//     stringdata.charAt(Math.floor(Math.random() * stringdata.length))
//   ).join("");

//   setGeneratePassword(passwordGenerated);
// };
`