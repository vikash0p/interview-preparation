'use client';
import React from 'react';
import { FaUsers, FaStar } from 'react-icons/fa';

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
		<div className='basis-1/2 space-y-4 sm:space-y-6 lg:space-y-8'>
			<h1 className='text-4xl md:text-5xl xl:text-6xl font-bold leading-loose bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400'>
				Crack Your Dream Job Interview Prap with Confidence
			</h1>

			{/* Desktop Description */}
			<p className='text-lg text-neutral-300 hidden sm:block'>
				Master technical interviews across software engineering, data
				structures, system design, and more with our AI-curated question bank,
				real-world mock interview simulations, and personalized feedback from
				industry experts. Boost your confidence, track your progress, and land
				your dream role in tech.
			</p>

			{/* Mobile Description */}
			<p className='text-lg text-neutral-300 sm:hidden'>
				Practice technical interviews with curated questions, mock sessions,
				expert tips, and real-time feedback to boost your skills and get hired.
			</p>

			<div className='flex flex-col sm:flex-row gap-4 lg:gap-10'>
				<button className=' px-8 py-4 bg-indigo-600 rounded-lg text-white font-semibold overflow-hidden hover:scale-105 transition-transform hover:bg-indigo-700'>
					<span className='relative z-10'>Start Practicing</span>
				</button>

				<button className='px-8 py-4 border border-white rounded-lg text-white font-semibold hover:bg-indigo-700 transition-all hover:scale-105'>
					View Questions
				</button>
			</div>

			<div className='flex items-center gap-6 text-sm text-neutral-400 mt-4'>
				<div className='flex items-center gap-2 hover:text-indigo-300 transition-colors'>
					<FaUsers className='text-indigo-400 w-5 h-5' />
					<span>
						<AnimatedCounter from={0} to={10000} />+ Users
					</span>
				</div>
				<div className='flex items-center gap-2 hover:text-yellow-300 transition-colors'>
					<FaStar className='text-yellow-400 w-5 h-5' />
					<span>Rated 4.9/5 by Learners</span>
				</div>
			</div>
		</div>
	);
};

export default LeftHero;
