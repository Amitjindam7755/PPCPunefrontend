import React, { useEffect, useState } from 'react';

  const GalleryImages = () => {
  const [events, setEvents] = useState([]);
  const [zoomedImage, setZoomedImage] = useState(null);

  useEffect(() => {
    // fetch('http://localhost:8081/api/gallery')
        fetch(`${import.meta.env.VITE_API_URL}/api/gallery`)
      .then(res => res.json())
      .then(data => setEvents(Array.isArray(data) ? data : []))
      .catch(err => console.error('Error fetching events:', err));
  }, []);

  return (
    <div className="p-6 bg-[#f59e0b] min-h-screen">
      <h2 className="text-3xl font-bold text-center text-red-800 mb-6">Images Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {events.map(event => {
          // const imageUrl = `http://localhost:8081/uploads/${event.image}`;
            const imageUrl = `${import.meta.env.VITE_API_URL}/uploads/${event.image}`;
          return (
            <div
              key={event.id}
              className="relative rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 cursor-pointer bg-white"
              onClick={() => setZoomedImage(imageUrl)}
            >
              <img
                src={imageUrl}
                alt={`Event ${event.id}`}
                className="w-full h-60 object-cover"
              />
            </div>
          );
        })}
      </div>

      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setZoomedImage(null)}
        >
          <div
            className="relative p-4 max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
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

export default GalleryImages;
