import React, { useState } from 'react';
import { register } from '../api';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(username, email, password, isAdmin);
      alert('Registration successful');
    } catch (error) {
      console.error('Registration failed:', error);
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
      <br/>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br/>
      <label>
        Admin
        <input
          type="checkbox"
          checked={isAdmin}
          onChange={(e) => setIsAdmin(e.target.checked)}
        />
      </label>
      <br/>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;


