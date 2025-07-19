import { Link } from 'next-view-transitions';
import React from 'react';
import type { MockInterview, } from "@/main/types/mock-interview.types";
export default async function Page({
	params,
}: {
	params: { category: string; technology: string };
}) {
	const resTech = await fetch(
		`https://backend-interview-prap-api.vercel.app/api/mock-interviews/category/${params.category}/technology/${params.technology}`,
		{ cache: 'no-store' } // to avoid stale fetch
	).then((res) => res.json());

	const data = resTech?.data || [];

	return (
		<div className='px-5 py-6 space-y-6'>
			{data.map((item: MockInterview) => (
				<div
					key={item._id}
					className='border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition'
				>
					<Link
						href={`/mock-interviews/${params.category}/${params.technology}/${item.slug}`}
						className='text-xl font-semibold text-gray-400 hover:underline'
					>
						{item.question}
					</Link>
					<p className='text-gray-600 mt-2'>
						<strong>Answer:</strong> {item.answer}
					</p>
					<p className='text-gray-500 text-sm'>
						<strong>Difficulty:</strong> {item.difficulty}
					</p>
					<p className='text-gray-500 text-sm'>
						<strong>Estimated Time:</strong> {item.estimatedTime} min
					</p>
					{item.codeExample && (
						<pre className='bg-gray-100 rounded p-2 mt-2 overflow-x-auto text-sm'>
							{item.codeExample}
						</pre>
					)}
				</div>
			))}
		</div>
	);
}
