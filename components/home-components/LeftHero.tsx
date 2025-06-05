"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaStar } from "react-icons/fa";

const AnimatedCounter = ({ from, to }: { from: number; to: number }) => {
  const [count, setCount] = React.useState(from);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= to) {
          clearInterval(timer);
          return to;
        }
        return prev + Math.ceil((to - from) / 50);
      });
    }, 20);
    return () => clearInterval(timer);
  }, [from, to]);

  return <>{count.toLocaleString()}</>;
};

const LeftHero = () => {
  return (
		<div className='w-full md:w-[85%] lg:w-1/2 space-y-8 '>
			<motion.h1
				className='text-4xl md:text-5xl  xl:text-6xl font-bold leading-tight text-white'
				initial={{ y: 20 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				Crack Your Dream Job Interview with
				<motion.span
					className='bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text block mt-2'
					animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
					transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
					style={{ backgroundSize: '200% 200%' }}
				>
					Confidence
				</motion.span>
			</motion.h1>

			<motion.p
				className='text-lg text-neutral-300 leading-relaxed'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.4 }}
			>
				Prepare for technical interviews across multiple domains with our
				comprehensive question bank, mock interviews, and expert guidance.
			</motion.p>

			<motion.div
				className='flex flex-col sm:flex-row gap-4'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.6 }}
			>
				<motion.button
					whileHover={{
						scale: 1.05,
						boxShadow: '0px 4px 20px rgba(99, 102, 241, 0.4)',
					}}
					whileTap={{ scale: 0.95 }}
					className='px-8 py-4 bg-indigo-600 rounded-lg text-white font-semibold relative overflow-hidden'
				>
					<span className='relative z-10'>Start Practicing</span>
					<motion.div
						className='absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0'
						animate={{ opacity: [0, 0.2, 0] }}
						transition={{ duration: 1.5, repeat: Infinity }}
					/>
				</motion.button>

				<motion.button
					whileHover={{ scale: 1.05, borderColor: '#818cf8' }}
					whileTap={{ scale: 0.95 }}
					className='px-8 py-4 border border-white rounded-lg text-white font-semibold hover:bg-neutral-800 transition-all'
				>
					View Questions
				</motion.button>
			</motion.div>

			<motion.div
				className='flex items-center gap-6 text-sm text-neutral-400 mt-4'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.8 }}
			>
				<div className='flex items-center gap-2 hover:text-indigo-300 transition-colors'>
					<motion.div whileHover={{ scale: 1.1 }}>
						<FaUsers className='text-indigo-400 w-5 h-5' />
					</motion.div>
					<span>
						<AnimatedCounter from={0} to={10000} />+ Users
					</span>
				</div>
				<div className='flex items-center gap-2 hover:text-yellow-300 transition-colors'>
					<motion.div whileHover={{ rotate: 20, scale: 1.1 }}>
						<FaStar className='text-yellow-400 w-5 h-5' />
					</motion.div>
					<span>4.9/5 Rating</span>
				</div>
			</motion.div>
		</div>
	);
};

export default LeftHero;
