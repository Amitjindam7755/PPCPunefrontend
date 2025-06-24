import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';

// const socket = io('http://localhost:8081');
const socket = io('https://ppc-server.onrender.com/');

function AdminNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [message, setMessage] = useState('');
  const [editId, setEditId] = useState(null);

  const fetchNotifications = async () => {
    try {
      // const res = await axios.get('http://localhost:8081/notifications');
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/notifications`);
      setNotifications(res.data);
    } catch (err) {
      console.error('Error fetching notifications:', err);
    }
  };

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected to socket', socket.id);
    });

    fetchNotifications();
    socket.on('notification_updated', fetchNotifications);

    return () => {
      socket.off('notification_updated', fetchNotifications);
    };
  }, []);

  const handleAdd = async () => {
    if (!message.trim()) return;
    // await axios.post('http://localhost:8081/notifications', { message });
    await axios.post(`${import.meta.env.VITE_API_URL}/notifications`, { message });
    setMessage('');
  };

  const handleEdit = (notif) => {
    setEditId(notif.id);
    setMessage(notif.message);
  };

  const handleUpdate = async () => {
    // await axios.put(`http://localhost:8081/notifications/${editId}`, { message });
    await axios.put(`${import.meta.env.VITE_API_URL}/notifications/${editId}`, { message });
    setEditId(null);
    setMessage('');
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this notification?')) return;
    // await axios.delete(`http://localhost:8081/notifications/${id}`);
    await axios.delete(`${import.meta.env.VITE_API_URL}/notifications/${id}`);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">🔔 Admin Panel - Manage Notifications</h2>

      <div className="mb-4">
        <textarea
          rows={4}
          placeholder="Enter notification message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md text-sm sm:text-base"
        />

        <div className="mt-2 flex flex-col sm:flex-row gap-2">
          <button
            onClick={editId ? handleUpdate : handleAdd}
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            {editId ? 'Update Notification' : 'Add Notification'}
          </button>
          {editId && (
            <button
              onClick={() => {
                setEditId(null);
                setMessage('');
              }}
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm sm:text-base">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Message</th>
              <th className="p-2 border">Created At</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notif) => (
              <tr key={notif.id}>
                <td className="border p-2">{notif.id}</td>
                <td className="border p-2 break-words whitespace-pre-wrap">{notif.message}</td>
                <td className="border p-2">{new Date(notif.created_at).toLocaleString()}</td>
                <td className="border p-2">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={() => handleEdit(notif)}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(notif.id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {notifications.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center p-4">
                  No notifications found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminNotifications;
