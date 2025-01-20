"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


export const ReactInterViewQuestionLink = [
  {
    id: "1",
    title: "What is React",
    link: "/React/what-is-react",
  },
  {
    id: "2",
    title: "Advantages of React",
    link: "/React/advantages-of-react",
  },
  {
    id: "3",
    title: "Limitation for functional component",
    link: "/React/FunctionalComponentLimitations",
  },
  {
    id: "4",
    title: "state in react",
    link: "/React/state-in-react",
  },
  {
    id: "5",
    title: "stateful component in react",
    link: "/React/stateful-component-in-react",
  },
  {
    id: "7",
    title: "props in react",
    link: "/React/props-in-react",
  },
  {
    id: "8",
    title: "Pass data child to parent",
    link: "/React/pass-data-child-to-parent",
  },
];
const ReactLinkData = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2">
      {ReactInterViewQuestionLink.map((value) => {


        return (
          <Link
            className={`ps-4 hover:underline ${
              pathname === value.link ? "font-bold text-white underline" : ""}`}
            href={value.link}
            key={value.id}
          >
            <span> {value.id}.</span>
            <span> {value.title}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default ReactLinkData;
