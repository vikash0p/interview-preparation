import React from 'react';
import { Link } from 'next-view-transitions';
import {  FaArrowRight, FaHome, FaChevronRight } from 'react-icons/fa';
import type { CategoryItem } from '@/main/data/common/mockData';

const MockInterviewTechCard = ({ item }: { item: CategoryItem }) => {
	return (
		<section className='w-full py-10 '>
			<div className='flex items-center justify-between flex-wrap gap-4 pb-6 '>
				{/* Back link */}
				<nav className='text-sm text-gray-400 flex items-center space-x-1'>
					{/* Home link */}
					<Link
						href='/'
						className='flex items-center gap-1 hover:text-white transition-colors'
					>
						<FaHome className='text-xs' />
						<span className='font-medium'>Home</span>
					</Link>

					{/* Chevron */}
					<FaChevronRight className='text-xs text-gray-500' />

					{/* Mock Interviews link */}
					<Link
						href='/mock-interviews'
						className='flex items-center gap-1 hover:text-white transition-colors'
					>
						<span className='font-medium'>Mock Interviews</span>
					</Link>
				</nav>

				{/* Tech title & label */}
				<div className='flex items-center gap-3'>
					<div className='text-white text-2xl'>{item.icon}</div>
					<p className='text-gray-400 text-sm sm:text-base'>
						{item.actionLabel}
					</p>
				</div>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
				{item.technologies.map((tech, index) => {
					const techName = tech.technology
						.split('-')
						.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
						.join(' ');

					return (
						<div
							key={index}
							className={`group relative ${
								tech.comingSoon
									? 'opacity-60 cursor-not-allowed'
									: 'cursor-pointer'
							} bg-gray-800/60 hover:bg-gray-950 border-2 border-gray-700 p-5 rounded-xl hover:border-indigo-400 transition-all duration-300 shadow-md`}
						>
							<Link
								href={`/mock-interviews/${item.category.toLowerCase()}/${tech.technology.toLowerCase()}`}
								passHref
								className='flex items-center gap-4'
							>
								<div
									className={`text-3xl group-hover:scale-110 transition-transform duration-300 ${tech.iconClassName}`}
								>
									{tech.icon}
								</div>
								<div>
									<h2 className='text-xl font-semibold text-white group-hover:text-indigo-200 transition-colors duration-300'>
										{techName}
									</h2>
									<button
										type='button'
										className='mt-1 text-sm text-indigo-300 flex items-center gap-1 group-hover:text-indigo-400 transition-colors'
									>
										{tech.actionLabel}
										<FaArrowRight className='inline text-xs group-hover:translate-x-1 transition-transform duration-300' />
									</button>
								</div>
							</Link>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default MockInterviewTechCard;
