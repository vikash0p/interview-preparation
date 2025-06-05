'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import {FaCheck,FaChevronLeft,FaChevronRight,FaRegCopy} from '@/main/icons/react-icons'
import { HeroRightData } from '@/main/data/common/HeroRightData';

const RightHero = () => {
	const [copied, setCopied] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const controls = useAnimation();
	const intervalRef = useRef<NodeJS.Timeout>();

	const startInterval = useCallback(() => {
		intervalRef.current = setInterval(async () => {
			await controls.start({
				opacity: 0,
				y: 20,
				transition: { duration: 0.3 },
			});
			setCurrentQuestion((prev) => (prev + 1) % HeroRightData.length);
			await controls.start({
				opacity: 1,
				y: 0,
				transition: { duration: 0.3 },
			});
		}, 5000);
	}, [controls]);

	useEffect(() => {
		startInterval();
		return () => clearInterval(intervalRef.current);
	}, [startInterval]);

	const handleNavigation = (direction: 'prev' | 'next') => {
		clearInterval(intervalRef.current);
		setCurrentQuestion((prev) =>
			direction === 'next'
				? (prev + 1) % HeroRightData.length
				: (prev - 1 + HeroRightData.length) % HeroRightData.length
		);
		startInterval();
	};

	const handleDotClick = (index: number) => {
		clearInterval(intervalRef.current);
		setCurrentQuestion(index);
		startInterval();
	};

	const handleCopy = async () => {
		await navigator.clipboard.writeText(HeroRightData[currentQuestion].code);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className='w-full md:w-[85%] lg:w-1/2 mt-12 lg:mt-0 relative '>
			<motion.div
				className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl transform rotate-6 blur-xl opacity-30'
				animate={{
					rotate: [6, 3, 6],
					scale: [1, 1.02, 1],
				}}
				transition={{
					duration: 4,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>
			<motion.div
				className='relative bg-gradient-to-r  from-gray-900 to-gray-800 p-8 rounded-2xl border border-neutral-700 shadow-lg hover:shadow-xl transition-shadow'
				whileHover={{ scale: 1.01 }}
			>
				<div className='flex items-center justify-between mb-6'>
					<div className='flex items-center gap-3'>
						{['red', 'yellow', 'green'].map((color) => (
							<motion.div
								key={color}
								className={`w-3 h-3 rounded-full bg-${color}-500`}
								animate={{ scale: [1, 0.8, 1] }}
								transition={{
									duration: 2,
									repeat: Infinity,
									delay: Math.random() * 0.5,
								}}
							/>
						))}
					</div>
					<div className='text-neutral-400 text-sm flex items-center gap-2'>
						<motion.span
							key={currentQuestion}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
						>
							Question {currentQuestion + 1}/{HeroRightData.length}
						</motion.span>
					</div>
				</div>

				<div className='relative'>
					<button
						type='button'
						onClick={() => handleNavigation('prev')}
						className='absolute -left-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-indigo-800 hover:bg-indigo-700 transition-colors z-10'
					>
						<FaChevronLeft className='text-neutral-400' />
					</button>
					<button
						type='button'
						onClick={() => handleNavigation('next')}
						className='absolute -right-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-indigo-800 hover:bg-indigo-700 transition-colors z-10'
					>
						<FaChevronRight className='text-neutral-400' />
					</button>

					<AnimatePresence mode='wait'>
						<motion.div
							key={currentQuestion}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3 }}
						>
							<p className='text-neutral-300 text-base leading-relaxed mb-4'>
								{HeroRightData[currentQuestion].question}
							</p>

							<div className='relative '>
								<pre className='bg-gray-950 min-h-60 text-neutral-100 p-4 rounded-lg text-sm text-wrap '>
									<code>{HeroRightData[currentQuestion].code}</code>
								</pre>
								<button
									type='button'
									onClick={handleCopy}
									className='absolute top-2 right-2 p-2 rounded-lg bg-indigo-800 hover:bg-indigo-700 transition-colors'
								>
									{copied ? (
										<FaCheck className='text-green-400' />
									) : (
										<FaRegCopy className='text-white ' />
									)}
								</button>
							</div>

							<motion.div
								className='mt-4 p-3 bg-black rounded-lg text-sm text-neutral-300 min-h-16 border border-indigo-400'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
							>
								{HeroRightData[currentQuestion].explanation}
							</motion.div>
						</motion.div>
					</AnimatePresence>
				</div>

				<div className='flex justify-center gap-2 mt-6'>
					{(() => {
						const total = HeroRightData.length;
						let indices = [];
						let start = 0;

						if (total <= 5) {
							indices = Array.from({ length: total }, (_, i) => i);
						} else {
							start = Math.max(0, Math.min(currentQuestion - 2, total - 5));
							indices = Array.from({ length: 5 }, (_, i) => start + i);
						}

						return indices.map((index) => (
							<button
								type='button'
								key={index}
								onClick={() => handleDotClick(index)}
								className={`w-3 h-3 rounded-full transition-all ${
									currentQuestion === index
										? 'bg-indigo-500 scale-125'
										: 'bg-neutral-600 hover:bg-neutral-400'
								}`}
							/>
						));
					})()}
				</div>
			</motion.div>
		</div>
	);
};

export default RightHero;
