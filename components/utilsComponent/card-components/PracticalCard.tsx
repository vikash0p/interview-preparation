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
}

const PracticalCard: React.FC<PracticalCardProps> = ({ technology }) => {
	const { slug, icon, label, actionLabel, comingSoon } = technology;

	return (
		<div
			className={`group relative overflow-hidden w-full max-w-sm ${
				comingSoon
					? 'opacity-80 cursor-not-allowed'
					: 'cursor-pointer hover:bg-gradient-to-r hover:from-gray-950 hover:to-gray-900 hover:border-white/50 hover:shadow-lg hover:shadow-indigo-500/10'
			} bg-gradient-to-r from-gray-900 to-gray-800 border-2 ${
				comingSoon ? 'border-gray-600/50' : 'border-gray-700'
			} p-6 rounded-xl transition-all duration-300`}
		>
			<div
				className={`flex gap-5 items-center relative z-10 ${
					comingSoon ? 'opacity-70' : ''
				}`}
			>
				<div
					className={`p-3 rounded-lg ${
						comingSoon
							? 'bg-gray-700/50'
							: 'bg-black/30 group-hover:bg-indigo-500/20'
					} transition-all duration-300`}
				>
					<div
						className={`text-3xl ${
							comingSoon
								? 'text-gray-500'
								: 'text-gray-300 group-hover:text-indigo-300'
						} transition-colors duration-300`}
					>
						{comingSoon ? <FaLock className='text-gray-400' /> : icon}
					</div>
				</div>
				<div className='flex-1'>
					<h3
						className={`text-lg font-semibold ${
							comingSoon
								? 'text-gray-500'
								: 'text-gray-300 group-hover:text-white'
						} transition-colors duration-300`}
					>
						{label}
					</h3>
					<p
						className={`text-sm ${
							comingSoon
								? 'text-yellow-400'
								: 'text-gray-400 group-hover:text-indigo-300'
						} mt-1 flex items-center transition-colors duration-300`}
					>
						{comingSoon ? 'Available soon' : actionLabel}
						{!comingSoon && (
							<FaArrowRight className='ml-2 text-xs group-hover:translate-x-1 transition-transform duration-300' />
						)}
					</p>
				</div>
			</div>

			{comingSoon && (
				<div className='absolute top-3 right-3 bg-gradient-to-r from-yellow-400/80 to-yellow-500/80 text-xs text-gray-900 font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm'>
					<FaLock className='text-[0.6rem]' />
					<span>Coming Soon</span>
				</div>
			)}
		</div>
	);
};

export default PracticalCard;
