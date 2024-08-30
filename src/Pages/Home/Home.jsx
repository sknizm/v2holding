import React, { useState, useEffect } from 'react';
import './Home.css';
import Hero from '../../Components/Hero/Hero';
import About from '../../Components/About/About';
import Testimonial from '../../Components/Testimonial/Testimonial';
import PropertyList from '../../Components/PropertyList/PropertyList';
import image1 from '../../Components/Assets/a.jpeg';
import image2 from '../../Components/Assets/d.jpeg';
import image3 from '../../Components/Assets/b.jpeg';
import image4 from '../../Components/Assets/c.jpeg';
import Goals from '../../Components/Goals/Goals';
import ContactUs from '../../Components/ContactUs/ContactUs';
import Footer from '../../Components/Footer/Footer';
import CallActions from '../../Components/CallActions/CallActions';
import { base_url } from '../../data';
import ReactGA from "react-ga4";

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

ReactGA.send({ hitType: "pageview", page: "/", title: "Home Page Visit" });

  const [latest, setLatest] = useState([]);

  const getLatestProperty = async () => {
    try {
      const response = await fetch(`${base_url}/property/getLatest`);
      if (response.ok) {
        const data = await response.json();
        setLatest(data);
      } else {
        console.error('Failed to fetch latest properties');
      }
    } catch (error) {
      console.error('Error fetching latest properties:', error);
    }
  };

  useEffect(() => {
    getLatestProperty();
  }, []);

  return (
    <div className='home'>
      <Hero />
      <About />
      <PropertyList title={"LATEST PROPERTIES"} property={latest} />
      <Testimonial />
      <Goals />
      <ContactUs />
      <CallActions />
      <Footer />
    </div>
  );
};

export default Home;
