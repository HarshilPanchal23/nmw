import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';


export default function LoginPage() {
  // const router = useRouter();;
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState('');



  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md flex flex-col items-center">
        {/* Logo Placeholder */}
        <div className="mb-6 flex flex-col items-center">
          {/* Replace src with actual logo path if available */}
          <div className="mb-2">
            <span className="inline-block w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-xl text-white">S</span>
          </div>
          <span className="font-bold text-xl tracking-wide">SAHANA</span>
          <span className="text-xs text-gray-500 -mt-1">system limited</span>
        </div>
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <form className="w-full flex flex-col gap-4" >
          <div className="flex flex-col items-start w-full">
            <label htmlFor="email" className="font-semibold mb-1">Email:</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              // value={email}
              // onChange={e => setEmail(e.target.value)}
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
              // value={password}
              // onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-md transition-colors disabled:opacity-60"
            // disabled={loading}
          >
            {/* {loading ? 'Logging in...' : 'Login'} */}
            Login
          </button>
          {/* {error && <div className="text-red-500 text-sm mt-2">{error}</div>} */}
        </form>
        <Link href="/forgot-password" className="mt-6 text-indigo-600 hover:underline text-sm font-medium">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
}