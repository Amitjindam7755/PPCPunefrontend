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

const ManagementTeam = () => {

  const members = [
  { name: "श्री रवींद्र महादेव रच्चा", role: "सरपंच", image:'/members/Amit.jpg' },
  { name: "श्री नंदकुमार गंगादास कुंदन", role: "विश्वस्त" },
  { name: "श्री संजय शिवाजी चिलका", role: "विश्वस्त" },
  { name: "श्री ज्ञानेश्वर रामचंद्र बोड्डू", role: "चिटणीस" },
  { name: "श्री वसंतराव अनंतराव येमुल", role: "सल्लागार" },
  { name: "श्री अशोक बलराम झंपाल", role: "सल्लागार" },
  { name: "श्री भरत रामचंद्र शेरला", role: "सल्लागार" },
  { name: "श्री राहुल दत्तात्रेय येमुल", role: "" },
  { name: "श्री मनीष दत्तात्रय अंदे", role: "" },
  { name: "श्री महेश ज्ञानेश्वर यमजाल", role: "" }
];

const membersCommittee = [
  { name: "श्री संजीव नारायण मंचे", role: "अध्यक्ष", image:'' },
  { name: "श्री राजू वसंत गड्डम", role: "उपाध्यक्ष", image:'' },
  { name: "श्री प्रभाकर केशव कैरमकोंडा", role: "उपाध्यक्ष", image:'' },
  { name: "श्री विक्रम श्रीपत विलासागर", role: "उपाध्यक्ष", image:'' },
  { name: "श्री सागर गोरखनाथ पासकंटी", role: "उपाध्यक्ष", image:'' },
  { name: "श्री सुहास नारायण मदनाल", role: "चिटणीस", image:'' },
  { name: "श्री राजेंद्र जगन्नाथ आडप", role: "सह चिटणीस", image:'' },
  { name: "श्री विलास नारायण मद्देल", role: "सह चिटणीस", image:'' },
  { name: "श्री गोपाळ गंगाराम येमुल", role: "खजिनदार", image:'' },
  { name: "श्री प्रभाकर जंगय्या दोंतुल", role: "सह खजिनदार", image:'' },
  { name: "श्री राजेश नारायण मुल्का", role: "हिशोब तपासणीस", image:'' },
  { name: "श्री उमेश परमेश्वर गज्जल", role: "सह हिशोब तपासणीस", image:'' },
  { name: "श्री संजय रघुनाथ इरमल", role: "उत्सव प्रमुख", image:'' },
  { name: "श्री अमोल गोविंद कोलपेक", role: "सह उत्सव प्रमुख", image:'' },
  { name: "श्री प्रशांत लक्ष्मण दासरी", role: "प्रसिद्धी प्रमुख", image:'' },
  { name: "श्री विलास नारायण जिंदम", role: "", image:'' },
  { name: "श्री भास्कर मधुकर तन्नीर", role: "", image:'' },
  { name: "श्री अनुपम अशोक वंगारी", role: "", image:'' },
  { name: "श्री अभिजीत नरेश अनमल", role: "", image:'' },
  { name: "श्री सागर गंगाधर आडे", role: "", image:'' },
  { name: "श्री योगेश अशोक अंदे", role: "", image:'' },
  { name: "श्री गणेश विठ्ठलराव अंकम", role: "", image:'' },
  { name: "श्री श्रीकांत गोपाळ कटकम", role: "", image:'' },
  { name: "श्री गिरीश सदाशिव मिठ्ठापेल्ली", role: "", image:'' },
  { name: "श्री विनोद नरसय्या दंडी", role: "", image:'' },
  { name: "श्री अविनाश विठ्ठल उपलंची", role: "", image:'' },
  { name: "श्री नरेश सुरेश येमुल", role: "", image:'' },
  { name: "श्री सचिन नारायण पलेर्ला", role: "", image:'' },
  { name: "श्री दिनेश मोगलप्पा वलसा", role: "", image:'' },
  { name: "श्री राजेश व्यंकटेश उपरपेल्ली", role: "", image:'' },
  { name: "श्री नरेश श्रीनिवास पाचकंटी", role: "", image:'' },
  { name: "सौ नंदा राजू गरदास", role: "", image:'' },
  { name: "सौ अरुणा पुरुषोत्तम सापा", role: "", image:'' },
  { name: "सौ शारदा जयंत कस्तुरी", role: "", image:'' },
  { name: "श्रीमती शुभांगी अशोक अंदे", role: "", image:'' },
  { name: "श्री रोहन प्रभाकर दोंतुल", role: "", image:'' },
  { name: "श्री सुहास चंद्रकांत मंचे", role: "", image:'' }
];

const invitedMembers = [
  { name: "श्री सदानंद गंगाधर अंदे", image:'' },
  { name: "श्री राजेंद्र दत्तात्रय गाजून", image:'' },
  { name: "श्री अभिजीत प्रभाकर जिंदम", image:'' },
  { name: "श्री विश्वनाथ भुमय्या अलचेट्टी", image:'' },
  { name: "श्री गणेश शेरला", image:'' },
  { name: "श्री संजय विठ्ठलराव मडुर", image:'' },
  { name: "श्री संतोष शंकरराव चिलका", image:'' },
  { name: "श्री अमर ज्ञानेश्वर बोड्डू", image:'' },
  { name: "श्री जयेंद्र बाबुराव कस्तुरी", image:'' },
  { name: "श्री अमर उट्टम", image:'' },
  { name: "श्री रमेश गोविंद संग्गम", image:'' },
  { name: "श्री अभिषेक भूमेश सापा", image:'' },
  { name: "श्री संतोष सदानंद आडेप", image:'' },
  { name: "सौ लक्ष्मीताई जगदीश कोंडा", image:'' }
];

const templeCommitteeMembers = [
  { name: "श्री विठ्ठलराव गंगाराम अंकम", image:'' },
  { name: "श्री गंगाधर शिष्टअय्या जक्कनी", image:'' },
  { name: "श्री ललित सदाशिव मेरगु", image:'' },
  { name: "श्री सुहास गणेश आडप", image:'' },
  { name: "श्री गणेश कत्तूल", image:'' },
  { name: "श्री गोपाळे इरय्या कटकम", image:'' },
  { name: "श्री शांताराम गंगाराम मच्चा", image:'' },
  { name: "श्री पुरुषोत्तम नरहरी सापा", image:'' },
  { name: "श्री सुहास गंगाराम गंगारपू", image:'' },
  { name: "श्री चेतन शामराव सग्गम", image:'' },
  { name: "श्री विश्वनाथ भुमय्या बासा", image:'' },
  { name: "श्री शंकर राजाराम उरळी", image:'' },
  { name: "श्री पुरुषोत्तम लखावत्री", image:'' },
  { name: "श्री सतीश भुमय्या मिठ्ठापेल्ली", image:'' },
  { name: "श्री ज्ञानेश्वर अंकम", image:'' }
];

const legalAdvisors = [
  { name: "ॲड.श्री. रमेश नारायणराव अंकम", image:'' },
  { name: "ॲड.श्री. विपुल किशोर अंदे", image:'' }
];

  return (
      <div className='bg-amber-500'>
        <div>
        <h1 className='flex items-center justify-center gap-3 text-3xl md:text-4xl font-bold text-red-800 mb-6'>Committee Members</h1>
        <br />
        <h2 className='flex items-center justify-center py-2 text-red-800 font-semibold text-xl'>विश्वस्त</h2>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-2 text-center text-lg'>
             {members.map((member, index) => (
          <div key={index} className='bg-white p-4 rounded shadow-md'>

                {member.image && (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 object-cover mx-auto mb-2 border border-gray-300"
                    />
                    )}
            <div className='text-red-900 font-semibold'>{member.name}</div>
                {member.role && (
            <div className='text-sm text-gray-600'>{member.role}</div>
                )}
          </div>
          ))}
        </div>
      </div>
        
      <div>
        <h1 className='flex items-center justify-center py-2 text-xl font-semibold text-red-800 '>कार्यकारणी सदस्य</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 text-center text-lg'>
            {membersCommittee.map((member, index) => (
            <div key={index} className='bg-white p-4 rounded shadow-md'>
              <div className='text-red-900 font-semibold'>{member.name}</div>
                {member.role && <div className='text-sm text-gray-600'>{member.role}</div>}
                {/* {member.contact && <div className='text-sm text-gray-500'>📞 {member.contact}</div>} */}
            </div>
              ))}
          </div>
      </div>
      <div>
            <h1 className='flex items-center justify-center py2 text-xl font-semibold text-red-800 '>निमंत्रित सदस्य</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 text-center text-lg'>
            {invitedMembers.map((member, index) => (
          <div key={index} className='bg-white p-4 rounded shadow-md'>
              <div className='text-red-900 font-semibold'>{member.name}</div>
              {/* <div className='text-sm text-gray-500'>📞 {member.contact}</div> */}
          </div>
            ))}
        </div>
      </div>
            <br />
      <div>
          <h1 className='flex items-center justify-center text-xl py2 font-semibold text-red-800'>मंदिर समिती सदस्य</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 text-center text-lg'>
              {templeCommitteeMembers.map((member, index) => (
                <div key={index} className='bg-white p-4 rounded shadow-md'>
                  <div className='text-red-900 font-semibold'>{member.name}</div>
                    {/* {member.contact && (
                  <div className='text-sm text-gray-500'>📞 {member.contact}</div>
                    )} */}
                </div>
                    ))}
            </div>
      </div>
          <br />
      <div>
          <h1 className='flex items-center justify-center text-xl font-semibold text-red-800 py-2'>कायदेशीर सल्लागार</h1>
            <div className='flex flex-col-2 grid-cols-1 sm:grid-cols-4 gap-4 text-center justify-center items-center text-lg'>
              {legalAdvisors.map((advisor, index) => (
                <div key={index} className='bg-white p-4 rounded shadow-md'>
                  <div className='text-red-900 font-semibold'>{advisor.name}</div>
                  {/* <div className='text-sm text-gray-500'>📞 {advisor.contact}</div> */}
                </div>
                  ))}
            </div>
      </div>
      <br />
      </div>
  )
}

export default ManagementTeam