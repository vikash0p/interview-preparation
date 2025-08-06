'use client';

import { FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { dropdownAnimation } from "@/main/animation/practical-interview.animation";
import { useParams } from "next/navigation";
import { useGetAllCategoriesByTechnologyQuery } from "@/main/redux-toolkit/services/practical-interviews/practicalInterviewApi";
import { IPFilterKey } from '@/main/types/mock-interview.types';


type Props = {
  updateSearchParams: (key: IPFilterKey, value: string) => void;
  currentCategory: string | null;
};
type OptionProps = {
  text: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  updateSearchParams: () => void;
};

export const CategoryDropDown: React.FC<Props> = ({  updateSearchParams, currentCategory }) => {

  const params=useParams();

  const technology = params?.technology as string;
  const {data:categories}=useGetAllCategoriesByTechnologyQuery(technology);


  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block mr-2 mb-2">
      <motion.div animate={open ? 'open' : 'closed'}>
        <button
          onClick={() => setOpen(pv => !pv)}
          className="flex items-center gap-2 px-5 py-2 rounded-md text-sm text-white bg-indigo-500 hover:bg-indigo-600 transition-colors"
        >
          <span>{currentCategory ? `Category: ${currentCategory}` : 'Filter by Category'}</span>
          <motion.span variants={dropdownAnimation.icon}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial="closed"
          animate={open ? 'open' : 'closed'}
          variants={dropdownAnimation.wrapper}
          style={{ originY: 'top', translateX: '-50%' }}
          className="flex flex-col gap-2 p-2 rounded-md bg-gray-950 shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden z-10"
        >
          {categories?.data?.map(category => (
            <Option
              key={category}
              text={category}
              setOpen={setOpen}
              updateSearchParams={() => updateSearchParams('category', category)}
            />
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option: React.FC<OptionProps> = ({ text, setOpen, updateSearchParams }) => {
  return (
    <motion.li
      variants={dropdownAnimation.item}
      onClick={() => {
        updateSearchParams();
        setOpen(false);
      }}
      className="w-full p-2 text-md font-medium whitespace-nowrap rounded-md hover:bg-white/10 text-gray-400 hover:text-gray-300 transition-colors cursor-pointer"
    >
      <span>{text}</span>
    </motion.li>
  );
};
