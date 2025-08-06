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




// WORKING
// import React, { useState } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import { Menu, X } from 'lucide-react'; // Mobile menu icons
// import { useTranslation } from 'react-i18next';

// // import 'indexx.css'

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const location = useLocation();
//   const currentPath = location.pathname;
//   const { t, i18n } = useTranslation();

//   const toTitleCase = (str) => {
//   if (!str) return '';
//   return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
// };


//   const menuItems = [
//     { name: 'Home', path: '/' },
//     {
//           name: 'About',
//           path: '/about',
//           dropdown: true,
//           // viewOnly: true,
//           children: [
//             { name: 'Pune Shahar Padmashali Yuvajan Sangham', path: '/about/YuvajanSangh'},
//             { name: 'Bhavana Rushi Senior Citizens Club', path: '/about/SeniorCitizen' },
//             { name: 'Senior Counselling Club', path: '/about/CounsellingClub' },
//             { name: 'Padmashali Vadhu Var Suchak Mandal', path: '/about/VadhuVarMandal' },
//             { name: 'Shikshan Sanstha', path: '/about/ShikshanSanstha' },
//             { name: 'Mahila Mandali', path: '/about/MahilaMandal' },
//             { name: 'Purohit Sangh', path: '/about/PurohitSangh' },
//             { name: 'Temple Committee', path: '/about/TempleCommittee' }
//           ]
//         },
//     // { name: 'About Us', path: '/about' },
//     { name: 'Gallery', path: '/gallery' },
//     {
//       name: 'Online Services',
//       path: '/onlineServices',
//       dropdown: true,
//       children: [
//         { name: 'Pune Padmashali Member Registration', path: '/onlineServices/memberRegistraion' },
//         { name: 'Alandi Dharmashala Room Bookings', path: '/onlineServices/alandiRoomBooking' },
//         { name: 'Markandeya Abhishek', path: '/onlineServices/markandeyaAbhishek' },
//         { name: 'Poshavvadevi Abhishek', path: '/onlineServices/poshavvadeviAbhishek' },
//         { name: 'Shitaladevi Abhishek', path: '/onlineServices/shitaladeviAbhishek' },
//       ],
//     },
//     {name: 'Matrimonials', path: '/matrimonials' },
//     {name: 'Management Team', path:'/managementTeam'},
//     {name: 'Magazines', path: '/magazines' },
//     {name: 'Employment', path: '/career'},
//     {name: 'Contact', path: '/contact' },
//   ];

//   return (
//     <div className="w-full">

//                    {/* Top Info Bar */}
//                    {/* style={{color: '#5d001e'}} */}
//   <div className="info bg-white text-xs md:text-sm font-medium py-1  border-gray-300" style={{color: '#5d001e'}}>
//     <div className="container mx-auto px-4 flex justify-between items-center text-center">
//       <span className="w-1/3 text-left">Established on 1935</span>
//       <span className="w-1/3 text-center pl-16">॥ श्री मार्कंडेय प्रसन्न ॥</span>
//       <span className="w-1/3 text-right">Reg. No. A1321</span>
//     </div>
//   </div>

//       {/* Header */}
//       <header className="title bg-white shadow-md p-4 flex items-center justify-between flex-wrap" style={{paddingLeft:'30%'}}>
//         {/* Logo */}
//         <div className="flex pl-135%">
//           <img
//             src="/logo5.png"
//             alt="Logo"
//             className="w-30 h-27 object-contain"
//           />
//         </div>

//         {/* Title */}
//         <div className="flex-1 hidden md:block">
//           {/* style={{color: '#5d001e'}} */}
//           <h1 className="title-marathi text-xl md:text-4xl font-bold mb-2" style={{color: '#5d001e'}}>पद्मशाली पंच कमिटी,पुणे</h1>  
//           <h1 className="text-xl md:text-3xl font-bold" style={{color:'#EE4C7C'}}>పద్మశాలి పంచ్ కమిటి (పూణె)</h1>
//           <h3 className="title-english text-base md:text-3xl font-bold" style={{color: '#5d001e'}}>PADMASHALI PANCH COMMITTEE, PUNE</h3>
//           {/*  style={{color: '#5d001e'}} */}
//           <p className="text-xs md:text-sm text-gray-600">
//             1124 Bhavani Peth, Shri Padmashali Vitthal Rakhumai Mandir, Padmashali Puram, Pune 411042.
//           </p>
//         </div>

      
//         {/* Language Selector */}
//         <select className='lang' onChange={(e) => i18n.changeLanguage(e.target.value)} value={i18n.language} style={{color: '#5d001e'}}>
//           <option value="en">English</option>
//           <option value="mr">मराठी</option>
//         </select>

