import axios from 'axios';
axios.defaults.withCredentials = true;

export const fetchUser = async () => {
	try {
		const response = await axios.get(	`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/user`,
			{
				withCredentials: true, // Needed for cookies/session
			}
		);

		console.log("🚀 ~ fetchUser.tsx:8 ~ response:", response.data);

		return response.data;
	} catch (error: unknown) {
		if (axios.isAxiosError(error) && error.response) {
			console.error('❌ Error fetching user:', error.response.data);
			throw new Error(error.response.data?.error || 'Failed to fetch user');
		} else if (error instanceof Error) {
			console.error('❌ Network or unknown error:', error.message);
			throw new Error('Network error');
		} else {
			console.error('❌ An unexpected error occurred');
			throw new Error('An unexpected error occurred');
		}
	}
};
