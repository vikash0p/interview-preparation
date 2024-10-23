"use client";
import React, { useState } from "react";

// Define types for ticket sections and ticket states
type TicketSection = "vip" | "general" | "eco";
type SoldTickets = { [key in TicketSection]: Set<string> };

const TicketOneComponent: React.FC = () => {
  // State for purchased tickets
  const [purchasedTickets, setPurchasedTickets] = useState<string[]>([]); // Purchased ticket identifiers
  console.log("🚀 ~ file: page.tsx:13 ~ purchasedTickets:", purchasedTickets);

  // State for sold tickets in each section
  const [soldTickets, setSoldTickets] = useState<SoldTickets>({
    vip: new Set<string>(), // Set for VIP sold tickets
    general: new Set<string>(), // Set for General sold tickets
    eco: new Set<string>(), // Set for Economy sold tickets
  });

  // Function to create an NxN grid
  const createGrid = (num: number): number[][] => {
    return Array.from({ length: num }, () => Array(num).fill(0));
  };

  const vip = createGrid(5);
  const general = createGrid(6);
  const eco = createGrid(8);

  // Function to handle ticket purchase (toggle on click)
  const handleTicketPurchase = (
    row: number,
    col: number,
    section: TicketSection
  ) => {
    const ticketId = `${section}-${row}-${col}`; // Unique identifier for each ticket

    // Check if the ticket is already sold (toggle logic)
    if (soldTickets[section].has(ticketId)) {
      // If already sold, remove the ticket from the sold set (toggle back to available)
      setSoldTickets((prev) => {
        const updatedSet = new Set(prev[section]);
        updatedSet.delete(ticketId);
        return { ...prev, [section]: updatedSet };
      });

      // Remove from purchased tickets
      setPurchasedTickets((prev) => prev.filter((id) => id !== ticketId));
    } else {
      // Check if the user has already selected 5 tickets
      if (purchasedTickets.length >= 5) {
        alert("You can only purchase up to 5 tickets.");
        return;
      }

      // Add the ticket to the sold set and purchased tickets
      setSoldTickets((prev) => ({
        ...prev,
        [section]: new Set(prev[section]).add(ticketId),
      }));
      setPurchasedTickets((prev) => [...prev, ticketId]);
    }
  };

  // Function to determine the button color based on ticket status
  const getButtonColor = (ticketId: string, section: TicketSection) => {
    return soldTickets[section].has(ticketId) ? "bg-red-500" : "bg-yellow-500";
  };

  return (
    <div>
      {/* VIP Grid */}
      <div className="p-5">
        <h2 className="text-2xl mb-4">VIP Section</h2>
        <div className="grid grid-cols-5 gap-5">
          {vip.map((row, rowIndex) =>
            row.map((col, colIndex) => {
              const ticketId = `vip-${rowIndex}-${colIndex}`;

              return (
                <button
                  onClick={() =>
                    handleTicketPurchase(rowIndex, colIndex, "vip")
                  }
                  type="button"
                  key={`vip-${rowIndex}-${colIndex}`}
                  className={`${
                    soldTickets.vip.has(ticketId)
                      ? "bg-red-500"
                      : "bg-green-500"
                  } p-5 text-black`}
                >
                  {soldTickets.vip.has(ticketId) ? (
                    <span>Sold out</span>
                  ) : (
                    <span>
                      VIP {rowIndex + 1}-{colIndex + 1}
                    </span>
                  )}
                </button>
              );
            })
          )}
        </div>
      </div>

      {/* General Grid */}
      <div className="p-5">
        <h2 className="text-2xl mb-4">General Section</h2>
        <div className="grid grid-cols-6 gap-5">
          {general.map((row, rowIndex) =>
            row.map((col, colIndex) => {
              const ticketId = `general-${rowIndex}-${colIndex}`;

              return (
                <button
                  onClick={() =>
                    handleTicketPurchase(rowIndex, colIndex, "general")
                  }
                  type="button"
                  key={`general-${rowIndex}-${colIndex}`}
                  className={`${
                    soldTickets.general.has(ticketId)
                      ? "bg-red-500"
                      : "bg-blue-500"
                  } p-5 text-black`}
                >
                  {soldTickets.general.has(ticketId) ? (
                    <span>Sold out</span>
                  ) : (
                    <span>
                      General {rowIndex + 1}-{colIndex + 1}
                    </span>
                  )}
                </button>
              );
            })
          )}
        </div>
      </div>

      {/* Eco Grid */}
      <div className="p-5">
        <h2 className="text-2xl mb-4">Economy Section</h2>
        <div className="grid grid-cols-8 gap-5">
          {eco.map((_, rowIndex) =>
            Array.from({ length: 8 }, (_, colIndex) => {
              const ticketId = `eco-${rowIndex}-${colIndex}`;
              return (
                <button
                  onClick={() =>
                    handleTicketPurchase(rowIndex, colIndex, "eco")
                  }
                  type="button"
                  key={`eco-${rowIndex}-${colIndex}`}
                  className={`${getButtonColor(
                    ticketId,
                    "eco"
                  )} p-5 text-black`}
                >
                  {soldTickets.eco.has(ticketId) ? (
                    <span>Sold out</span>
                  ) : (
                    <span>
                      Eco {rowIndex + 1}-{colIndex + 1}
                    </span>
                  )}
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketOneComponent;
