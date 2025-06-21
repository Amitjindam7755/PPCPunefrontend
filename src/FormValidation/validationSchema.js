// src/validationSchema.js
import * as yup from 'yup';

const memberSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  fatherName: yup.string().required('Father\'s name is required'),
  motherName: yup.string().required('Mother\'s name is required'),
  surname: yup.string().required('Surname is required'),
  dob: yup.date().required('Date of birth is required'),
  age: yup.number().typeError('Age must be a number').positive().integer().required('Age is required'),
  sex: yup.string().required('Sex is required'),
  education: yup.string().required('Education is required'),
  occupation: yup.string().required('Occupation is required'),
  status: yup.string().required('Status is required'),
  workAddress: yup.string().required('Work address is required'),
  whatsapp: yup.string().required('WhatsApp number is required').matches(/^\d{10}$/, 'Enter 10-digit number'),
  area: yup.string().required('Area is required'),
  relation: yup.string().required('Relation is required'),
});

export const schema = yup.object().shape({
  head: yup.object().shape({
    firstName: yup.string().required('First name is required'),
    middleName: yup.string().required('Middle name is required'),
    lastName: yup.string().required('Last name is required'),
    dob: yup.date().required('Date of birth is required'),
    age: yup.number().typeError('Age must be a number').positive().integer().required('Age is required'),
    sex: yup.string().required('Sex is required'),
    education: yup.string().required('Education is required'),
    occupation: yup.string().required('Occupation is required'),
    status: yup.string().required('Status is required'),
    workAddress: yup.string().required('Work address is required'),
    whatsapp: yup.string().required('WhatsApp number is required').matches(/^\d{10}$/, 'Enter 10-digit number'),
    area: yup.string().required('Area is required'),
    fatherName: yup.string().required('Father name is required'),
    motherName: yup.string().required('Mother name is required'),
    surname: yup.string().required('Surname is required'),
  }),
  familyMembers: yup.array().of(memberSchema).min(1, 'At least one member is required'),
});
