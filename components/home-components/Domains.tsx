'use client';
import { domainsData } from '@/main/data/common/domainsData';
import ReusableHeading from '../reusable-components/ReusableHeading';
import React from 'react';
import DomainCard from '../utilsComponent/card-components/DomainCard';

const Domains = () => {
	return (
		<section className='mt-10 md:mt-14 lg:mt-20'>
			<ReusableHeading
				heading='Domains I Work In Professionally'
				description='Explore my technical expertise across different domains'
			/>
			{/* Cards */}
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
				{domainsData.map((domain, index) => (
					<DomainCard
						key={index}
						icon={domain.icon}
						name={domain.name}
						tech={domain.tech}
					/>
				))}
			</div>
		</section>
	);
};

export default Domains;
