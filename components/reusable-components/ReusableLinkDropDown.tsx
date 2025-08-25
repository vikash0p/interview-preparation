'use client';
import {  FiChevronDown,  } from 'react-icons/fi';
import { motion } from 'framer-motion';
import {  useState } from 'react'
import { NAVIGATION_LINKS_DROPDOWN } from "@/main/data/link/navigationLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { dropdownAnimation } from "@/main/animation/practical-interview.animation";

export const ReusableLinkDropDown  = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const activeItem = NAVIGATION_LINKS_DROPDOWN.find(link => pathname.startsWith(link.href));

  const buttonLabel = activeItem ? activeItem.label : 'Interview';

  return (
    <div className="">
      <motion.div animate={open ? 'open' : 'closed'} className="relative">
        <button onClick={() => setOpen(pv => !pv)} className="flex items-center gap-2 px-5  py-2 rounded-sm text-white bg-indigo-600 hover:bg-indigo-600 transition-colors">
          <span className="font-medium text-md">{buttonLabel}</span>
          <motion.span variants={dropdownAnimation.icon}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul initial="closed" animate={open ? 'open' : 'closed'} variants={dropdownAnimation.wrapper} style={{ originY: 'top', translateX: '-50%' }} className="flex flex-col gap-2 p-2 rounded-md bg-gray-950 shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden z-10">
          {NAVIGATION_LINKS_DROPDOWN.map((value, index) => {
            return (
              <motion.li key={index} variants={dropdownAnimation.item} onClick={() => setOpen(false)} className="flex items-center gap-2 w-full p-2 text-md font-medium whitespace-nowrap rounded-sm hover:bg-white/10 text-gray-300  hover:text-white transition-colors cursor-pointer">
                <Link href={value.href} passHref>
                  <span>{value.label}</span>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </div>
  );
};
