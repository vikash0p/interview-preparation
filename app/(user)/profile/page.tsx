'use client';

import Image from 'next/image';

export default function Profile() {



	// if (loading) {
	// 	return (
	// 		<div className='min-h-screen flex items-center justify-center bg-gray-900 text-gray-400'>
	// 			<p>Loading profile...</p>
	// 		</div>
	// 	);
	// }

	// if (error || !user) {
	// 	return (
	// 		<div className='min-h-screen flex items-center justify-center bg-gray-900 text-red-500'>
	// 			<p>{error || 'User not logged in'}</p>
	// 		</div>
	// 	);
	// }

	return (
		<div className='min-h-screen bg-gray-900 flex items-center justify-center px-4'>
			<div className='bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-md text-white'>
				{/* Avatar */}
				<div className='flex flex-col items-center space-y-4'>
					<div className='relative w-28 h-28'>
						<Image
							src={ '/default-avatar.png'}
							alt='User Avatar'
							fill
							sizes='112px'
							className='rounded-full object-cover border-4 border-gray-700 transition-transform hover:scale-105'
						/>
					</div>
					<h2 className='text-2xl font-semibold'>{'Name'}</h2>
					<p className='text-gray-400'>{'Email'}</p>
				</div>

				{/* Info section */}
				<div className='mt-6 space-y-2 text-sm text-gray-300'>
					<div className='flex justify-between border-b border-gray-700 py-2'>
						<span className='font-medium'>Google ID</span>
						<span className='truncate max-w-[150px]'>{'Google ID'}</span>
					</div>
					<div className='flex justify-between border-b border-gray-700 py-2'>
						<span className='font-medium'>User ID</span>
						<span className='truncate max-w-[150px]'>{'User ID'}</span>
					</div>
				</div>

				{/* Logout */}
				<button
					onClick={() => {}}
					className='mt-6 w-full bg-red-600 hover:bg-red-700 transition-colors text-white py-2 rounded-xl font-medium'
				>
					Logout
				</button>
			</div>
		</div>
	);
}
