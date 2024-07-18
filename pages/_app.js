import "@/styles/globals.css";

import Login from './user-login';
import Chat from './chat';
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get('jwtToken');
    setIsAuthenticated(!!token); // Convert to boolean

  }, [isAuthenticated]);

  return (
    <div>
      {isAuthenticated ? <Chat /> : <Login setIsAuthenticated={setIsAuthenticated} />}
    </div>
  );
}

export default App;
