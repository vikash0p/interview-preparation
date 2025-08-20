// app/actions.ts
'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export async function loginAction(prevState: unknown, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // Validation
  const errors: { email?: string; password?: string } = {};

  if (!email) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Please enter a valid email';

  if (!password) errors.password = 'Password is required';
  else if (password.length < 6) errors.password = 'Password must be at least 6 characters';

  if (Object.keys(errors).length > 0) return { errors };

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      credentials: 'include',
    });

    if (response.ok) {
      const data = await response.json();
      cookies().set('session', data.token, {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // One week
        path: '/',
      });

      // IMPORTANT: Return before redirect to avoid error
      return redirect('/profile');
    } else {
      const errorData = await response.json();
      return {
        errors: {
          email: errorData.message || 'Invalid credentials',
          password: errorData.message || 'Invalid credentials',
        },
      };
    }
  } catch (error) {
    console.error('Login failed:', error);
    return {
      errors: {
        email: 'Something went wrong',
        password: 'Something went wrong',
      },
    };
  }
}
