import React from 'react';
import { IPracticalInterview } from '../../../../main/types/practical-interview.types';
import ReusableTechnologyCard from '@/components/utilsComponent/card-components/ReusableTechnologyCard';
import ReusableHeading from '@/components/reusable-components/ReusableHeading';

const TechnologyPage = async ({
	params,
	searchParams,
}: {
	params: { technology: string };
	searchParams: { category?: string; difficulty?: string };
}) => {
	const { technology } = params;

	let PracticalInterviews: {
		status: string;
		results: number;
		data: IPracticalInterview[];
	} | null = null;

	let errorMessage = '';
	let hasError = false;

	try {
		const query = new URLSearchParams();
		if (searchParams.category) query.append('category', searchParams.category);
		if (searchParams.difficulty)
			query.append('difficulty', searchParams.difficulty);

		const res = await fetch(
			`${
				process.env.NEXT_PUBLIC_API_URL
			}/api/practical-interviews/technology/${technology}?${query.toString()}`
		);

		if (!res.ok) {
			hasError = true;
			const errorData = await res.json();
			errorMessage = errorData.message || 'Something went wrong.';
		} else {
			PracticalInterviews = await res.json();
		}
	} catch (err) {
		console.log('🚀 ~ Error:', err);
		hasError = true;
		errorMessage =
			'Failed to fetch data. Please check your connection or try again later.';
	}

	const uniqueCategories = Array.from(
		new Set(
			PracticalInterviews?.data?.flatMap((item: IPracticalInterview) =>
				Array.isArray(item.category) ? item.category : [item.category]
			)
		)
	);
	return (
		<div className='p-4'>
			{hasError ? (
				<div className='text-red-500 text-lg font-semibold'>{errorMessage}</div>
			) : PracticalInterviews?.data?.length === 0 ? (
				<div className='text-yellow-500 text-lg font-medium'>
					No practical interviews found for this technology.
				</div>
			) : (
				<div>
					<ReusableHeading
						heading={`Practical Interviews for ${technology}`}
						description={`Sharpen your ${technology} skills with real-world interview challenges, hands-on problem solving, and expert-level preparation.`}
					/>
					<div className='text-gray-400 text-sm mb-4'>
						{`Showing ${PracticalInterviews?.results} results for "${technology}"`}
					</div>
					{/* Card Grid */}
					<div>
						<div className='text-gray-300 text-md mb-2'>
							<span className='font-semibold'>Filter by:</span>
						</div>
						<div>
							{uniqueCategories?.map((category) => (
								<span
									key={category}
									className='inline-block bg-gray-800 text-gray-300 px-2 py-1 rounded-md mr-2 mb-2 text-xs'
								>
									{category}
								</span>
							))}
						</div>
						<div className='text-gray-300 text-md mb-2'>
							<span className='font-semibold'>Difficulty:</span>
							<div>
								{['Easy', 'Medium', 'Hard'].map((difficulty) => (
									<span
										key={difficulty}
										className='inline-block bg-gray-800 text-gray-300 px-2 py-1 rounded-md mr-2 mb-2 text-xs'
									>
										{difficulty}
									</span>
								))}
							</div>

						</div>
					</div>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center w-full b'>
						{PracticalInterviews?.data?.map(
							(interview: IPracticalInterview) => (
								<ReusableTechnologyCard
									key={interview._id}
									interview={interview}
								/>
							)
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default TechnologyPage;
