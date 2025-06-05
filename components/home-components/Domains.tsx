'use client';
import { domainsData } from '@/main/data/common/domainsData';
import { motion } from 'framer-motion';
import { containerVariants } from '@/main/animation/motionVariants';
import ReusableHeading from '../reusable-components/ReusableHeading';
import React from 'react';
import DomainCard from "../card-components/DomainCard";

const Domains = () => {
	return (
		<section className='py-16 sm:py-20 lg:py-24 text-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Heading */}
				<ReusableHeading
					heading='Domains I Work In'
					description='Explore my technical expertise across different domains'
				/>

				{/* Cards */}
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.2 }}
					className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
				>
					{domainsData.map((domain, index) => (
						<DomainCard
							key={index}
							icon={domain.icon}
							name={domain.name}
							tech={domain.tech}
						/>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Domains;
