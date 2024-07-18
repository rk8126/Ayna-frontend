// components/Chat.js
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Navbar } from '@/components/navbar';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const token = Cookies.get('jwtToken') // Get the token from cache
    if (token) {
      const socket = new WebSocket(`ws://localhost:1337?token=${token}`); // Include JWT in the URL
      setWs(socket);

      socket.onmessage = async (event) => {
        const message = await event.data.text();
        setMessages((prevMessages) => [...prevMessages, { text: message, sender: 'server' }]);
      };

      return () => {
        socket.close();
      };
    }
  }, []);

  const sendMessage = () => {
    if (ws && input.trim() !== '') {
      ws.send(input);
      setMessages((prevMessages) => [...prevMessages, { text: input, sender: 'user' }]);
      setInput('');
    }
  };

  return (
    <div className="min-h-screen">
    <Navbar/>
    <div className="flex flex-col items-center justify-center mt-16 pt-10">
      <div className="w-full max-w-md p-4 bg-white rounded-md shadow-md">
        <div className="h-80 overflow-y-scroll mb-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded ${
                msg.sender === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder='type here...'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 border rounded-md"
          />
          <button onClick={sendMessage} className="ml-2 py-2 px-4 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Send
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
