'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from "react-icons/fa";

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

		if (email === 'user@example.com' && password === 'password123') {
			setError('');
			router.push('/dashboard');
		} else {
			setError('Invalid credentials');
		}
	};

	const login = () => {
		window.open(
			'https://backend-interview-prap-api.vercel.app/api/auth/google',
			'_self'
		);

	}


	return (
		<main className='flex  justify-center py-8 px-4'>
			<div className='w-full max-w-md bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-8'>
				<h1 className='text-3xl font-bold text-white text-center mb-6'>
					Welcome Back
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

				<div className='my-6 flex items-center justify-between'>
					<hr className='flex-grow border-gray-600' />
					<span className='mx-4 text-gray-400 text-sm'>OR</span>
					<hr className='flex-grow border-gray-600' />
				</div>
				<div className='space-y-4'>
					<button
						onClick={login}
						className='w-full flex items-center justify-center gap-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-medium py-2.5 px-4 rounded-lg transition-all shadow-sm hover:shadow-md active:scale-[0.98]'
					>
						<FcGoogle className='text-2xl' />
						<span>Continue with Google</span>
					</button>

					<button
						onClick={() => {}}
						className='w-full flex items-center justify-center gap-3 bg-gray-950 hover:bg-gray-900 text-white font-medium py-2.5 px-4 rounded-lg transition-all shadow-sm hover:shadow-md active:scale-[0.98]'
					>
						<FaGithub className='text-2xl' />
						<span>Continue with GitHub</span>
					</button>
				</div>

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
