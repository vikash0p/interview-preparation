'use client'
import { motion } from "framer-motion";
import { Link } from 'next-view-transitions';
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
    <div className=" mt-20 flex  justify-center  px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {cards.map((card, index) => (
          <Link href={card.link} key={index} passHref>
            <motion.div
              className="group relative bg-gradient-to-r from-gray-900 to-gray-800 border-2 border-gray-700 p-6 rounded-xl hover:border-indigo-500 transition-all duration-300 cursor-pointer min-h-52"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
              }}
              transition={{ delay: index * 0.2 }}
              key={index}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="mb-4 transition-transform duration-300 group-hover:rotate-6">
                {card.icon}
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-300">
                {card.title}
              </h2>
              <p className="text-sm text-gray-400  leading-relaxed">
                {card.description}
              </p>

            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
