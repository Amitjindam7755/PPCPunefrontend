import React, { useState } from 'react';
import axios from 'axios';

const MarkandeyaAbhishek = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    pujaDate: '',
    pujaTime: '',
    pujaType: 'Rudrabhishek',
    gotra: '',
    participants: 1,
    specialRequests: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // Optional: connect to backend
  //     await axios.post('http://localhost:8081/api/abhishek-bookings', formData);
  //     alert("Abhishek Puja booking successful!");

  //     // Reset form
  //     setFormData({
  //       fullName: '',
  //       email: '',
  //       phone: '',
  //       pujaDate: '',
  //       pujaTime: '',
  //       pujaType: 'Rudrabhishek',
  //       participants: 1,
  //       specialRequests: ''
  //     });
  //   } catch (err) {
  //     console.error(err);
  //     alert("Booking failed.");
  //   }
  // };


  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:8081/api/abhishek-bookings', formData, {
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
      pujaType: 'Rudrabhishek',
      gotra: '',
      participants: 1,
      specialRequests: ''
    });
  } catch (err) {
    console.error(err);
    alert("Booking failed.");
  }
};


  return (
    <div className="bg-amber-500 min-h-screen flex items-center justify-center">
      <div className="bg-amber-500 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center text-red-900 mb-6">Markandeya Abhishek Booking</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />
          <input
            type="date"
            name="pujaDate"
            value={formData.pujaDate}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />
          <input
            type="time"
            name="pujaTime"
            value={formData.pujaTime}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />
          <select
            name="pujaType"
            value={formData.pujaType}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          >
            <option value="Rudrabhishek">Rudrabhishek</option>
            <option value="Laghu Rudra">Laghu Rudra</option>
            <option value="Maha Rudra">Maha Rudra</option>
            <option value="Ekadash Rudra">Ekadash Rudra</option>
          </select>
          <input
            type="text"
            name="gotra"
            placeholder="Gotra"
            value={formData.gotra}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />

          <input
            type="number"
            name="participants"
            min="1"
            value={formData.participants}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            placeholder="No. of Participants"
          />
          <textarea
            name="specialRequests"
            placeholder="Special Requests (optional)"
            value={formData.specialRequests}
            onChange={handleChange}
            rows="3"
            className="w-full p-3 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-orange-600 text-white p-3 rounded hover:bg-orange-700"
          >
            Book Puja
          </button>
        </form>
      </div>
    </div>
  );
};

export default MarkandeyaAbhishek;
