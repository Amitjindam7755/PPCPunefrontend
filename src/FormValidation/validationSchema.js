// // src/validationSchema.js
// import * as yup from 'yup';

// const memberSchema = yup.object().shape({
//   name: yup.string().required('Name is required'),
//   fatherName: yup.string().required('Father\'s name is required'),
//   motherName: yup.string().required('Mother\'s name is required'),
//   surname: yup.string().required('Surname is required'),
//   dob: yup.date().required('Date of birth is required'),
//   age: yup.number().typeError('Age must be a number').positive().integer().required('Age is required'),
//   sex: yup.string().required('Sex is required'),
//   education: yup.string().required('Education is required'),
//   occupation: yup.string().required('Occupation is required'),
//   status: yup.string().required('Status is required'),
//   workAddress: yup.string().required('Work address is required'),
//   whatsapp: yup.string().required('WhatsApp number is required').matches(/^\d{10}$/, 'Enter 10-digit number'),
//   area: yup.string().required('Area is required'),
//   relation: yup.string().required('Relation is required'),
// });

// export const schema = yup.object().shape({
//   head: yup.object().shape({
//     firstName: yup.string().required('First name is required'),
//     middleName: yup.string().required('Middle name is required'),
//     lastName: yup.string().required('Last name is required'),
//     dob: yup.date().required('Date of birth is required'),
//     age: yup.number().typeError('Age must be a number').positive().integer().required('Age is required'),
//     sex: yup.string().required('Sex is required'),
//     education: yup.string().required('Education is required'),
//     occupation: yup.string().required('Occupation is required'),
//     status: yup.string().required('Status is required'),
//     workAddress: yup.string().required('Work address is required'),
//     whatsapp: yup.string().required('WhatsApp number is required').matches(/^\d{10}$/, 'Enter 10-digit number'),
//     area: yup.string().required('Area is required'),
//     fatherName: yup.string().required('Father name is required'),
//     motherName: yup.string().required('Mother name is required'),
//     surname: yup.string().required('Surname is required'),
//   }),
//   familyMembers: yup.array().of(memberSchema).min(1, 'At least one member is required'),
// });






import * as yup from 'yup';

// Emoji detection regex
const noEmojiRegex = /^[^\u{1F600}-\u{1F6FF}\u{1F300}-\u{1F5FF}\u{1F1E6}-\u{1F1FF}]*$/u;
const onlyLettersRegex = /^[A-Za-z\s]*$/;
const onlyNumbersRegex = /^[0-9]+$/;

// Member schema
const memberSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(onlyLettersRegex, 'Only letters are allowed')
    .matches(noEmojiRegex, 'Emojis are not allowed'),

  fatherName: yup
    .string()
    .required("Father's name is required")
    .matches(onlyLettersRegex, 'Only letters are allowed')
    .matches(noEmojiRegex, 'Emojis are not allowed'),

  motherName: yup
    .string()
    .required("Mother's name is required")
    .matches(onlyLettersRegex, 'Only letters are allowed')
    .matches(noEmojiRegex, 'Emojis are not allowed'),

  surname: yup
    .string()
    .required('Surname is required')
    .matches(onlyLettersRegex, 'Only letters are allowed')
    .matches(noEmojiRegex, 'Emojis are not allowed'),

  dob: yup.date().required('Date of birth is required'),

  age: yup
    .string()
    .required('Age is required')
    .matches(onlyNumbersRegex, 'Only numbers allowed')
    .matches(noEmojiRegex, 'Emojis are not allowed'),

  sex: yup.string().required('Sex is required'),
  education: yup
    .string()
    .required('Education is required')
    .matches(noEmojiRegex, 'Emojis are not allowed'),

  occupation: yup
    .string()
    .required('Occupation is required')
    .matches(noEmojiRegex, 'Emojis are not allowed'),

  status: yup
    .string()
    .required('Status is required')
    .matches(noEmojiRegex, 'Emojis are not allowed'),

  workAddress: yup
    .string()
    .required('Work address is required')
    .matches(noEmojiRegex, 'Emojis are not allowed'),

  whatsapp: yup
    .string()
    .required('WhatsApp number is required')
    .matches(/^\d{10}$/, 'Enter 10-digit number')
    .matches(noEmojiRegex, 'Emojis are not allowed'),

  area: yup
    .string()
    .required('Area is required')
    .matches(noEmojiRegex, 'Emojis are not allowed'),

  relation: yup
    .string()
    .required('Relation is required')
    .matches(noEmojiRegex, 'Emojis are not allowed'),
});

// Head of family schema
const headSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is required')
    .matches(onlyLettersRegex, 'Only letters are allowed')
    .matches(noEmojiRegex, 'Emojis are not allowed'),

  middleName: yup
    .string()
    .required('Middle name is required')
    .matches(onlyLettersRegex, 'Only letters are allowed')
    .matches(noEmojiRegex, 'Emojis are not allowed'),

  lastName: yup
    .string()
    .required('Last name is required')
    .matches(onlyLettersRegex, 'Only letters are allowed')
    .matches(noEmojiRegex, 'Emojis are not allowed'),

  dob: yup.date().required('Date of birth is required'),

  age: yup
    .string()
    .required('Age is required')
    .matches(onlyNumbersRegex, 'Only numbers allowed')
    .matches(noEmojiRegex, 'Emojis are not allowed'),

  sex: yup.string().required('Sex is required'),

  education: yup
    .string()
    .required('Education is required')
    .matches(noEmojiRegex, 'Emojis are not allowed'),

  occupation: yup
    .string()
    .required('Occupation is required')
    .matches(noEmojiRegex, 'Emojis are not allowed'),

  status: yup
    .string()
    .required('Status is required')
    .matches(noEmojiRegex, 'Emojis are not allowed'),

  workAddress: yup
    .string()
    .required('Work address is required')
    .matches(noEmojiRegex, 'Emojis are not allowed'),

  whatsapp: yup
    .string()
    .required('WhatsApp number is required')
    .matches(/^\d{10}$/, 'Enter 10-digit number')
    .matches(noEmojiRegex, 'Emojis are not allowed'),

  area: yup
    .string()
    .required('Area is required')
    .matches(noEmojiRegex, 'Emojis are not allowed'),

  fatherName: yup
    .string()
    .required('Father name is required')
    .matches(onlyLettersRegex, 'Only letters are allowed')
    .matches(noEmojiRegex, 'Emojis are not allowed'),

  motherName: yup
    .string()
    .required('Mother name is required')
    .matches(onlyLettersRegex, 'Only letters are allowed')
    .matches(noEmojiRegex, 'Emojis are not allowed'),

  surname: yup
    .string()
    .required('Surname is required')
    .matches(onlyLettersRegex, 'Only letters are allowed')
    .matches(noEmojiRegex, 'Emojis are not allowed'),
});

// Final schema
export const schema = yup.object().shape({
  head: headSchema,
  familyMembers: yup.array().of(memberSchema).notRequired(),
  // min(1, 'At least one member is required'),
});
