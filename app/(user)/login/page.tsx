'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState('test1@gmail.com');
  const [password, setPassword] = useState('test@123');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        { email, password },
        { withCredentials: true }
      );
      console.log(response.data);
      router.push('/profile');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  px-4">
      <div className="bg-gray-800 p-6 rounded-md shadow-md w-full max-w-md space-y-4">
        <h1 className="text-2xl font-semibold text-center">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-md bg-gray-900"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-md bg-gray-900"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
        >
          Login
        </button>

        <div className="flex flex-col gap-2">
          <a href={`${process.env.NEXT_PUBLIC_API_URL}/auth/google`}>login with google</a>
          <a href={`${process.env.NEXT_PUBLIC_API_URL}/auth/github`}>login with github</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
