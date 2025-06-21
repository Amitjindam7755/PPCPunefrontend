// import React, { useState } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import { Menu, X } from 'lucide-react'; // install lucide-react icons or use your own
// import { useTranslation } from 'react-i18next';


// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();
//   const currentPath = location.pathname;
//   const {t, i18n} = useTranslation();
 

//   const menuItems = [
//     { name: 'Home', path: '/' },
//     { name: 'About Us', path: '/about' },
//     { name: 'Gallery', path: '/gallery' },
//     { name: 'OnlineServices', path: '/onlineServices' },
//     { name: 'Matrimonials', path: '/matrimonials' },
//     { name: 'Magazines', path: '/magazines' },
//     { name: 'Contact', path: '/contact' }
//   ];

//   return (
//     <div className="w-full">
//       {/* Header */}
//       <header className="bg-white shadow-md p-4 flex items-center justify-between flex-wrap">
//         <div className="flex items-center">
//           <img
//             src="/logo.png"
//             alt="Logo"
//             className="w-24 h-27 object-contain"
//           />
//         </div>

//         <div className="text-center flex-1 hidden md:block">
//           <h1 className="text-xl md:text-2xl font-semibold text-purple-800">पद्मशाली पंच कमिटी</h1>
//           <h1 className="text-xl md:text-2xl font-bold text-red-600">పద్మశాలి పంచ్ కమిటి (పూణె)</h1>
//           <h3 className="text-base md:text-lg font-semibold text-purple-800">PADMASHALI PANCH COMMITTEE, PUNE</h3>
//           <p className="text-xs md:text-sm text-gray-600">
//             1124 Bhavani Peth, Shri Padmashali Vitthal Rakhumai Mandir, Padmashali Puram, Pune 411042. (Reg No. A1321)
//           </p>
//         </div>

//         <select onChange={(e) => i18n.changeLanguage(e.target.value)} value={i18n.language}>
//           <option value="en">English</option>
//           <option value="hi">हिंदी</option>
//           <option value="mr">मराठी</option>
//           <option value="te">తెలుగు</option>
//           <option value="kn">ಕನ್ನಡ</option>
//           <option value="ta">தமிழ்</option>
//           <option value="gu">ગુજરાતી</option>
//           <option value="es">español</option>
//           <option value="fr">le français</option>
//           <option value="ru">русский</option>
//           <option value="ja">日本語</option>
//         </select>

//         {/* <select value={language} onChange={(e) => setLanguage(e.target.value)}>
//         {Object.keys(require('../../data.json')).map((lang) => (
//           <option key={lang} value={lang}>
//             {lang}
//           </option>
//         ))}
//       </select> */}


//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)} className="text-orange-600">
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </header>

//       {/* Desktop Navigation */}
//       <nav className="bg-orange-500 text-white hidden md:block">
//         <ul className="flex justify-center space-x-6 py-3 text-sm md:text-base">
//           {menuItems.map((item) => (
//             <li key={item.name}>
//               <NavLink
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `cursor-pointer pb-1 transition-all ${
//                     isActive || currentPath === item.path
//                       ? 'border-b-2 border-gray-800'
//                       : 'hover:border-b-2 hover:border-gray-800'
//                   }`
//                 }
//               >
//                 {t(item.name).toUpperCase()}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* Mobile Slide-in Navigation */}
//       {menuOpen && (
//         <nav className="bg-orange-500 text-white md:hidden">
//           <ul className="flex flex-col items-center space-y-4 py-4">
//             {menuItems.map((item) => (
//               <li key={item.name}>
//                 <NavLink
//                   to={item.path}
//                   className={({ isActive }) =>
//                     `block py-2 ${
//                       isActive || currentPath === item.path
//                         ? 'font-bold underline'
//                         : 'hover:underline'
//                     }`
//                   }
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {t(item.name)}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       )}
//     </div>
//   );
// };

// export default Navbar;





