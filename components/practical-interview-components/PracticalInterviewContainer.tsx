'use client';

import React from 'react';
import { notFound, useParams, useSearchParams } from 'next/navigation';
import { ReusableTechnologyCard } from '@/components/utilsComponent/card-components/ReusableTechnologyCard';
import { useGetInterviewsByTechnologyQuery } from '@/main/redux-toolkit/services/practical-interviews/practicalInterviewApi';
import { IPracticalInterview } from '../../main/types/practical-interview.types';
import { TechnologySkeleton } from '../utilsComponent/skeleton-components/TechnologySkeleton';
const PracticalInterviewContainer = () => {
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

	if (error) notFound();

	return (
		<div className='p-4'>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center w-full'>
				{isLoading
					? Array.from({ length: 20 }).map((_, index) => (
							<TechnologySkeleton key={index} />
					  ))
					: practicalInterviews?.data.map((interview: IPracticalInterview) => (
							<ReusableTechnologyCard
								key={interview._id}
								interview={interview}
							/>
					  ))}
			</div>
		</div>
	);
};

export default PracticalInterviewContainer;
