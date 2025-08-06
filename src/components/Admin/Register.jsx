import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'

const Register = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8081/api/admin/register', form);
    alert('Registered successfully');
  };

  return (
    <div className="register-background bg-amber-400 gap-5 py-5 px-7">
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" className='border p-1 mr-2' onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" className='border p-1' onChange={e => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Register</button>
    </form>
    </div>
  );
};

export default Register;
