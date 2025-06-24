import React from 'react';
import { resourcesData } from '@/main/data/common/ResourceData';
import ReusableHeading from '../reusable-components/ReusableHeading';
import ResourceCard from '../utilsComponent/card-components/ResourceCard';

const Resources: React.FC = () => {
	return (
		<section id='resources' className='py-20'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<ReusableHeading
					heading='Learning Resources'
					description='Comprehensive materials to enhance your interview preparation'
				/>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{resourcesData.map((resource, index) => (
						<ResourceCard
							key={resource.id}
							resource={resource}
							animationDelay={index * 0.2}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
export default Resources;
