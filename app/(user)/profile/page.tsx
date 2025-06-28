'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type User = {
	name: string;
	email: string;
	avatar: string;
	googleId: string;
	_id: string;
};

export default function Profile() {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const res = await fetch(
					`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/user`,
					{
						method: 'GET',
						credentials: 'include', // include cookies/session
						headers: {
							'Content-Type': 'application/json',
							Accept: 'application/json',
						},
					}
				);

				if (!res.ok) throw new Error('Failed to fetch user');
				const data = await res.json();
				setUser(data.user || data); // adapt if your API returns { user: { ... } }
			} catch (error) {
				console.error('Error fetching user:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchUser();
	}, []);

	const logout = async () => {
		await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/logout`, {
			method: 'POST',
			credentials: 'include',
		});
		window.location.href = '/login'; // redirect to login
	};

	if (loading) {
		return (
			<div className='min-h-screen bg-gray-900 text-white flex justify-center items-center'>
				Loading...
			</div>
		);
	}

	if (!user) {
		return (
			<div className='min-h-screen bg-gray-900 text-white flex justify-center items-center'>
				User not found
			</div>
		);
	}

	return (
		<div className='min-h-screen bg-gray-900 flex items-center justify-center px-4'>
			<div className='bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-md text-white'>
				{/* Avatar */}
				<div className='flex flex-col items-center space-y-4'>
					<div className='relative w-28 h-28'>
						<Image
							src={user.avatar || '/default-avatar.png'}
							alt='User Avatar'
							fill
							sizes='112px'
							className='rounded-full object-cover border-4 border-gray-700 transition-transform hover:scale-105'
						/>
					</div>
					<h2 className='text-2xl font-semibold'>{user.name}</h2>
					<p className='text-gray-400'>{user.email}</p>
				</div>

				{/* Info section */}
				<div className='mt-6 space-y-2 text-sm text-gray-300'>
					<div className='flex justify-between border-b border-gray-700 py-2'>
						<span className='font-medium'>Google ID</span>
						<span className='truncate max-w-[150px]'>{user.googleId}</span>
					</div>
					<div className='flex justify-between border-b border-gray-700 py-2'>
						<span className='font-medium'>User ID</span>
						<span className='truncate max-w-[150px]'>{user._id}</span>
					</div>
				</div>

				{/* Logout */}
				<button
					onClick={logout}
					className='mt-6 w-full bg-red-600 hover:bg-red-700 transition-colors text-white py-2 rounded-xl font-medium'
				>
					Logout
				</button>
			</div>
		</div>
	);
}
