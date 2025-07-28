'use client';
import React from 'react';
import { FaUsers, FaStar } from 'react-icons/fa';
import LinkButton from "../utilsComponent/button-components/LinkButton";

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
			<h1 className='text-4xl md:text-5xl xl:text-6xl font-bold  text-gray-400'>
				Crack Your Dream Job Interview Prap with Confidence
			</h1>

			{/* Desktop Description */}
			<p className='text-lg  hidden sm:block'>
				Master technical interviews across software engineering, data
				structures, system design, and more with our AI-curated question bank,
				real-world mock interview simulations, and personalized feedback from
				industry experts. Boost your confidence, track your progress, and land
				your dream role in tech.
			</p>

			{/* Mobile Description */}
			<p className='text-lg  sm:hidden'>
				Practice technical interviews with curated questions, mock sessions,
				expert tips, and real-time feedback to boost your skills and get hired.
			</p>

			<div className='flex flex-col sm:flex-row gap-4 lg:gap-10'>
				<LinkButton href='/practical-interview' ariaLabel='Start Practicing'>
					Start Practicing
				</LinkButton>

				<LinkButton
					href='/mock-interview'
					variant='outline'
					ariaLabel='View Questions'
				>
					View Questions
				</LinkButton>
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
