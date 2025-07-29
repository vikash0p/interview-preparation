'use client';

import { notFound, useParams } from 'next/navigation';
import { useGetInterviewBySlugQuery } from '@/main/redux-toolkit/services/practical-interviews/practicalInterviewApi';
import React from 'react';

const SlugPage = () => {
	const params = useParams();

	// Force the params to be string
	const technology = Array.isArray(params.technology)
		? params.technology[0]
		: params.technology;
	const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

	const {
		data: interview,
		isError,
		isLoading,
	} = useGetInterviewBySlugQuery({
		technology,
		slug,
	});

	return (
		<div className='p-4'>
			{isLoading && <p>Loading...</p>}
			{isError && notFound() }
			{!isLoading && !isError && interview && (
				<pre className='bg-gray-100 p-4 rounded text-sm overflow-x-auto'>
					{JSON.stringify(interview, null, 2)}
				</pre>
			)}
		</div>
	);
};

export default SlugPage;
