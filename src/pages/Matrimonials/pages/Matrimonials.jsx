import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Matrimonials = () => {
  const [formData, setFormData] = useState({
    profile_for: '',
    email: '',
    mobile: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
     const newErrors = {};

     if(!formData.profile_for) newErrors.profile_for = 'Please select profile type';
     if(!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email address';
     if(!formData.mobile || !/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Mobile number must be 10 digits';
     if(!formData.password || formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleRedirect = () => {
    navigate('/loginUser'); 
  };


  const handleChange = e => {
    setFormData(prev => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(validate()) {
       try {
        // const res = await axios.post('http://localhost:8081/api/matrimony/register', formData);
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/matrimony/register`, formData);
        console.log(res.data); // Later: Send to backend
        navigate("/profilecard")
       } catch (error) {
        if(error.response?.status === 409) {
          alert("User already exists!");
        }else{
          alert("Registration failed. Try again.");
        }
       }
        
      } 
  };

  return (
    <div className="flex items-end justify-end min-h-screen bg-cover bg-center " style={{ backgroundImage: `url('https://img2.shaadi.com/assests/2024/images/shaadi-north-desktop.webp')` }}>
      <div className="bg-black bg-opacity-30 p-8 rounded-lg max-w-sm w-full text-white shadow-lg">
        <h2 className="text-xl font-semibold mb-6">Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Create Profile For</label>
            <select
              name="profile_for"
              value={formData.profile_for}
              onChange={handleChange}
              className="w-full p-2 rounded text-black"
              required
            >
              <option value="">Select</option>
              <option value="Self">Self</option>
              <option value="Son">Son</option>
              <option value="Daughter">Daughter</option>
              <option value="Brother">Brother</option>
              <option value="Sister">Sister</option>
              <option value="Relative/Friend">Relative/Friend</option>
              <option value="Marriage Bureau">Marriage Bureau</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="someone@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded text-black"
              required
            />
          </div>
            {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
          <div className='w-full'>
            <label className="block text-sm mb-1">Mobile No.</label>
            <div className="flex">
              <span className="p-2 bg-gray-200 text-black rounded-l whitespace-nowrap">+91</span>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="flex-1 p-2 rounded-r text-black min-w-0"
                required
              />
            </div>
            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
          </div>

          <div>
            <label className="block text-sm mb-1">Create Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 rounded text-black"
              required
            />
          </div>
             {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded font-semibold">
            Register for Free
          </button>
          <br />
          <button type="submit" onClick={handleRedirect}  className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded font-semibold">
            If you are register Login
          </button>

          <p className="text-xs text-center mt-2">
            By clicking on 'Register Free', you confirm that you accept the
            <span className="text-red-400 cursor-pointer"> Terms of Use </span>
            and
            <span className="text-red-400 cursor-pointer"> Privacy Policy</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Matrimonials;


