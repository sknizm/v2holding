import React from 'react'
import './About.css'
import imageAbout from '../Assets/hero-bg.jpeg'

const About = () => {
  return (
    <div className="about-section">
        <div className="details">
            <h1>Calcagno & Hamilton Real Estate Group</h1>
            <p>Calcagno-Hamilton Real Estate Group is #1 in the Santa Barbara MLS for transactions with over $1 Billion in sales. For nearly two decades Calcagno & Hamilton has been the top-producing real estate team in Montecito and the greater Santa Barbara region.</p>

   
            <p>With over 25 years of experience and closing $1 billion in sales in the Santa Barbara and Montecito real estate markets, the Calcagno & Hamilton Real Estate Group continually rank in the top 0.5% of agents worldwide. Our team has exceptional knowledge about our community and neighborhoods, which is backed by our affiliation with Berkshire Hathaway Home Services. Through Berkshire Hathaway, our ability to market and showcase your property is optimized with the most innovative technologies and resources available in today’s market</p>
     
            <button>MEET THE TEAM</button>
        </div>
        <img src={imageAbout} alt="" />
    </div>
  )
}

export default About