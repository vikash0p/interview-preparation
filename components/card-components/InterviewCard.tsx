'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

interface InterviewCardProps {
	name: string;
	href: string;
	icon: React.ReactNode;
	comingSoon: boolean;
	className?: string;
	animationDelay?: number;
	children?: React.ReactNode;
	actionLevel?: string;
}

const InterviewCard = ({
	name,
	href,
	icon,
	comingSoon,
	className = '',
	animationDelay = 0.2,
	children,
	actionLevel
}: InterviewCardProps) => {
	return (
		<motion.div
			className={`group relative ${
				comingSoon ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'
			} bg-gradient-to-r from-gray-900 to-gray-800 border-2 border-gray-700 p-6 rounded-xl hover:border-indigo-500 transition-all duration-300 ${className}`}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-100px' }}
			whileHover={{
				y: comingSoon ? 0 : -5,
				boxShadow: comingSoon ? 'none' : '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
			}}
			transition={{ delay: animationDelay }}
		>
			<div className='flex items-center gap-4'>
				<div className='shrink-0'>{icon}</div>
				<div>
					<h2 className='text-lg font-semibold text-white'>{name}</h2>
					{comingSoon ? (
						<p className='text-sm text-yellow-400 font-medium'>
							Coming Soon – Stay Tuned!
						</p>
					) : (
						<Link
							href={href}
							className='text-sm text-violet-300 flex items-center gap-1 group-hover:text-cyan-400 transition-colors'
						>
							{actionLevel }
							<FaArrowRight className='inline text-xs group-hover:translate-x-1 transition-transform' />
						</Link>
					)}
					{children}
				</div>
			</div>
		</motion.div>
	);
};

export default InterviewCard;
