import React from 'react';
import './CallActions.css';
import wp_img from '../Assets/wp.png';
import call_img from '../Assets/call.png';
import ReactGA from "react-ga4";

const CallActions = () => {

  const handleButtonClick = (event, buttonName, url) => {
    event.preventDefault();  // Prevent the default anchor behavior
    ReactGA.event({
      category: "User",
      action: "Click Button",
      label: buttonName,
    });

    // Redirect to the link after the event is logged
    window.location.href = url;
  };

  return (
    <div className='call-actions'>
      <a
        onClick={(event) => handleButtonClick(event, "Call Button", 'tel:+919945255552')}
        href='tel:+919945255552'
      >
        <img src={call_img} alt="call button" />
      </a>
      <a
        onClick={(event) => handleButtonClick(event, "Whatsapp Button", 'https://wa.link/g9s1db')}
        href='https://wa.link/g9s1db'
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={wp_img} alt="Whatsapp button" />
      </a>
    </div>
  );
};

export default CallActions;
