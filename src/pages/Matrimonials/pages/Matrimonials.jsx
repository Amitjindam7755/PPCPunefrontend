import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
// import { useTransition } from 'react';

const Matrimonials = () => {
  const [formData, setFormData] = useState({
    profile_for: '',
    email: '',
    mobile: '',
    password: ''
  });

  const {t} = useTranslation();

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
        const res = await axios.post('http://localhost:8081/api/matrimony/register', formData);
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
    <div className="flex items-start justify-start min-h-screen bg-cover bg-end pl-3" style={{ backgroundImage: `url('https://img2.shaadi.com/assests/2024/images/shaadi-north-desktop.webp')` }}>
      <div className="bg-black bg-opacity-30 p-8 rounded-lg max-w-sm w-full text-white shadow-lg mb-12">
        <h2 className="text-xl font-semibold mb-6">{t('Registration')}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">{t('Create Profile For')}</label>
            <select
              name="profile_for"
              value={formData.profile_for}
              onChange={handleChange}
              className="w-full p-2 rounded text-black border"
              required
            >
              <option value="">{t('Select')}</option>
              <option value="Self">{t('Self')}</option>
              <option value="Son">{t('Son')}</option>
              <option value="Daughter">{t('Daughter')}</option>
              <option value="Brother">{t('Brother')}</option>
              <option value="Sister">{t('Sister')}</option>
              <option value="Relative/Friend">{t('Relative/Friend')}</option>
              <option value="Marriage Bureau">{t('Marriage Bureau')}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">{t('Email Address')}</label>
            <input
              type="email"
              name="email"
              placeholder="someone@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded text-black border"
              required
            />
          </div>
            {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
          <div className='w-full'>
            <label className="block text-sm mb-1">{t('Mobile No.')}</label>
            <div className="flex">
              <span className="p-2 bg-gray-200 text-black rounded-l whitespace-nowrap">+91</span>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="flex-1 p-2 rounded-r text-black min-w-0 border"
                required
              />
            </div>
            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
          </div>

          <div>
            <label className="block text-sm mb-1">{t('Create Password')}</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 rounded text-black border"
              required
            />
          </div>
             {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          <button type="submit" className="w-full text-white py-2 rounded font-semibold" style={{background:'#9A1750'}}>
            {t('Register for Free')}
          </button>
          <br />
          <button type="submit" onClick={handleRedirect}  className="w-full text-white py-2 rounded font-semibold" style={{background:'#9A1750'}}>
            {t('If you are register Login')}
          </button>

          <p className="text-xs text-center mt-2">
            {t('By clicking on')} '{t('Register Free')}', {t('you confirm that you accept the')}
            <span className="text-red-400 cursor-pointer">{t('Terms of Use')}</span>
            {t('and')}
            <span className="text-red-400 cursor-pointer"><a href="/privacy-policy">{t('Privacy Policy')}</a>.</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Matrimonials;


