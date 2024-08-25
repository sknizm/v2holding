import React, { useState } from 'react';
import './ImageSlider.css';
import { dataList } from '../../data';

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            text: "I don’t know where to begin. We have many properties in many different markets. We have houses, condos, and commercial real estate and I can honestly say cammie stands out above and beyond all Realtors® I have ever worked with (15+ deals). She not only was the most honest Realtor® I have ever dealt with but her attention to detail and willingness to do anything to keep us happy and get a deal done is unheard of today. We can honestly call her a good friend now too. Here is the craziest part of this story that you won’t believe. Our condo purchase was her first sale ever. She has nowhere to go but up from here. Do not hesitate in hiring her I promise...",
            name: "Keith W."
        },
        {
            text: "Read this if trying to buy. We have many properties in many different markets. We have houses, condos, and commercial real estate and I can honestly say cammie stands out above and beyond all Realtors® I have ever worked with (15+ deals). She not only was the most honest Realtor® I have ever dealt with but her attention to detail and willingness to do anything to keep us happy and get a deal done is unheard of today. We can honestly call her a good friend now too. Here is the craziest part of this story that you won’t believe. Our condo purchase was her first sale ever. She has nowhere to go but up from here. Do not hesitate in hiring her I promise...",
            name: "Raven W."
        },
        {
            text: "I have ever dealt with but her attention to detail and willingness to do anything to keep us happy and get a deal done is unheard of today. We can honestly call her a good friend now too. Here is the craziest part of this story that you won’t believe. Our condo purchase was her first sale ever. She has nowhere to go but up from here. Do not hesitate in hiring her I promise...",
            name: "David W."
        },
        {
            text: "Read this if trying to buy or sell. We have many properties in many different markets. We have houses, condos, and commercial real estate and I can honestly say cammie stands out above and beyond all Realtors® I have ever worked with (15+ deals). She not only was the most honest Realtor® I have ever dealt with but her attention to detail and willingness to do anything to keep us happy and get a deal done is unheard of today. We can honestly call her a good friend now too. Here is the craziest part of this story that you won’t believe. Our condo purchase was her first sale ever. She has nowhere to go but up from here. Do not hesitate in hiring her I promise...",
            name: "Messy W."
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className='testimonial-section'>
            <button className="prev" onClick={prevSlide}>
                &#10094;
            </button>

            <button className="next" onClick={nextSlide}>
                &#10095;
            </button>

            <div className="slider-container">
                <div className="slider-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {dataList.map((e) => (
                        <div  className="slider-item">
                            <img src={e.image} alt="" />
                        </div>
                    ))}
                </div>
                {/* <button>VIEW ALL</button> */}
            </div>
        </div>
    );
}

export default ImageSlider;
