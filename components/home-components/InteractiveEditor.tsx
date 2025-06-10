'use client';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';

const InteractiveEditor = () => {
	return (
		<motion.div
			initial={{ opacity: 0, x: -50 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			className='bg-[#181d28] rounded-2xl p-6 shadow-2xl'
		>
			<div className='flex items-center justify-between mb-4'>
				<div className='flex space-x-2'>
					<div className='w-3 h-3 rounded-full bg-red-500 animate-pulse' />
					<div className='w-3 h-3 rounded-full bg-yellow-500 animate-pulse' />
					<div className='w-3 h-3 rounded-full bg-green-500 animate-pulse' />
				</div>
				<span className='text-sm text-gray-400'>JavaScript</span>
			</div>

			<div className='font-mono bg-gray-900 p-4 rounded-lg text-gray-300 text-sm h-96 overflow-y-auto relative'>
				<div className='absolute left-0 top-0 w-8 h-full text-right pr-2 text-gray-600 text-sm'>
					{Array.from({ length: 12 }).map((_, i) => (
						<div key={i} className='h-6'>
							{i + 1}
						</div>
					))}
				</div>
				<pre className='pl-10'>
					<code className='language-javascript'>
						{`// Example of var, let, and const in JavaScript
var x = 10;
x = 20;
console.log(x); // Output: 20

let y = 15;
y = 25;
console.log(y); // Output: 25

const z = 30;
console.log(z); // Output: 30`}
					</code>
				</pre>
			</div>

			<div className='mt-6 p-4 bg-gray-900 rounded-lg'>
				<div className='text-sm text-gray-400 mb-2'>Console Output:</div>
				<div className='text-green-400 font-mono text-sm'></div>
			</div>

			<div className='flex justify-end mt-4 space-x-3'>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className='px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors'
				>
					Reset
				</motion.button>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className='px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md hover:from-indigo-700 hover:to-purple-700 transition-colors flex items-center'
				>
					Run Code
					<FaChevronRight className='ml-2 w-4 h-4' />
				</motion.button>
			</div>
		</motion.div>
	);
};

export default InteractiveEditor;
