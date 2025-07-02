'use client';
import Image from 'next/image';
export default function Profile() {
	return (
		<div className='min-h-screen bg-gray-900 flex items-center justify-center px-4'>
			<div className='bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-md text-white'>
				{/* Avatar */}
				<div className='flex flex-col items-center space-y-4'>
					<div className='relative w-28 h-28'>
						<Image
							src={
								'https://cdn.pixabay.com/photo/2022/07/17/13/41/sunflower-7327456_1280.jpg'
							}
							alt='User Avatar'
							fill
							sizes='112px'
							className='rounded-full object-cover border-4 border-gray-700 transition-transform hover:scale-105'
						/>
					</div>
					<h2 className='text-2xl font-semibold'>{'vikash'}</h2>
					<p className='text-gray-400'>{'vikash@gmail.com'}</p>
				</div>



				{/* Logout */}
				<button
					onClick={()=>{}}
					className='mt-6 w-full bg-red-600 hover:bg-red-700 transition-colors text-white py-2 rounded-xl font-medium'
				>
					Logout
				</button>
			</div>
		</div>
	);
}
