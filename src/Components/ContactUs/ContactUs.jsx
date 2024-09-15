import React, { useState } from 'react';
import './ContactUs.css';
import { base_url } from '../../data';
import ReactGA from "react-ga4";
import vajra from '../Assets/vajra.pdf'

const ContactUs = ({type, title}) => {
  const [msg, setMsg] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Added phone field
    message: '',
    requirement: '' // Added propertyType field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();
    console.log('Form Data:', formData);
  
    try {
      const response = await fetch(`${base_url}/enquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Assuming formData is JSON
        },
        body: JSON.stringify(formData), // Convert formData to JSON string if it's an object
      });
  
      if (response.ok) {
        const data = await response.json();
        setUploadSuccess(true);
        handleButtonClick();
        setMsg('Your message was successfully sent!');
        // Reset form data or handle successful submission state here
      } else {
        const errorData = await response.json();
        setMsg(`Failed to send message: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error uploading files:", error);
      setMsg('An error occurred while sending your message. Please try again.');
    }
  };
  
  const handleButtonClick = () => {
    ReactGA.event({
      category: "User",      
      action: "Clicked Contact Button",  
      label: "Message Send",    
    });

    // Additional logic for your button click
  };

  const downloadBrochure = () => {
    // Trigger the download of the PDF file located in the assets folder
    const link = document.createElement('a');
    link.href = vajra;  // Path to the brochure PDF in the public/assets folder
    link.download = 'vajra.pdf';  // Set the file name for download
    link.click();  // Simulate a click event to start the download
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
            <label htmlFor='requirement'>Property Type</label>
            <select 
              id='requirement' 
              name='requirement' 
              value={formData.requirement} 
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
          {
  uploadSuccess ? (
    title !== 'V2 Vajra Elegance' ? (
      <p
        style={{
          color: uploadSuccess ? 'white' : 'red',
          background: msg === '' ? '#00000000' : '#00000056',
          padding: '10px 0',
        }}
        className="message-send"
      >
        {msg}
      </p>
    ) : (
      <div className="download-btn" onClick={downloadBrochure}>
        Download Brochure
      </div>
    )
  ) : (
    <button type="submit">Submit</button>
  )
}

        </form>
      </div>
    </div>
  );
}

export default ContactUs;
