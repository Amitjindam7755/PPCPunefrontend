// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import axios from 'axios';


// const MemberRegistration = () => {
//   const [familyMembers, setFamilyMembers] = useState([
//     { name: '', fatherName: '', motherName: '', surname: '', dob: null, age: '', sex: '', education: '', occupation: '', status: '', workAddress: '', whatsapp: '', area: '', relation: '' }
//   ]);

//   const [head, setHead] = useState({
//     firstName: '',
//     middleName: '',
//     lastName: '',
//     dob: null,
//     age: '',
//     sex: '',
//     education: '',
//     occupation: '',
//     status: '',
//     workAddress: '',
//     whatsapp: '',
//     area: '',
//     fatherName: '',
//     motherName: '',
//     surname: ''
//   });

//   const handleHeadChange = (e) => {
//     setHead({ ...head, [e.target.name]: e.target.value });
//   };

//   const handleHeadDOB = (date) => {
//     setHead({ ...head, dob: date });
//   };

//   const handleMemberChange = (index, e) => {
//     const updatedMembers = [...familyMembers];
//     updatedMembers[index][e.target.name] = e.target.value;
//     setFamilyMembers(updatedMembers);
//   };

//   const handleMemberDOB = (index, date) => {
//     const updated = [...familyMembers];
//     updated[index].dob = date;
//     setFamilyMembers(updated);
//   };

//   const addFamilyMember = () => {
//     setFamilyMembers([
//       ...familyMembers,
//       { name: '', fatherName: '', motherName: '', surname: '', dob: null, age: '', sex: '', education: '', occupation: '', status: '', workAddress: '', whatsapp: '', area: '', relation: '' }
//     ]);
//   };

//   const deleteFamilyMember = (index) => {
//     const updatedMembers = familyMembers.filter((_, i) => i !== index);
//     setFamilyMembers(updatedMembers);
//   };

//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   const formData = { head, familyMembers };

//   try {
//     const res = await axios.post('http://localhost:8081/api/members/register', formData);
//     alert('Family registered successfully!');
//   } catch (err) {
//     console.error('Submission error:', err);
//     alert('Something went wrong!');
//   }
// };


//   return (
//     <div className="p-6 max-w-7xl mx-auto bg-amber-500">
//       <h1 className="flex items-center justify-center text-2xl py2 font-bold text-red-800">Family Registration Form</h1>

//       {/* Head of Family Section */}
//       <h3 className='text-xl py2 font-semibold text-red-800'>Head of the member</h3>
//       <div className="grid md:grid-cols-3 gap-4 mb-6">
//         {[
//           ['First Name', 'firstName'],
//           ['Middle Name', 'middleName'],
//           ['Last Name', 'lastName']
//         ].map(([label, name]) => (
//           <div key={name}>
//             <label className="block text-sm font-medium">{label}</label>
//             <input
//               type="text"
//               name={name}
//               value={head[name]}
//               onChange={handleHeadChange}
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//             />
//           </div>
//         ))}

//         <div>
//           <label className="block text-sm font-medium">Date of Birth</label>
//           <DatePicker
//             selected={head.dob}
//             onChange={handleHeadDOB}
//             className="w-full p-2 border border-gray-300 rounded mt-1"
//             dateFormat="yyyy-MM-dd"
//             placeholderText="Select Date"
//           />
//         </div>

//         {[
//           ['Age', 'age'],
//           ['Sex', 'sex'],
//           ['Education', 'education'],
//           ['Occupation', 'occupation'],
//           ['Status', 'status'],
//           ['Work Address', 'workAddress'],
//           ['WhatsApp Number', 'whatsapp'],
//           ['Residential Area', 'area'],
//           ['Father\'s Name', 'fatherName'],
//           ['Mother\'s Name', 'motherName'],
//           ['Surname', 'surname']
//         ].map(([label, name]) => (
//           <div key={name}>
//             <label className="block text-sm font-medium">{label}</label>
//             <input
//               type="text"
//               name={name}
//               value={head[name]}
//               onChange={handleHeadChange}
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//             />
//           </div>
//         ))}
//       </div>

//       <h2 className="text-xl font-semibold mt-8 mb-4">Family Members</h2>

//       {familyMembers.map((member, index) => (
//         <div key={index} className="border p-4 rounded mb-4 bg-white shadow-md">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-lg font-semibold">Member {index + 1}</h3>
//             <button
//               onClick={() => deleteFamilyMember(index)}
//               className="text-red-600 hover:text-red-800 font-medium"
//             >
//               Delete
//             </button>
//           </div>
//           <div className="grid md:grid-cols-3 gap-4">
//             {[
//               ['Name', 'name'],
//               ['Father\'s Name', 'fatherName'],
//               ['Mother\'s Name', 'motherName'],
//               ['Surname', 'surname']
//             ].map(([label, name]) => (
//               <div key={name}>
//                 <label className="block text-sm font-medium">{label}</label>
//                 <input
//                   type="text"
//                   name={name}
//                   value={member[name]}
//                   onChange={(e) => handleMemberChange(index, e)}
//                   className="w-full p-2 border border-gray-300 rounded mt-1"
//                 />
//               </div>
//             ))}

//             <div>
//               <label className="block text-sm font-medium">Date of Birth</label>
//               <DatePicker
//                 selected={member.dob}
//                 onChange={(date) => handleMemberDOB(index, date)}
//                 className="w-full p-2 border border-gray-300 rounded mt-1"
//                 dateFormat="yyyy-MM-dd"
//                 placeholderText="Select Date"
//               />
//             </div>

