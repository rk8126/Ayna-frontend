import { useState } from 'react';
import { SignIn } from '@/components/login';
import { SignUp } from '@/components/register';

export default function Login({setIsAuthenticated}) {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="w-full max-w-md p-4 bg-white rounded shadow-md">
        {isRegistering ? (
            <SignUp setIsAuthenticated={setIsAuthenticated} setIsRegistering={setIsRegistering}/>
        ) : <SignIn setIsAuthenticated={setIsAuthenticated} setIsRegistering={setIsRegistering}/>}
      </div>
    </div>
  );
}
