import React, { useState, useEffect } from 'react';

const EventAdmin = () => {
  const [file, setFile] = useState(null);
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    // const res = await fetch('http://localhost:8081/api/events');
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/events`);
    const data = await res.json();
    setEvents(data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    // await fetch('http://localhost:8081/api/events', {
    await fetch(`${import.meta.env.VITE_API_URL}/api/events`, {
      method: 'POST',
      body: formData
    });

    setFile(null);
    fetchEvents();
  };

  const handleDelete = async (id) => {
    // await fetch(`http://localhost:8081/api/events/${id}`, { method: 'DELETE' });
    await fetch(`${import.meta.env.VITE_API_URL}/api/events/${id}`, { method: 'DELETE' });
    fetchEvents();
  };

  return (
    <div className="p-6">
      <form onSubmit={handleUpload} className="mb-4">
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit" className="ml-2 bg-green-600 text-white px-4 py-2 rounded">Upload</button>
      </form>

      <div className="flex flex-wrap gap-4">
        {events.map((event) => (
          <div key={event.id} className="relative">
            <img
              // src={`http://localhost:8081/uploads/${event.image}`}
              src={`${import.meta.env.VITE_API_URL}/uploads/${event.image}`}
              alt=""
              className="w-40 h-60 object-cover rounded"
            />
            <button
              onClick={() => handleDelete(event.id)}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventAdmin;

