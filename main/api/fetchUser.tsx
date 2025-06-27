import axios from 'axios';

export const fetchUser = async () => {
	try {
		const response = await axios.get(
			'https://authwithgoogle.vercel.app/auth/user',
			{
				withCredentials: true, // Needed for cookies/session
			}
		);

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
