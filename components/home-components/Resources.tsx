import React from 'react';
import { resourcesData } from '@/main/data/common/ResourceData';
import ReusableHeading from '../reusable-components/ReusableHeading';
import ResourceCard from '../utilsComponent/card-components/ResourceCard';

const Resources: React.FC = () => {
	return (
		<section className=''>
			<ReusableHeading
				heading='Learning Resources to Sharpen Your Skills'
				description='Comprehensive materials to enhance your interview preparation'
			/>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{resourcesData.map((resource, index) => (
					<ResourceCard
						key={resource.id}
						resource={resource}
						animationDelay={index * 0.05}
					/>
				))}
			</div>
		</section>
	);
};
export default Resources;
