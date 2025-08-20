import { object, string, minLength, email as emailValidator, pipe, InferInput } from 'valibot';

export const loginSchema = object({
  email: pipe(string(), minLength(1, 'Email is required'), emailValidator('Please enter a valid email')),
  password: pipe(string(), minLength(6, 'Password must be at least 6 characters')),
});

export type LoginForm = InferInput<typeof loginSchema>;