import { register } from '@/server-action/auth';
import {useState} from 'react'
import Cookies from 'js-cookie';

export function SignUp({setIsAuthenticated, setIsRegistering}){
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
  
    const handleRegisterSubmit = async (e) => {
      e.preventDefault();
      try {
        const userData = await register(username, email, password);
        // Store token in cookies
        Cookies.set('jwtToken', userData.jwt, { expires: 1 });
        setIsAuthenticated(true);
      } catch (err) {
        setError('Registration failed');
      }
    };
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create a account</h2>
        </div>
      
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleRegisterSubmit}>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">Username</label>
              <div className="mt-2">
              <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">Email</label>
              <div className="mt-2">

              <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
              </div>
            </div>
      
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              </div>
              <div className="mt-2">
              <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
              </div>
            </div>
      
              <button type="submit" className="mt-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
          </form>
      
          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?
            <a href="#" type="button" onClick={() => setIsRegistering(false)} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign In</a>
          </p>
        </div>
      </div>
    )
}