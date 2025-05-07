'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Dummy user data
const DUMMY_USER = {
  email: 'test@example.com',
  password: '123',
  name: 'Test User'
};

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Check if user is already logged in
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      router.push('/dashboard');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (email === DUMMY_USER.email && password === DUMMY_USER.password) {
        // Store user data in localStorage
        const userData = {
          email: DUMMY_USER.email,
          name: DUMMY_USER.name,
          isAuthenticated: true
        };
        localStorage.setItem('user', JSON.stringify(userData));
        
        // Set a cookie for server-side auth
        document.cookie = `user=${JSON.stringify(userData)}; path=/`;
        
        // Redirect to dashboard
        router.push('/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md flex flex-col items-center">
        {/* Logo Placeholder */}
        <div className="mb-6 flex flex-col items-center">
          {/* Replace src with actual logo path if available */}
          <div className="mb-2">
            <span className=" w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-xl text-white">S</span>
          </div>
          <span className="font-bold text-xl tracking-wide">SAHANA</span>
          <span className="text-xs text-gray-500 -mt-1">system limited</span>
        </div>
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div className="flex flex-col items-start w-full">
            <label htmlFor="email" className="font-semibold mb-1">Email:</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col items-start w-full">
            <label htmlFor="password" className="font-semibold mb-1">Password:</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full mt-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-md transition-colors disabled:opacity-60"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <Link href="/forgot-password" className="mt-6 text-indigo-600 hover:underline text-sm font-medium">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
}