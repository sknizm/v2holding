import React from 'react'
import './Home.css'
import Hero from '../../Components/Hero/Hero'
import About from '../../Components/About/About'
import Testimonial from '../../Components/Testimonial/Testimonial'

const Home = () => {
  return (
    <div className='home'>
      <Hero/>
      <About/>
      <Testimonial/>
      
    </div>
  )
}

export default Home