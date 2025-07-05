import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   const res = await axios.post('http://localhost:8081/api/admin/login', form);
  //   localStorage.setItem('token', res.data.token);
  //   navigate('/admin/dashboard');
  // };

  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:8081/api/admin/login', form);
    localStorage.setItem('token', res.data.token);
    navigate('/admin/dashboard');
  } catch (err) {
    if (err.response && err.response.status === 401) {
      alert('Invalid email or password');
    } else {
      alert('Login failed. Please try again later.');
    }
    console.error('Login error:', err);
  }
};


  return (
    <div className="gap-5 py-5 px-7 border">
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="Email" className='border p-1 mr-2' onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" className='border p-1' onChange={e => setForm({ ...form, password: e.target.value })} />
      <button type="submit" className='w-20' style={{background: '#5d001e'}}>Login</button>
    </form>
    </div>
  );
};

export default Login;


