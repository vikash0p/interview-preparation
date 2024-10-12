"use client";
import React, { useState } from "react";

const BackgroundColor: React.FC = () => {
  const colors = ["red", "blue", "green", "pink"]; // Array of color options
  const [color, setColor] = useState(colors[0]); // Default color

  // Handler to update background color based on checkbox selection
  const changeHandlerColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setColor(event.target.value);
    }
  };

  return (
    <div>
      <div className="w-40 h-40 mb-5" style={{ backgroundColor: color }}></div>

      {colors.map((value) => {
        return (
          <label key={value} className="mx-4">
            <input
              type="checkbox"
              value={value}
              onChange={changeHandlerColor}
              className="mr-2"
            />
            {value} {/* Display color name */}
          </label>
        );
      })}
    </div>
  );
};

export default BackgroundColor;
