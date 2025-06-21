// // import React from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';

// // const Matches = () => {
// //   const { state } = useLocation();
// //   const navigate = useNavigate();
// //   const profile = state?.profile;

// //   if (!profile) {
// //     return (
// //       <div className="p-4 sm:p-6 text-center text-gray-500">
// //         No profile data available.
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="p-4 sm:p-6">
// //       <div className="flex justify-between items-center mb-6">
// //         <h2 className="text-xl sm:text-2xl font-bold">Matches Profile</h2>
// //         <button
// //           onClick={() => navigate('/admin/dashboard/profiles')}
// //           className="bg-gray-500 text-white px-4 py-2 rounded text-sm hover:bg-gray-600 transition"
// //         >
// //           Back to Profiles
// //         </button>
// //       </div>

// //       <div className="max-w-md mx-auto">
// //         <div className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-shadow">
// //           {/* Profile Photo */}
// //           <div className="mb-4 flex justify-center">
// //             {profile.profile_photo ? (
// //               <img
// //                 src={`http://localhost:8081/${profile.profile_photo}`}
// //                 alt={profile.name}
// //                 className="w-32 h-32 object-cover rounded-full border-2 border-gray-200"
// //               />
// //             ) : (
// //               <div className="w-32 h-32 flex items-center justify-center bg-gray-100 rounded-full border-2 border-gray-200">
// //                 <span className="text-gray-500">No Photo</span>
// //               </div>
// //             )}
// //           </div>

// //           {/* Candidate Information */}
// //           <div className="space-y-2 text-sm">
// //             <div>
// //               <span className="font-semibold">Profile For:</span> {profile.profile_for || 'N/A'}
// //             </div>
// //             <div>
// //               <span className="font-semibold">Name:</span> {profile.name || 'N/A'}
// //             </div>
// //             <div>
// //               <span className="font-semibold">Gender:</span> {profile.gender || 'N/A'}
// //             </div>
// //             <div>
// //               <span className="font-semibold">DOB:</span> {profile.dob || 'N/A'}
// //             </div>
// //             <div>
// //               <span className="font-semibold">Email:</span> {profile.email || 'N/A'}
// //             </div>
// //             <div>
// //               <span className="font-semibold">Mobile:</span> {profile.mobile || 'N/A'}
// //             </div>
// //             <div>
// //               <span className="font-semibold">Religion:</span> {profile.religion || 'N/A'}
// //             </div>
// //             <div>
// //               <span className="font-semibold">Caste:</span> {profile.caste || 'N/A'}
// //             </div>
// //             <div>
// //               <span className="font-semibold">Occupation:</span> {profile.occupation || 'N/A'}
// //             </div>
// //             <div>
// //               <span className="font-semibold">Education:</span> {profile.education || 'N/A'}
// //             </div>
// //             <div>
// //               <span className="font-semibold">Location:</span> {profile.location || 'N/A'}
// //             </div>
// //             <div>
// //               <span className="font-semibold">Height:</span> {profile.height || 'N/A'}
// //             </div>
// //             <div>
// //               <span className="font-semibold">About:</span> {profile.about || 'N/A'}
// //             </div>
// //             <div>
// //               <span className="font-semibold">BioData:</span>
// //               {profile.biodata ? (
// //                 <a
// //                   href={`http://localhost:8081/${profile.biodata}`}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="text-blue-500 underline ml-1"
// //                 >
// //                   View BioData
// //                 </a>
// //               ) : (
// //                 ' No BioData'
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Matches;






// import React, { useEffect, useState } from 'react';

// const Matches = () => {
//   const [profiles, setProfiles] = useState([]);

//   useEffect(() => {
//     // Retrieve the list of uploaded profiles from localStorage
//     const storedProfiles = JSON.parse(localStorage.getItem('uploadedProfiles')) || [];
//     setProfiles(storedProfiles);
//   }, []);

//   return (
//     <div className="p-4 sm:p-6">
//       <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">Matches Gallery</h2>

