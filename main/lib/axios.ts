import axios from 'axios';

const api = axios.create({
	baseURL: 'https://authwithgoogle.vercel.app/auth',
	withCredentials: true, // for session cookies
});

export default api;
