import React, { useEffect, useState } from 'react';

const EventGallery = () => {
  const [events, setEvents] = useState([]);
  const [zoomedImage, setZoomedImage] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8081/api/events')
      .then(res => res.json())
      .then(data => setEvents(Array.isArray(data) ? data : []))
      .catch(err => console.error('Error fetching events:', err));
  }, []);

  return (
    <div className="overflow-x-auto whitespace-nowrap p-4">
      {events.map(event => {
        const imageUrl = `http://localhost:8081/uploads/${event.image}`;
        return (
          <img
            key={event.id}
            src={imageUrl}
            alt={`Event ${event.id}`}
            className="inline-block w-40 h-60 object-cover rounded-lg mr-4 shadow cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setZoomedImage(imageUrl)}
          />
        );
      })}

      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setZoomedImage(null)}
        >
          <div
            className="relative p-4 max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()} // prevent modal close when clicking inside
          >
            <button
              className="absolute top-2 right-2 bg-white text-black p-2 rounded-full shadow hover:bg-red-500 hover:text-white"
              onClick={() => setZoomedImage(null)}
            >
              ✕
            </button>
            <img
              src={zoomedImage}
              alt="Zoomed"
              className="w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EventGallery;


