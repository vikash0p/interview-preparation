'use client'
import React, { useState } from 'react'
import { IPracticalInterview } from '../../../main/types/practical-interview.types';
import { FaLightbulb, FaCheck, FaCopy } from 'react-icons/fa';
import { MdTipsAndUpdates } from 'react-icons/md';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { toast } from "react-toastify";


interface ISlugMainContentProps {
  data:IPracticalInterview
}

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!', {
      position: 'bottom-right',
      autoClose: 2000,
    });
  };


const SlugMainContent:React.FC<ISlugMainContentProps> = ({data}) => {
  	const [activeTab, setActiveTab] = useState('problem');
		const [showSolution, setShowSolution] = useState(false);
  return (
		<div className='lg:col-span-2'>
			{/* Tab Navigation */}
			<div className='flex border-b border-gray-800 mb-8'>
				<button
					className={`px-6 py-3 font-medium text-sm tracking-wide relative ${
						activeTab === 'problem'
							? 'text-indigo-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-indigo-500'
							: 'text-gray-500 hover:text-gray-300'
					} transition-colors`}
					onClick={() => setActiveTab('problem')}
				>
					Problem Statement
				</button>
				<button
					className={`px-6 py-3 font-medium text-sm tracking-wide relative ${
						activeTab === 'solution'
							? 'text-indigo-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-indigo-500'
							: 'text-gray-500 hover:text-gray-300'
					} transition-colors`}
					onClick={() => setActiveTab('solution')}
				>
					Solution
				</button>
				<button
					className={`px-6 py-3 font-medium text-sm tracking-wide relative ${
						activeTab === 'discussion'
							? 'text-indigo-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-indigo-500'
							: 'text-gray-500 hover:text-gray-300'
					} transition-colors`}
					onClick={() => setActiveTab('discussion')}
				>
					Discussion
				</button>
			</div>

			{/* Tab Content */}
			{activeTab === 'problem' && (
				<div className='space-y-8'>
					<section>
						<h2 className='text-xl font-semibold text-white mb-4'>
							Description
						</h2>
						<div className='prose prose-invert max-w-none bg-gray-800/50 p-6 rounded-xl border border-gray-800'>
							<p className='text-gray-300 leading-relaxed'>
								{data.description}
							</p>
							<p className='mt-4 text-gray-300 leading-relaxed'>
								{data.detailedExplanation}
							</p>
						</div>
					</section>

					<section>
						<h2 className='text-xl font-semibold text-white mb-4'>
							Requirements
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
							{data.requirements?.map((req, idx) => (
								<div
									key={idx}
									className='flex items-start p-4 bg-gray-800/50 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors'
								>
									<div className='flex-shrink-0 mt-0.5 mr-3'>
										<div className='w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center'>
											<FaCheck className='text-green-400 text-xs' />
										</div>
									</div>
									<span className='text-gray-300'>{req}</span>
								</div>
							))}
						</div>
					</section>

					<section>
						<h2 className='text-xl font-semibold text-white mb-4'>
							Prerequisites
						</h2>
						<div className='flex flex-wrap gap-2'>
							{data.prerequisites?.map((req, idx) => (
								<span
									key={idx}
									className='px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg border border-gray-800 hover:bg-gray-800 transition-colors'
								>
									{req}
								</span>
							))}
						</div>
					</section>

					<section>
						<div className='p-5 bg-yellow-500/10 rounded-xl border border-yellow-500/30'>
							<div className='flex items-start gap-4'>
								<MdTipsAndUpdates className='text-yellow-400 text-xl mt-1 flex-shrink-0' />
								<div>
									<h3 className='font-semibold text-yellow-400 mb-2'>
										Pro Tip
									</h3>
									<p className='text-gray-300 leading-relaxed'>
										{data.tips || 'No tips available for this interview.'}
									</p>
								</div>
							</div>
						</div>
					</section>

					<section>
						<div className='flex justify-between items-center mb-4'>
							<h2 className='text-xl font-semibold text-white'>Starter Code</h2>
							<button
								onClick={() => copyToClipboard(data.starterCode)}
								className='flex items-center gap-2 px-3 py-1.5 text-xs bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors'
							>
								<FaCopy /> Copy
							</button>
						</div>
						<div className='rounded-xl overflow-hidden border border-gray-800'>
							<SyntaxHighlighter
								language='javascript'
								style={atomDark}
								showLineNumbers
								customStyle={{
									margin: 0,
									borderRadius: '0.75rem',
									background: '#1e1e2d',
									fontSize: '14px',
								}}
							>
								{data.starterCode}
							</SyntaxHighlighter>
						</div>
					</section>
				</div>
			)}

			{activeTab === 'solution' && (
				<div className='space-y-8'>
					<div className='p-5 bg-indigo-500/10 rounded-xl border border-indigo-500/30'>
						<div className='flex items-start gap-4'>
							<FaLightbulb className='text-indigo-400 text-xl mt-1 flex-shrink-0' />
							<div>
								<h3 className='font-semibold text-indigo-400 mb-2'>
									Before You Look
								</h3>
								<p className='text-gray-300 leading-relaxed'>
									Try solving the problem yourself first! You will learn much
									more by attempting it before viewing the solution.
								</p>
							</div>
						</div>
					</div>

					{!showSolution ? (
						<div className='text-center py-12'>
							<button
								onClick={() => setShowSolution(true)}
								className='px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-indigo-500/20'
							>
								Reveal Solution
							</button>
							<p className='text-gray-400 mt-4 text-sm'>
								This will show the complete solution code
							</p>
						</div>
					) : (
						<div>
							<div className='flex justify-between items-center mb-4'>
								<h2 className='text-xl font-semibold text-white'>
									Solution Code
								</h2>
								<button
									onClick={() => copyToClipboard(data.solutionCode)}
									className='flex items-center gap-2 px-3 py-1.5 text-xs bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors'
								>
									<FaCopy /> Copy
								</button>
							</div>
							<div className='rounded-xl overflow-hidden border border-gray-800'>
								<SyntaxHighlighter
									language='javascript'
									style={atomDark}
									showLineNumbers
									customStyle={{
										margin: 0,
										borderRadius: '0.75rem',
										background: '#1e1e2d',
										fontSize: '14px',
									}}
								>
									{data.solutionCode}
								</SyntaxHighlighter>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
}

export default SlugMainContent