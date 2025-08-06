import React from 'react'
import { useTranslation } from 'react-i18next';

const ShikshanSanstha = () => {
  const { t } = useTranslation();

  const members = [
    // { name: "श्री रवींद्र महादेव रच्चा", role: "सरपंच", image:'/members/MemberPhoto.jpg' },
    { name: "श्री. राहुलशेठ येमुल", role: "विश्वस्त" },
    { name: "श्री. विक्रमशेठ विलासागर ", role: "उपाध्यक्ष" },
    { name: "श्री. शारदा कस्तुरी ", role: "सदस्य" },
    { name: "श्री. नंदा गरदास ", role: "सदस्य" }
  ];

  return (
    <div className='max-w-screen-xl mx-auto px-43'>
      <h1 className='flex items-center justify-center gap-3 text-3xl md:text-4xl font-bold mb-6 mt-4' style={{ color: '#5d001e' }}>
        {t('Shikshan Sanstha')}
      </h1>
      {/* <h2 className='flex items-center justify-center py-2 font-semibold text-xl mt-9 mb-6' style={{ color: '#5d001e' }}>
        विश्वस्त
      </h2> */}

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {members.map((member, index) => (
          <div key={index} className='bg-white p-4 rounded shadow-md flex flex-col items-center gap-2'>
            {member.image && (
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 object-cover border border-gray-300 rounded-full"
              />
            )}
            <div className='font-semibold text-center' style={{ color: '#5d001e' }}>
              {member.name}
            </div>
            {member.role && (
              <div className='text-sm text-gray-600 text-center'>
                {member.role}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShikshanSanstha
