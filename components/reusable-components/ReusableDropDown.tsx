'use client';

import { FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { dropdownAnimation } from '@/main/animation/practical-interview.animation';

type ReusableDropDownProps = {
  options: string[];
  heading: string;
  selectedValue: string | null;
  paramName: string;
  updateSearchParams: (name: string, value: string | null) => void;
};

export const ReusableDropDown = ({ options, heading, selectedValue, paramName, updateSearchParams }: ReusableDropDownProps) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (value: string) => {
    const newValue = value === options[0] ? null : value;
    updateSearchParams(paramName, newValue);
    setOpen(false);
  };

  return (
    <div className="relative inline-block mr-2 mb-2">
      <motion.div animate={open ? 'open' : 'closed'}>
        <button onClick={() => setOpen(prev => !prev)} className="flex items-center gap-2 px-5 py-2 rounded-md text-sm text-white bg-indigo-600 hover:bg-indigo-500 transition-colors">
          <span>{selectedValue ? `${heading.split('by ')[1]}: ${selectedValue}` : heading}</span>
          <motion.span variants={dropdownAnimation.icon}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul initial="closed" animate={open ? 'open' : 'closed'} variants={dropdownAnimation.wrapper} style={{ originY: 'top', translateX: '-50%' }} className="flex flex-col gap-2 p-2 rounded-md bg-gray-950 shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden z-10">
          {options.map(option => {
            const selected = selectedValue === option || (option === options[0] && selectedValue === null);
            return (
              <motion.li
                key={option}
                variants={dropdownAnimation.item}
                onClick={() => handleSelect(option)}
                className={`w-full p-2 text-md font-medium whitespace-nowrap rounded-md transition-colors cursor-pointer ${selected ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-gray-300 hover:bg-white/10'}`}
              >
                <span>{option}</span>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </div>
  );
};
