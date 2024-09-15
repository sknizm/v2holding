import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);


    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className='image-slider'>
            <button className={`prev2 ${slides.length===1?'di-none':''}`} onClick={prevSlide}>
                &#10094;
            </button>

            <button className={`next2 ${slides.length===1?'di-none':''}`} onClick={nextSlide}>
                &#10095;
            </button>

            <div className="slider-container">
                <div className="slider-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {slides.map((e) => (
                        <div  className="slider-item">
                            <img src={e} alt="" />
                        </div>
                    ))}
                </div>
                {/* <button>VIEW ALL</button> */}
            </div>
        </div>
    );
}

export default ImageSlider;
