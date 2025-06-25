'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { JavascriptCodingData } from '@/main/data/javascriptData/JavaScriptCodingData';

const  PracticalJavascriptWrapper = () => {

	const [copiedId, setCopiedId] = useState<string | null>(null);

	const handleCopy = (id: string, code: string) => {
		navigator.clipboard.writeText(code);
		setCopiedId(id);
		setTimeout(() => setCopiedId(null), 2000); // Reset copied state after 2 seconds
	};

	return (
		<motion.div
			className='grid grid-cols-1 max-w-6xl m-auto gap-5 mt-4'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
		>
			{JavascriptCodingData.map(({ id, question, code }) => (
				<motion.div
					key={id}
					className='relative group  p-8 bg-gray-800 rounded-2xl border-2 border-gray-700 hover:border-indigo-500 transition-all shadow-xl hover:shadow-2xl'
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					style={{
						background:
							'linear-gradient(45deg, rgba(31,41,55,1) 0%, rgba(17,24,39,1) 100%)',
					}}
				>
					{/* Copy Code Button */}
					<div className='absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-2xl' />

					{/* Question */}
					<div className='flex items-center justify-between mb-4'>
						<h3 className='text-2xl font-bold'>{question}</h3>
					</div>

					{/* Code Block */}
					<pre className='bg-black bg-opacity-30 rounded-lg p-4 text-sm overflow-auto mb-4 relative'>
						<code>{code}</code>

						<button
							onClick={() => handleCopy(id, code)}
							className='absolute top-4 right-4 bg-white text-indigo-600 px-3 py-2 text-sm font-medium rounded-md shadow-md hover:bg-blue-100 transition'
						>
							{copiedId === id ? 'Copied!' : 'Copy Code'}
						</button>
					</pre>
				</motion.div>
			))}
		</motion.div>
	);
};

export default  PracticalJavascriptWrapper;
