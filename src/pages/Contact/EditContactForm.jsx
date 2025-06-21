import React, { useState } from 'react';

const EditContactForm = ({ contact, onUpdate, onCancel }) => {
  const [form, setForm] = useState(contact);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(form);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded shadow">
      <h3 className="text-lg font-bold mb-2">Edit Contact</h3>
      <input name="full_name" value={form.full_name} onChange={handleChange} className="block w-full mb-2 p-2 border" />
      <input name="email" value={form.email} onChange={handleChange} className="block w-full mb-2 p-2 border" />
      <textarea name="message" value={form.message} onChange={handleChange} className="block w-full mb-2 p-2 border" />
      <div className="space-x-2">
        <button type="submit" className="bg-green-500 text-white px-4 py-2">Update</button>
        <button onClick={onCancel} className="bg-gray-500 text-white px-4 py-2">Cancel</button>
      </div>
    </form>
  );
};

export default EditContactForm;
