import React, { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import axios from 'axios';

const AdminSubscribers = () => {
  const [subs, setSubs] = useState([]);

  const fetchSubs = async () => {
    const res = await fetch("http://localhost:8081/api/subscribers");
    const data = await res.json();
    setSubs(data);
  };


    const downloadPDF = () => {
    window.open('http://localhost:8081/api/subscribers/export/pdf', '_blank');
  };

  const downloadExcel = () => {
    window.open('http://localhost:8081/api/subscribers/export/excel', '_blank');
  };


  const deleteSub = async (id) => {
    if (window.confirm("Delete this subscriber?")) {
      await fetch(`http://localhost:8081/api/subscribers/${id}`, { method: "DELETE" });
      fetchSubs();
    }
  };

  useEffect(() => {
    fetchSubs();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Subscribers List</h2>
     <>
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-purple-100">
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Email / Mobile</th>
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {subs.map((s) => (
            <tr key={s.id}>
              <td className="py-2 px-4 border">{s.id}</td>
              <td className="py-2 px-4 border">{s.value}</td>
              <td className="py-2 px-4 border">{new Date(s.created_at).toLocaleString()}</td>
              <td className="py-2 px-4 border">
                <button onClick={() => deleteSub(s.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     </>
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

export default AdminSubscribers;