import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Mobile menu icons
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const { t, i18n } = useTranslation();

  const menuItems = [
    { name: 'Home', path: '/' },
    {
          name: 'Abous Us',
          path: '/about',
          dropdown: true,
          // viewOnly: true,
          children: [
            { name: 'Pune Shahar Padmashali Yuvajan Sangham' },
            { name: 'Bhavana Rushi Senior Citizens Club' },
            { name: 'Senior Counselling Club' },
            { name: 'Padmashali Vadhu Var Suchak Mandal' },
            { name: 'Shikshan Sanstha' },
            { name: 'Mahila Mandali' },
            { name: 'Purohit Sangh' },
            { name: 'Temple Committee' }
          ]
        },
    // { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    {
      name: 'Online Services',
      path: '/onlineServices',
      dropdown: true,
      children: [
        { name: 'Pune Padmashali Member Registration', path: '/onlineServices/memberRegistraion' },
        { name: 'Alandi Dharmashala Room Bookings', path: '/onlineServices/alandiRoomBooking' },
        { name: 'Markandeya Abhishek', path: '/onlineServices/markandeyaAbhishek' },
        { name: 'Poshavvadevi Abhishek', path: '/onlineServices/poshavvadeviAbhishek' },
        { name: 'Shitaladevi Abhishek', path: '/onlineServices/shitaladeviAbhishek' },
      ],
    },
    { name: 'Matrimonials', path: '/matrimonials' },
    {name: 'Management Team', path:'/managementTeam'},
    { name: 'Magazines', path: '/magazines' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="w-full">

                   {/* Top Info Bar */}
  <div className="bg-white text-red-800 text-xs md:text-sm font-medium py-1  border-gray-300">
    <div className="container mx-auto px-4 flex justify-between items-center text-center">
      <span className="w-1/3 text-left">Established on 1935</span>
      <span className="w-1/3 text-center pl-16">॥ श्री मार्कंडेय प्रसन्न ॥</span>
      <span className="w-1/3 text-right">Reg. No. A1321</span>
    </div>
  </div>

      {/* Header */}
      <header className="bg-white shadow-md p-4 flex items-center justify-between flex-wrap">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-24 h-27 object-contain"
          />
        </div>

        {/* Title */}
        <div className="text-center flex-1 hidden md:block">
          <h1 className="text-xl md:text-3xl font-semibold text-purple-800">पद्मशाली पंच कमिटी</h1>
          <h1 className="text-xl md:text-3xl font-bold text-red-800">పద్మశాలి పంచ్ కమిటి (పూణె)</h1>
          <h3 className="text-base md:text-3xl font-semibold text-purple-800">PADMASHALI PANCH COMMITTEE, PUNE</h3>
          <p className="text-xs md:text-sm text-gray-600">
            1124 Bhavani Peth, Shri Padmashali Vitthal Rakhumai Mandir, Padmashali Puram, Pune 411042.
          </p>
        </div>

        {/* Language Selector */}
        {/* <select onChange={(e) => i18n.changeLanguage(e.target.value)} value={i18n.language}>
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
          <option value="mr">मराठी</option>
          <option value="te">తెలుగు</option>
          <option value="kn">ಕನ್ನಡ</option>
          <option value="ta">தமிழ்</option>
          <option value="gu">ગુજરાતી</option>
        </select> */}

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-orange-600">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Desktop Navbar */}
      <nav className="bg-orange-500 text-white hidden md:block">
        <ul className="flex justify-center space-x-6 py-3 text-sm md:text-base">
          {menuItems.map((item) => (
            <li key={item.name} className="relative group">
              {!item.dropdown ? (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `cursor-pointer pb-1 transition-all ${
                      isActive || currentPath === item.path
                        ? 'border-b-2 border-gray-800'
                        : 'hover:border-b-2 hover:border-gray-800'
                    }`
                  }
                >
                  {t(item.name).toUpperCase()}
                </NavLink>
              ) : (
                <>
                  {/* <span className="cursor-pointer pb-1 hover:border-b-2 hover:border-gray-800">
                    {t(item.name).toUpperCase()}
                  </span> */}
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `cursor-pointer pb-1 transition-all ${
                        isActive || currentPath === item.path
                          ? 'border-b-2 border-gray-800'
                          : 'hover:border-b-2 hover:border-gray-800'
                      }`
                    }
                  >
                    {t(item.name).toUpperCase()}
                  </NavLink>

                  
                  {/* Dropdown on hover */}
                  <ul className="absolute left-0 z-10 mt-2 w-72 bg-white text-black shadow-lg opacity-0 group-hover:opacity-100 group-hover:block hidden group-hover:flex-col transition duration-200">
                    {/* {item.children.map((child) => (
                      <li key={child.name}>
                        <NavLink
                          to={child.path}
                          className="block px-4 py-2 hover:bg-orange-100"
                        >
                          {t(child.name)}
                        </NavLink>
                      </li>
                    ))} */}
                    {item.children.map((child) => (
                      <li key={child.name}>
                        {child.path ? (
                          <NavLink
                            to={child.path}
                            className="block px-4 py-2 hover:bg-orange-100"
                          >
                            {t(child.name)}
                          </NavLink>
                        ) : (
                          <span className="block px-4 py-2 text-gray-700">
                            {t(child.name)}
                          </span>
                        )}
                      </li>
                    ))}

                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="bg-orange-500 text-white md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {menuItems.map((item) => (
              <li key={item.name} className="w-full text-center">
                {!item.dropdown ? (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block py-2 ${
                        isActive || currentPath === item.path
                          ? 'font-bold underline'
                          : 'hover:underline'
                      }`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {t(item.name)}
                  </NavLink>
                ) : (
                  <>
                    <span className="block py-2 font-semibold underline">
                      {t(item.name)}
                    </span>
                    <ul className="space-y-2">
                      {/* {item.children.map((child) => (
                        <li key={child.name}>
                          <NavLink
                            to={child.path}
                            className="block text-sm text-white hover:underline"
                            onClick={() => setMenuOpen(false)}
                          >
                            {t(child.name)}
                          </NavLink>
                        </li>
                      ))} */}
                      {item.children.map((child) => (
                    <li key={child.name}>
                      {child.path ? (
                        <NavLink
                          to={child.path}
                          className="block text-sm text-white hover:underline"
                          onClick={() => setMenuOpen(false)}
                        >
                          {t(child.name)}
                        </NavLink>
                      ) : (
                        <span className="block text-sm text-white opacity-80">
                          {t(child.name)}
                        </span>
                      )}
                    </li>
                  ))}

                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;

