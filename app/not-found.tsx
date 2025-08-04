'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
	FaExclamationTriangle,
	FaHome,
	FaSearch,
	FaBook,
	FaEnvelope,
} from 'react-icons/fa';

export default function NotFound() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 flex flex-col items-center justify-center'>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				className='max-w-4xl w-full text-center flex flex-col items-center'
			>
				{/* Animated Error Icon */}
				<motion.div
					initial={{ scale: 0, rotate: -30 }}
					animate={{ scale: 1, rotate: 0 }}
					transition={{ type: 'spring', stiffness: 200, damping: 15 }}
					className='mb-8 relative'
				>
					<div className='absolute -inset-4 bg-red-500/20 rounded-full blur-md animate-pulse'></div>
					<FaExclamationTriangle className='text-7xl text-red-400 mx-auto' />
				</motion.div>

				{/* Main Content */}
				<div className='space-y-6'>
					{/* Heading */}
					<motion.h1
						initial={{ y: -20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						className='text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400'
					>
						Interview Prep Page Not Found
					</motion.h1>

					{/* Description */}
					<motion.p
						initial={{ y: -10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.5 }}
						className='text-lg text-gray-300 max-w-2xl mx-auto'
					>
						The technical interview resource you&apos;re looking for
						doesn`&apos;t exist or has been moved. Don`&apos;t worry -
						we`&apos;ve got plenty of other materials to help you prepare!
					</motion.p>

					{/* Suggested Actions */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.6, duration: 0.5 }}
						className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'
					>
						<Link href='/' className='group'>
							<motion.div
								whileHover={{ y: -5 }}
								className='h-full p-6 bg-gray-800/50 border border-gray-700 rounded-sm hover:border-indigo-400 transition-all'
							>
								<div className='flex items-center gap-4'>
									<div className='p-3 bg-indigo-500/20 rounded-sm text-indigo-400 group-hover:bg-indigo-500/30 transition'>
										<FaHome className='text-xl' />
									</div>
									<div className='text-left'>
										<h3 className='font-semibold text-lg'>Return Home</h3>
										<p className='text-sm text-gray-400'>
											Back to the main dashboard
										</p>
									</div>
								</div>
							</motion.div>
						</Link>

						<Link href='/practical-interviews' className='group'>
							<motion.div
								whileHover={{ y: -5 }}
								className='h-full p-6 bg-gray-800/50 border border-gray-700 rounded-sm hover:border-blue-400 transition-all'
							>
								<div className='flex items-center gap-4'>
									<div className='p-3 bg-blue-500/20 rounded-sm text-blue-400 group-hover:bg-blue-500/30 transition'>
										<FaSearch className='text-xl' />
									</div>
									<div className='text-left'>
										<h3 className='font-semibold text-lg'>Browse Interviews</h3>
										<p className='text-sm text-gray-400'>
											Explore all interview questions
										</p>
									</div>
								</div>
							</motion.div>
						</Link>

						<Link href='/resources' className='group'>
							<motion.div
								whileHover={{ y: -5 }}
								className='h-full p-6 bg-gray-800/50 border border-gray-700 rounded-sm hover:border-purple-400 transition-all'
							>
								<div className='flex items-center gap-4'>
									<div className='p-3 bg-purple-500/20 rounded-sm text-purple-400 group-hover:bg-purple-500/30 transition'>
										<FaBook className='text-xl' />
									</div>
									<div className='text-left'>
										<h3 className='font-semibold text-lg'>Study Resources</h3>
										<p className='text-sm text-gray-400'>
											View learning materials
										</p>
									</div>
								</div>
							</motion.div>
						</Link>
					</motion.div>

					{/* Additional Help */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.8, duration: 0.5 }}
						className='mt-12 pt-6 border-t border-gray-700/50'
					>
						<div className='inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full'>
							<FaEnvelope className='text-yellow-400' />
							<span className='text-sm'>Need help?</span>
							<Link
								href='/contact'
								className='text-yellow-400 hover:underline font-medium text-sm'
							>
								Contact our support team
							</Link>
						</div>
					</motion.div>
				</div>
			</motion.div>

			{/* Footer Note */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1, duration: 0.5 }}
				className='mt-16 text-center text-xs text-gray-500'
			>
				<p>
					Interview Prep Platform • Helping developers succeed in technical
					interviews since 2023
				</p>
			</motion.div>
		</div>
	);
}
