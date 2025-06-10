'use client'
import React from "react";
import { motion } from "framer-motion";
import ReusableHeading from "../reusable-components/ReusableHeading";
import { statsData,JoinCommunityData } from "@/main/data/common/JoinCommunityData";



const JoinCommunity = () => {
  return (
		<section id='community' className='py-20  text-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<ReusableHeading
					heading='Join Our Community'
					description='Connect, learn, and grow with fellow interview candidates'
				/>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{JoinCommunityData.map((feature, index) => (
						<motion.div
							key={feature.id}
							className='group relative bg-gradient-to-r from-gray-900 to-gray-800 border-2 border-gray-700 p-6 rounded-xl hover:border-indigo-500 transition-opacity duration-300'
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.2 }}
							whileHover={{
								scale: 1.02,
								boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
							}}
						>
							<div className='absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl' />
							<div
								className={`w-14 h-14 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6`}
							>
								{feature.icon}
							</div>
							<h3 className='text-xl font-semibold mb-4'>{feature.title}</h3>
							<p className='text-gray-300 mb-6'>{feature.description}</p>
							<div className='flex items-center justify-between text-sm'>
								<span className='text-gray-400'>{feature.stats}</span>
								<span className={`${feature.linkColor}`}>
									{feature.linkText}
								</span>
							</div>
						</motion.div>
					))}
				</div>
				<div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-16'>
					{statsData.map((stat, index) => (
						<motion.div
							key={stat.id}
							className='text-center'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
						>
							<div className={`text-4xl font-bold ${stat.color} mb-2`}>
								{stat.value}
							</div>
							<div className='text-neutral-400'>{stat.label}</div>
						</motion.div>
					))}
				</div>
				<div className='mt-16 text-center'>
					<motion.button
						className='bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg transition-all transform hover:scale-105'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 1 }}
					>
						Join Our Community
					</motion.button>
					<motion.p
						className='mt-4 text-neutral-400'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 1.1 }}
					>
						Already a member?{' '}
						<a href='#' className='text-indigo-400 hover:text-indigo-300'>
							Sign in
						</a>
					</motion.p>
				</div>
			</div>
		</section>
	);
};

export default JoinCommunity;
