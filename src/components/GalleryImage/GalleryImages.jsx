import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

  const GalleryImages = () => {
  const [events, setEvents] = useState([]);
  const [zoomedImage, setZoomedImage] = useState(null);
  const {t} = useTranslation();

  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');

  const years = Array.from({length:10}, (_, i) => new Date().getFullYear() - i);
  const months = Array.from({length: 12}, (_,i) => i + 1);

    const fetchImages = () => {
      const query = new URLSearchParams();
      if(year) query.append('year', year);
      if(month) query.append('month', month);

      fetch(`http://localhost:8081/api/gallery?${query.toString()}`)
       .then(res => res.json())
       .then(data => setEvents(Array.isArray(data) ? data : []))
       .catch(err => console.error('Error fetching events: ', err));
    };

  useEffect(() => {
    // fetch('http://localhost:8081/api/gallery')
    //   .then(res => res.json())
    //   .then(data => setEvents(Array.isArray(data) ? data : []))
    //   .catch(err => console.error('Error fetching events:', err));
    fetchImages();
  }, []);

  return (
    <div className="p-6  min-h-screen">
      <h2 className="text-3xl font-bold text-center text-red-800 mb-6">{t('Images Gallery')}</h2>
  
            {/* <div className="flex flex-col md:flex-row items-center justify-between mb-6 px-4">
              <form onSubmit={(e) => { e.preventDefault(); fetchImages(); }} className="mb-6 flex flex-wrap gap-4 items-end justify-center">
                <div>
                  <label className="block text-white">Year</label>
                  <select value={year} onChange={e => setYear(e.target.value)} className="p-2 rounded text-black">
                    <option value="">All</option>
                    {years.map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-white">Month</label>
                  <select value={month} onChange={e => setMonth(e.target.value)} className="p-2 rounded text-black">
                    <option value="">All</option>
                    {months.map(m => <option key={m} value={m}>{m.toString().padStart(2, '0')}</option>)}
                  </select>
                </div>

                <button type="submit" className="bg-white text-black px-4 py-2 rounded hover:bg-black hover:text-white">
                  Filter
                </button>
              </form>

              {/* Breadcrumb */}
              {/* <div className="text-center text-white mb-4 text-lg">
                Showing images for:
                <span className="ml-2 font-bold text-yellow-200">
                  {year || 'All Years'} {month && `> ${month.toString().padStart(2, '0')}`}
                </span>
              </div>
            </div>  */}

                  <div className="flex flex-col md:flex-row items-center justify-between mb-6 px-4">
              {/* Filter Section - Left Side */}
              <form
                onSubmit={(e) => { e.preventDefault(); fetchImages(); }}
                className="flex flex-wrap items-end gap-3 bg-gray-50 p-3 rounded-lg shadow max-w-full w-auto"
              >
                <div>
                  <label className="block text-sm text-gray-700">Year</label>
                  <select value={year} onChange={e => setYear(e.target.value)} className="p-1 rounded text-black text-sm">
                    <option value="">All</option>
                    {years.map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-700">Month</label>
                  <select value={month} onChange={e => setMonth(e.target.value)} className="p-1 rounded text-black text-sm">
                    <option value="">All</option>
                    {months.map(m => <option key={m} value={m}>{m.toString().padStart(2, '0')}</option>)}
                  </select>
                </div>

                <button type="submit" className="bg-black text-white h-[30px] px-3 py-1 rounded hover:bg-red-600 text-sm">
                  Filter
                </button>
              </form>

              {/* Title Section - Right Side */}
              <div className="mt-4 md:mt-0">
                {/* <h2 className="text-2xl md:text-3xl font-bold text-red-800 text-center md:text-right">Images Gallery</h2> */}
                <div className="text-right text-red-800 text-sm md:text-base">
                  Showing images for:
                  <span className="ml-1 font-semibold">
                    {year || 'All Years'} {month && `> ${month.toString().padStart(2, '0')}`}
                  </span>
                </div>
              </div>
            </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {events.map(event => {
          const imageUrl = `http://localhost:8081/uploads/${event.image}`;
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
