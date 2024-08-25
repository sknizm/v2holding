import React from "react";
import "./PropertyDetails.css";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import ContactUs from "../../Components/ContactUs/ContactUs";
import Footer from "../../Components/Footer/Footer";
import { dataList } from "../../data";
import video from "../../Components/Assets/bg-video.mp4";

const PropertyDetails = () => {
  return (
    <div className="property-details">
      <ImageSlider slides={dataList} />
      <div className="details">
        <h1>V2 Vishanath</h1>
        <p>
          V2 Vishanth A premium residential project launched by the reputed real
          estate company V2 Holdings Housing Development Pvt. Ltd., V2 VISHANTH
          offers 2 and 3 BHK flats for sale. The built-up area of 2 BHK
          apartments ranges from 1165 to 1260 sq ft, while 3 BHK apartments span
          from 1355 to 1610 sq ft. Residents can enjoy covered car parking
          areas, lifts, power backup, intercom services, landscaped gardens, and
          rainwater harvesting facilities, ensuring a comfortable and convenient
          living experience.
        </p>

        <div className="video-section">
        <h2>Walkthrough</h2>
          <video className="video-walkthrough" src={video} controls />
        </div>

        <div className="map-location">
        <h2>Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.03288625010345!2d77.56770334341246!3d12.938146393324637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158c00b2bf89%3A0xae8511c89c4a9f62!2sV2%20Holdings!5e0!3m2!1sen!2sin!4v1724411559304!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default PropertyDetails;
