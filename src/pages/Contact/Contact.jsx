import React, { useState } from 'react'
import './Contact.css'
import axios from 'axios'

const Contact = () => {

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
    <section className="contact min-h-screen justify-center items-center flex p-4">
       <form onSubmit={handleSubmit}>
        <h2>Contact Form</h2>
        <div className="input-box">
          <label>Full Name</label>
          <input type="text" className='field' placeholder='Enter your name' name='full_name' value={form.full_name} onChange={handleChange} required/>
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input type="email" className='field' placeholder='Enter your email' name='email' value={form.email} onChange={handleChange} required/>
        </div>
        <div className="input-box">
          <label>Your Message</label>
          <textarea name="message" id="" className='field-message' placeholder='Enter your message' value={form.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit">Send Message</button>
       </form>
    </section>
  )
}

export default Contact

