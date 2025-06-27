'use client';
import { useEffect, useState } from 'react';
import { fetchUser } from '../api/fetchUser';

type User = {
	name: string;
	email: string;
	avatar: string;
	googleId: string;
	_id: string;
};

const useUserHook = () => {
	const [user, setUser] = useState<User | null>(null);
	console.log("🚀 ~ useUserHook.tsx:15 ~ user:", user);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	console.log("🚀 ~ useUserHook.tsx:17 ~ error:", error);

	useEffect(() => {
		const getUser = async () => {
			try {
				const data = await fetchUser();
				setUser(data);
			} catch (err) {
				console.error('Failed to fetch user:', err);
				setError('Failed to fetch user');
			} finally {
				setLoading(false);
			}
		};

		getUser();
	}, []);

	const logout = () => {
    const confirmed = window.confirm('Are you sure you want to logout?');
		if (confirmed) {
			window.open(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/logout`,
				'_self'
			);
		}
    setUser(null);
	};

	return {
		user,
		loading,
		error,
		logout,
	};
};

export default useUserHook;
