// WORKING*** PERFECT
// import React, { useState, useEffect } from 'react';

// const MatchingResult = () => {
//   const [profiles, setProfiles] = useState([]);

//   const fetchProfiles = () => {
//     const storedProfiles = JSON.parse(localStorage.getItem('uploadedProfiles')) || [];
//     setProfiles(storedProfiles);
//   };

//   useEffect(() => {
//     // Initial fetch
//     fetchProfiles();

//     // Listen for storageUpdate events to refresh the profiles
//     window.addEventListener('storageUpdate', fetchProfiles);

//     // Cleanup event listener on component unmount
//     return () => {
//       window.removeEventListener('storageUpdate', fetchProfiles);
//     };
//   }, []);

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Matrimonial Matches</h2>
//       {profiles.length === 0 ? (
//         <p className="text-center text-gray-500">No profiles available.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {profiles.map((profile) => (
//             <div key={profile.id} className="border rounded-lg p-4 bg-white shadow">
//               <div className="flex flex-col items-center">
//                 {profile.profile_photo ? (
//                   <img
//                     src={`http://localhost:8081/${profile.profile_photo}`}
//                     alt={profile.name}
//                     className="w-32 h-32 object-cover rounded-full mb-4"
//                   />
//                 ) : (
//                   <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4">
//                     No Photo
//                   </div>
//                 )}
//                 <h3 className="text-lg font-semibold">{profile.name}</h3>
//                 <p className="text-sm text-gray-600">Profile For: {profile.profile_for}</p>
//                 <p className="text-sm text-gray-600">Gender: {profile.gender}</p>
//                 <p className="text-sm text-gray-600">DOB: {profile.dob}</p>
//                 <p className="text-sm text-gray-600">Religion: {profile.religion}</p>
//                 <p className="text-sm text-gray-600">Caste: {profile.caste}</p>
//                 <p className="text-sm text-gray-600">Occupation: {profile.occupation}</p>
//                 <p className="text-sm text-gray-600">Education: {profile.education}</p>
//                 <p className="text-sm text-gray-600">Location: {profile.location}</p>
//                 <p className="text-sm text-gray-600">Height: {profile.height}</p>
//                 <p className="text-sm text-gray-600">About: {profile.about}</p>
//                 {profile.biodata && (
//                   <a
//                     href={`http://localhost:8081/${profile.biodata}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-500 underline mt-2"
//                   >
//                     View BioData
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MatchingResult;



// WORKING PERFECTLY
// src/pages/Matrimonials/pages/MatrimonialMatches.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { io } from 'socket.io-client';

// const socket = io('http://localhost:8081', {
//   cors: {
//     origin: 'http://localhost:5173',
//     methods: ['GET', 'POST', 'PUT', 'DELETE']
//   }
// });

// const MatchingResult = () => {
//   const [profiles, setProfiles] = useState([]);

//   // Fetch initial uploaded profiles from the server
//   const fetchProfiles = async () => {
//     try {
//       const res = await axios.get('http://localhost:8081/api/profile/uploaded-profiles');
//       setProfiles(res.data);
//     } catch (err) {
//       console.error('Error fetching uploaded profiles:', err);
//     }
//   };

//   useEffect(() => {
//     // Fetch initial profiles
//     fetchProfiles();

//     // Listen for Socket.IO events
//     socket.on('profileUploaded', (profile) => {
//       setProfiles((prev) => {
//         // Avoid duplicates
//         if (prev.some((p) => p.id === profile.id)) return prev;
//         return [profile, ...prev];
//       });
//     });

//     socket.on('profileDeleted', ({ id }) => {
//       setProfiles((prev) => prev.filter((profile) => profile.id !== id));
//     });

//     // Cleanup on component unmount
//     return () => {
//       socket.off('profileUploaded');
//       socket.off('profileDeleted');
//       socket.disconnect();
//     };
//   }, []);

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Matrimonial Matches</h2>
//       {profiles.length === 0 ? (
//         <p className="text-center text-gray-500">No profiles available.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {profiles.map((profile) => (
//             <div key={profile.id} className="border rounded-lg p-4 bg-white shadow">
//               <div className="flex flex-col items-center">
//                 {profile.profile_photo ? (
//                   <img
//                     src={`http://localhost:8081/${profile.profile_photo}`}
//                     alt={profile.name}
//                     className="w-32 h-32 object-cover rounded-full mb-4"
//                   />
//                 ) : (
//                   <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4">
//                     No Photo
//                   </div>
//                 )}
//                 <h3 className="text-lg font-semibold">{profile.name}</h3>
//                 <p className="text-sm text-gray-600">Profile For: {profile.profile_for}</p>
//                 <p className="text-sm text-gray-600">Gender: {profile.gender}</p>
//                 <p className="text-sm text-gray-600">DOB: {profile.dob}</p>
//                 <p className="text-sm text-gray-600">Religion: {profile.religion}</p>
//                 <p className="text-sm text-gray-600">Caste: {profile.caste}</p>
//                 <p className="text-sm text-gray-600">Occupation: {profile.occupation}</p>
//                 <p className="text-sm text-gray-600">Education: {profile.education}</p>
//                 <p className="text-sm text-gray-600">Location: {profile.location}</p>
//                 <p className="text-sm text-gray-600">Height: {profile.height}</p>
//                 <p className="text-sm text-gray-600">About: {profile.about}</p>
//                 {profile.biodata && (
//                   <a
//                     href={`http://localhost:8081/${profile.biodata}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-500 underline mt-2"
//                   >
//                     View BioData
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MatchingResult;




// WORKING***
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { io } from 'socket.io-client';
// import { useNavigate } from 'react-router-dom'; //  add this

