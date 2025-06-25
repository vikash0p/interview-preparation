'use client';

import { ReactMockData } from '@/main/data/ReactData/ReactMockData';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
import { Link } from 'next-view-transitions';
import React from 'react';

const ReactSidebar = () => {
	const pathname = usePathname();
	const selectedSegment = useSelectedLayoutSegment();

	return (
		<div className='lg:w-1/4 h-screen fixed top-20 left-0 bg-gradient-to-b from-gray-900 to-gray-900 py-6 overflow-y-auto custom-scrollbar border-r border-zinc-700'>
			<div className='flex flex-col gap-3 px-2'>
				<h2 className='text-xl font-bold text-white mb-4 px-4'>
					React Interview Questions
				</h2>
				{ReactMockData.map((value, index) => {
					const isActive =
						pathname === `/mock-interview/frontend/react/${value.link}` ||
						selectedSegment === value.link.split('/')[1];

					return (
						<Link
							className={`group px-2 py-2 rounded-lg transition-all duration-200 ${
								isActive
									? 'bg-gradient-to-r from-gray-950 to-gray-800 text-gray-300 shadow-lg'
									: 'hover:bg-gradient-to-r from-gray-950 to-gray-800 text-gray-300'
							}`}
							href={`/mock-interview/frontend/react/${value.link}`}
							key={value.title}
							aria-current={isActive ? 'page' : undefined}
						>
							<div className='flex items-center gap-2'>
								<span
									className={`font-medium ${
										isActive ? 'text-white' : 'text-zinc-400'
									}`}
								>
									{index + 1}.
								</span>
								<span className='text-sm'>{value.title}</span>
								{isActive && (
									<span className='ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-xl' />
								)}
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default ReactSidebar;
