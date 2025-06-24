'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!email || !password) {
			setError('Please fill in all fields');
			return;
		}

		// Simulate login logic
		if (email === 'user@example.com' && password === 'password123') {
			setError('');
			router.push('/dashboard'); // redirect on successful login
		} else {
			setError('Invalid credentials');
		}
	};

	return (
		<main className='flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black px-4'>
			<div className='w-full max-w-md bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-8'>
				<h1 className='text-3xl font-bold text-white text-center mb-6'>
					Sign In
				</h1>

				<form onSubmit={handleSubmit} className='space-y-5'>
					<div>
						<label htmlFor='email' className='block text-sm text-gray-300 mb-1'>
							Email Address
						</label>
						<input
							type='email'
							id='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className='w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500'
							placeholder='you@example.com'
							required
						/>
					</div>

					<div>
						<label
							htmlFor='password'
							className='block text-sm text-gray-300 mb-1'
						>
							Password
						</label>
						<input
							type='password'
							id='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className='w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500'
							placeholder='••••••••'
							required
						/>
					</div>

					{error && (
						<p className='text-red-400 text-sm font-medium text-center'>
							{error}
						</p>
					)}

					<button
						type='submit'
						className='w-full bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-semibold py-2 px-4 rounded-md'
					>
						Login
					</button>
				</form>

				<p className='text-sm text-gray-400 text-center mt-6'>
					Don&apos;t have an account?{' '}
					<a href='/register' className='text-indigo-400 hover:underline'>
						Register
					</a>
				</p>
			</div>
		</main>
	);
}
