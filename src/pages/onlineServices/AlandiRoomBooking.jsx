// import React, { useState } from 'react';
// import axios from 'axios';

// const AlandiRoomBooking = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     checkIn: '',
//     checkOut: '',
//     guests: 1,
//     roomType: 'standard',
//     specialRequests: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const response = await axios.post('http://localhost:8081/api/bookings', formData, {
//       responseType: 'blob' // to get PDF blob
//     });

//     const blob = new Blob([response.data], { type: 'application/pdf' });
//     const link = document.createElement('a');
//     link.href = window.URL.createObjectURL(blob);
//     link.download = 'booking_confirmation.pdf';
//     link.click();
//     alert("Booking submitted successfully!");


//     setFormData({
//         fullName: '',
//         email: '',
//         phone: '',
//         checkIn: '',
//         checkOut: '',
//         guests: 1,
//         roomType: 'standard',
//         specialRequests: ''
//       });

//   } catch (err) {
//     console.error(err);
//     alert("Submission failed.");
//   }
// };


//   return (
//   <div className='bg-amber-500'>
//     <div className="max-w-xl mx-auto p-5 rounded-2xl shadow-md">
//       <h2 className="text-2xl font-bold text-center mb-6 text-red-900">Room Booking</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="fullName"
//           placeholder="Full Name"
//           value={formData.fullName}
//           onChange={handleChange}
//           required
//           className="w-full p-3 border rounded"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="w-full p-3 border rounded"
//         />
//         <input
//           type="tel"
//           name="phone"
//           placeholder="Mobile Number"
//           value={formData.phone}
//           onChange={handleChange}
//           required
//           className="w-full p-3 border rounded"
//         />
//         <div className="flex flex-col md:flex-row gap-4">
//           <input
//             type="date"
//             name="checkIn"
//             value={formData.checkIn}
//             onChange={handleChange}
//             required
//             className="w-full p-3 border rounded"
//           />
//           <input
//             type="date"
//             name="checkOut"
//             value={formData.checkOut}
//             onChange={handleChange}
//             required
//             className="w-full p-3 border rounded"
//           />
//         </div>
//         <select
//           name="roomType"
//           value={formData.roomType}
//           onChange={handleChange}
//           className="w-full p-3 border rounded"
//         >
//           <option value="standard">Standard Room</option>
//           <option value="deluxe">Deluxe Room</option>
//           <option value="suite">Suite</option>
//         </select>
//         <input
//           type="number"
//           name="guests"
//           min="1"
//           value={formData.guests}
//           onChange={handleChange}
//           className="w-full p-3 border rounded"
//           placeholder="Number of Guests"
//         />
//         <textarea
//           name="specialRequests"
//           placeholder="Any special requests?"
//           value={formData.specialRequests}
//           onChange={handleChange}
//           className="w-full p-3 border rounded"
//           rows="3"
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
//         >
//           Book Now
//         </button>
//       </form>
//     </div>
//   </div>
//   );
// };

// export default AlandiRoomBooking;


import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { bookingSchema } from '../../FormValidation/bookingSchema';

const AlandiRoomBooking = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(bookingSchema)
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:8081/api/bookings', data, {
        responseType: 'blob'
      });

      const blob = new Blob([response.data], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'booking_confirmation.pdf';
      link.click();
      alert('Booking submitted successfully!');
      reset(); // Reset form after successful submission
    } catch (err) {
      console.error(err);
      alert('Submission failed.');
    }
  };

  const {t} = useTranslation();

  return (
    <div>
      <div className="max-w-lg mx-auto p-8 mt-12 rounded-lg shadow-lg bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-6" style={{color: '#5d001e'}}>{t('Room Booking')}</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          <div>
            <input
              type="text"
              placeholder={t('Full Name')}
              {...register('fullName')}
              className="w-full p-3 h-[35px] border rounded"
            />
            <p className="text-red-600 text-sm">{errors.fullName?.message}</p>
          </div>

          <div>
            <input
              type="email"
              placeholder={t('Email Address')}
              {...register('email')}
              className="w-full p-3 h-[35px] border rounded"
            />
            <p className="text-red-600 text-sm">{errors.email?.message}</p>
          </div>

          <div>
            <input
              type="tel"
              placeholder={t('Mobile Number')}
              {...register('phone')}
              className="w-full p-3 h-[35px] border rounded"
            />
            <p className="text-red-600 text-sm">{errors.phone?.message}</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label htmlFor="">{t('Check In')}</label>
              <input
                type="date"
                {...register('checkIn')}
                className="w-full p-3 h-[35px] border rounded"
              />
              <p className="text-red-600 text-sm">{errors.checkIn?.message}</p>
            </div>

            <div className="w-full">
              <label htmlFor="">{t('Check Out')}</label>
              <input
                type="date"
                {...register('checkOut')}
                className="w-full p-3 h-[35px] border rounded"
              />
              <p className="text-red-600 text-sm">{errors.checkOut?.message}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
          <div className='w-full'>
            <select {...register('roomType')} className="w-full p-3 h-[41px] border rounded">
              <option value="">{t('Select Room Type')}</option>
              <option value="standard">Standard Room</option>
              <option value="deluxe">Deluxe Room</option>
              <option value="suite">Suite</option>
            </select>
            <p className="text-red-600 text-sm">{errors.roomType?.message}</p>
          </div>

          <div className='w-full'>
            <input
              type="number"
              min="1"
              placeholder={t('Number of Guests')}
              {...register('guests')}
              className="w-full p-3 h-[35px] border rounded"
            />
            <p className="text-red-600 text-sm">{errors.guests?.message}</p>
          </div>
        </div>

          <div>
            <textarea
              placeholder={t('Any special requests?')}
              {...register('specialRequests')}
              className="w-full p-3 border rounded"
              rows="3"
            />
            <p className="text-red-600 text-sm">{errors.specialRequests?.message}</p>
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 w-[100px] bg-blue-600 text-white p-3 rounded hover:bg-blue-700 h-[38px] text-center"
          >
            {t('Book')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AlandiRoomBooking;

