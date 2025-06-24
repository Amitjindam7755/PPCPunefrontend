import React, { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import axios from 'axios';
import EditContactForm from './EditContactForm';

const ContactTable = () => {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  const fetchContacts = async () => {
    // const res = await axios.get('http://localhost:8081/api/contacts');
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/contacts`);
    setContacts(res.data);
  }

  const downloadPDF = () => {
    // window.open('http://localhost:8081/api/contacts/export/pdf', '_blank');
    window.open(`${import.meta.env.VITE_API_URL}/api/contacts/export/pdf`, '_blank');
  };

  const downloadExcel = () => {
    // window.open('http://localhost:8081/api/contacts/export/excel', '_blank');
    window.open(`${import.meta.env.VITE_API_URL}/api/contacts/export/excel`, '_blank');
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    // await axios.delete(`http://localhost:8081/api/contacts/${id}`);
    await axios.delete(`${import.meta.env.VITE_API_URL}/api/contacts/${id}`);
    fetchContacts();
  };

  const handleEdit = (contact) => {
    setEditingContact(contact);
  };

  const handleUpdate = async (updatedContact) => {
    // await axios.put(`http://localhost:8081/api/contacts/${updatedContact.id}`, updatedContact);
    await axios.put(`${import.meta.env.VITE_API_URL}/api/contacts/${updatedContact.id}`, updatedContact);
    setEditingContact(null);
    fetchContacts();
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Admin Panel: Contacts</h2>

      {editingContact ? (
        <EditContactForm contact={editingContact} onUpdate={handleUpdate} onCancel={() => setEditingContact(null)} />
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-sm sm:text-base">
                <th className="border p-2 whitespace-nowrap">ID</th>
                <th className="border p-2 whitespace-nowrap">Full Name</th>
                <th className="border p-2 whitespace-nowrap">Email</th>
                <th className="border p-2 whitespace-nowrap">Message</th>
                <th className="border p-2 whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id} className="text-sm sm:text-base">
                  <td className="border p-2">{contact.id}</td>
                  <td className="border p-2">{contact.full_name}</td>
                  <td className="border p-2 break-words">{contact.email}</td>
                  <td className="border p-2 break-words">{contact.message}</td>
                  <td className="border p-2 flex flex-col sm:flex-row gap-2 justify-center items-center">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded w-full sm:w-auto"
                      onClick={() => handleEdit(contact)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded w-full sm:w-auto"
                      onClick={() => handleDelete(contact.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-10 text-center">
        <h2 className="font-semibold text-lg">Download Contact Data</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-4 gap-3">
          <button className="bg-red-800 text-white px-4 py-2 rounded" onClick={downloadPDF}>
            Download PDF <Download className="inline-block ml-1" size={18} />
          </button>
          <button className="bg-green-800 text-white px-4 py-2 rounded" onClick={downloadExcel}>
            Download Excel <Download className="inline-block ml-1" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactTable;
