import React, { useState } from 'react'
import './Contact.css'
import axios from 'axios'
import VerticalFooter from '../../components/Footer/VerticalFooter';
import ContactFooter from '../../components/Footer/contactFooter';
import { useTranslation } from 'react-i18next';


const Contact = () => {

  const {t} = useTranslation();


    const [form, setForm] = useState({full_name:'', email:'', message:''});
     
    const handleChange = (e) => {
      setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try{
        await axios.post('http://localhost:8081/api/contacts',form);
        alert('Message sent!');
        setForm({full_name:'',email:'',message:''});
      }catch (err) {
        console.error(err);
        alert('Error submitting message');
      }
    };
    return (
  <div className='min-h-screen'>
    <section className="contact min-h-screen justify-center items-center flex">
      <VerticalFooter/>
       <form onSubmit={handleSubmit}>
        <h2 style={{color: '#5d001e'}}>{t('Get In Touch')}</h2>
        <div className="input-box">
          <label>{t('Full Name')}</label>
          <input type="text" className='field' placeholder='Enter your name' name='full_name' value={form.full_name} onChange={handleChange} required/>
        </div>
        <div className="input-box">
          <label>{t('Email Address')}</label>
          <input type="email" className='field' placeholder='Enter your email' name='email' value={form.email} onChange={handleChange} required/>
        </div>
        <div className="input-box">
          <label>{t('Your Message')}</label>
          <textarea name="message" id="" className='field-message' placeholder='Enter your message' value={form.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className='submit-btn'>{t('Send Message')}</button>
       </form>
    </section>
    <div className='py-20'>
    <ContactFooter/>
    </div>
  </div>
  )
}

export default Contact



