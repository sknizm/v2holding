import React from 'react'
import './Goals.css'
import quality_img from '../Assets/quality.webp'
import value_img from '../Assets/value.webp'
import service_img from '../Assets/service.webp'
import regulation_img from '../Assets/regulation.webp'
import shastra_img from '../Assets/shastra.webp'

const Goals = () => {
  return (
    <div className='goals-section'>
        <h1 className='title'>Vision and Philosophy</h1>
        <div className="vision-section">
            <div className="column">
                <div className="vision-box">
                    <img src={quality_img} alt="" />
                    <h3>Quality</h3>
                    <p>Committed to enhancing the quality of our constructions.</p>
                </div>
                <div className="vision-box">
                    <img src={value_img} alt="" />
                    <h3>Value</h3>
                    <p>Dedicated to providing the best value for money and ensuring a high return on investment for our projects.</p>
                </div>
                <div className="vision-box">
                    <img src={service_img} alt="" />
                    <h3>Service</h3>
                    <p>Fostering an environment of professionalism, teamwork, and excellence in all our services.</p>
                </div>
            </div>
            <div className="column column2">
                <div className="vision-box">
                    <img src={regulation_img} alt="" />
                    <h3>Regulation</h3>
                    <p>Upholding strict adherence to environmental regulations, legal requirements, and obtaining necessary approvals from competent authorities.</p>
                </div>
                <div className="vision-box">
                    <img src={shastra_img} alt="" />
                    <h3>Vastu</h3>
                    <p>We adhere to Vastu Shastra principles in our design, layout, measurements, ground preparation, space arrangement, and spatial geometry.</p>
                </div>
            </div>
        </div>
   <div className="bottom-box">
  <p>Our team is composed of highly educated and experienced professionals from diverse backgrounds, all working cohesively to execute projects with precision and efficiency. Our construction operations are meticulously overseen by a team of highly qualified engineers, ensuring the highest standards of quality, on-time delivery, and exceptional client satisfaction. Our impressive track record of successful projects is a testament to our unwavering commitment to these core values.</p>
    <br />
   <p>With a skilled in-house team of engineers and extensive experience in high-rise construction, we are well-equipped to handle both in-house developments and contractual projects. Complementing our technical expertise, our dedicated in-house marketing team excels in promoting and selling residential units, ensuring that each project reaches its intended audience effectively.</p>
   </div> 
    </div>
  )
}

export default Goals