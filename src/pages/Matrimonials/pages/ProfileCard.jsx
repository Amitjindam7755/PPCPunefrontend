import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProfileCard = () => {
  const [formData, setFormData] = useState({
    profile_for: '',
    name: '',
    gender: '',
    dob: '',
    email: '',
    mobile: '',
    religion: '',
    caste: '',
    occupation: '',
    education: '',
    location: '',
    height: '',
    about: ''
  });

  const {t} = useTranslation();

  const [profile_Photo, setProfilePhoto] = useState(null);
  const [janmapatrika, setJanmapatrika] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.keys(formData).forEach(key => {
        data.append(key, formData[key]);
      });
      if (profile_Photo) data.append("profile_photo", profile_Photo);
      if (janmapatrika) data.append("janmapatrika", janmapatrika);

      const response = await axios.post("http://localhost:8081/api/profile/register", data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      alert("Profile Registered Successfully");
      navigate('/loginUser');
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{ backgroundImage: `url('https://img2.shaadi.com/assests/2025/images/homepage/marathi_web_bg.jpg')` }}
    >
      <div className="bg-black bg-opacity-30 p-4 sm:p-8 rounded-lg w-full max-w-lg text-white shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">Create Profile</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 w-full bg-white p-4 sm:p-6 rounded shadow text-black"
        >
          <div>
            <label className="block text-sm mb-1">{t('Create Profile For')}</label>
            <select name="profile_for" value={formData.profile_for} onChange={handleChange} required className="w-full p-2 rounded border">
              <option value="">{t('Profile For')}</option>
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
            <label className="block text-sm mb-1">{t('Full Name')}</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded border"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">{t('Gender')}</label>
            <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 rounded border" required>
              <option value="">{t('Gender')}</option>
              <option value="Male">{t('Male')}</option>
              <option value="Female">{t('Female')}</option>
              <option value="Other">{t('Other')}</option>
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
              className="w-full p-2 rounded border"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">{t('Mobile No.')}</label>
            <div className="flex">
              <span className="p-2 bg-gray-200 text-black rounded-l whitespace-nowrap">+91</span>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full flex-1 p-2 rounded-r border"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">{t('Date of Birth')}</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-2 rounded border"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">{t('Religion')}</label>
            <input
              type="text"
              name="religion"
              placeholder="Religion"
              value={formData.religion}
              onChange={handleChange}
              className="w-full p-2 rounded border"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">{t('Caste')}</label>
            <input
              type="text"
              name="caste"
              placeholder="Caste"
              value={formData.caste}
              onChange={handleChange}
              className="w-full p-2 rounded border"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">{t('Occupation')}</label>
            <input
              type="text"
              name="occupation"
              placeholder="Occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="w-full p-2 rounded border"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">{t('Education')}</label>
            <input
              type="text"
              name="education"
              placeholder="Education"
              value={formData.education}
              onChange={handleChange}
              className="w-full p-2 rounded border"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">{t('Location')}</label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 rounded border"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">{t('Height')}</label>
            <input
              type="text"
              name="height"
              placeholder="Height (e.g. 5'8)"
              value={formData.height}
              onChange={handleChange}
              className="w-full p-2 rounded border"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">{t('Profile Photo')}</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setProfilePhoto(e.target.files[0])}
              className="w-full p-2 rounded border"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">{t('BioData')}</label>
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              onChange={(e) => setJanmapatrika(e.target.files[0])}
              className="w-full p-2 rounded border"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">{t('About Yourself')}</label>
            <textarea
              name="about"
              placeholder="About Yourself"
              value={formData.about}
              onChange={handleChange}
              className="w-full p-2 rounded border"
              rows={4}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded font-semibold transition duration-200"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileCard;
