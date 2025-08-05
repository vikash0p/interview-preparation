'use client';
import { useState } from 'react';

type FormState = {
  name: string;
  email: string;
  password: string;
  avatar: string;
};

export default function RegisterPage() {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    password: '',
    avatar: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Validation
    if (!formState.name || !formState.email || !formState.password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    if (formState.password.length < 6) {
      setError('Password must be at least 6 characters');
      setIsLoading(false);
      return;
    }
  };

  return (
    <main className="flex  justify-center  py-8 px-4">
      <div className="w-full max-w-md bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-white text-center mb-6">Create Your Account</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formState.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label htmlFor="avatar" className="block text-sm text-gray-300 mb-1">
              Avatar URL
            </label>
            <input
              type="text"
              id="avatar"
              name="avatar"
              value={formState.avatar}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="https://example.com/avatar.jpg"
            />
          </div>

          {error && <p className="text-red-400 text-sm font-medium text-center">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-semibold py-2 px-4 rounded-md flex items-center justify-center ${
              isLoading ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Creating Account...
              </>
            ) : (
              'Register'
            )}
          </button>
        </form>

        <div className="my-6 flex items-center justify-between">
          <hr className="flex-grow border-gray-600" />
          <span className="mx-4 text-gray-400 text-sm">OR</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        <p className="text-sm text-gray-400 text-center mt-6">
          Already have an account?{' '}
          <a href="/login" className="text-indigo-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </main>
  );
}
