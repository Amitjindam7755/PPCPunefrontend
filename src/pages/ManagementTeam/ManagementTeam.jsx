// import { div, image } from 'framer-motion/client';
// import React from 'react'

// const ManagementTeam = () => {

//   const members = [
//   { name: "श्री रवींद्र महादेव रच्चा", role: "सरपंच", image:'frontend/public/members/Amit.jpg' },
//   { name: "श्री नंदकुमार गंगादास कुंदन", role: "विश्वस्त" },
//   { name: "श्री संजय शिवाजी चिलका", role: "विश्वस्त" },
//   { name: "श्री ज्ञानेश्वर रामचंद्र बोड्डू", role: "चिटणीस" },
//   { name: "श्री वसंतराव अनंतराव येमुल", role: "सल्लागार" },
//   { name: "श्री अशोक बलराम झंपाल", role: "सल्लागार" },
//   { name: "श्री भरत रामचंद्र शेरला", role: "सल्लागार" },
//   { name: "श्री राहुल दत्तात्रेय येमुल", role: "" },
//   { name: "श्री मनीष दत्तात्रय अंदे", role: "" },
//   { name: "श्री महेश ज्ञानेश्वर यमजाल", role: "" }
// ];

// const membersCommittee = [
//   { name: "श्री संजीव नारायण मंचे", role: "अध्यक्ष", contact: "9371035716" },
//   { name: "श्री राजू वसंत गड्डम", role: "उपाध्यक्ष", contact: "8087687430" },
//   { name: "श्री प्रभाकर केशव कैरमकोंडा", role: "उपाध्यक्ष", contact: "9850216277" },
//   { name: "श्री विक्रम श्रीपत विलासागर", role: "उपाध्यक्ष", contact: "9822394448" },
//   { name: "श्री सागर गोरखनाथ पासकंटी", role: "उपाध्यक्ष", contact: "9922286877" },
//   { name: "श्री सुहास नारायण मदनाल", role: "चिटणीस", contact: "9890592226" },
//   { name: "श्री राजेंद्र जगन्नाथ आडप", role: "सह चिटणीस", contact: "9822742860" },
//   { name: "श्री विलास नारायण मद्देल", role: "सह चिटणीस", contact: "9890976663" },
//   { name: "श्री गोपाळ गंगाराम येमुल", role: "खजिनदार", contact: "9772113114" },
//   { name: "श्री प्रभाकर जंगय्या दोंतुल", role: "सह खजिनदार", contact: "9423236791" },
//   { name: "श्री राजेश नारायण मुल्का", role: "हिशोब तपासणीस", contact: "9890660181" },
//   { name: "श्री उमेश परमेश्वर गज्जल", role: "सह हिशोब तपासणीस", contact: "9284504980" },
//   { name: "श्री संजय रघुनाथ इरमल", role: "उत्सव प्रमुख", contact: "9730400120" },
//   { name: "श्री अमोल गोविंद कोलपेक", role: "सह उत्सव प्रमुख", contact: "9822348011" },
//   { name: "श्री प्रशांत लक्ष्मण दासरी", role: "प्रसिद्धी प्रमुख", contact: "9604002424" },
//   { name: "श्री विलास नारायण जिंदम", role: "", contact: "9975114468" },
//   { name: "श्री भास्कर मधुकर तन्नीर", role: "", contact: "9422339077" },
//   { name: "श्री अनुपम अशोक वंगारी", role: "", contact: "8087282228" },
//   { name: "श्री अभिजीत नरेश अनमल", role: "", contact: "9922375425" },
//   { name: "श्री सागर गंगाधर आडे", role: "", contact: "9923879674" },
//   { name: "श्री योगेश अशोक अंदे", role: "", contact: "9960022111" },
//   { name: "श्री गणेश विठ्ठलराव अंकम", role: "", contact: "9822331654" },
//   { name: "श्री श्रीकांत गोपाळ कटकम", role: "", contact: "9881717267" },
//   { name: "श्री गिरीश सदाशिव मिठ्ठापेल्ली", role: "", contact: "9370372111" },
//   { name: "श्री विनोद नरसय्या दंडी", role: "", contact: "9822889949" },
//   { name: "श्री अविनाश विठ्ठल उपलंची", role: "", contact: "9970288988" },
//   { name: "श्री नरेश सुरेश येमुल", role: "", contact: "9850445710" },
//   { name: "श्री सचिन नारायण पलेर्ला", role: "", contact: "9860502755" },
//   { name: "श्री दिनेश मोगलप्पा वलसा", role: "", contact: "9028852932" },
//   { name: "श्री राजेश व्यंकटेश उपरपेल्ली", role: "", contact: "9689002233" },
//   { name: "श्री नरेश श्रीनिवास पाचकंटी", role: "", contact: "9881008682" },
//   { name: "सौ नंदा राजू गरदास", role: "", contact: "8669411426" },
//   { name: "सौ अरुणा पुरुषोत्तम सापा", role: "", contact: "9850789798" },
//   { name: "सौ शारदा जयंत कस्तुरी", role: "", contact: "8208816066" },
//   { name: "श्रीमती शुभांगी अशोक अंदे", role: "", contact: "9890945252" },
//   { name: "श्री रोहन प्रभाकर दोंतुल", role: "", contact: "9767840801" },
//   { name: "श्री सुहास चंद्रकांत मंचे", role: "", contact: "9325463603" }
// ];

