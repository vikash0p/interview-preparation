"use client";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaMobileAlt, FaPaintBrush } from "react-icons/fa";
import {  SiNodedotjs, SiTypescript } from "react-icons/si";

const domains = [
  {
    name: "Frontend",
    icon: <FaCode />,
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Next.js"],
  },
  {
    name: "Backend",
    icon: <SiNodedotjs />,
    tech: ["Node.js", "Express.js", "MongoDB", "SQL"],
  },
  { name: "Mobile", icon: <FaMobileAlt />, tech: ["React Native", "Flutter"] },
  {
    name: "Database",
    icon: <FaDatabase />,
    tech: ["MongoDB", "PostgreSQL", "Firebase"],
  },
  {
    name: "UI/UX Design",
    icon: <FaPaintBrush />,
    tech: ["Figma", "Adobe XD", "Tailwind CSS"],
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    tech: ["Type Safety", "Interfaces", "Generics"],
  },
];

const Domains = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    hover: {
      y: -10,
      scale: 1.02,
      transition: { type: "spring", stiffness: 300 },
    },
    tap: { scale: 0.98 },
  };

  const iconVariants = {
    hover: {
      rotate: [0, -10, 10, 0],
      scale: 1.1,
      transition: { duration: 0.6 },
    },
  };

  const techItemVariants = {
    hover: {
      x: 5,
      scale: 1.05,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <section className="py-8  text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Domains I Work In
          </h2>
          <p className="text-lg text-gray-400">
            Explore my technical expertise across different domains
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="group relative p-8 bg-gray-800 rounded-2xl border-2 border-gray-700 hover:border-indigo-500 transition-all shadow-xl hover:shadow-2xl"
              style={{
                background:
                  "linear-gradient(45deg, rgba(31,41,55,1) 0%, rgba(17,24,39,1) 100%)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-2xl" />

              <motion.div
                className="text-3xl mb-6 text-indigo-400 p-4 bg-gray-900 rounded-full"
                variants={iconVariants}
                whileHover="hover"
              >
                {domain.icon}
              </motion.div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">
                {domain.name}
              </h3>

              <ul className="flex flex-wrap gap-2 justify-center">
                {domain.tech.map((tech: string, i: number) => (
                  <motion.li
                    key={i}
                    variants={techItemVariants}
                    whileHover="hover"
                    className="px-3 py-1.5 g-gradient-to-br border from-indigo-500/20 to-purple-500/10 rounded-full text-sm hover:bg-indigo-500 transition-colors"
                  >
                    {tech}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Domains;
