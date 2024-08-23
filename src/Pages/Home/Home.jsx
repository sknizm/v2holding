import React from 'react'
import './Home.css'
import Hero from '../../Components/Hero/Hero'
import About from '../../Components/About/About'
import Testimonial from '../../Components/Testimonial/Testimonial'
import PropertyList from '../../Components/PropertyList/PropertyList'
import image from '../../Components/Assets/hero-bg.jpeg'
import Goals from '../../Components/Goals/Goals'
import ContactUs from '../../Components/ContactUs/ContactUs'

const Home = () => {

const dataList = [
  {
    title:"V2 Vishanath",
    address:"home alone, 21 street, Chennai",
    beds:4,
    bath:4.5,
    area:230,
    price:"330,000",
    image:image
  },
  {
    title:"V2 Vishanath",
    address:"home alone, 21 street, Chennai",
    beds:4,
    bath:4.5,
    area:230,
    price:"330,000",
    image:image
  },
  {
    title:"V2 Vishanath",
    address:"home alone, 21 street, Chennai",
    beds:4,
    bath:4.5,
    area:230,
    price:"330,000",
    image:image
  },
  {
    title:"V2 Vishanath",
    address:"home alone, 21 street, Chennai",
    beds:4,
    bath:4.5,
    area:230,
    price:"330,000",
    image:image
  },
]


  return (
    <div className='home'>
      <Hero/>
      <About/>
      <PropertyList title={"FEATURED PROPERTIES"} property={dataList}/>
      <Testimonial/>
      <Goals/>
      <ContactUs/>
      
    </div>
  )
}

export default Home