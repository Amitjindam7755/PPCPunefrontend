import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AdminFamilyDashboard = () => {
  const [heads, setHeads] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:8081/api/heads');
      setHeads(res.data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const deleteHead = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete(`http://localhost:8081/api/heads/${id}`);
        fetchData();
      } catch (error) {
        console.error('Delete error:', error);
      }
    }
  };

  const exportExcel = () => {
    window.open('http://localhost:8081/api/heads/excel', '_blank');
  };
  

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4 max-w-full overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-orange-700">Registered Families (Head Details)</h2>
        <button
          onClick={exportExcel}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Export Excel
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[1600px] text-sm border rounded shadow">
          <thead className="bg-orange-100">
            <tr>
              <th className="p-2 border">ID</th>
              <th className="p-2 border">First Name</th>
              <th className="p-2 border">Middle Name</th>
              <th className="p-2 border">Last Name</th>
              <th className="p-2 border">Surname</th>
              <th className="p-2 border">Father Name</th>
              <th className="p-2 border">Mother Name</th>
              <th className="p-2 border">DOB</th>
              <th className="p-2 border">Age</th>
              <th className="p-2 border">Sex</th>
              <th className="p-2 border">Education</th>
              <th className="p-2 border">Occupation</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Work Address</th>
              <th className="p-2 border">WhatsApp</th>
              <th className="p-2 border">Area</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {heads.map((h) => (
              <tr key={h.id} className="hover:bg-orange-50 text-center">
                <td className="p-2 border">{h.id}</td>
                <td className="p-2 border">{h.firstName}</td>
                <td className="p-2 border">{h.middleName}</td>
                <td className="p-2 border">{h.lastName}</td>
                <td className="p-2 border">{h.surname}</td>
                <td className="p-2 border">{h.fatherName}</td>
                <td className="p-2 border">{h.motherName}</td>
                <td className="p-2 border">{h.dob?.split('T')[0]}</td>
                <td className="p-2 border">{h.age}</td>
                <td className="p-2 border">{h.sex}</td>
                <td className="p-2 border">{h.education}</td>
                <td className="p-2 border">{h.occupation}</td>
                <td className="p-2 border">{h.status}</td>
                <td className="p-2 border">{h.workAddress}</td>
                <td className="p-2 border">{h.whatsapp}</td>
                <td className="p-2 border">{h.area}</td>
                <td className="p-2 border">
                  {/* <button
                    onClick={() => deleteHead(h.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button> */}
                  <td className="p-2 border">
                    <Link
                        to={`/admin/family/${h.id}`}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    >
                        View
                    </Link>
                  </td>

                </td>
              </tr>
            ))}
            {heads.length === 0 && (
              <tr>
                <td colSpan="17" className="text-center py-4">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminFamilyDashboard;
