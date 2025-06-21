import * as yup from 'yup';

export const bookingSchema = yup.object().shape({
  fullName: yup.string().required('Full name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phone: yup.string()
    .matches(/^[0-9]{10}$/, 'Phone must be 10 digits')
    .required('Phone number is required'),
  checkIn: yup.date().required('Check-in date is required'),
  checkOut: yup
    .date()
    .min(yup.ref('checkIn'), 'Check-out must be after check-in')
    .required('Check-out date is required'),
  guests: yup.number().min(1, 'At least 1 guest').required('Number of guests is required'),
  roomType: yup.string().required('Room type is required'),
  specialRequests: yup.string().max(500, 'Maximum 500 characters allowed')
});
