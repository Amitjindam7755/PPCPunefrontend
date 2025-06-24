import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const FamilyMembersView = () => {
  const { headId } = useParams();
  const [members, setMembers] = useState([]);

  const exportExcel = () => {
  // window.open(`http://localhost:8081/api/family-members/excel/${headId}`, '_blank');
  window.open(`${import.meta.env.VITE_API_URL}/api/family-members/excel/${headId}`, '_blank');
};


  useEffect(() => {
    // axios.get(`http://localhost:8081/api/family-members/${headId}`)
    axios.get(`${import.meta.env.VITE_API_URL}/api/family-members/${headId}`)
      .then(res => setMembers(res.data))
      .catch(err => console.error('Error:', err));
  }, [headId]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Family Members</h2>
      <Link to="/admin/dashboard/heads" className="text-sm text-blue-500 underline mb-4 inline-block">← Back to Dashboard</Link>
        <div className='pr-5'>
            <button
                onClick={exportExcel}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
                Export Excel
            </button>
        </div>
      {members.length === 0 ? (
        <p>No family members found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-[1200px] border text-sm shadow">
            <thead className="bg-blue-100">
              <tr>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Father</th>
                <th className="p-2 border">Mother</th>
                <th className="p-2 border">Surname</th>
                <th className="p-2 border">DOB</th>
                <th className="p-2 border">Age</th>
                <th className="p-2 border">Sex</th>
                <th className="p-2 border">Education</th>
                <th className="p-2 border">Occupation</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Address</th>
                <th className="p-2 border">WhatsApp</th>
                <th className="p-2 border">Area</th>
                <th className="p-2 border">Relation</th>
              </tr>
            </thead>
            <tbody>
              {members.map((m) => (
                <tr key={m.id} className="text-center hover:bg-blue-50">
                  <td className="p-2 border">{m.name}</td>
                  <td className="p-2 border">{m.fatherName}</td>
                  <td className="p-2 border">{m.motherName}</td>
                  <td className="p-2 border">{m.surname}</td>
                  <td className="p-2 border">{m.dob?.split('T')[0]}</td>
                  <td className="p-2 border">{m.age}</td>
                  <td className="p-2 border">{m.sex}</td>
                  <td className="p-2 border">{m.education}</td>
                  <td className="p-2 border">{m.occupation}</td>
                  <td className="p-2 border">{m.status}</td>
                  <td className="p-2 border">{m.workAddress}</td>
                  <td className="p-2 border">{m.whatsapp}</td>
                  <td className="p-2 border">{m.area}</td>
                  <td className="p-2 border">{m.relation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FamilyMembersView;
