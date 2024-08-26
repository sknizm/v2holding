import React from 'react'
import './Home.css'
import Hero from '../../Components/Hero/Hero'
import About from '../../Components/About/About'
import Testimonial from '../../Components/Testimonial/Testimonial'
import PropertyList from '../../Components/PropertyList/PropertyList'
import image1 from '../../Components/Assets/a.jpeg'
import image2 from '../../Components/Assets/d.jpeg'
import image3 from '../../Components/Assets/b.jpeg'
import image4 from '../../Components/Assets/c.jpeg'
import Goals from '../../Components/Goals/Goals'
import ContactUs from '../../Components/ContactUs/ContactUs'
import Footer from '../../Components/Footer/Footer'
import CallActions from '../../Components/CallActions/CallActions'

const Home = () => {

const dataList = [
  {
    title:"V2 Vishanath",
    address:"home alone, 21 street, Chennai",
    beds:4,
    bath:4.5,
    area:230,
    price:"330,000",
    image:image1
  },
  {
    title:"V2 Vishanath",
    address:"home alone, 21 street, Chennai",
    beds:4,
    bath:4.5,
    area:230,
    price:"330,000",
    image:image2
  },
  {
    title:"V2 Vishanath",
    address:"home alone, 21 street, Chennai",
    beds:4,
    bath:4.5,
    area:230,
    price:"330,000",
    image:image3
  },
  {
    title:"V2 Vishanath",
    address:"home alone, 21 street, Chennai",
    beds:4,
    bath:4.5,
    area:230,
    price:"330,000",
    image:image4
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
      <CallActions/>
      <Footer/>
      
    </div>
  )
}

export default Home