//       {profiles.length === 0 ? (
//         <div className="text-center text-gray-500">
//           No profiles uploaded yet.
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {profiles.map((profile) => (
//             <div
//               key={profile.id}
//               className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-shadow"
//             >
//               {/* Profile Photo */}
//               <div className="mb-4 flex justify-center">
//                 {profile.profile_photo ? (
//                   <img
//                     src={`http://localhost:8081/${profile.profile_photo}`}
//                     alt={profile.name}
//                     className="w-24 h-24 object-cover rounded-full border-2 border-gray-200"
//                   />
//                 ) : (
//                   <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full border-2 border-gray-200">
//                     <span className="text-gray-500 text-sm">No Photo</span>
//                   </div>
//                 )}
//               </div>

//               {/* Candidate Information */}
//               <div className="space-y-2 text-sm text-center">
//                 <div>
//                   <span className="font-semibold">Name:</span> {profile.name || 'N/A'}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Gender:</span> {profile.gender || 'N/A'}
//                 </div>
//                 <div>
//                   <span className="font-semibold">DOB:</span> {profile.dob || 'N/A'}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Religion:</span> {profile.religion || 'N/A'}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Caste:</span> {profile.caste || 'N/A'}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Occupation:</span> {profile.occupation || 'N/A'}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Education:</span> {profile.education || 'N/A'}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Location:</span> {profile.location || 'N/A'}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Height:</span> {profile.height || 'N/A'}
//                 </div>
//                 <div>
//                   <span className="font-semibold">BioData:</span>
//                   {profile.biodata ? (
//                     <a
//                       href={`http://localhost:8081/${profile.biodata}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-500 underline ml-1"
//                     >
//                       View BioData
//                     </a>
//                   ) : (
//                     ' No BioData'
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Matches;




// import React, { useEffect, useState } from 'react';

// const Matches = () => {
//   const [profiles, setProfiles] = useState([]);

//   useEffect(() => {
//     // Retrieve the list of uploaded profiles from localStorage
//     const storedProfiles = JSON.parse(localStorage.getItem('uploadedProfiles')) || [];
//     setProfiles(storedProfiles);
//   }, []);

//   return (
//     <div className="p-4 sm:p-6">
//       <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">Matches Gallery</h2>

//       {profiles.length === 0 ? (
//         <div className="text-center text-gray-500">
//           No profiles uploaded yet.
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {profiles.map((profile) => (
//             <div
//               key={profile.id}
//               className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-shadow"
//             >
//               {/* Profile Photo */}
//               <div className="mb-4 flex justify-center">
//                 {profile.profile_photo ? (
//                   <img
//                     src={`http://localhost:8081/${profile.profile_photo}`}
//                     alt={profile.name}
//                     className="w-24 h-24 object-cover rounded-full border-2 border-gray-200"
//                   />
//                 ) : (
//                   <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full border-2 border-gray-200">
//                     <span className="text-gray-500 text-sm">No Photo</span>
//                   </div>
//                 )}
//               </div>

//               {/* Candidate Information */}
//               <div className="space-y-2 text-sm text-center">
//                 <div>
//                   <span className="font-semibold">Name:</span> {profile.name || 'N/A'}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Gender:</span> {profile.gender || 'N/A'}
//                 </div>
//                 <div>
//                   <span className="font-semibold">DOB:</span> {profile.dob || 'N/A'}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Religion:</span> {profile.religion || 'N/A'}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Caste:</span> {profile.caste || 'N/A'}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Occupation:</span> {profile.occupation || 'N/A'}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Education:</span> {profile.education || 'N/A'}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Location:</span> {profile.location || 'N/A'}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Height:</span> {profile.height || 'N/A'}
//                 </div>
//                 <div>
//                   <span className="font-semibold">BioData:</span>
//                   {profile.biodata ? (
//                     <a
//                       href={`http://localhost:8081/${profile.biodata}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-500 underline ml-1"
//                     >
//                       View BioData
//                     </a>
//                   ) : (
//                     ' No BioData'
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Matches;




import React from 'react'
import MatchingResult from './MatchingResult'


const Matches = () => {
  return (
    <div>
      <MatchingResult/>
    </div>
  )
}

export default Matches