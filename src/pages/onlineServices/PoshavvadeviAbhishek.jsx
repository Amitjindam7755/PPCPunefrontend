import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SendHorizontal } from 'lucide-react';
import axios from 'axios';

const PoshavvadeviAbhishek = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    pujaDate: '',
    pujaTime: '',
    pujaType: '',
    participants: 1,
    specialRequests: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:8081/api/poshavvadevi-bookings', formData, {
      responseType: 'blob'
    });

    const blob = new Blob([response.data], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'abhishek_booking_confirmation.pdf';
    link.click();

    alert("Booking successful!");

    setFormData({
      fullName: '',
      email: '',
      phone: '',
      pujaDate: '',
      pujaTime: '',
      pujaType: '',
      participants: 1,
      specialRequests: ''
    });
  } catch (err) {
    console.error(err);
    alert("Booking failed.");
  }
};

const {t} = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-50 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center mb-6" style={{color: '#5d001e'}}>{t('Poshavvadevi Abhishek Booking')}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder={t('Full Name')}
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full p-3 h-[35px] border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder={t('Email Address')}
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 h-[35px] border rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder={t('Mobile Number')}
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 h-[35px] border rounded"
          />
          <div>
            <label htmlFor="">{t('Date')}</label>
          <input
            type="date"
            name="pujaDate"
            value={formData.pujaDate}
            onChange={handleChange}
            required
            className="w-full p-3 h-[35px] border rounded"
          />
          </div>
          <div>
            <label htmlFor="">{t('Time')}</label>
          <input
            type="time"
            name="pujaTime"
            value={formData.pujaTime}
            onChange={handleChange}
            required
            className="w-full p-3 h-[35px] border rounded"
          />
          </div>
          <input
            type='text'
            name="pujaType"
            placeholder={t('Puja Type')}
            value={formData.pujaType}
            onChange={handleChange}
            className="w-full p-3 h-[35px] border rounded"
          />
          <div>
            <label htmlFor="">{t('No. of Participants')}</label>
          <input
            type="number"
            name="participants"
            min="1"
            value={formData.participants}
            onChange={handleChange}
            className="w-full p-3 h-[35px] border rounded"
          />
          </div>
          <textarea
            name="specialRequests"
            placeholder={t('Special Requests (optional)')}
            value={formData.specialRequests}
            onChange={handleChange}
            rows="3"
            className="w-full p-3 border rounded"
          />
          <button
            type="submit"
            className="flex items-center text-center gap-2 w-[100px] h-[40px] text-white p-3 rounded" style={{background:'#9A1750'}}
          >
            {t('Book')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PoshavvadeviAbhishek;
