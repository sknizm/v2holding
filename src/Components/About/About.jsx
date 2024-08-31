import React from 'react'
import './About.css'
import imageAbout from '../Assets/f.jpeg'

const About = () => {
  return (
    <div className="about-section">
        <div className="details">
            <h1>V2 HOLDINGS</h1>
           <p>V2 Holdings Housing Development Pvt Ltd is a well-established private company, renowned for constructing and developing world-class residential apartments in Bangalore. Led by Managing Director Mr. P. L. Venkatarama Reddy, the company has carved a niche in the real estate sector over the past decade. Known for consistently setting high-quality benchmarks, V2 Holdings has successfully created exceptional residential apartments and commercial spaces in prime locations.</p>
   
           <p>The company’s success stems from its unwavering professionalism and its ability to meet the unique demands of the real estate market and its clients. V2 Holdings Housing Development Pvt Ltd was founded with a strategic vision to address the housing needs of individuals, offering customers a seamless experience with a single brand, uniform quality, and consistent values throughout Bangalore. Committed to providing end-to-end housing solutions, V2 Holdings continues to redefine excellence in the industry.</p>
            {/* <a className='button' href='#contact-section' >CONTACT US</a> */}
        </div>
        <img src={imageAbout} alt="" />
    </div>
  )
}

export default About