// import React, { useState } from 'react';
// import { Link, Outlet } from 'react-router-dom';
// import { Menu } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const AdminDashboard = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Clear token from localStorage
//     localStorage.removeItem('token');
//     setSidebarOpen(false);
//     // Navigate to login page
//     navigate('/login');
//   };

//   return (
      
//     <div className="min-h-screen flex "> 
//       {/* Topbar for Mobile */}
//       <div className="flex justify-between items-center bg-gray-800 text-white p-4 md:hidden">
//         <h2 className="text-xl font-bold">Admin Panel</h2>
//         <button onClick={() => setSidebarOpen(!sidebarOpen)}>
//           <Menu size={24} />
//         </button>
//       </div>

//       {/* Sidebar */}
//       <aside
//         className={`
//           bg-gray-800 text-white p-4 z-50 transition-all duration-300 ease-in-out
//           ${sidebarOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
//           overflow-hidden absolute w-full md:opacity-100 md:max-h-none md:relative md:w-60 md:block
//         `}
//       >
//         <h2 className="text-xl font-bold mb-6 hidden md:block">Admin Panel</h2>
//         <nav className="flex flex-col gap-2">
//           <Link to="contacts" onClick={() => setSidebarOpen(false)}>Contacts</Link>
//           <Link to="notifications" onClick={() => setSidebarOpen(false)}>Notifications</Link>
//           <Link to="subscribers" onClick={() => setSidebarOpen(false)}>Subscribers</Link>
//           <Link to="events" onClick={() => setSidebarOpen(false)}>Events</Link>
//           <Link to="gallery" onClick={() => setSidebarOpen(false)}>Gallery</Link>
//           <Link to="magazines" onClick={() => setSidebarOpen(false)}>Magazines</Link>
//           <Link to="profiles" onClick={()=> setSidebarOpen(false)}>Candidate Profiles</Link>
//            {/* ✅ Logout Button */}
//           <button
//             onClick={handleLogout}
//             className="text-left text-red-400 hover:text-red-600 mt-4"
//           >
//             Logout
//           </button> 
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 bg-gray-100 mt-16 md:mt-0">
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;






import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-20`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
          <nav className="space-y-2">
            <Link
              to="contacts"
              className="block px-4 py-2 rounded hover:bg-gray-700"
              onClick={() => setIsSidebarOpen(false)}
            >
              Contacts
            </Link>
            <Link
              to="notifications"
              className="block px-4 py-2 rounded hover:bg-gray-700"
              onClick={() => setIsSidebarOpen(false)}
            >
              Notifications
            </Link>
            <Link
              to="subscribers"
              className="block px-4 py-2 rounded hover:bg-gray-700"
              onClick={() => setIsSidebarOpen(false)}
            >
              Subscribers
            </Link>
            <Link
              to="events"
              className="block px-4 py-2 rounded hover:bg-gray-700"
              onClick={() => setIsSidebarOpen(false)}
            >
              Events
            </Link>
            <Link
              to="gallery"
              className="block px-4 py-2 rounded hover:bg-gray-700"
              onClick={() => setIsSidebarOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="magazines"
              className="block px-4 py-2 rounded hover:bg-gray-700"
              onClick={() => setIsSidebarOpen(false)}
            >
              Magazines
            </Link>
            <Link
              to="profiles"
              className="block px-4 py-2 rounded hover:bg-gray-700"
              onClick={() => setIsSidebarOpen(false)}
            >
              Matrimonial Profiles
            </Link>
            <Link
              to="bookings"
              className="block px-4 py-2 rounded hover:bg-gray-700"
              onClick={() => setIsSidebarOpen(false)}
            >
              Alandi Room Bookings
            </Link>
            <Link
              to="abhishek-bookings"
              className="block px-4 py-2 rounded hover:bg-gray-700"
              onClick={() => setIsSidebarOpen(false)}
            >
              Markandeya Abhishek Bookings
            </Link>
            <Link
              to="poshavvadevi-bookings"
              className="block px-4 py-2 rounded hover:bg-gray-700"
              onClick={() => setIsSidebarOpen(false)}
            >
              Poshavvadevi Abhishek Bookings
            </Link>
            <Link
              to="shitaladevi-bookings"
              className="block px-4 py-2 rounded hover:bg-gray-700"
              onClick={() => setIsSidebarOpen(false)}
            >
              Shitaladevi Abhishek Bookings
            </Link>
            <Link
              to="heads"
              className="block px-4 py-2 rounded hover:bg-gray-700"
              onClick={() => setIsSidebarOpen(false)}
            >
              Family Details
            </Link>
          </nav>
        </div>
        
        <div className="absolute px-14 left-4">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-10"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Toggle Button for Sidebar (Mobile) */}
        <div className="md:hidden p-4 bg-gray-100">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-4 sm:p-6 overflow-x-hidden min-w-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
