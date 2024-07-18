// services/auth.js
import axios from 'axios';

export const login = async (identifier, password) => {
  const response = await axios.post(`${process.env.NEXT_API_URL}/auth/local`, {
    identifier,
    password,
  });
  return response.data;
};

export const register = async (username, email, password) => {
  const response = await axios.post(`${process.env.NEXT_API_URL}/auth/local/register`, {
    username,
    email,
    password,
  });
  return response.data;
};