//         {/* Mobile Toggle Button */}
//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)} className="text-orange-600">
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </header>

//       {/* Desktop Navbar */}
//       <nav className="navbar hidden md:block">
//         {/* style={{background:'#9A1750'}} */}
//         <ul className="navbar-text flex justify-center space-x-6 py-3 text-sm md:text-base font-medium relative">
//           {menuItems.map((item) => (
//             <li key={item.name} className="relative group"
//               onMouseEnter={() => setOpenDropdown(item.name)}
//               onMouseLeave={() => setOpenDropdown(null)}
//             >
//               {!item.dropdown ? (
//                 <NavLink
//                   to={item.path}
//                   className={({ isActive }) =>
//                     `cursor-pointer pb-1 transition-all ${
//                       isActive || currentPath === item.path
//                         ? 'border-b-2 border-gray-800'
//                         : 'hover:border-b-2 hover:border-gray-800'
//                     }`
//                   }
//                 >
//                   {/* {t(item.name).toUpperCase()} */}
//                   {toTitleCase(t(item.name))}
//                 </NavLink>
//               ) : (
//                 <>
//                   {/* <span className="cursor-pointer pb-1 hover:border-b-2 hover:border-gray-800">
//                     {t(item.name).toUpperCase()}
//                   </span> */}
//                   <NavLink
//                     to={item.path}
//                     className={({ isActive }) =>
//                       `cursor-pointer pb-1 transition-all ${
//                         isActive || currentPath === item.path
//                           ? 'border-b-2 border-gray-800'
//                           : 'hover:border-b-2 hover:border-gray-800'
//                       }`
//                     }
//                   >
//                     {/* {t(item.name).toUpperCase()} */}
//                     {toTitleCase(t(item.name))}
//                   </NavLink>

                  
//                   {/* Dropdown on hover */}
//                   <ul className="absolute left-1/2 transform -translate-x-1/2 top-full left-0 mt-2 w-72 bg-white text-black shadow-lg hidden group-hover:flex flex-col z-50 rounded-md transition-all duration-200 ease-in-out">
//                     {/* absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 bg-white text-black shadow-lg hidden group-hover:flex flex-col z-50 */}
//                     {/* absolute left-0 z-10 mt-2 w-72 bg-white text-black shadow-lg flex-col opacity-0 group-hover:opacity-100 group-hover:block hidden group-hover:flex-col transition duration-200 */}
//                     {/* {item.children.map((child) => (
//                       <li key={child.name}>
//                         <NavLink
//                           to={child.path}
//                           className="block px-4 py-2 hover:bg-orange-100"
//                         >
//                           {t(child.name)}
//                         </NavLink>
//                       </li>
//                     ))} */}
//                     {item.children.map((child) => (
//                       <li key={child.name}>
//                         {child.path ? (
//                           <NavLink
//                             to={child.path}
//                             className="block px-4 py-2 hover:bg-orange-100"
//                           >
//                             {t(child.name)}
//                           </NavLink>
//                         ) : (
//                           <span className="block px-4 py-2 text-gray-700">
//                             {t(child.name)}
//                           </span>
//                         )}
//                       </li>
//                     ))}

//                   </ul>
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <nav className="mobile-nav text-white md:hidden">
//           {/* style={{background:'#9A1750'}} */}
//           <ul className="flex flex-col items-center space-y-4 py-4">
//             {menuItems.map((item) => (
//               <li key={item.name} className="w-full text-center">
//                 {!item.dropdown ? (
//                   <NavLink
//                     to={item.path}
//                     className={({ isActive }) =>
//                       `block py-2 ${
//                         isActive || currentPath === item.path
//                           ? 'font-bold underline'
//                           : 'hover:underline'
//                       }`
//                     }
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     {t(item.name)}
//                   </NavLink>
//                 ) : (
//                   <>
//                   <NavLink
//                       to={item.path}
//                       className={({ isActive }) =>
//                         `block py-2 ${
//                           isActive || currentPath === item.path
//                             ? 'font-bold underline'
//                             : 'hover:underline'
//                         }`
//                       }
//                       onClick={() => setMenuOpen(false)}
//                     >
//                       {t(item.name)}
//                   </NavLink>

