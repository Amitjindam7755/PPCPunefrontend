import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminMarkandaya = () => {
  const [bookings, setBookings] = useState([]);

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

  return (
    <div className="p-4 max-w-full overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-orange-700">Markandeya Abhishek Bookings</h2>
        <button onClick={exportExcel} className="bg-green-500 px-4 py-2 text-white rounded">Download Excel</button>
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
          {bookings.map(b => (
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminMarkandaya;
