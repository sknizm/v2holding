import React, { useState } from 'react';
import './Hero.css';
import bgvideo from '../Assets/bg-video.mp4';
import { FaSearch } from 'react-icons/fa';

const Hero = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    const handleCanPlay = () => {
      setIsVideoLoaded(true);
    };
  
    const handleError = () => {
      setIsVideoLoaded(false);
    };
  
  return (
    <div className={`hero ${isVideoLoaded?'bg-none':''}`}>
      <div className="video-container">
        <video className="bg-video" src={bgvideo} loop muted  autoPlay
          onCanPlay={handleCanPlay}
          onError={handleError} />
      </div>

      <div className="content">
        {/* <h5>Hotel Dwarka, NR Colony, Basavanagudi</h5> */}
        <h1>V2 HOLDINGS</h1>
      <p>Exceptional service and expert guidance at every step of your real estate journey.</p>
      </div>
    </div>
  );
}

export default Hero;