// const invitedMembers = [
//   { name: "श्री सदानंद गंगाधर अंदे", contact: "9890449106" },
//   { name: "श्री राजेंद्र दत्तात्रय गाजून", contact: "9822778627" },
//   { name: "श्री अभिजीत प्रभाकर जिंदम", contact: "7499143339" },
//   { name: "श्री विश्वनाथ भुमय्या अलचेट्टी", contact: "9765565677" },
//   { name: "श्री गणेश शेरला", contact: "9881478859" },
//   { name: "श्री संजय विठ्ठलराव मडुर", contact: "9372466391" },
//   { name: "श्री संतोष शंकरराव चिलका", contact: "8087587393" },
//   { name: "श्री अमर ज्ञानेश्वर बोड्डू", contact: "9325260150" },
//   { name: "श्री जयेंद्र बाबुराव कस्तुरी", contact: "9765565688" },
//   { name: "श्री अमर उट्टम", contact: "8308605040" },
//   { name: "श्री रमेश गोविंद संग्गम", contact: "7447586965" },
//   { name: "श्री अभिषेक भूमेश सापा", contact: "9011982196" },
//   { name: "श्री संतोष सदानंद आडेप", contact: "9762127715" },
//   { name: "सौ लक्ष्मीताई जगदीश कोंडा", contact: "9604266852" }
// ];

// const templeCommitteeMembers = [
//   { name: "श्री विठ्ठलराव गंगाराम अंकम", contact: "9822064268" },
//   { name: "श्री गंगाधर शिष्टअय्या जक्कनी", contact: "9850089099" },
//   { name: "श्री ललित सदाशिव मेरगु", contact: "9588449341" },
//   { name: "श्री सुहास गणेश आडप", contact: "8669078838" },
//   { name: "श्री गणेश कत्तूल", contact: "9763356366" },
//   { name: "श्री गोपाळे इरय्या कटकम", contact: "9518305339" },
//   { name: "श्री शांताराम गंगाराम मच्चा", contact: "9049699985" },
//   { name: "श्री पुरुषोत्तम नरहरी सापा", contact: "9881749440" },
//   { name: "श्री सुहास गंगाराम गंगारपू", contact: "9822335907" },
//   { name: "श्री चेतन शामराव सग्गम", contact: "9822456698" },
//   { name: "श्री विश्वनाथ भुमय्या बासा", contact: "9850316146" },
//   { name: "श्री शंकर राजाराम उरळी", contact: "9168466768" },
//   { name: "श्री पुरुषोत्तम लखावत्री", contact: "9028102634" },
//   { name: "श्री सतीश भुमय्या मिठ्ठापेल्ली", contact: "8446685013" },
//   { name: "श्री ज्ञानेश्वर अंकम", contact: "" }
// ];

// const legalAdvisors = [
//   { name: "ॲड.श्री. रमेश नारायणराव अंकम", contact: "9823090805" },
//   { name: "ॲड.श्री. विपुल किशोर अंदे", contact: "7798844483" }
// ];

