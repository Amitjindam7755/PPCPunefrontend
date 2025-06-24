// import React from 'react';
// import {assets} from '../../assets/assets'
// import { Link } from 'react-router-dom';

// const Footer = () => {


//   return (
//     <div className="bg-gray-800 text-gray-300 flex flex-col items-center gap-6 px px-4 md:px-16 py-10 ">
//       {/* Footer Content */}
//       <div className="w-full grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 md:gap-20">
//         {/* Left Section */}
//         <div className="flex flex-col items-start gap-6">
//           {/* <img
//             src="https://storage.googleapis.com/a1aa/image/3b165905-ee75-4a1e-b4f0-e0712822e87a.jpg"
//             alt="Logo"
//             className="w-16 h-16 object-contain"
//           /> */}
//           <p></p>
//           <div className="flex gap-4">
//             <img
//               src={assets.facebook_icon}
//               alt="Facebook"
//               className="w-10 h-10 cursor-pointer"
//             />
//             <img
//               src={assets.twitter_icon}
//               alt="Twitter"
//               className="w-10 h-10 cursor-pointer"
//             />         
//           </div>
//         </div>

//         {/* map */}
//         <div className="mb-4 md:mb-0">
//           <h2 className="text-lg font-bold mb-2">Our Location</h2>
//           <div className="w-full h-64">
//             <iframe
//               title="Padmashali Panch Committee Location"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15133.247982366205!2d73.8478910652052!3d18.51479799238132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c041a000157f%3A0xf3146745b2eef860!2sShri%20Vithhal%20Rakhumai%20Mandir!5e0!3m2!1sen!2sin!4v1750243667982!5m2!1sen!2sin"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>
//         </div>

//         {/* Center Section */}
//         <div className="flex flex-col items-start gap-6">
//           <h2 className="text-white text-xl md:text-2xl font-semibold">PADMASHALI</h2>
//           <ul className="flex flex-col gap-3">
//             <li className="cursor-pointer hover:underline"><Link to="/">Home</Link></li>
//             <li className="cursor-pointer hover:underline"><Link to="/about">About Us</Link></li>
//             <li className="cursor-pointer hover:underline">Privacy Policy</li>
//           </ul>
//         </div>

//         {/* Right Section */}
//         <div className="flex flex-col items-start gap-6">
//           <h2 className="text-white text-xl md:text-2xl font-semibold">GET IN TOUCH</h2>
//           <ul className="flex flex-col gap-3">
//             <li className='text-wrap'>1124 Bhavani Peth, Shri Padmashali Vitthal Rakhumai Mandir, Padmashali Puram, Pune 411042.</li>
//             <li>+1-212-456-7890</li>
//             <li>contact@ignitel.com</li>
//           </ul>
//         </div>
//       </div>

//       {/* Divider */}
//       <hr className="w-full h-0.5 bg-gray-500 border-none my-6" />

//       {/* Copyright */}
//       <p className="text-center text-sm">
//         Copyright 2025 © Developed By Ignitel.com - All Rights Reserved.
//       </p>
//     </div>
//   );
// };

// export default Footer;



import React from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import VisitCounter from '../../VisitCounter';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-gray-300 flex flex-col items-center gap-6 px-4 md:px-16 py-10">
      {/* Footer Content */}
      <div className="w-full grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 md:gap-20">
        
        {/* Left Section: Icons + Map */}
        <div className="flex flex-col items-start gap-6 mt-3">
          {/* Social Icons */}
          <div className="flex gap-4">
            <img
              src={assets.facebook_icon}
              alt="Facebook"
              className="w-10 h-10 cursor-pointer"
            />
            <img
              src={assets.twitter_icon}
              alt="Twitter"
              className="w-10 h-10 cursor-pointer"
            />
          </div>

          {/* Google Map */}
          <div className="w-full h-64">
            <h2 className="text-lg font-bold mb-2">Our Location</h2>
            <iframe
              title="Padmashali Panch Committee Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15133.247982366205!2d73.8478910652052!3d18.51479799238132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c041a000157f%3A0xf3146745b2eef860!2sShri%20Vithhal%20Rakhumai%20Mandir!5e0!3m2!1sen!2sin!4v1750243667982!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* Center Section: Navigation */}
        <div className="flex flex-col items-start gap-6">
          <h2 className="text-white text-xl md:text-2xl font-semibold">PADMASHALI</h2>
          <ul className="flex flex-col gap-3">
            <li className="cursor-pointer hover:underline"><Link to="/">Home</Link></li>
            <li className="cursor-pointer hover:underline"><Link to="/about">About Us</Link></li>
            <li className="cursor-pointer hover:underline"><Link to="/privacy-policy" className='underline block'>Privacy Policy</Link></li>
              <div id="google_translate_element"></div>
          </ul>
        </div>

        {/* Right Section: Contact Info */}
          <div className="flex flex-col items-start gap-6">
            <h2 className="text-white text-xl md:text-2xl font-semibold">GET IN TOUCH</h2>
            <ul className="flex flex-col gap-3">
              <li className="text-wrap">
                1124 Bhavani Peth, Shri Padmashali Vitthal Rakhumai Mandir, Padmashali Puram, Pune 411042.
              </li>
              <li>+1-212-456-7890</li>
              <li>contact@ignitel.com</li>
            </ul>
            {/* <VisitCounter/> */}
          </div>
      </div>
      {/* <div className='flex flex-col ml-[900px] pb-10 justify-end'>
        <LiveUserCounter/>
      </div> */}
       {/* Divider */}
       <hr className="w-full h-0.5 bg-gray-500 border-none my-4" />

      {/* Copyright */}
      <p className="text-center text-sm">
        Copyright 2025 © Pune Padmashali Panch Committee | Developed By AJ Group of companies Pvt Ltd - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
