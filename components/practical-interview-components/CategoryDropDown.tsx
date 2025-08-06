'use client';

import { FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { dropdownAnimation } from '@/main/animation/practical-interview.animation';
import { useParams } from 'next/navigation';
import { useGetAllCategoriesByTechnologyQuery } from '@/main/redux-toolkit/services/practical-interviews/practicalInterviewApi';
import { useInterviewFilters } from "@/main/hooks/useInterviewFiltersHook";

export const CategoryDropDown = () => {
  const { technology } = useParams() as { technology: string };
  const { data: categories } = useGetAllCategoriesByTechnologyQuery(technology);
  const { category: currentCategory, updateSearchParams } = useInterviewFilters();

  const [open, setOpen] = useState(false);

  const handleSelect = (selectedCategory: string) => {
    updateSearchParams({ category: selectedCategory });
    setOpen(false);
  };

  const handleClear = () => {
    updateSearchParams({ category: '' });
    setOpen(false);
  };

  return (
    <div className="relative inline-block mr-2 mb-2">
      <motion.div animate={open ? 'open' : 'closed'}>
        <button onClick={() => setOpen(pv => !pv)} className="flex items-center gap-2 px-5 py-2 rounded-md text-sm text-white bg-indigo-600 hover:bg-indigo-500 transition-colors">
          <span>{currentCategory ? `Category: ${currentCategory}` : 'Filter by Category'}</span>
          <motion.span variants={dropdownAnimation.icon}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul initial="closed" animate={open ? 'open' : 'closed'} variants={dropdownAnimation.wrapper} style={{ originY: 'top', translateX: '-50%' }} className="flex flex-col gap-2 p-2 rounded-md bg-gray-950 shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden z-10">
          {categories?.data?.map(cat => (
            <Option key={cat} text={cat} selected={currentCategory === cat} onClick={() => handleSelect(cat)} />
          ))}

          {currentCategory && <Option text="Clear Filter" selected={false} onClick={handleClear} />}
        </motion.ul>
      </motion.div>
    </div>
  );
};

type OptionProps = {
  text: string;
  onClick: () => void;
  selected: boolean;
};

const Option: React.FC<OptionProps> = ({ text, onClick, selected }) => {
  return (
    <motion.li variants={dropdownAnimation.item} onClick={onClick} className={`w-full p-2 text-md font-medium whitespace-nowrap rounded-md transition-colors cursor-pointer ${selected ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-gray-300 hover:bg-white/10'}`}>
      <span>{text}</span>
    </motion.li>
  );
};
