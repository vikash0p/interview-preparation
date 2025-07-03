'use client';

import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
	const [email, setEmail] = useState('test4@gmail.com');
	const [password, setPassword] = useState('test@1234');
	interface User {
	id: string;
	email: string;
	name?: string;
}

const [user, setUser] = useState<User | null>(null);
	const [error, setError] = useState<string>('');
	const [loading, setLoading] = useState(false);

	const handleLogin = async () => {
		try {
			setLoading(true);
			setError('');
			setUser(null);

			// Step 1: POST login
			await axios.post(
				'https://backendauthentication.vercel.app/api/auth/login',
				{ email, password },
				{ withCredentials: true }
			);

			// Step 2: GET user
			const res = await axios.get(
				'https://backendauthentication.vercel.app/api/auth/user',
				{ withCredentials: true }
			);

			setUser(res.data.user);
		} catch (err: unknown) {
			if (axios.isAxiosError(err)) {
				setError(err.response?.data?.message || 'Login failed');
			} else {
				setError('An unexpected error occurred');
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4'>
			<div className='bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4'>
				<h1 className='text-2xl font-semibold text-center'>Login</h1>

				<input
					type='email'
					placeholder='Email'
					className='w-full px-4 py-2 border rounded-md'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<input
					type='password'
					placeholder='Password'
					className='w-full px-4 py-2 border rounded-md'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<button
					onClick={handleLogin}
					disabled={loading}
					className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400'
				>
					{loading ? 'Logging in...' : 'Login'}
				</button>

				{error && <p className='text-red-500 text-center'>{error}</p>}

				{user && (
					<div className='p-4 mt-4 border rounded-md bg-green-100'>
						<p>
							<strong>Name:</strong> {user.name}
						</p>
						<p>
							<strong>Email:</strong> {user.email}
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Login;
