'use client';

import { FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useState } from 'react';

type Props = {
  categories: string[]; // list of category names
  updateSearchParams: (key: string, value: string) => void;
  currentCategory: string | null;
};

const CategoryDropDown: React.FC<Props> = ({ categories, updateSearchParams, currentCategory }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block mr-2 mb-2">
      <motion.div animate={open ? 'open' : 'closed'}>
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-5 py-2 rounded-sm text-sm text-white bg-indigo-500 hover:bg-indigo-600 transition-colors"
        >
          <span>{currentCategory ? `Category: ${currentCategory}` : 'Filter by Category'}</span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial="closed"
          animate={open ? 'open' : 'closed'}
          variants={wrapperVariants}
          style={{ originY: 'top', translateX: '-50%' }}
          className="flex flex-col gap-2 p-2 rounded-sm bg-gray-950 shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden z-10"
        >
          {categories.map((category) => (
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

type OptionProps = {
  text: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  updateSearchParams: () => void;
};

const Option: React.FC<OptionProps> = ({ text, setOpen, updateSearchParams }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => {
        updateSearchParams();
        setOpen(false);
      }}
      className="w-full p-2 text-md font-medium whitespace-nowrap rounded-sm hover:bg-white/10 text-gray-400 hover:text-gray-300 transition-colors cursor-pointer"
    >
      <span>{text}</span>
    </motion.li>
  );
};

export default CategoryDropDown;

// Animation Variants
const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: 'afterChildren',
    },
  },
};
