'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignupPage = () => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!username || !email || !password) {
      setError('All fields are required.');
      return;
    }

    setError('');
    setSuccess(true);

    // Simulate success
    setTimeout(() => {
      console.log('Signup successful:', { username, email, password });
      router.push('/dashboard');
    }, 1000);
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center text-white mb-4">Create an Account</h2>

        {error && <div className="text-red-400 text-sm mb-4">{error}</div>}
        {success && <div className="text-green-400 text-sm mb-4">Account created! Redirecting...</div>}

        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-sm text-center text-gray-400">
          <p>
            Already have an account?{' '}
            <a href="/auth/login" className="text-blue-400 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
