import React from 'react'
import './CallActions.css'
import wp_img from '../Assets/wp.png'
import call_img from '../Assets/call.png'
import ReactGA from "react-ga4";

const CallActions = () => {

const handleButtonClick = (buttonName) => {
  ReactGA.event({
    category: "User",      
    action: "Click Button",  
    label: buttonName,    
  });

  // Additional logic for your button click
};
  return (
    <div className='call-actions'>
    <a onClick={()=>handleButtonClick("Call Button")} href='tel:+919945255552'><img src={call_img} alt="call button" /></a>
      <a onClick={()=>handleButtonClick("Whatsapp Button")} href='https://wa.link/g9s1db'>  <img src={wp_img} alt="Whatsapp button" /></a>
    </div>
  )
}

export default CallActions