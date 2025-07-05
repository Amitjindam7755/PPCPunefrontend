import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPoshavvadevi = () => {
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchBookings = async () => {
    try {
      const res = await axios.get('http://localhost:8081/api/poshavvadevi-bookings');
      setBookings(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteBooking = async (id) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      try {
        await axios.delete(`http://localhost:8081/api/poshavvadevi-bookings/${id}`);
        fetchBookings(); // Refresh data
      } catch (err) {
        console.error("Delete failed:", err);
      }
    }
  };

  const downloadPDF = () => {
    axios.get('http://localhost:8081/api/poshavvadevi-bookings/pdf', { responseType: 'blob' })
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
    axios.get('http://localhost:8081/api/poshavvadevi-bookings/excel', { responseType: 'blob' })
      .then(response => {
        const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'abhishek_bookings.xlsx';
        a.click();
      });
  };

    useEffect(() => {
    fetchBookings();
  }, []);

  // Filter logic
  const filteredBookings = bookings.filter(booking => {
    const combined = `${booking.fullName} ${booking.email} ${booking.phone} ${booking.pujaType}`;
    return combined.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="p-4 max-w-full overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-orange-700">Poshavvadevi Abhishek Bookings</h2>
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Search by name, email, phone, type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded px-2 py-1"
          />
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
          {/* {bookings.map((booking) => (
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
          ))} */}
          {filteredBookings.map((booking) => {
            const highlight = searchTerm && `${booking.fullName} ${booking.email} ${booking.phone} ${booking.pujaType}`.toLowerCase().includes(searchTerm.toLowerCase());
            return (
              <tr key={booking.id} className={`hover:bg-orange-50 ${highlight ? 'bg-yellow-200' : ''}`}>
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
            )
          })}
          {filteredBookings.length === 0 && (
            <tr>
              <td colSpan="9" className="text-center py-4">No bookings found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPoshavvadevi;
