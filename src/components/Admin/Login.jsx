import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // const res = await axios.post('http://localhost:8081/api/admin/login', form);
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/admin/login`, form);
    localStorage.setItem('token', res.data.token);
    navigate('/admin/dashboard');
  };

  return (
    <div className="bg-amber-500 gap-5 py-5 px-7">
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Login</button>
    </form>
    </div>
  );
};

export default Login;


