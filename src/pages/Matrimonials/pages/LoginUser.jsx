import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginUser = () => {
  const [form, setForm] = useState({ emailOrMobile: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRedirect = () => {
    navigate('/profilecard'); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.emailOrMobile && form.password) {
      try {
        const res = await axios.post('http://localhost:8081/api/auth/login', form);
        alert(res.data.message);
        navigate('/matches');
      } catch (err) {
        alert(err.response.data.message || 'Login failed');
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://www.matrimony.com/sites/default/files/2023-04/Homepage%20ring%20copy%20%281%29.png')`,
      }}
    >
      <div className="bg-white bg-opacity-30 rounded-lg py-15 px-5 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Catalogue Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="emailOrMobile"
            placeholder="Email or Mobile Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={form.emailOrMobile}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={form.password}
            onChange={handleChange}
            required
          />
          <p className='text-xs text-orange-500'>use free registration password here</p>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition"
          >
            Login
          </button>
          <br />
          <button type="submit" onClick={handleRedirect}  className="w-full bg-orange-500 text-white py-2 rounded font-semibold">
            Create another profile
          </button>
        </form>
        <p className="text-xs text-gray-600 mt-4 text-center">
          By logging in, you agree to our{' '}
          <a href="#" className="text-orange-500 underline">Terms</a> and{' '}
          <a href="#" className="text-orange-500 underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default LoginUser;




