'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface User {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
}

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const fetchUser = async () => {
    try {
      const response = await axios.get<User>(`${process.env.NEXT_PUBLIC_API_URL}/auth/profile`, {
        withCredentials: true,
      });
      setUser(response.data);
    } catch (error) {
      console.error('Failed to fetch user:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
        withCredentials: true,
      });
      setUser(null);
      router.push('/login'); // ⬅️ change to your login route
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-md text-white">
        {/* Avatar + Info */}
        <div className="flex flex-col items-center space-y-4">
          {user?.avatar && (
            <div className="relative w-28 h-28">
              <Image
                src={user.avatar}
                alt="User Avatar"
                fill
                sizes="112px"
                className="rounded-full object-cover border-4 border-gray-700 transition-transform hover:scale-105"
              />
            </div>
          )}
          <h2 className="text-2xl font-semibold">{user?.name || 'Loading...'}</h2>
          <p className="text-gray-400">{user?.email || ''}</p>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-600 hover:bg-red-700 transition-colors text-white py-2 rounded-md font-medium"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
