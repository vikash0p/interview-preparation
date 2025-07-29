'use client';

import React from 'react';
import { useSearchParams, useRouter, useParams } from 'next/navigation';
import {
	useGetAllCategoriesByTechnologyQuery,
	useGetInterviewsByTechnologyQuery,
} from '@/main/redux-toolkit/services/practical-interviews/practicalInterviewApi';
import CategoryDropDown from '@/components/practical-interview-components/CategoryDropDown';
import DifficultyDropDown from '@/components/practical-interview-components/DifficultyDropDown';
const TechnologyTopBar = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const params = useParams();
	const technology = params?.technology as string;

	const { data: categories } = useGetAllCategoriesByTechnologyQuery(technology);
	const currentCategory = searchParams.get('category');
	const currentDifficulty = searchParams.get('difficulty');

	const { data: practicalInterviews, isLoading: PracticalLoading } =
		useGetInterviewsByTechnologyQuery({ technology });

	const updateSearchParams = (key: string, value: string) => {
		const params = new URLSearchParams(searchParams.toString());
		if (params.get(key) === value) {
			params.delete(key);
		} else {
			params.set(key, value);
		}
		router.push(`/practical-interviews/${technology}?${params.toString()}`);
	};

	return (
		<section className='flex items-center justify-between p-4  border-b border-gray-200'>
			<div>
				{PracticalLoading ? (
					<div className='text-blue-400 text-lg'>Loading...</div>
				) : (
					<div className='text-gray-400 text-sm mb-4'>
						{`Showing ${practicalInterviews?.results} results for "${technology}" interviews.`}
					</div>
				)}
			</div>
			<div className='flex items-center gap-10'>
				{categories?.data && (
					<CategoryDropDown
						categories={categories.data}
						updateSearchParams={updateSearchParams}
						currentCategory={currentCategory}
					/>
				)}

				<DifficultyDropDown
					currentDifficulty={currentDifficulty}
					updateSearchParams={updateSearchParams}
				/>
			</div>
		</section>
	);
};

export default TechnologyTopBar;
