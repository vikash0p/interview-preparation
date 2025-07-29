'use client';

import React from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import ReusableTechnologyCard from '@/components/utilsComponent/card-components/ReusableTechnologyCard';
import { useGetInterviewsByTechnologyQuery } from '@/main/redux-toolkit/services/practical-interviews/practicalInterviewApi';
import { IPracticalInterview } from '../../../../main/types/practical-interview.types';

const TechnologyInterviewsDisplay = () => {
	const params = useParams();
	const searchParams = useSearchParams();

	const technology = params?.technology as string;
	const category = searchParams.get('category') || '';
	const difficulty = searchParams.get('difficulty') || '';

	const {
		data: practicalInterviews,
		isLoading,
		error,
	} = useGetInterviewsByTechnologyQuery({ technology, category, difficulty });

	if (isLoading) return <div className='text-blue-400 text-lg'>Loading...</div>;

	if (error)
		return (
			<div className='text-red-500 text-lg font-semibold'>
				Something went wrong.
			</div>
		);

	if (!practicalInterviews?.data?.length)
		return (
			<div className='text-yellow-500 text-lg font-medium'>
				No practical interviews found.
			</div>
		);

	return (
		<div className='p-4'>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center w-full'>
				{practicalInterviews?.data.map((interview: IPracticalInterview) => (
					<ReusableTechnologyCard key={interview._id} interview={interview} />
				))}
			</div>
		</div>
	);
};

export default TechnologyInterviewsDisplay;
