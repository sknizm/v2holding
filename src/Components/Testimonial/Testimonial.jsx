import React, { useState } from 'react';
import './Testimonial.css';

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            text:"Excellent project with educated and enthusiastic family’s ,good environment",
            name:"KUNDAN JEWELS"
        },
        {
            text:"Good project for upper middle class family with maximum aminities building all ready completed other work started",
            name:"Rajendra Kumar Jain"
        },
        {
            text:"Good Service",
            name:"Parmesh E"
        },
        {
            text:"Quality construction of apartments.",
            name:"Ashok Kumar"
        },
        {
            text:"Nice project near City centre and co-operative staff",
            name:"Jatin Dalal"
        },
        {
            text:"It is a very beautiful apartment, there is only one garbage point near the city, if BB MP is removed then there will be no space near the city in this budget.",
            name:"Pandit Mahesh Trivedi"
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
                <h1>TESTIMONIALS</h1>
                <div className="slider-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <div key={index} className="slider-item">
                            <p>{slide.text}</p>
                            <h3>~{slide.name}</h3>
                        </div>
                    ))}
                </div>
                {/* <button>VIEW ALL</button> */}
            </div>
        </div>
    );
}

export default Testimonial;
