import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export function Navbar() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    // Remove token from cookies
    Cookies.remove('jwtToken');
    router.refresh();
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <a href="#" className="text-white text-lg font-bold">Live Chatbot</a>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button onClick={handleClick} type="button" className="relative rounded-full p-1 text-white">
              Sign out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
