import Link from "next/link";
import React from "react";
import { SiJavascript, SiReact, SiNextdotjs } from "react-icons/si";

const Page = () => {
  const cards = [
    {
      title: "JavaScript",
      description:
        "A versatile programming language for building dynamic web applications.",
      icon: <SiJavascript className="text-yellow-500 text-6xl" />,
      link: "/coding/JavaScript",
    },
    {
      title: "React",
      description: "A JavaScript library for building user interfaces.",
      icon: <SiReact className="text-blue-500 text-6xl" />,
      link: "/coding/ReactJS",
    },
    {
      title: "Next.js",
      description: "The React framework for production.",
      icon: <SiNextdotjs className="text-white text-6xl" />,
      link: "/coding/NextJS",
    },
  ];

  return (
    <div className="bg-black min-h-screen flex items-center justify-center max-w-7xl m-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {cards.map((card, index) => (
          <Link
            key={index}
            href={card.link}
            rel="noopener noreferrer"
            className="border border-gray-800 text-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col items-center p-6"
          >
            <div className="mb-4">{card.icon}</div>
            <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
            <p className="text-sm text-gray-400 text-center">
              {card.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
