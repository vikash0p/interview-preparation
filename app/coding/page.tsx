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
      icon: <SiNextdotjs className="text-gray-300 text-6xl" />,
      link: "/coding/NextJS",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center  px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {cards.map((card, index) => (
          <Link
            key={index}
            href={card.link}
            rel="noopener noreferrer"
            className="group bg-gray-800 border border-gray-700 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-gray-500 flex flex-col items-center p-6"
          >
            <div className="mb-4 transition-transform duration-300 group-hover:rotate-6">
              {card.icon}
            </div>
            <h2 className="text-xl font-semibold mb-2 text-white">
              {card.title}
            </h2>
            <p className="text-sm text-gray-400 text-center leading-relaxed">
              {card.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
