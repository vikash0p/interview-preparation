'use client'
import React from 'react'
import { MOCK_INTERVIEWS_DATA } from '@/main/data/common/mockData';
import MockInterviewTechCard from "@/components/mock-interviews-components/MockInterviewTechCard";

const CategoryPage = ({params}: {params: {category: string}}) => {

  const {category} = params;

  const filteredData = MOCK_INTERVIEWS_DATA.filter((item) => item.category === category);
  console.log("🚀 ~ page.tsx:12 ~ CategoryPage ~ filteredData:", filteredData);

  return (
		<section className='max-w-7xl mx-auto h-screen flex flex-col gap-6   items-center'>

			<div className="w-full" >
				{filteredData.map((item, index) => (
					<MockInterviewTechCard key={index} item={item} />
				))}
			</div>
		</section>
	);
}

export default CategoryPage