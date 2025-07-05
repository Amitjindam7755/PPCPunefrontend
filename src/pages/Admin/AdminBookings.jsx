// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AdminBookings = () => {
//   const [bookings, setBookings] = useState([]);

//   const fetchBookings = async () => {
//     const res = await axios.get('http://localhost:8081/api/bookings');
//     setBookings(res.data);
//   };

//   const deleteBooking = async (id) => {
//     if (window.confirm("Are you sure you want to delete this booking?")) {
//       await axios.delete(`http://localhost:8081/api/bookings/${id}`);
//       fetchBookings();
//     }
//   };

//   const exportPDF = () => {
//     window.open('http://localhost:8081/api/bookings/export/pdf', '_blank');
//   };

//   const exportExcel = () => {
//     window.open('http://localhost:8081/api/bookings/export/excel', '_blank');
//   };

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Booking Records</h2>
//       <div className="mb-4 flex gap-4">
//         <button onClick={exportPDF} className="bg-red-500 text-white px-4 py-2 rounded">Download PDF</button>
//         <button onClick={exportExcel} className="bg-green-500 text-white px-4 py-2 rounded">Download Excel</button>
//       </div>
//       <table className="min-w-full border bg-white shadow">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="p-2 border">Name</th>
//             <th className="p-2 border">Email</th>
//             <th className="p-2 border">Check-In</th>
//             <th className="p-2 border">Check-Out</th>
//             <th className="p-2 border">Room Type</th>
//             <th className="p-2 border">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.map(booking => (
//             <tr key={booking.id}>
//               <td className="p-2 border">{booking.fullName}</td>
//               <td className="p-2 border">{booking.email}</td>
//               <td className="p-2 border">{booking.checkIn}</td>
//               <td className="p-2 border">{booking.checkOut}</td>
//               <td className="p-2 border">{booking.roomType}</td>
//               <td className="p-2 border">
//                 <button onClick={() => deleteBooking(booking.id)} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminBookings;



// WORKING2
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AdminBookings = () => {
//   const [bookings, setBookings] = useState([]);

//   const fetchBookings = async () => {
//     const res = await axios.get('http://localhost:8081/api/bookings');
//     setBookings(res.data);
//   };

//   const deleteBooking = async (id) => {
//     if (window.confirm("Are you sure you want to delete this booking?")) {
//       await axios.delete(`http://localhost:8081/api/bookings/${id}`);
//       fetchBookings();
//     }
//   };

//   const exportPDF = () => {
//     window.open('http://localhost:8081/api/bookings/export/pdf', '_blank');
//   };

//   const exportExcel = () => {
//     window.open('http://localhost:8081/api/bookings/export/excel', '_blank');
//   };

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   return (
//     <div className="p-4 sm:p-6 overflow-x-auto">
//       <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Booking Records</h2>
//       <div className="mb-4 flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
//         <button onClick={exportPDF} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
//           Download PDF
//         </button>
//         <button onClick={exportExcel} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
//           Download Excel
//         </button>
//       </div>

//       <div className="w-full overflow-auto">
//         <table className="min-w-full border bg-white shadow text-sm sm:text-base">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="p-2 border">Name</th>
//               <th className="p-2 border">Email</th>
//               <th className="p-2 border">Check-In</th>
//               <th className="p-2 border">Check-Out</th>
//               <th className="p-2 border">Room Type</th>
//               <th className="p-2 border">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map((booking) => (
//               <tr key={booking.id} className="hover:bg-gray-50">
//                 <td className="p-2 border">{booking.fullName}</td>
//                 <td className="p-2 border">{booking.email}</td>
//                 <td className="p-2 border">{booking.checkIn}</td>
//                 <td className="p-2 border">{booking.checkOut}</td>
//                 <td className="p-2 border">{booking.roomType}</td>
//                 <td className="p-2 border text-center">
//                   <button
//                     onClick={() => deleteBooking(booking.id)}
//                     className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AdminBookings;



import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchBookings = async () => {
    const res = await axios.get('http://localhost:8081/api/bookings');
    setBookings(res.data);
  };

  const deleteBooking = async (id) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      await axios.delete(`http://localhost:8081/api/bookings/${id}`);
      fetchBookings();
    }
  };

  const exportExcel = () => {
   window.open('http://localhost:8081/api/bookings/export/excel', '_blank');
  };

  const exportPDF = () => {
    window.open('http://localhost:8081/api/bookings/export/pdf', '_blank');
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // Filter bookings if search term exists
  const filteredBookings = bookings.filter(b => 
    b.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 max-w-full overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-orange-700">Room Bookings</h2>
        <div className="flex gap-3">
            <input 
            type="text" 
            placeholder="Search by name..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded px-2 py-1"
          />
          <button onClick={exportPDF} className="bg-red-500 px-4 py-2 text-white rounded hover:bg-red-600 transition">
            Download PDF
          </button>
          <button onClick={exportExcel} className="bg-green-500 px-4 py-2 text-white rounded hover:bg-green-600 transition">
            Download Excel
          </button>
        </div>
      </div>
      <table className="min-w-full text-sm border rounded shadow">
        <thead className="bg-orange-100">
          <tr>
            <th className="p-2 border">Full Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Check-In</th>
            <th className="p-2 border">Check-Out</th>
            <th className="p-2 border">Room Type</th>
            <th className="p-2 border text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {bookings.map(b => (
            <tr key={b.id} className="hover:bg-orange-50">
              <td className="p-2 border">{b.fullName}</td>
              <td className="p-2 border">{b.email}</td>
              <td className="p-2 border">{b.checkIn}</td>
              <td className="p-2 border">{b.checkOut}</td>
              <td className="p-2 border">{b.roomType}</td>
              <td className="p-2 border text-center">
                <button
                  onClick={() => deleteBooking(b.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))} */}
          {filteredBookings.map(b => {
            const isHighlighted = searchTerm && b.fullName.toLowerCase().includes(searchTerm.toLowerCase());
            return (
              <tr 
                key={b.id} 
                className={`hover:bg-orange-50 ${isHighlighted ? 'bg-yellow-200' : ''}`}
              >
                <td className="p-2 border">{b.fullName}</td>
                <td className="p-2 border">{b.email}</td>
                <td className="p-2 border">{b.checkIn}</td>
                <td className="p-2 border">{b.checkOut}</td>
                <td className="p-2 border">{b.roomType}</td>
                <td className="p-2 border text-center">
                  <button
                    onClick={() => deleteBooking(b.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminBookings;
