export const fetchUser = async () => {
	try {
		const res = await fetch(
			'https://backend-interview-prap-api.vercel.app/api/auth/user',
			{
				credentials: 'include', // VERY IMPORTANT for cookies
			}
		);

		if (!res.ok) {
			const errorText = await res.text(); // to log response body if any
			throw new Error(
				`Failed to fetch user: ${res.status} ${res.statusText} - ${errorText}`
			);
		}

		return await res.json();
	} catch (error) {
		console.error('❌ Error fetching user:', error);
		throw error; // rethrow so caller can handle it too
	}
};