//   return (
//       <div className='bg-amber-500'>
//         <div>
//         <h1 className='flex items-center justify-center gap-3 text-3xl md:text-4xl font-bold text-red-800 mb-6'>Committee Members</h1>
//         <br />
//         <h2 className='flex items-center justify-center py-2 text-red-800 font-semibold text-xl'>विश्वस्त</h2>
//         <div className='grid grid-cols-1 md:grid-cols-5 gap-2 text-center text-lg'>
//              {members.map((member, index) => (
//           <div key={index} className='bg-white p-4 rounded shadow-md'>
//             <div className='text-red-900 font-semibold'>{member.name}</div>
//                 {member.role && (
//             <div className='text-sm text-gray-600'>{member.role}</div>
//                 )}
//           </div>
//           ))}
//         </div>
//       </div>
        
//       <div>
//         <h1 className='flex items-center justify-center py-2 text-xl font-semibold text-red-800 '>कार्यकारणी सदस्य</h1>
//           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 text-center text-lg'>
//             {membersCommittee.map((member, index) => (
//             <div key={index} className='bg-white p-4 rounded shadow-md'>
//               <div className='text-red-900 font-semibold'>{member.name}</div>
//                 {member.role && <div className='text-sm text-gray-600'>{member.role}</div>}
//                 {member.contact && <div className='text-sm text-gray-500'>📞 {member.contact}</div>}
//             </div>
//               ))}
//           </div>
//       </div>
//       <div>
//             <h1 className='flex items-center justify-center py2 text-xl font-semibold text-red-800 '>निमंत्रित सदस्य</h1>
//         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 text-center text-lg'>
//             {invitedMembers.map((member, index) => (
//           <div key={index} className='bg-white p-4 rounded shadow-md'>
//               <div className='text-red-900 font-semibold'>{member.name}</div>
//               <div className='text-sm text-gray-500'>📞 {member.contact}</div>
//           </div>
//             ))}
//         </div>
//       </div>
//             <br />
//       <div>
//           <h1 className='flex items-center justify-center text-xl py2 font-semibold text-red-800'>मंदिर समिती सदस्य</h1>
//             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 text-center text-lg'>
//               {templeCommitteeMembers.map((member, index) => (
//                 <div key={index} className='bg-white p-4 rounded shadow-md'>
//                   <div className='text-red-900 font-semibold'>{member.name}</div>
//                     {member.contact && (
//                   <div className='text-sm text-gray-500'>📞 {member.contact}</div>
//                     )}
//                 </div>
//                     ))}
//             </div>
//       </div>
//           <br />
//       <div>
//           <h1 className='flex items-center justify-center text-xl font-semibold text-red-800 py-2'>कायदेशीर सल्लागार</h1>
//             <div className='flex flex-col-2 grid-cols-1 sm:grid-cols-4 gap-4 text-center justify-center items-center text-lg'>
//               {legalAdvisors.map((advisor, index) => (
//                 <div key={index} className='bg-white p-4 rounded shadow-md'>
//                   <div className='text-red-900 font-semibold'>{advisor.name}</div>
//                   <div className='text-sm text-gray-500'>📞 {advisor.contact}</div>
//                 </div>
//                   ))}
//             </div>
//       </div>
//       <br />
//       </div>
//   )
// }

// export default ManagementTeam


import { div, image } from 'framer-motion/client';
import React from 'react'
import { useTranslation } from 'react-i18next';

