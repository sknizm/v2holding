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
   <p>​Our team comprises educated and experienced individuals from diverse backgrounds, working together to execute projects efficiently. Construction operations are overseen by a team of highly qualified engineers, ensuring quality, timely delivery, and client satisfaction. Our track record of successful projects reflects our motto of Quality, Timely Delivery, and Client Satisfaction.</p>
    <br />
    <p>With an in-house team of engineers and a proven record in high-rise buildings, we are equipped to undertake both in-house projects and contractual works. Additionally, our in-house marketing team excels in promoting and selling residential units to interested buyers.</p>
   </div> 
    </div>
  )
}

export default Goals