//             {[
//               ['Age', 'age'],
//               ['Sex', 'sex'],
//               ['Education', 'education'],
//               ['Occupation', 'occupation'],
//               ['Status', 'status'],
//               ['Work Address', 'workAddress'],
//               ['WhatsApp', 'whatsapp'],
//               ['Residential Area', 'area'],
//               ['Relation with Head', 'relation']
//             ].map(([label, name]) => (
//               <div key={name}>
//                 <label className="block text-sm font-medium">{label}</label>
//                 <input
//                   type="text"
//                   name={name}
//                   value={member[name]}
//                   onChange={(e) => handleMemberChange(index, e)}
//                   className="w-full p-2 border border-gray-300 rounded mt-1"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}

//       {/* Add Member + Submit Buttons */}
//       <div className="flex gap-4 mt-6">
//         <button
//           type="button"
//           onClick={addFamilyMember}
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Add Member
//         </button>
//         <button
//           type="submit"
//           onClick={handleSubmit}
//           className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MemberRegistration;




import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../FormValidation/validationSchema';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

const MemberRegistration = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      head: {
        firstName: '',
        middleName: '',
        lastName: '',
        dob: null,
        age: '',
        sex: '',
        education: '',
        occupation: '',
        status: '',
        workAddress: '',
        whatsapp: '',
        area: '',
        fatherName: '',
        motherName: '',
        surname: '',
      },
      familyMembers: [{
        name: '',
        fatherName: '',
        motherName: '',
        surname: '',
        dob: null,
        age: '',
        sex: '',
        education: '',
        occupation: '',
        status: '',
        workAddress: '',
        whatsapp: '',
        area: '',
        relation: '',
      }]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "familyMembers"
  });

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:8081/api/members/register', data);
      alert('Family registered successfully!');
    } catch (error) {
      console.error(error);
      alert('Submission failed');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 sm:p-6 max-w-5xl mx-auto bg-gray-50 rounded shadow">

      <h1 className="text-2xl font-bold text-center mb-4 text-red-800">Family Registration Form</h1>
      <h2 className="text-xl font-semibold text-red-800">Head of the Family</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[
          ['First Name', 'firstName'],
          ['Middle Name', 'middleName'],
          ['Last Name', 'lastName'],
          ['Age', 'age'],
          ['Sex', 'sex'],
          ['Education', 'education'],
          ['Occupation', 'occupation'],
          ['Status', 'status'],
          ['Work Address', 'workAddress'],
          ['WhatsApp Number', 'whatsapp'],
          ['Residential Area', 'area'],
          ['Father\'s Name', 'fatherName'],
          ['Mother\'s Name', 'motherName'],
          ['Surname', 'surname']
        ].map(([label, name]) => (
          <div key={name}>
            <label className="block text-sm font-medium">{label}</label>
            <input {...register(`head.${name}`)} className="w-full p-2 border border-gray-300 rounded" />
            {errors.head?.[name] && <p className="text-red-600 text-sm">{errors.head[name].message}</p>}
          </div>
        ))}

        <div>
          <label className="block text-sm font-medium">Date of Birth</label>
          <Controller
            control={control}
            name="head.dob"
            render={({ field }) => (
              <DatePicker
                placeholderText="Select Date"
                className="w-full p-2 border border-gray-300 rounded"
                selected={field.value}
                onChange={field.onChange}
                dateFormat="yyyy-MM-dd"
              />
            )}
          />
          {errors.head?.dob && <p className="text-red-600 text-sm">{errors.head.dob.message}</p>}
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">Family Members</h2>
      {fields.map((item, index) => (
        <div key={item.id} className="border bg-white p-4 rounded mb-4">
          <div className="flex justify-between">
            <h3 className="font-semibold">Member {index + 1}</h3>
            <button type="button" onClick={() => remove(index)} className="text-white w-[70px] h-[30px] mb-5">Delete</button>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              ['Name', 'name'],
              ['Father\'s Name', 'fatherName'],
              ['Mother\'s Name', 'motherName'],
              ['Surname', 'surname'],
              ['Age', 'age'],
              ['Sex', 'sex'],
              ['Education', 'education'],
              ['Occupation', 'occupation'],
              ['Status', 'status'],
              ['Work Address', 'workAddress'],
              ['WhatsApp', 'whatsapp'],
              ['Residential Area', 'area'],
              ['Relation with Head', 'relation']
            ].map(([label, name]) => (
              <div key={name}>
                <label className="block text-sm font-medium">{label}</label>
                <input {...register(`familyMembers.${index}.${name}`)} className="w-full p-2 border border-gray-300 rounded" />
                {errors.familyMembers?.[index]?.[name] && <p className="text-red-600 text-sm">{errors.familyMembers[index][name].message}</p>}
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium">Date of Birth</label>
              <Controller
                control={control}
                name={`familyMembers.${index}.dob`}
                render={({ field }) => (
                  <DatePicker
                    className="w-full p-2 border border-gray-300 rounded"
                    selected={field.value}
                    onChange={field.onChange}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select Date"
                  />
                )}
              />
              {errors.familyMembers?.[index]?.dob && <p className="text-red-600 text-sm">{errors.familyMembers[index].dob.message}</p>}
            </div>
          </div>
        </div>
      ))}

      <div className="flex gap-4 mt-4">
        <button type="button" onClick={() => append({
          name: '', fatherName: '', motherName: '', surname: '', dob: null, age: '', sex: '', education: '', occupation: '', status: '', workAddress: '', whatsapp: '', area: '', relation: ''
        })} className="bg-blue-600 w-[135px] h-[40px] text-white px-4 py-2 rounded hover:bg-blue-700">Add Member</button>

        <button type="submit" className="bg-green-600 w-[135px] h-[40px] text-white px-4 py-2 rounded hover:bg-green-700">Submit</button>
      </div>
    </form>
  );
};

export default MemberRegistration;
