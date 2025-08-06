// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import { RiTwitterXFill } from "react-icons/ri";
// import { SlSocialFacebook } from "react-icons/sl";
// import axios from 'axios';

// const VerticalFooter = () => {
//   const { t } = useTranslation();

//   return (
//     <div className="bg-gray-800 text-gray-300 flex flex-col items-center gap-6 px-4 md:px-16 py-10">
//       <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        
//         {/* Right Section: Contact Info */}
//           <div className="flex flex-col items-start gap-6">
//             <h2 className="text-white text-xl md:text-2xl font-semibold">{t('Contact Information')}</h2>
//             <ul className="flex flex-col gap-3">
//               <li className="text-wrap">
//                 {t('1124 Bhavani Peth, Shri Padmashali Vitthal Rakhumai Mandir, Padmashali Puram, Pune 411042.')}
//               </li>
//               <li>+1-212-456-7890</li>
//               <li>contact@ignitel.com</li>
//             </ul>
//             {/* <VisitCounter/> */}
//           </div>

//         {/* Map */}
//           <div className="w-full h-64">
//             <h2 className="text-lg font-bold mb-2">Our Location</h2>
//             <iframe
//               title="Padmashali Panch Committee Location"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15133.247982366205!2d73.8478910652052!3d18.51479799238132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c041a000157f%3A0xf3146745b2eef860!2sShri%20Vithhal%20Rakhumai%20Mandir!5e0!3m2!1sen!2sin!4v1750243667982!5m2!1sen!2sin"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//           </div>


//         {/* LEFT: Footer Info */}
//         <div className="flex flex-col gap-6">
//           {/* Social icons */}
//           <div className="flex gap-4">
//             <SlSocialFacebook className="w-10 h-10 cursor-pointer" />
//             <RiTwitterXFill className="w-10 h-10 cursor-pointer" />
//           </div>

          
//           {/* Links */}
//           <div className="flex flex-col gap-2">
//             <Link to="/" className="hover:underline">{t('Home')}</Link>
//             <Link to="/about" className="hover:underline">{t('About Us')}</Link>
//             <Link to="/privacy-policy" className="hover:underline">{t('Privacy Policy')}</Link>
//           </div>
//         </div>

//       </div>

//       {/* Divider */}
//       <hr className="w-full h-0.5 bg-gray-500 border-none my-4" />

//       {/* Copyright */}
//       <p className="text-center text-sm font-semibold">
//         Copyright 2025 © Pune Padmashali Panch Committee | Developed By AJ Group of companies Pvt Ltd - All Rights Reserved.
//       </p>
//     </div>
//   );
// };

// export default VerticalFooter;


import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RiTwitterXFill } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";
import { Mail, MapPin, Phone } from 'lucide-react';

const VerticalFooter = () => {
  const { t } = useTranslation();

  return (
    <div className=" text-gray-700 flex flex-col items-center gap-6 px-4 md:px-16 py-10">
      
      {/* Contact Info */}
      <div className="w-full flex text-wrap text-start flex-col gap-3">
        <h2 className="text-xl md:text-2xl font-semibold">{t('Contact Information')}</h2>
        <p>{t('1124 Bhavani Peth, Shri Padmashali Vitthal Rakhumai Mandir,')}</p>
        <p>{t('Padmashali Puram,')}</p>
        <p>{t('Pune 411042.')}</p>
        <span className='flex w-full gap-1'>
          <Phone size={17} strokeWidth={0.75}  className='mt-1'/> 
          {/* <p>+1-212-456-7890</p> */}
          <a href="tel:+12124567890" className="hover:underline">+1-212-456-7890</a>
        </span>
        <span className='flex w-full gap-1'>
          <Mail size={16} strokeWidth={0.75} className='mt-1'/>
        {/* <p>contact@ignitel.com</p> */}
        <a href="mailto:contact@ignitel.com" className="hover:underline">contact@ignitel.com</a>
        </span>
      </div>

      <div className='w-full max-w-lg mt-5'>
          <h2 className="text-xl md:text-2xl font-semibold pb-4">{t('Follow Us On')}</h2>
            {/* Social Icons */}
              <div className="flex text-wrap gap-4">
                  <a
                    href="https://www.facebook.com/padmashalisamajpune/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                  >
                  <SlSocialFacebook className="w-6 h-6 cursor-pointer" />
                </a>
                <a
                  href="https://twitter.com/your-twitter-handle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black"
                >
                  <RiTwitterXFill className="w-6 h-6 cursor-pointer" />
                </a>
              </div>
      </div>
      {/* Map */}
      <div className="w-full max-w-lg h-64">
        <span className='flex'>
          <h2 className="text-xl md:text-2xl font-semibold pb-4 flex">{t('Our Location')}</h2>
          <MapPin size={21} strokeWidth={2.5} className='ml-2 mt-1' />
        </span>
        {/* text-lg font-bold mb-2 */}
        <iframe
          title="Padmashali Panch Committee Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15133.247982366205!2d73.8478910652052!3d18.51479799238132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c041a000157f%3A0xf3146745b2eef860!2sShri%20Vithhal%20Rakhumai%20Mandir!5e0!3m2!1sen!2sin!4v1750243667982!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>


      {/* Navigation Links */}
      <div className="flex flex-col items-center gap-2 py-7">
        {/* <Link to="/" className="hover:underline">{t('Home')}</Link>
        <Link to="/about" className="hover:underline">{t('About Us')}</Link> */}
        <Link to="/privacy-policy" className="hover:underline">{t('Privacy Policy')}</Link>
      </div>


      {/* Divider */}
      {/* <hr className="w-full h-0.5 bg-gray-300 border-none my-4" /> */}

      {/* Copyright */}
      {/* <p className="text-center text-sm font-semibold text-gray-600">
        Copyright 2025 © Pune Padmashali Panch Committee | Developed By AJ Group of companies Pvt Ltd - All Rights Reserved.
      </p> */}
    </div>
  );
};

export default VerticalFooter;