//                     {/* <span className="block py-2 font-semibold underline">
//                       {t(item.name)}
//                     </span> */}
//                     <ul className="space-y-2">
//                       {/* {item.children.map((child) => (
//                         <li key={child.name}>
//                           <NavLink
//                             to={child.path}
//                             className="block text-sm text-white hover:underline"
//                             onClick={() => setMenuOpen(false)}
//                           >
//                             {t(child.name)}
//                           </NavLink>
//                         </li>
//                       ))} */}
//                       {item.children.map((child) => (
//                     <li key={child.name}>
//                       {child.path ? (
//                         <NavLink
//                           to={child.path}
//                           className={({isActive}) => `block text-sm text-white ${isActive || currentPath === child.path ? 'font-bold underline' : 'hover:underline'}`
//                          }
//                           onClick={() => setMenuOpen(false)}
//                         >
//                           {t(child.name)}
//                         </NavLink>
//                       ) : (
//                         <span className="block text-sm text-white opacity-80">
//                           {t(child.name)}
//                         </span>
//                       )}
//                     </li>
//                   ))}

//                     </ul>
//                   </>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </nav>
//       )}
//     </div>
//   );
// };

// export default Navbar;
// *****

// LAST WORKI **** 
import React, { useState, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const closeTimeout = useRef(null); // For delay
  const location = useLocation();
  const currentPath = location.pathname;
  const { t, i18n } = useTranslation();

  const toTitleCase = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    {
      name: 'About',
      path: '/about',
      dropdown: true,
      children: [
        { name: 'Pune Shahar Padmashali Yuvajan Sangham', path: '/about/YuvajanSangh' },
        { name: 'Bhavana Rushi Senior Citizens club', path: '/about/SeniorCitizen' },
        { name: 'Senior Counselling Club', path: '/about/CounsellingClub' },
        { name: 'Padmashali Vadhu Var Suchak Mandal', path: '/about/VadhuVarMandal' },
        { name: 'Shikshan Sanstha', path: '/about/ShikshanSanstha' },
        { name: 'Mahila Mandali', path: '/about/MahilaMandal' },
        { name: 'Purohit Sangh', path: '/about/PurohitSangh' },
        { name: 'Temple Committee', path: '/about/TempleCommittee' }
      ]
    },
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
    { name: 'Management Team', path: '/managementTeam' },
    { name: 'Magazines', path: '/magazines' },
    { name: 'Employment', path: '/career' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="w-full">

      {/* Top Info Bar */}
      <div className="info bg-white text-xs md:text-sm font-medium py-1  border-gray-300" style={{ color: '#5d001e' }}>
        <div className="container mx-auto px-4 flex justify-between items-center text-center">
          <span>{t('Established on 1935')}</span>
          <span className="text-center">॥ श्री मार्कंडेय प्रसन्न ॥</span>
          <span className="text-right">{t('Reg. No.')} {t('A')} 1321</span>
        </div>
      </div>

      {/* Header */}
      <div>
      <header className="title bg-white shadow-md p-4 flex items-center justify-between flex-wrap" style={{paddingLeft: '30%'}}>
        <div className='flex pl-135%'>
          <img src="/logo5.png" alt="Logo" className="w-30 h-27 object-contain" />
        </div>

        <div className="flex-1 hidden md:block">
          <h1 className="title-marathi text-xl md:text-4xl font-bold mb-2" style={{ color: '#5d001e' }}>पद्मशाली पंच कमिटी,पुणे</h1>
          <h1 className="text-xl md:text-3xl font-bold" style={{ color: '#EE4C7C' }}>పద్మశాలి పంచ్ కమిటి (పూణె)</h1>
          <h3 className="title-english text-base md:text-3xl font-bold" style={{ color: '#5d001e' }}>PADMASHALI PANCH COMMITTEE, PUNE</h3>
          <p className="text-sm text-gray-600">
            1124 Bhavani Peth, Shri Padmashali Vitthal Rakhumai Mandir, Padmashali Puram, Pune 411042.
          </p>
        </div>

        <select className="lang" onChange={(e) => i18n.changeLanguage(e.target.value)} value={i18n.language}>
          <option value="en">English</option>
          <option value="mr">मराठी</option>
        </select>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-orange-600">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>
    </div>
      {/* Sticky Desktop Navbar */}
      <nav className="navbar md:block shadow top-0 z-50">
        <ul className="flex justify-center space-x-6 py-3 font-medium relative">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="relative"
              onMouseEnter={() => {
                clearTimeout(closeTimeout.current);
                setOpenDropdown(item.name);
              }}
              onMouseLeave={() => {
                closeTimeout.current = setTimeout(() => {
                  setOpenDropdown(null);
                }, 200); // Delay 200ms
              }}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `pb-1 transition-all ${
                    isActive || currentPath === item.path
                      ? 'border-b-2 border-gray-800'
                      : 'hover:border-b-2 hover:border-gray-800'
                  }`
                }
              >
                {toTitleCase(t(item.name))}
              </NavLink>

              {/* Dropdown */}
              {item.dropdown && openDropdown === item.name && (
                <ul className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-72 bg-white text-black shadow-lg rounded-md z-50">
                  {item.children.map((child) => (
                    <li key={child.name}>
                      <NavLink
                        to={child.path}
                        className="block px-4 py-2 hover:bg-orange-100 text-md"
                      >
                        {t(child.name)}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="bg-[#5d001e] text-white md:hidden sticky top-0 z-50">
          <ul className="flex flex-col items-center py-4 space-y-2">
            {menuItems.map((item) => (
              <li key={item.name} className="w-full text-center">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block py-2 ${isActive || currentPath === item.path ? 'font-bold underline' : 'hover:underline'}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {t(item.name)}
                </NavLink>

                {item.dropdown && (
                  <ul className="mt-1 space-y-1">
                    {item.children.map((child) => (
                      <li key={child.name}>
                        <NavLink
                          to={child.path}
                          className="block text-sm text-white hover:underline"
                          onClick={() => setMenuOpen(false)}
                        >
                          {t(child.name)}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
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

// TITLE SHRINK IN THIS CODE )
// import React, { useState, useRef, useEffect } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';
// import { useTranslation } from 'react-i18next';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const closeTimeout = useRef(null); // For delay
//   const location = useLocation();
//   const currentPath = location.pathname;
//   const { t, i18n } = useTranslation();
//   const [isScrolled, setIsScrolled] = useState(false);


//   useEffect(() => {
//   const handleScroll = () => {
//     setIsScrolled(window.scrollY > 80);
//   };
//   window.addEventListener('scroll', handleScroll);
//   return () => window.removeEventListener('scroll', handleScroll);
// }, []);


//   const toTitleCase = (str) => {
//     if (!str) return '';
//     return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
//   };

//   const menuItems = [
//     { name: 'Home', path: '/' },
//     {
//       name: 'About',
//       path: '/about',
//       dropdown: true,
//       children: [
//         { name: 'Pune Shahar Padmashali Yuvajan Sangham', path: '/about/YuvajanSangh' },
//         { name: 'Bhavana Rushi Senior Citizens club', path: '/about/SeniorCitizen' },
//         { name: 'Senior Counselling Club', path: '/about/CounsellingClub' },
//         { name: 'Padmashali Vadhu Var Suchak Mandal', path: '/about/VadhuVarMandal' },
//         { name: 'Shikshan Sanstha', path: '/about/ShikshanSanstha' },
//         { name: 'Mahila Mandali', path: '/about/MahilaMandal' },
//         { name: 'Purohit Sangh', path: '/about/PurohitSangh' },
//         { name: 'Temple Committee', path: '/about/TempleCommittee' }
//       ]
//     },
//     { name: 'Gallery', path: '/gallery' },
//     {
//       name: 'Online Services',
//       path: '/onlineServices',
//       dropdown: true,
//       children: [
//         { name: 'Pune Padmashali Member Registration', path: '/onlineServices/memberRegistraion' },
//         { name: 'Alandi Dharmashala Room Bookings', path: '/onlineServices/alandiRoomBooking' },
//         { name: 'Markandeya Abhishek', path: '/onlineServices/markandeyaAbhishek' },
//         { name: 'Poshavvadevi Abhishek', path: '/onlineServices/poshavvadeviAbhishek' },
//         { name: 'Shitaladevi Abhishek', path: '/onlineServices/shitaladeviAbhishek' },
//       ],
//     },
//     { name: 'Matrimonials', path: '/matrimonials' },
//     { name: 'Management Team', path: '/managementTeam' },
//     { name: 'Magazines', path: '/magazines' },
//     { name: 'Employment', path: '/career' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   return (
//     <div className="w-full">

//       {/* Top Info Bar */}
//       <div className="info bg-white text-xs md:text-sm font-medium py-1  border-gray-300" style={{ color: '#5d001e' }}>
//         <div className="container mx-auto px-4 flex justify-between items-center text-center">
//           <span>{t('Established on 1935')}</span>
//           <span className="text-center">॥ श्री मार्कंडेय प्रसन्न ॥</span>
//           <span className="text-right">{t('Reg. No.')} {t('A')} 1321</span>
//         </div>
//       </div>

//       {/* Header */}
//       <div>
//       <header className={`title bg-white shadow-md flex items-center justify-between flex-wrap transition-all duration-500 ${ isScrolled ? 'p-2' : 'p-4'}`} style={{paddingLeft: '30%'}}>
//         <div className='flex pl-135%'>
//           <img src="/logo5.png" alt="Logo" className={`object-contain transition-all duration-500 ${ isScrolled ? 'w-16 h-16': 'w-28 h-24'}`}  />
//         </div>

//         <div className="flex-1 hidden md:block">
//           <h1 className={`title-marathi transition-all font-bold mb-2 duration-500 isScrolled ? 'text-lg' : 'text-xl md:text-4xl'}`} style={{ color: '#5d001e' }}>पद्मशाली पंच कमिटी,पुणे</h1>
//           <h1 className="text-xl md:text-3xl font-bold" style={{ color: '#EE4C7C' }}>పద్మశాలి పంచ్ కమిటి (పూణె)</h1>
//           <h3 className="title-english text-base md:text-3xl font-bold" style={{ color: '#5d001e' }}>PADMASHALI PANCH COMMITTEE, PUNE</h3>
//           <p className="text-sm text-gray-600">
//             1124 Bhavani Peth, Shri Padmashali Vitthal Rakhumai Mandir, Padmashali Puram, Pune 411042.
//           </p>
//         </div>

//         <select className="lang" onChange={(e) => i18n.changeLanguage(e.target.value)} value={i18n.language}>
//           <option value="en">English</option>
//           <option value="mr">मराठी</option>
//         </select>

//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)} className="text-orange-600">
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </header>
//     </div>
//       {/* Sticky Desktop Navbar */}
//       <nav className="navbar sticky bg-white shadow top-0 z-50">
//         <ul className="flex justify-center space-x-6 py-3 font-medium relative">
//           {menuItems.map((item) => (
//             <li
//               key={item.name}
//               className="relative"
//               onMouseEnter={() => {
//                 clearTimeout(closeTimeout.current);
//                 setOpenDropdown(item.name);
//               }}
//               onMouseLeave={() => {
//                 closeTimeout.current = setTimeout(() => {
//                   setOpenDropdown(null);
//                 }, 200); // Delay 200ms
//               }}
//             >
//               <NavLink
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `pb-1 transition-all ${
//                     isActive || currentPath === item.path
//                       ? 'border-b-2 border-gray-800'
//                       : 'hover:border-b-2 hover:border-gray-800'
//                   }`
//                 }
//               >
//                 {toTitleCase(t(item.name))}
//               </NavLink>

//               {/* Dropdown */}
//               {item.dropdown && openDropdown === item.name && (
//                 <ul className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-72 bg-white text-black shadow-lg rounded-md z-50">
//                   {item.children.map((child) => (
//                     <li key={child.name}>
//                       <NavLink
//                         to={child.path}
//                         className="block px-4 py-2 hover:bg-orange-100 text-md"
//                       >
//                         {t(child.name)}
//                       </NavLink>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </nav>
//       {/* Mobile Menu */}
//       {menuOpen && (
//         <nav className="bg-[#5d001e] text-white md:hidden sticky top-0 z-50">
//           <ul className="flex flex-col items-center py-4 space-y-2">
//             {menuItems.map((item) => (
//               <li key={item.name} className="w-full text-center">
//                 <NavLink
//                   to={item.path}
//                   className={({ isActive }) =>
//                     `block py-2 ${isActive || currentPath === item.path ? 'font-bold underline' : 'hover:underline'}`
//                   }
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {t(item.name)}
//                 </NavLink>

//                 {item.dropdown && (
//                   <ul className="mt-1 space-y-1">
//                     {item.children.map((child) => (
//                       <li key={child.name}>
//                         <NavLink
//                           to={child.path}
//                           className="block text-sm text-white hover:underline"
//                           onClick={() => setMenuOpen(false)}
//                         >
//                           {t(child.name)}
//                         </NavLink>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </nav>
//       )}
//     </div>
//   );
// };

// export default Navbar;



// Fully Responsive working
// import React, { useState } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';
// import { useTranslation } from 'react-i18next';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();
//   const currentPath = location.pathname;
//   const { t, i18n } = useTranslation();

//   const toTitleCase = (str) => {
//     if (!str) return '';
//     return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
//   };

//   const menuItems = [
//     { name: 'Home', path: '/' },
//     {
//       name: 'About',
//       path: '/about',
//       dropdown: true,
//       children: [
//         { name: 'Pune Shahar Padmashali Yuvajan Sangham', path: '/about/YuvajanSangh' },
//         { name: 'Bhavana Rushi Senior Citizens Club', path: '/about/SeniorCitizen' },
//         { name: 'Senior Counselling Club', path: '/about/CounsellingClub' },
//         { name: 'Padmashali Vadhu Var Suchak Mandal', path: '/about/VadhuVarMandal' },
//         { name: 'Shikshan Sanstha', path: '/about/ShikshanSanstha' },
//         { name: 'Mahila Mandali', path: '/about/MahilaMandal' },
//         { name: 'Purohit Sangh', path: '/about/PurohitSangh' },
//         { name: 'Temple Committee', path: '/about/TempleCommittee' }
//       ]
//     },
//     { name: 'Gallery', path: '/gallery' },
//     {
//       name: 'Online Services',
//       path: '/onlineServices',
//       dropdown: true,
//       children: [
//         { name: 'Pune Padmashali Member Registration', path: '/onlineServices/memberRegistraion' },
//         { name: 'Alandi Dharmashala Room Bookings', path: '/onlineServices/alandiRoomBooking' },
//         { name: 'Markandeya Abhishek', path: '/onlineServices/markandeyaAbhishek' },
//         { name: 'Poshavvadevi Abhishek', path: '/onlineServices/poshavvadeviAbhishek' },
//         { name: 'Shitaladevi Abhishek', path: '/onlineServices/shitaladeviAbhishek' },
//       ],
//     },
//     { name: 'Matrimonials', path: '/matrimonials' },
//     { name: 'Management Team', path: '/managementTeam' },
//     { name: 'Magazines', path: '/magazines' },
//     { name: 'Employment', path: '/career' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   return (
//     <div className="w-full">

//       {/* Top Info Bar */}
//       <div className="info bg-white text-xs md:text-sm font-medium py-1 border-gray-300 text-[#5d001e]">
//         <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center gap-y-1">
//           <span className="md:w-1/3 w-full text-center md:text-left">Established on 1935</span>
//           <span className="md:w-1/3 w-full text-center">॥ श्री मार्कंडेय प्रसन्न ॥</span>
//           <span className="md:w-1/3 w-full text-center md:text-right">Reg. No. A1321</span>
//         </div>
//       </div>

//       {/* Header */}
//       <header className="bg-white shadow-md py-4">
//         <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <img src="/logo5.png" alt="Logo" className="w-24 h-auto object-contain" />
//           </div>

//           {/* Title */}
//           <div className="text-center flex-grow">
//             <h1 className="text-xl md:text-3xl font-bold text-[#5d001e]">पद्मशाली पंच कमिटी,पुणे</h1>  
//             <h1 className="text-xl md:text-3xl font-bold text-[#EE4C7C]">పద్మశాలి పంచ్ కమిటి (పూణె)</h1>
//             <h3 className="text-base md:text-3xl font-bold text-[#5d001e]">PADMASHALI PANCH COMMITTEE, PUNE</h3>
//             <p className="text-xs md:text-sm text-gray-600">
//               1124 Bhavani Peth, Shri Padmashali Vitthal Rakhumai Mandir, Padmashali Puram, Pune 411042.
//             </p>
//           </div>

//           {/* Language Selector + Toggle */}
//           <div className="flex items-center space-x-2">
//             <select
//               className="border px-2 py-1 rounded text-[#5d001e]"
//               onChange={(e) => i18n.changeLanguage(e.target.value)}
//               value={i18n.language}
//             >
//               <option value="en">English</option>
//               <option value="mr">मराठी</option>
//             </select>

//             {/* Mobile Toggle */}
//             <div className="md:hidden">
//               <button onClick={() => setMenuOpen(!menuOpen)} className="text-orange-600">
//                 {menuOpen ? <X size={28} /> : <Menu size={28} />}
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Desktop Navbar */}
//       <nav className="hidden md:block bg-[#9A1750]">
//         <div className="max-w-7xl mx-auto px-4">
//           <ul className="flex justify-center flex-wrap gap-6 py-3 text-sm md:text-base text-white">
//             {menuItems.map((item) => (
//               <li key={item.name} className="relative group">
//                 {!item.dropdown ? (
//                   <NavLink
//                     to={item.path}
//                     className={({ isActive }) =>
//                       `cursor-pointer pb-1 transition-all ${
//                         isActive || currentPath === item.path
//                           ? 'border-b-2 border-gray-100'
//                           : 'hover:border-b-2 hover:border-gray-100'
//                       }`
//                     }
//                   >
//                     {toTitleCase(t(item.name))}
//                   </NavLink>
//                 ) : (
//                   <>
//                     <NavLink
//                       to={item.path}
//                       className={({ isActive }) =>
//                         `cursor-pointer pb-1 transition-all ${
//                           isActive || currentPath === item.path
//                             ? 'border-b-2 border-gray-100'
//                             : 'hover:border-b-2 hover:border-gray-100'
//                         }`
//                       }
//                     >
//                       {toTitleCase(t(item.name))}
//                     </NavLink>

//                     {/* Dropdown */}
//                     <ul className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 bg-white text-black shadow-lg hidden group-hover:flex flex-col z-50">
//                       {item.children.map((child) => (
//                         <li key={child.name}>
//                           {child.path ? (
//                             <NavLink
//                               to={child.path}
//                               className="block px-4 py-2 hover:bg-orange-100"
//                             >
//                               {t(child.name)}
//                             </NavLink>
//                           ) : (
//                             <span className="block px-4 py-2 text-gray-700">
//                               {t(child.name)}
//                             </span>
//                           )}
//                         </li>
//                       ))}
//                     </ul>
//                   </>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <nav className="text-white md:hidden bg-[#9A1750]">
//           <ul className="flex flex-col items-center space-y-4 py-4 px-4">
//             {menuItems.map((item) => (
//               <li key={item.name} className="w-full text-center">
//                 {!item.dropdown ? (
//                   <NavLink
//                     to={item.path}
//                     className={({ isActive }) =>
//                       `block py-2 ${
//                         isActive || currentPath === item.path
//                           ? 'font-bold underline'
//                           : 'hover:underline'
//                       }`
//                     }
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     {t(item.name)}
//                   </NavLink>
//                 ) : (
//                   <>
//                     <NavLink
//                       to={item.path}
//                       className={({ isActive }) =>
//                         `block py-2 ${
//                           isActive || currentPath === item.path
//                             ? 'font-bold underline'
//                             : 'hover:underline'
//                         }`
//                       }
//                       onClick={() => setMenuOpen(false)}
//                     >
//                       {t(item.name)}
//                     </NavLink>

//                     <ul className="space-y-2">
//                       {item.children.map((child) => (
//                         <li key={child.name}>
//                           {child.path ? (
//                             <NavLink
//                               to={child.path}
//                               className={({ isActive }) =>
//                                 `block text-sm text-white ${
//                                   isActive || currentPath === child.path
//                                     ? 'font-bold underline'
//                                     : 'hover:underline'
//                                 }`
//                               }
//                               onClick={() => setMenuOpen(false)}
//                             >
//                               {t(child.name)}
//                             </NavLink>
//                           ) : (
//                             <span className="block text-sm text-white opacity-80">
//                               {t(child.name)}
//                             </span>
//                           )}
//                         </li>
//                       ))}
//                     </ul>
//                   </>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </nav>
//       )}
//     </div>
//   );
// };

// export default Navbar;
