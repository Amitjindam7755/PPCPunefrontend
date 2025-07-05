import React from 'react';
import { Flower } from 'lucide-react';
import './About.css';
import { useTranslation } from 'react-i18next';
import { div } from 'framer-motion/client';

const About = () => {
   const { t } = useTranslation();


  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 px-4">
       {/* Page Title */}     
        <h3 className="flex items-center justify-center gap-3 text-3xl md:text-4xl font-bold mb-6" style={{color: '#5d001e'}}>
          <Flower />
          <span>{t('About us')}</span>
          <Flower />
        </h3>

      {/* Content Box */}
      <div className="w-full max-w-3xl bg-gray-100 p-6 md:p-10 rounded-lg shadow-md text-gray-800">
        {/* <p className="text-base md:text-lg leading-relaxed whitespace-pre-line">
          पुण्यात <b>पुणे पद्मशाली समाजाबद्दल</b> बोलायचं झाल्यास, 
          हा समाज महाराष्ट्रात एक महत्वाचा घटक आहे. पुणे शहरात, इतर भागांप्रमाणे, 
          पद्मशाली समाज देखील आपली वेगळी ओळख जपतो. ते प्रामुख्याने विणकाम, 
          वस्त्रोद्योग आणि संबंधित व्यवसायांशी संबंधित आहेत. पुणे शहरातील पद्मशाली समाज, 
          त्यांच्या पारंपरिक कला आणि कौशल्यांसाठी ओळखला जातो.
          <br />
        <b>पुण्यात पद्मशाली समाजाची माहिती:</b>
        <br />
        <b>व्यवसाय:</b>
        पुणे शहरातील पद्मशाली समाज प्रामुख्याने विणकाम, वस्त्रोद्योग, आणि संबंधित व्यवसायांमध्ये सक्रिय आहे.
        <br />
        <b>सामाजिक जीवन:</b>
        इतर समाजांप्रमाणे, पुणे शहरातील पद्मशाली समाज देखील सामाजिक आणि सांस्कृतिक कार्यक्रमांमध्ये सक्रिय असतो.
        <br />
        <b>संघटना:</b>
        पद्मशाली समाजाच्या पुणे शहरातील काही संघटना आहेत, ज्या त्यांच्या सदस्यांसाठी विविध सामाजिक आणि सांस्कृतिक उपक्रम आयोजित करतात.
        <br />
        <b>शिक्षण आणि करिअर:</b>
        पुणे शहरातील पद्मशाली समाजातील तरुण पिढी शिक्षण आणि करिअरच्या बाबतीत चांगली प्रगती करत आहे.
        <br />
        <b>विवाह:</b>
        पुणे शहरातील पद्मशाली समाजात विवाहासाठी अनेक पर्याय उपलब्ध आहेत, जसे की "वधू वर सुचक" सारख्या विवाहसंस्था.
        <br />
        <b>पुणे शहरातील पद्मशाली समाजाचे थोडक्यात वर्णन:</b>
        <br />
      <b>पुण्यात, पद्मशाली समाज एक महत्वाचा घटक आहे, 
      जो आपल्या पारंपरिक व्यवसायासोबतच आधुनिक शिक्षण आणि करिअरमध्येही यशस्वी होत आहे. 
      त्यांची सामाजिक आणि सांस्कृतिक बांधिलकी देखील उल्लेखनीय आहे.</b>         
        </p> */}
        {/* <p className="text-base md:text-lg leading-relaxed whitespace-pre-line">
          When speaking about the <b>Pune Padmashali community,</b> 
          it is an important component of Maharashtra. In Pune city, 
          like in other areas, the Padmashali community maintains its 
          distinct identity. They are primarily involved in weaving, 
          the textile industry, and related professions. 
          The Padmashali community in Pune is known for their 
          traditional arts and skills.
          <br />
            <b>Information about the Padmashali community in Pune:</b>
          <br />
            <b>Business:</b> 
          The Padmashali community in Pune is mainly active in weaving, 
          the textile industry, and related sectors.
          <br />
            <b>Social Life:</b> 
          Like other communities, the Padmashali community in Pune is also 
          actively involved in social and cultural events.
          <br />
            <b>Organizations:</b> 
          There are several organizations of the Padmashali community in 
          Pune that arrange various social and cultural activities for their members.
          <br />
            <b>Education and Careers:</b> 
          The younger generation of the Padmashali community in Pune is making good 
          progress in education and career development.
          <br />
            <b>Marriage:</b> 
          There are many options for marriage within the Padmashali community in Pune, 
          such as marriage organizations like "Vadhhu Var Suchak."
          <br />
            <b>Brief Description of the Padmashali Community in Pune:</b>
          <br />
            <b>In Pune, the Padmashali community is an important group 
              that succeeds not only in traditional professions but also in 
              modern education and careers. Their social and cultural ties 
              are also noteworthy. 
            </b>
        </p>*/}
      
        <p
          className="text-md text-gray-700 mb-10 pt-5"
          dangerouslySetInnerHTML={{ __html: t('AboutUsParagraph') }}
        ></p>

      </div> 
    </div>

  );
};

export default About;