const ManagementTeam = () => {

  const {t} = useTranslation();

  const members = [
  // { name: "श्री रवींद्र महादेव रच्चा", role: "सरपंच", image:'/members/MemberPhoto.jpg' },
  { name: "Mr. Nandkumar Gangadas Kundan", role: "Trustee" },
  { name: "Mr. Sanjay Shivaji Chilka", role: "Trustee" },
  { name: "Mr. Dnyaneshwar Ramchandra Boddu", role: "Secretary" },
  { name: "Mr. Vasantrao Anantrao Yemul", role: "Advisor" },
  { name: "Mr. Ashok Balram Jhampal", role: "Advisor" },
  { name: "Mr. Bharat Ramchandra Sherla", role: "Advisor" },
  { name: "Mr. Rahul Dattatraya Yemul", role: "" },
  { name: "Mr. Manish Dattatray Ande", role: "" },
  { name: "Mr. Mahesh Dnyaneshwar Yamjal", role: "" }
];

const membersCommittee = [
  // { name: "श्री संजीव नारायण मंचे", role: "अध्यक्ष", image:'' },
  { name: "Mr. Raju Vasant Gaddam", role: "Vice President", image:'', contact: "8087687430" },
  { name: "Mr. Prabhakar Keshav Kairamkonda", role: "Vice President", image:'', contact: "9850216277" },
  { name: "Mr. Vikram Shripat Vilasagar", role: "Vice President", image:'', contact: "9822394448" },
  { name: "Mr. Sagar Gorakhnath Paskanti", role: "Vice President", image:'', contact: "9922286877" },
  { name: "Mr. Suhas Narayan Madnal", role: "Secretary", image:'', contact: "9890592226" },
  { name: "Mr. Rajendra Jagannath Adap", role: "Co-secretary", image:'', contact: "9822742860" },
  { name: "Mr. Vilas Narayan Maddel", role: "Co-secretary", image:'', contact: "9890976663" },
  { name: "Mr. Gopal Gangaram Yemul", role: "Treasurer", image:'', contact: "9772113114" },
  { name: "Mr. Prabhakar Jangayya Dontul", role: "Co-Treasurer", image:'', contact: "9423236791" },
  { name: "Mr. Rajesh Narayan Mulka", role: "Accountant", image:'', contact: "9890660181" },
  { name: "Mr. Umesh Parmeshwar Gajjal", role: "Co-Account audit", image:'', contact: "9284504980" },
  { name: "Mr. Sanjay Raghunath Irmal", role: "chief of the festival", image:'', contact: "9730400120" },
  { name: "Mr. Amol Govind Kolpek", role: "Co-Chairman of the Festival", image:'', contact: "9822348011" },
  { name: "Mr. Prashant Lakshman Dasari", role: "Head of Publicity", image:'', contact: "9604002424" },
  { name: "Mr. Vilas Narayan Jindam", role: "", image:'', contact: "9975114468" },
  { name: "Mr. Bhaskar Madhukar Tannir", role: "", image:'', contact: "9422339077" },
  { name: "Mr. Anupam Ashok Wangari", role: "", image:'', contact: "8087282228" },
  { name: "Mr. Abhijeet Naresh Anmal", role: "", image:'', contact: "9922375425" },
  { name: "Mr. Sagar Gangadhar Ade", role: "", image:'', contact: "9923879674" },
  { name: "Mr. Yogesh Ashok Ande", role: "", image:'', contact: "9960022111" },
  { name: "Mr. Ganesh Vitthalrao Ankam", role: "", image:'', contact: "9822331654" },
  { name: "Mr. Shrikant Gopal Katkam", role: "", image:'', contact: "9881717267" },
  { name: "Mr. Girish Sadashiv Mitthapelli", role: "", image:'', contact: "9370372111" },
  { name: "Mr. Vinod Narsayya Dandi", role: "", image:'', contact: "9822889949" },
  { name: "Mr. Avinash Vitthal Upalanchi", role: "", image:'', contact: "9970288988" },
  { name: "Mr. Naresh Suresh Yemul", role: "", image:'', contact: "9850445710" },
  { name: "Mr. Sachin Narayan Palerla", role: "", image:'', contact: "9860502755" },
  { name: "Mr. Dinesh Mogalappa Valsa", role: "", image:'', contact: "9028852932" },
  { name: "Mr. Rajesh Vyankatesh Uparpelli", role: "", image:'', contact: "9689002233" },
  { name: "Mr. Naresh Srinivas Pachkanti", role: "", image:'', contact: "9881008682" },
  { name: "Mrs. Nanda Raju Gardas", role: "", image:'', contact: "8669411426" },
  { name: "Mrs. Aruna Purushottam Sapa", role: "", image:'', contact: "9850789798" },
  { name: "Mrs. Sharada Jayant Kasturi", role: "", image:'', contact: "8208816066" },
  { name: "Mrs. Shubhangi Ashok Ande", role: "", image:'', contact: "9890945252" },
  { name: "Mr. Rohan Prabhakar Dontul", role: "", image:'', contact: "9767840801" },
  { name: "Mr. Suhas Chandrakant Manche", role: "", image:'', contact: "9325463603" }
];

const invitedMembers = [
  { name: "Mr. Sadanand Gangadhar Ande", image:'', contact: "9890449106" },
  { name: "Mr. Rajendra Dattatraya Gajoon", image:'', contact: "9822778627" },
  { name: "Mr. Abhijeet Prabhakar Jindam", image:'', contact: "7499143339" },
  { name: "Mr. Vishwanath Bhumayya Alchetti", image:'', contact: "9765565677" },
  { name: "Mr. Ganesh Sherla", image:'', contact: "9881478859" },
  { name: "Mr. Sanjay Vitthalrao Madur", image:'', contact: "9372466391" },
  { name: "Mr. Santosh Shankarrao Chilka", image:'', contact: "8087587393" },
  { name: "Mr. Amar Dnyaneshwar Boddu", image:'', contact: "9325260150" },
  { name: "Mr. Jayendra Baburao Kasturi", image:'', contact: "9765565688" },
  { name: "Mr. Amar Uttam", image:'', contact: "8308605040" },
  { name: "Mr. Ramesh Govind Sanggam", image:'', contact: "7447586965" },
  { name: "Mr. Abhishek Bhumesh Sapa", image:'', contact: "9011982196" },
  { name: "Mr. Santosh Sadanand Adep", image:'', contact: "9762127715" },
  { name: "Mrs. Laxmitai Jagdish Konda", image:'', contact: "9604266852" }
];

const templeCommitteeMembers = [
  { name: "Mr. Vitthalrao Gangaram Ankam", image:'', contact: "9822064268" },
  { name: "Mr. Gangadhar Shistayya Jakkani", image:'', contact: "9850089099" },
  { name: "Mr. Lalit Sadashiv Meragu", image:'', contact: "9588449341" },
  { name: "Mr. Suhas Ganesh Adap", image:'', contact: "8669078838" },
  { name: "Mr. Ganesh Kattul", image:'', contact: "9763356366" },
  { name: "Mr. Gopale Iryya Katkam", image:'', contact: "9518305339" },
  { name: "Mr. Shantaram Gangaram Machha", image:'', contact: "9049699985" },
  { name: "Mr. Purushottam Narhari Sapa", image:'', contact: "9881749440" },
  { name: "Mr. Suhas Gangaram Gangarapu", image:'', contact: "9822335907" },
  { name: "Mr. Chetan Shamarao Sanggam", image:'', contact: "9822456698" },
  { name: "Mr. Vishwanath Bhumayya Basa", image:'', contact: "9850316146" },
  { name: "Mr. Shankar Rajaram Urli", image:'', contact: "9168466768" },
  { name: "Mr. Purushottam Lakhavatri", image:'', contact: "9028102634" },
  { name: "Mr. Satish Bhumayya Mitthapelli", image:'', contact: "8446685013" },
  { name: "Mr. Dnyaneshwar Ankam", image:'' }
];

const legalAdvisors = [
  { name: "Adv. Mr. Ramesh Narayanrao Ankam", image:'', contact: "9823090805" },
  { name: "Adv. Mr. Vipul Kishor Ande", image:'', contact: "7798844483" }
];

  return (
      <div className='max-w-screen-xl mx-auto px-43'>
        <div>
        <h1 className='flex items-center justify-center gap-3 text-3xl md:text-4xl font-bold mb-6 mt-4' style={{color: '#5d001e'}}>{t('Management Team')}</h1>
        <br />
        <h2 className='flex items-center justify-center py-2 font-semibold text-xl mt-9 mb-6' style={{color: '#5d001e'}}>{t('Trustee')}</h2>
          {/* Centered card with image */}
            <div className="flex justify-center mb-4">
              <div className='bg-white p-4 rounded shadow-md text-center'>
                <img
                  src='/members/MemberPhoto.jpg'
                  alt="श्री रवींद्र महादेव रच्चा"
                  className="img-avtar w-20 h-20 object-cover mx-auto mb-2 border border-gray-300" 
                />
                <div className='font-semibold' style={{color: '#5d001e'}}>{t('Mr. Ravindra Mahadev Raccha')}</div>
                <div className='text-sm text-gray-600'>{t('Sarpanch')}</div>
              </div>
            </div>
        {/* other names */}
        <div className='grid grid-cols-1 md:grid-cols-5 gap-2 text-center text-lg p-11'>
             {members.map((member, index) => (
          <div key={index} className='bg-white p-4 rounded shadow-md'>

                {member.image && (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 object-cover mx-auto mb-2 border border-gray-300"
                    />
                    )}
            <div className='font-semibold' style={{color: '#5d001e'}}>{t(member.name)}</div>
                {member.role && (
            <div className='text-sm text-gray-600'>{t(member.role)}</div>
                )}
          </div>
          ))}
        </div>
      </div>
        
      <div>
        <h1 className='flex items-center justify-center py-2 text-xl font-semibold mt-9 mb-6' style={{color: '#5d001e'}}>{t('Office bearer')}</h1>
          {/* Centered card with image */}
            <div className="flex justify-center mb-4">
              <div className='bg-white p-4 rounded shadow-md text-center'>
                <img
                  src='/members/MemberPhoto.jpg'
                  alt="श्री. संजीव नारायण मंचे"
                  className="img-avtar w-20 h-20 object-cover mx-auto mb-2 border border-gray-300"
                />
                <div className='font-semibold' style={{color: '#5d001e'}}>{t('Mr. Sanjeev Narayan Manche')}</div>
                <div className='text-sm text-gray-600'>{t('President')}</div>
                <div className='text-sm text-gray-500'>📞9371035716</div>
              </div>
            </div>
          {/* other names */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 text-center text-lg p-11'>
            {membersCommittee.map((member, index) => (
            <div key={index} className='bg-white p-4 rounded shadow-md'>
              <div className='font-semibold' style={{color: '#5d001e'}}>{t(member.name)}</div>
                {member.role && <div className='text-sm text-gray-600'>{t(member.role)}</div>}
                {member.contact && <div className='text-sm text-gray-500'>📞 {member.contact}</div>}
            </div>
              ))}
          </div>
      </div>
      <div>
            <h1 className='flex items-center justify-center py2 text-xl font-semibold mt-9 mb-6' style={{color: '#5d001e'}}>{t('Invited member')}</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 text-center text-lg p-11'>
            {invitedMembers.map((member, index) => (
          <div key={index} className='bg-white p-4 rounded shadow-md'>
              <div className='font-semibold' style={{color: '#5d001e'}}>{t(member.name)}</div>
              <div className='text-sm text-gray-500'>📞 {member.contact}</div>
          </div>
            ))}
        </div>
      </div>
            <br />
      <div>
          <h1 className='flex items-center justify-center text-xl py2 font-semibold mt-9 mb-6' style={{color: '#5d001e'}}>{t('Temple Committee Member')}</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 text-center text-lg p-11'>
              {templeCommitteeMembers.map((member, index) => (
                <div key={index} className='bg-white p-4 rounded shadow-md'>
                  <div className='font-semibold' style={{color: '#5d001e'}}>{t(member.name)}</div>
                    {member.contact && (
                  <div className='text-sm text-gray-500'>📞 {member.contact}</div>
                    )}
                </div>
                    ))}
            </div>
      </div>
          <br />
      <div>
          <h1 className='flex items-center justify-center text-xl font-semibold py-2 mt-9 mb-6' style={{color: '#5d001e'}}>{t('Legal advisor')}</h1>
            <div className='flex flex-col-2 grid-cols-1 sm:grid-cols-4 gap-4 text-center justify-center items-center text-lg p-11'>
              {legalAdvisors.map((advisor, index) => (
                <div key={index} className='bg-white p-4 rounded shadow-md'>
                  <div className='font-semibold' style={{color: '#5d001e'}}>{t(advisor.name)}</div>
                  <div className='text-sm text-gray-500'>📞 {advisor.contact}</div>
                </div>
                  ))}
            </div>
      </div>
      <br />
      </div>
  )
}

export default ManagementTeam