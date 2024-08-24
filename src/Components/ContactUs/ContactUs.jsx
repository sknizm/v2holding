import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Here you would typically send the form data to a server
  };

  return (
    <div className='contact-us-section' id='contact-section'>
      <div className="contact-box">

      <h1 className='title'>work with Us</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input 
            type='text' 
            id='name' 
            name='name' 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input 
            type='email' 
            id='email' 
            name='email' 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Message</label>
          <textarea 
            id='message' 
            name='message' 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
      </div>
    </div>
  );
}

export default ContactUs;
