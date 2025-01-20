"use client";
import React, { useState, useRef } from "react";



const OTPComponent= () => {
  const [otp, setOtp] = useState<string[]>(Array(5).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const onChange = (otp: string) => {
    console.log("OTP changed:", otp);
  };

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return; // Allow only numeric input
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChange(newOtp.join("")); // Return the OTP value as a string

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus(); // Move focus to the next input
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus(); // Move focus to the previous input
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("Text").slice(0, length);
    const newOtp = pasteData.split("");
    for (let i = 0; i < length; i++) {
      newOtp[i] = newOtp[i] || otp[i];
    }
    setOtp(newOtp);
    onChange(newOtp.join(""));
    inputRefs.current[Math.min(pasteData.length, length - 1)]?.focus();
  };

  return (
    <div className="flex gap-2">
      {otp.map((value, index) => (
        <input
          key={index}
          type="text"
          value={value}
          maxLength={1}
          className="w-12 h-12 text-center border border-gray-300 rounded-sm focus:ring-2 focus:ring-yellow-600"
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          aria-label={`OTP Input ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default OTPComponent;
