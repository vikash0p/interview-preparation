"use client";
import React, { useState } from "react";

const TicketBooking = () => {
  const [vip, setVip] = useState<number[]>([]);
  const [eco, setEco] = useState<number[]>([]);
  const [gen, setGen] = useState<number[]>([]);

  const totalSelected = vip.length + eco.length + gen.length;

  const toggleSelection = (
    index: number,
    section: number[],
    setSection: React.Dispatch<React.SetStateAction<number[]>>
  ) => {
    setSection((prev) =>
      prev.includes(index)
        ? prev.filter((value) => value !== index)
        : [...prev, index]
    );
  };

  return (
    <div
      className={
        "max-w-7xl m-auto  h-[500px] overflow-auto custom-scrollbar"
      }
    >
      <h1 className={"text-3xl font-bold py-10"}>Vip Booking</h1>
      <div className={"grid grid-cols-5 gap-10"}>
        {Array.from({ length: 25 }).map((_, index) => {
          const vipIndex = index + 1;
          return (
            <button
              key={"vip-" + vipIndex}
              className={
                "p-5 text-black " +
                (vip.includes(vipIndex) ? "bg-red-500" : "bg-green-500") +
                (totalSelected === 5 && !vip.includes(vipIndex)
                  ? " disabled:bg-gray-400 disabled:cursor-not-allowed"
                  : "")
              }
              onClick={() => toggleSelection(vipIndex, vip, setVip)}
              disabled={totalSelected === 5 && !vip.includes(vipIndex)}
            >
              {vipIndex}
            </button>
          );
        })}
      </div>

      <h1 className={"text-3xl font-bold py-10"}>Economy Booking</h1>
      <div className={"grid grid-cols-6 gap-10"}>
        {Array.from({ length: 36 }).map((_, index) => {
          const ecoIndex = index + 1;
          return (
            <button
              key={"eco-" + ecoIndex}
              className={
                "p-5 text-black " +
                (eco.includes(ecoIndex) ? "bg-red-500" : "bg-blue-500") +
                (totalSelected === 5 && !eco.includes(ecoIndex)
                  ? " disabled:bg-gray-400 disabled:cursor-not-allowed"
                  : "")
              }
              onClick={() => toggleSelection(ecoIndex, eco, setEco)}
              disabled={totalSelected === 5 && !eco.includes(ecoIndex)}
            >
              {ecoIndex}
            </button>
          );
        })}
      </div>

      <h1 className={"text-3xl font-bold py-10"}>General Booking</h1>
      <div className={"grid grid-cols-8 gap-10"}>
        {Array.from({ length: 48 }).map((_, index) => {
          const genIndex = index + 1;
          return (
            <button
              key={"gen-" + genIndex}
              className={
                "p-5 text-black " +
                (gen.includes(genIndex) ? "bg-red-500" : "bg-yellow-500") +
                (totalSelected === 5 && !gen.includes(genIndex)
                  ? " disabled:bg-gray-400 disabled:cursor-not-allowed"
                  : "")
              }
              onClick={() => toggleSelection(genIndex, gen, setGen)}
              disabled={totalSelected === 5 && !gen.includes(genIndex)}
            >
              {genIndex}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TicketBooking;


// !Ticket Booking data source

export const ticketBookingDataSource = `
"use client";
import React, { useState } from "react";

const TicketBooking = () => {
  const [vip, setVip] = useState<number[]>([]);
  const [eco, setEco] = useState<number[]>([]);
  const [gen, setGen] = useState<number[]>([]);

  const totalSelected = vip.length + eco.length + gen.length;

  const toggleSelection = (
    index: number,
    section: number[],
    setSection: React.Dispatch<React.SetStateAction<number[]>>
  ) => {
    setSection((prev) =>
      prev.includes(index)
        ? prev.filter((value) => value !== index)
        : [...prev, index]
    );
  };

  return (
    <div className={"max-w-7xl m-auto my-20"}>
      <h1 className={"text-3xl font-bold py-10"}>Vip Booking</h1>
      <div className={"grid grid-cols-5 gap-10"}>
        {Array.from({ length: 25 }).map((_, index) => {
          const vipIndex = index + 1;
          return (
            <button
              key={"vip-" + vipIndex}
              className={
                "p-5 text-black " +
                (vip.includes(vipIndex) ? "bg-red-500" : "bg-green-500") +
                (totalSelected === 5 && !vip.includes(vipIndex)
                  ? " disabled:bg-gray-400 disabled:cursor-not-allowed"
                  : "")
              }
              onClick={() => toggleSelection(vipIndex, vip, setVip)}
              disabled={totalSelected === 5 && !vip.includes(vipIndex)}
            >
              {vipIndex}
            </button>
          );
        })}
      </div>

      <h1 className={"text-3xl font-bold py-10"}>Economy Booking</h1>
      <div className={"grid grid-cols-6 gap-10 mt-20"}>
        {Array.from({ length: 36 }).map((_, index) => {
          const ecoIndex = index + 1;
          return (
            <button
              key={"eco-" + ecoIndex}
              className={
                "p-5 text-black " +
                (eco.includes(ecoIndex) ? "bg-red-500" : "bg-blue-500") +
                (totalSelected === 5 && !eco.includes(ecoIndex)
                  ? " disabled:bg-gray-400 disabled:cursor-not-allowed"
                  : "")
              }
              onClick={() => toggleSelection(ecoIndex, eco, setEco)}
              disabled={totalSelected === 5 && !eco.includes(ecoIndex)}
            >
              {ecoIndex}
            </button>
          );
        })}
      </div>

      <h1 className={"text-3xl font-bold py-10"}>General Booking</h1>
      <div className={"grid grid-cols-8 gap-10 mt-20"}>
        {Array.from({ length: 48 }).map((_, index) => {
          const genIndex = index + 1;
          return (
            <button
              key={"gen-" + genIndex}
              className={
                "p-5 text-black " +
                (gen.includes(genIndex) ? "bg-red-500" : "bg-yellow-500") +
                (totalSelected === 5 && !gen.includes(genIndex)
                  ? " disabled:bg-gray-400 disabled:cursor-not-allowed"
                  : "")
              }
              onClick={() => toggleSelection(genIndex, gen, setGen)}
              disabled={totalSelected === 5 && !gen.includes(genIndex)}
            >
              {genIndex}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TicketBooking;

`;