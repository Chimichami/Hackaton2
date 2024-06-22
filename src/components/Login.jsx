import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import { login } from '../api';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthToken } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(username, password);
      setAuthToken(response.token);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
