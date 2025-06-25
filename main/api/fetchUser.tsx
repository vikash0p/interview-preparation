export const fetchUser = async () => {
	const res = await fetch('http://localhost:5000/api/auth/user', {
		credentials: 'include', // VERY IMPORTANT for cookies
	});

	if (!res.ok) return null;
	return await res.json();
};
