import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPoshavvadevi = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      // const res = await axios.get('http://localhost:8081/api/poshavvadevi-bookings');
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/poshavvadevi-bookings`);
      setBookings(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteBooking = async (id) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      try {
        // await axios.delete(`http://localhost:8081/api/poshavvadevi-bookings/${id}`);
        await axios.delete(`${import.meta.env.VITE_API_URL}/api/poshavvadevi-bookings/${id}`);
        fetchBookings(); // Refresh data
      } catch (err) {
        console.error("Delete failed:", err);
      }
    }
  };

  const downloadPDF = () => {
    // axios.get('http://localhost:8081/api/poshavvadevi-bookings/pdf', { responseType: 'blob' })
    axios.get(`${import.meta.env.VITE_API_URL}/api/poshavvadevi-bookings/pdf`, { responseType: 'blob' })
      .then(response => {
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'abhishek_bookings.pdf';
        a.click();
      });
  };

  const downloadExcel = () => {
    // axios.get('http://localhost:8081/api/poshavvadevi-bookings/excel', { responseType: 'blob' })
    axios.get(`${import.meta.env.VITE_API_URL}/api/poshavvadevi-bookings/excel`, { responseType: 'blob' })
      .then(response => {
        const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'abhishek_bookings.xlsx';
        a.click();
      });
  };

  return (
    <div className="p-4 max-w-full overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-orange-700">Poshavvadevi Abhishek Bookings</h2>
        <div className="space-x-2">
          <button onClick={downloadPDF} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            Export PDF
          </button>
          <button onClick={downloadExcel} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Export Excel
          </button>
        </div>
      </div>

      <table className="min-w-full text-sm border rounded shadow bg-white">
        <thead className="bg-orange-100">
          <tr>
            <th className="p-2 border">Full Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Time</th>
            <th className="p-2 border">Type</th>
            <th className="p-2 border">Participants</th>
            <th className="p-2 border">Requests</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id} className="hover:bg-orange-50">
              <td className="p-2 border">{booking.fullName}</td>
              <td className="p-2 border">{booking.email}</td>
              <td className="p-2 border">{booking.phone}</td>
              <td className="p-2 border">{booking.pujaDate}</td>
              <td className="p-2 border">{booking.pujaTime}</td>
              <td className="p-2 border">{booking.pujaType}</td>
              <td className="p-2 border">{booking.participants}</td>
              <td className="p-2 border">{booking.specialRequests}</td>
              <td className="p-2 border text-center">
                <button
                  onClick={() => deleteBooking(booking.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPoshavvadevi;
