'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface User {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt?: string;
  updatedAt?: string;
}

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const router = useRouter();

  const fetchUser = async () => {
    try {
      console.log('API URL:', process.env.NEXT_PUBLIC_API_URL);
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/profile`, {
        withCredentials: true,
      });
      console.log("🚀 ~ page.tsx:29 ~ response:", response);

      console.log('Profile response:', response.data);

      // 👇 Adjust if your API wraps user in an object
      setUser(response.data.user ?? response.data);
    } catch (error ) {
      console.log("🚀 ~ page.tsx:35 ~ error:", error);
      // console.error('Failed to fetch user:', error.response?.data || error.message);
      setErrorMsg('User not found or not logged in.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
        withCredentials: true,
      });
      setUser(null);
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
  }

  if (errorMsg) {
    return <div className="min-h-screen flex items-center justify-center text-red-500 font-semibold">{errorMsg}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-md text-white">
        <div className="flex flex-col items-center space-y-4">
          {user?.avatar && (
            <div className="relative w-28 h-28">
              <Image src={user.avatar} alt="User Avatar" fill sizes="112px" className="rounded-full object-cover border-4 border-gray-700 transition-transform hover:scale-105" />
            </div>
          )}
          <h2 className="text-2xl font-semibold">{user?.name}</h2>
          <p className="text-gray-400">{user?.email}</p>
        </div>

        <button onClick={handleLogout} className="mt-6 w-full bg-red-600 hover:bg-red-700 transition-colors text-white py-2 rounded-md font-medium">
          Logout
        </button>
      </div>
    </div>
  );
}
