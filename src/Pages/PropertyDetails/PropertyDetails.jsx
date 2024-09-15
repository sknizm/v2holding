import React, { useState, useEffect } from "react";
import "./PropertyDetails.css";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import ContactUs from "../../Components/ContactUs/ContactUs";
import Footer from "../../Components/Footer/Footer";
import { useParams } from "react-router-dom"; // Import useParams hook to get route parameters
import { base_url } from "../../data";
import ReactGA from "react-ga4";

const PropertyDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [property, setProperty] = useState(null);
  const { id } = useParams(); // Get the property ID from the URL

  

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`${base_url}/property/oneById`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ propertyid: id }), // Include the property ID in the request body
        });

        if (response.ok) {
          const data = await response.json();
          setProperty(data);
          ReactGA.send({ hitType: "pageview", page: `/property-details/${id}`, title: `${property?.projectTitle} Visited` });
 
        } else {
          console.error('Property not found');
        }
      } catch (error) {
        console.error('Error fetching property:', error);
      }
    };

    fetchProperty();
  }, [id]);


   if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div className="property-details">
      <ImageSlider slides={property.propertyImage} />
      <div className="details">
        <h1>{property.projectTitle}</h1>
        <p>
          {property.aboutProperty}   </p>

        <div className={`video-section ${property.propertyVideo===''?'di-none':''}`}>
          <h2>Walkthrough</h2>
          <video className="video-walkthrough" src={property.propertyVideo} controls />
        </div>

        <div   className={`map-location ${property.googleMapLocation===''?'di-none':''}`}>
          <h2>Location</h2>
          <iframe
        title="property address"
            src={property.googleMapLocation} // Use property-specific Google Maps location
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <ContactUs type={1} title={property.projectTitle} />
      <Footer />
    </div>
  );
};

export default PropertyDetails;
