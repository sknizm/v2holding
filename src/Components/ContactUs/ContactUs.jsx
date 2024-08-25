import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Added phone field
    message: '',
    propertyType: '' // Added propertyType field
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
        <h1 className='title'>Contact Us</h1>
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
          <div className='form-group'> {/* Added phone number field */}
            <label htmlFor='phone'>Phone Number</label>
            <input 
              type='tel' 
              id='phone' 
              name='phone' 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className='form-group'> {/* Added dropdown for property type */}
            <label htmlFor='propertyType'>Property Type</label>
            <select 
              id='propertyType' 
              name='propertyType' 
              value={formData.propertyType} 
              onChange={handleChange} 
              required
            >
              <option value=''>Select a property type</option>
              <option value='2bhk'>2BHK</option>
              <option value='3bhk'>3BHK</option>
              <option value='4bhk'>4BHK</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message ( Optional )</label>
            <textarea 
              id='message' 
              name='message' 
              value={formData.message} 
              onChange={handleChange} 
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
