import React from 'react'
import { ISlugDataProps } from '../../../main/types/practical-interview.types';
import {  FaCheck, FaCopy } from 'react-icons/fa';
import { MdTipsAndUpdates } from 'react-icons/md';
import { toast } from 'react-toastify';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';



  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!', {
      position: 'bottom-right',
      autoClose: 2000,
    });
  };

const SlugProblemStatement : React.FC<ISlugDataProps> = ({ data}) => {
  return (
		<div className='space-y-8'>
			<section>
				<h2 className='text-xl font-semibold text-white mb-4'>Description</h2>
				<div className='prose prose-invert max-w-none bg-gray-800/50 p-6 rounded-xl border border-gray-800'>
					<p className='text-gray-300 leading-relaxed'>{data.description}</p>
					<p className='mt-4 text-gray-300 leading-relaxed'>
						{data.detailedExplanation}
					</p>
				</div>
			</section>

			<section>
				<h2 className='text-xl font-semibold text-white mb-4'>Requirements</h2>
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
				<h2 className='text-xl font-semibold text-white mb-4'>Prerequisites</h2>
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
							<h3 className='font-semibold text-yellow-400 mb-2'>Pro Tip</h3>
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
	);
}

export default SlugProblemStatement