// const socket = io('http://localhost:8081', {
//   cors: {
//     origin: 'http://localhost:5173',
//     methods: ['GET', 'POST', 'PUT', 'DELETE']
//   }
// });

// const MatchingResult = () => {
//   const [profiles, setProfiles] = useState([]);
//   const navigate = useNavigate(); //  for navigation

 
//   const fetchProfiles = async () => {
//     try {
//       const res = await axios.get('http://localhost:8081/api/profile/uploaded-profiles');
//       setProfiles(res.data);
//     } catch (err) {
//       console.error('Error fetching uploaded profiles:', err);
//     }
//   };

//   useEffect(() => {
//     fetchProfiles();

//     socket.on('profileUploaded', (profile) => {
//       setProfiles((prev) => {
//         if (prev.some((p) => p.id === profile.id)) return prev;
//         return [profile, ...prev];
//       });
//     });

//     socket.on('profileDeleted', ({ id }) => {
//       setProfiles((prev) => prev.filter((profile) => profile.id !== id));
//     });

//     return () => {
//       socket.off('profileUploaded');
//       socket.off('profileDeleted');
//       socket.disconnect();
//     };
//   }, []);

//   return (
//     <div className="p-4">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-bold">Matrimonial Matches</h2>
//       </div>

//       {profiles.length === 0 ? (
//         <p className="text-center text-gray-500">No profiles available.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {profiles.map((profile) => (
//             <div key={profile.id} className="border rounded-lg p-4 bg-white shadow">
//               <div className="flex flex-col items-center">
//                 {profile.profile_photo ? (
//                   <img
//                     src={`http://localhost:8081/${profile.profile_photo}`}
//                     alt={profile.name}
//                     className="w-32 h-32 object-cover rounded-full mb-4"
//                   />
//                 ) : (
//                   <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4">
//                     No Photo
//                   </div>
//                 )}
//                 <h3 className="text-lg font-semibold">{profile.name}</h3>
//                 <p className="text-sm text-gray-600">Profile For: {profile.profile_for}</p>
//                 <p className="text-sm text-gray-600">Gender: {profile.gender}</p>
//                 <p className="text-sm text-gray-600">DOB: {profile.dob}</p>
//                 <p className="text-sm text-gray-600">Religion: {profile.religion}</p>
//                 <p className="text-sm text-gray-600">Caste: {profile.caste}</p>
//                 <p className="text-sm text-gray-600">Occupation: {profile.occupation}</p>
//                 <p className="text-sm text-gray-600">Education: {profile.education}</p>
//                 <p className="text-sm text-gray-600">Location: {profile.location}</p>
//                 <p className="text-sm text-gray-600">Height: {profile.height}</p>
//                 <p className="text-sm text-gray-600">About: {profile.about}</p>
//                 {profile.biodata && (
//                   <a
//                     href={`http://localhost:8081/${profile.biodata}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-500 underline mt-2"
//                   >
//                     View BioData
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MatchingResult;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const socket = io('http://localhost:8081', {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  }
});


const MatchingResult = () => {
  const [profiles, setProfiles] = useState([]);
  const navigate = useNavigate();
  const {t} = useTranslation();
  
  const fetchProfiles = async () => {
    try {
      const res = await axios.get('http://localhost:8081/api/profile/uploaded-profiles');
      setProfiles(res.data);
    } catch (err) {
      console.error('Error fetching uploaded profiles:', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userToken'); // remove token/session
    navigate('/loginUser', { replace: true }); // redirect to login page
  };

  useEffect(() => {
    // Check if user is authenticated
    // const isLoggedIn = localStorage.getItem('userToken');
    // if (!isLoggedIn) {
    //   navigate('/matches', { replace: true }); // Redirect if not logged in
    //   return;
    // }

    fetchProfiles();

    socket.on('profileUploaded', (profile) => {
      setProfiles((prev) => {
        if (prev.some((p) => p.id === profile.id)) return prev;
        return [profile, ...prev];
      });
    });

    socket.on('profileDeleted', ({ id }) => {
      setProfiles((prev) => prev.filter((profile) => profile.id !== id));
    });

    return () => {
      socket.off('profileUploaded');
      socket.off('profileDeleted');
      socket.disconnect();
    };
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Matrimonial Matches</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {profiles.length === 0 ? (
        <p className="text-center text-gray-500">Loading...</p>
        // No profiles available
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {profiles.map((profile) => (
            <div key={profile.id} className="border rounded-lg p-4 bg-white shadow">
              <div className="flex flex-col items-center">
                {profile.profile_photo ? (
                  <img
                    src={`http://localhost:8081/${profile.profile_photo}`}
                    alt={profile.name}
                    className="w-32 h-32 object-cover rounded-full mb-4"
                  />
                ) : (
                  <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                    No Photo
                  </div>
                )}
                <h3 className="text-lg font-semibold">{profile.name}</h3>
                <p className="text-sm text-gray-600">Profile For: {profile.profile_for}</p>
                <p className="text-sm text-gray-600">Gender: {profile.gender}</p>
                <p className="text-sm text-gray-600">DOB: {profile.dob}</p>
                <p className="text-sm text-gray-600">Religion: {profile.religion}</p>
                <p className="text-sm text-gray-600">Caste: {profile.caste}</p>
                <p className="text-sm text-gray-600">Occupation: {profile.occupation}</p>
                <p className="text-sm text-gray-600">Education: {profile.education}</p>
                <p className="text-sm text-gray-600">Location: {profile.location}</p>
                <p className="text-sm text-gray-600">Height: {profile.height}</p>
                <p className="text-sm text-gray-600">About: {profile.about}</p>
                {profile.biodata && (
                  <a
                    href={`http://localhost:8081/${profile.biodata}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline mt-2"
                  >
                    View BioData
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MatchingResult;
