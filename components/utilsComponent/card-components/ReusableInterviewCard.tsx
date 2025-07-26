'use client';

import React from 'react';
import { FaArrowRight, FaLock } from 'react-icons/fa';
import { Link } from 'next-view-transitions';

interface PracticalCardProps {
	technology: {
		id: string;
		slug: string;
		icon: React.ReactNode;
		label: string;
		actionLabel: string;
		comingSoon?: boolean;
	};
	href:string;
}

const ReusableInterviewCard: React.FC<PracticalCardProps> = ({	technology,href}) => {
	const { slug, icon, label, actionLabel, comingSoon } = technology;

	return (
		<div
			className={`group relative overflow-hidden w-full max-w-sm ${
				comingSoon
					? 'opacity-80 cursor-not-allowed border-2 border-yellow-400/30'
					: 'cursor-pointer hover:bg-gradient-to-r hover:from-gray-950 border-2 border-gray-700 hover:to-gray-900 hover:border-gray-500 hover:shadow-lg hover:shadow-indigo-500/10'
			} bg-gradient-to-r from-gray-900 to-gray-800 border-2  p-6 rounded-xl transition-all duration-300`}
		>
			{comingSoon ? (
				<div className='flex gap-5 items-center relative z-10 opacity-70'>
					<div className='p-3 rounded-lg bg-gray-700/50 transition-all duration-300'>
						<div className='text-3xl text-gray-500 transition-colors duration-300'>
							<FaLock className='text-yellow-400' />
						</div>
					</div>
					<div className='flex-1'>
						<h3 className='text-lg font-semibold text-yellow-400 transition-colors duration-300'>
							{label}
						</h3>
						<p className='text-sm text-yellow-500 mt-1 flex items-center transition-colors duration-300'>
							{`Available ${slug} coming soon`}
						</p>
					</div>
				</div>
			) : (
				<Link
					href={href}
					passHref
					className='flex gap-5 items-center relative z-10'
				>
					<div className='p-3 rounded-lg bg-black/30 group-hover:bg-indigo-500/20 transition-all duration-300'>
						<div className='text-3xl text-gray-300 group-hover:text-indigo-300 transition-colors duration-300'>
							{icon}
						</div>
					</div>
					<div className='flex-1'>
						<h3 className='text-lg font-semibold text-gray-300 group-hover:text-white transition-colors duration-300'>
							{label}
						</h3>
						<p className='text-sm text-gray-400 mt-1 flex items-center group-hover:text-indigo-300 transition-colors duration-300'>
							{actionLabel}
							<FaArrowRight className='ml-2 text-xs group-hover:translate-x-1 transition-transform duration-300' />
						</p>
					</div>
				</Link>
			)}

			{comingSoon && (
				<div className='absolute top-3 right-3 bg-gradient-to-r from-yellow-400/80 to-yellow-500/80 text-xs text-gray-900 font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm'>
					<FaLock className='text-[0.6rem]' />
					<span>Coming Soon</span>
				</div>
			)}
		</div>
	);
};

export default ReusableInterviewCard;
