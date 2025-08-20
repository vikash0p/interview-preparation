'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { FaGoogle, FaGithub, FaUser, FaLock, FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: '', password: '' };

    if (!email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, { email, password }, { withCredentials: true });

      console.log(response.data);
      router.push('/profile');
    } catch (error) {
      console.error('Login failed:', error);
      setErrors({
        email: 'Invalid credentials',
        password: 'Invalid credentials',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex  justify-center  p-4">
      <motion.div className="w-full max-w-md" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl  overflow-hidden border border-gray-800">
          {/* Decorative header */}

          <div className="p-8">
            <div className="text-center mb-8">
              <motion.h1 className="text-3xl font-bold text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                Welcome Back
              </motion.h1>
              <motion.p className="text-gray-400 mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                Login to continue to your account
              </motion.p>
            </div>

            <form onSubmit={handleLogin}>
              {/* Email Input */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                    <FaUser />
                  </div>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className={`w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-700'} text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition`}
                    value={email}
                    onChange={e => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                  />
                </div>
                {errors.email && (
                  <motion.p className="mt-1 text-sm text-red-400" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>
                    {errors.email}
                  </motion.p>
                )}
              </div>

              {/* Password Input */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <a href="#" className="text-sm text-indigo-400 hover:text-indigo-300 transition">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                    <FaLock />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className={`w-full pl-10 pr-10 py-3 rounded-lg bg-gray-800 border ${errors.password ? 'border-red-500' : 'border-gray-700'} text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition`}
                    value={password}
                    onChange={e => {
                      setPassword(e.target.value);
                      if (errors.password) setErrors({ ...errors, password: '' });
                    }}
                  />
                  <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-300 transition" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.password && (
                  <motion.p className="mt-1 text-sm text-red-400" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>
                    {errors.password}
                  </motion.p>
                )}
              </div>

              {/* Login Button */}
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={loading} className={`w-full py-3.5 rounded-lg text-white font-semibold transition ${loading ? 'bg-indigo-700 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}>
                {loading ? (
                  <div className="flex items-center justify-center">
                    <FaSpinner className="animate-spin mr-2" />
                    Signing in...
                  </div>
                ) : (
                  'Login'
                )}
              </motion.button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-gray-700"></div>
              <span className="mx-4 text-gray-500 text-sm">OR CONTINUE WITH</span>
              <div className="flex-grow h-px bg-gray-700"></div>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <motion.a whileHover={{ y: -3 }} href={`${process.env.NEXT_PUBLIC_API_URL}/auth/google`} className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition border border-gray-700 text-white">
                <FaGoogle className="text-white" />
                <span>Google</span>
              </motion.a>
              <motion.a whileHover={{ y: -3 }} href={`${process.env.NEXT_PUBLIC_API_URL}/auth/github`} className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition border border-gray-700 text-white">
                <FaGithub className="text-gray-300" />
                <span>GitHub</span>
              </motion.a>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-gray-400 mt-8 text-sm">
              Dont have an account?{' '}
              <a href="/signup" className="text-indigo-400 hover:text-indigo-300 font-medium transition">
                Sign up now
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
