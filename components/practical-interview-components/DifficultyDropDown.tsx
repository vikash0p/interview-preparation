'use client';

import { FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useState } from 'react';

type Props = {
  currentDifficulty: string | null;
  updateSearchParams: (key: string, value: string) => void;
};

const difficulties = ['Easy', 'Medium', 'Hard'];

const DifficultyDropDown: React.FC<Props> = ({ currentDifficulty, updateSearchParams }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block mr-2 mb-2">
      <motion.div animate={open ? 'open' : 'closed'}>
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-2 rounded-sm text-sm text-white bg-indigo-500 hover:bg-indigo-600 transition-colors"
        >
          <span>{currentDifficulty ? `Difficulty: ${currentDifficulty}` : 'Filter by Difficulty'}</span>
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
          {difficulties.map((level) => (
            <Option
              key={level}
              text={level}
              setOpen={setOpen}
              updateSearchParams={() => updateSearchParams('difficulty', level)}
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

export default DifficultyDropDown;

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
