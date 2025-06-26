export const fetchUser = async () => {
	const res = await fetch('https://backend-interview-prap-api.vercel.app/api/auth/user', {
		credentials: 'include', // VERY IMPORTANT for cookies
	});

	if (!res.ok) return null;
	return await res.json();
};
