"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

interface testimonialInterface {
  id: string;
  name: string;
  role: string;
  color: string;
  text: string;
}

const testimonials: testimonialInterface[] = [
  {
    id: "1",
    name: "Aarav Sharma",
    role: "Software Engineer @ Google",
    color: "indigo",
    text: "The mock interviews and detailed feedback helped me land my dream job at Google. The platform’s systematic approach made all the difference.",
  },
  {
    id: "2",
    name: "Ananya Iyer",
    role: "Full Stack Developer @ Meta",
    color: "purple",
    text: "The practice questions were spot-on! I encountered similar problems during my Meta interview. Thank you for helping me prepare effectively.",
  },
  {
    id: "3",
    name: "Rohan Mehta",
    role: "Data Scientist @ Amazon",
    color: "green",
    text: "The data science-specific content and ML system design questions were invaluable. Secured my position at Amazon after just 2 months of preparation.",
  },
  {
    id: "4",
    name: "Priya Verma",
    role: "Backend Developer @ Microsoft",
    color: "blue",
    text: "The DSA-focused sessions were incredibly helpful. The structured learning path boosted my confidence and skills.",
  },
  {
    id: "5",
    name: "Vikram Choudhary",
    role: "AI Engineer @ OpenAI",
    color: "red",
    text: "The AI-specific courses and hands-on projects prepared me for real-world challenges. Now working on cutting-edge AI at OpenAI!",
  },
  {
    id: "6",
    name: "Sneha Nair",
    role: "Cybersecurity Analyst @ IBM",
    color: "blue",
    text: "The security-focused challenges sharpened my skills and made me industry-ready. Highly recommend this platform!",
  },
  {
    id: "7",
    name: "Aditya Joshi",
    role: "DevOps Engineer @ AWS",
    color: "yellow",
    text: "The hands-on labs and real-world case studies helped me ace my AWS certification and land my dream job.",
  },
  {
    id: "8",
    name: "Kavya Raj",
    role: "Frontend Developer @ Netflix",
    color: "pink",
    text: "The React and UI/UX courses were top-notch! The mock assignments and projects were incredibly valuable.",
  },
  {
    id: "9",
    name: "Manoj Kulkarni",
    role: "Cloud Architect @ Google Cloud",
    color: "cyan",
    text: "The cloud computing track covered everything from fundamentals to advanced concepts, preparing me perfectly for my role.",
  },
  {
    id: "10",
    name: "Divya Malhotra",
    role: "Software Engineer @ Apple",
    color: "teal",
    text: "The problem-solving and behavioral interview training were game-changers. Thanks for helping me crack Apple’s interview!",
  },
  {
    id: "11",
    name: "Rahul Deshmukh",
    role: "Product Manager @ Tesla",
    color: "brown",
    text: "The case study discussions and system design sessions helped me transition into a PM role at Tesla smoothly.",
  },
  {
    id: "12",
    name: "Meera Kapoor",
    role: "Full Stack Developer @ Twitter",
    color: "purple",
    text: "The hands-on projects and coding challenges made learning fun and effective. I felt well-prepared for my Twitter interview.",
  },
  {
    id: "13",
    name: "Nitin Reddy",
    role: "Blockchain Developer @ Coinbase",
    color: "blue",
    text: "The blockchain and Web3 content were exactly what I needed. This platform truly bridges the gap between theory and practice!",
  },
  {
    id: "14",
    name: "Shreya Banerjee",
    role: "Game Developer @ Ubisoft",
    color: "violet",
    text: "The game dev courses and Unity projects helped me stand out in my Ubisoft interview. This platform is a must for aspiring developers!",
  },
  {
    id: "15",
    name: "Siddharth Singh",
    role: "ML Engineer @ NVIDIA",
    color: "gray",
    text: "The deep learning modules and GPU computing projects helped me gain the expertise needed to join NVIDIA as an ML Engineer.",
  },
];


const SuccessStory = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Success Stories
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Hear from our successful candidates
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <SuccessStoryCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;

const SuccessStoryCard = ({
  testimonial,
  index,
}: {
  testimonial: testimonialInterface;
  index: number;
}) => {
  return (
    <motion.div
      key={index}
      className="group relative bg-gradient-to-r from-gray-900 to-gray-800 border-2 border-gray-700 p-6 rounded-xl hover:border-indigo-500 transition-opacity duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

      <div className="flex items-center mb-6">
        <div
          className={`w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-xl font-bold text-black `}
        >
          {testimonial.name.split(" ").map((word) => word.charAt(0))}
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-neutral-200">{testimonial.name}</h4>
          <p className="text-neutral-400 text-sm">{testimonial.role}</p>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex text-yellow-400 mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="w-5 h-5" />
          ))}
        </div>
      </div>
      <p className="text-neutral-400">{testimonial.text}</p>
    </motion.div>
  );
};
