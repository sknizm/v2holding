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
        <h5>Hotel Dwarka, NR Colony, Basavanagudi</h5>
        <h1>V2 HOLDINGS</h1>
        <p>Unparalleled Service and Expert Advice at Every Step of the Real Estate Transaction</p>
        {/* <div className="search-div">
          <div className="search-box">
            <FaSearch className='icon' />
            <input type="text" placeholder='Search by City, Address or Neighborhood' />
          </div>
          <button>Search</button>
        </div> */}
      </div>
    </div>
  );
}

export default Hero;
