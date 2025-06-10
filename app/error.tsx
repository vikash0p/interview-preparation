'use client';

import { useEffect, useTransition, useState } from 'react';

export default function HomePageError({
	error,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	const [isPending, startTransition] = useTransition();
	const [isClicked, setIsClicked] = useState(false);

	useEffect(() => {
		// Log the error to an external monitoring service
		console.error('Home Page Error:', error);
	}, [error]);

	const handleRetry = () => {
		setIsClicked(true);
		startTransition(() => {
      window.location.reload();
		});
	};

	return (
		<div className='bg-slate-900 text-white min-h-screen flex flex-col justify-center items-center px-4 text-center'>
			<h1 className='text-3xl font-bold text-red-500 mb-4'>
				Oops! Something went wrong on the home page.
			</h1>
			<p className='text-gray-300 mb-6 max-w-xl'>
				We’re sorry for the inconvenience. An unexpected error occurred while
				loading the home page. Please try again, or return later if the issue
				persists.
			</p>
			<button
				onClick={handleRetry}
				disabled={isPending}
				className={`px-6 py-2 text-white rounded transition duration-300 ${
					isPending
						? 'bg-indigo-500 cursor-not-allowed opacity-60'
						: 'bg-[#5047e5] hover:bg-indigo-700'
				}`}
				aria-label='Retry loading the home page'
			>
				{isPending || isClicked ? 'Retrying...' : 'Try Again'}
			</button>
		</div>
	);
}
