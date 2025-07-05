import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminMarkandaya = () => {
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchBookings = async () => {
    const res = await axios.get('http://localhost:8081/api/abhishek-bookings');
    setBookings(res.data);
  };

  const deleteBooking = async (id) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      await axios.delete(`http://localhost:8081/api/abhishek-bookings/${id}`);
      fetchBookings();
    }
  };

  const exportExcel = () => {
    window.open('http://localhost:8081/api/abhishek-bookings/export/excel', '_blank');
  };


  useEffect(() => {
    fetchBookings();
  }, []);

  // Filter bookings based on fullName, email, phone, gotra
  const filteredBookings = bookings.filter(b => {
    const combined = `${b.fullName} ${b.email} ${b.phone} ${b.gotra}`.toLowerCase();
    return combined.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="p-4 max-w-full overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-orange-700">Markandeya Abhishek Bookings</h2>
        <div className='flex gap-4'>
          <input 
            type="text" 
            placeholder="Search by name..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded px-2 py-1"
          />
         <button onClick={exportExcel} className="bg-green-500 px-4 py-2 text-white rounded">Download Excel</button>
        </div>
      </div>
      <table className="min-w-full text-sm border rounded shadow">
        <thead className="bg-orange-100">
          <tr>
            <th className="p-2 border">Full Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Time</th>
            <th className="p-2 border">Type</th>
            <th className="p-2 border">Gotra</th>
            <th className="p-2 border">Participants</th>
            <th className="p-2 border">Requests</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* {bookings.map(b => (
            <tr key={b.id} className="hover:bg-orange-50">
              <td className="p-2 border">{b.fullName}</td>
              <td className="p-2 border">{b.email}</td>
              <td className="p-2 border">{b.phone}</td>
              <td className="p-2 border">{b.pujaDate}</td>
              <td className="p-2 border">{b.pujaTime}</td>
              <td className="p-2 border">{b.pujaType}</td>
              <td className="p-2 border">{b.gotra}</td>
              <td className="p-2 border">{b.participants}</td>
              <td className="p-2 border">{b.specialRequests}</td>
              <td className="p-2 border text-center">
                <button onClick={() => deleteBooking(b.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))} */}
          {filteredBookings.map(b => {
            const isHighlighted = searchTerm && (
              `${b.fullName} ${b.email} ${b.phone} ${b.gotra}`.toLowerCase().includes(searchTerm.toLowerCase())
            );
            return (
              <tr key={b.id} className={`hover:bg-orange-50 ${isHighlighted ? 'bg-yellow-200' : ''}`}>
                <td className="p-2 border">{b.fullName}</td>
                <td className="p-2 border">{b.email}</td>
                <td className="p-2 border">{b.phone}</td>
                <td className="p-2 border">{b.pujaDate}</td>
                <td className="p-2 border">{b.pujaTime}</td>
                <td className="p-2 border">{b.pujaType}</td>
                <td className="p-2 border">{b.gotra}</td>
                <td className="p-2 border">{b.participants}</td>
                <td className="p-2 border">{b.specialRequests}</td>
                <td className="p-2 border text-center">
                  <button onClick={() => deleteBooking(b.id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition">
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
          {filteredBookings.length === 0 && (
            <tr>
              <td colSpan="10" className="text-center py-4">No bookings found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminMarkandaya;
