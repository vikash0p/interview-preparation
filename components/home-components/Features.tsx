'use client';
import { containerVariants } from '@/main/animation/motionVariants';
import { featuresData } from '@/main/data/common/featuresData';
import { motion } from 'framer-motion';
import React from 'react';
import ReusableHeading from '../reusable-components/ReusableHeading';
import FeatureCard from '../card-components/FeatureCard';

const Features = () => {
	return (
		<section id='features' className='py-20 text-gray-200'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<ReusableHeading
					heading='Comprehensive Interview Preparation'
					description='Everything you need to succeed in your next interview'
				/>

				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.2 }}
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
				>
					{featuresData.map((feature) => (
						<FeatureCard
							key={feature.id}
							id={feature.id}
							icon={feature.icon}
							title={feature.title}
							description={feature.description}
							bgColor={feature.bgColor}
						/>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Features;
