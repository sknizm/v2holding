import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <h1 className="title">Contact Us</h1>
      <div className="contact-details">
        <div className="row">
          <h3 className="sub-title">Address</h3>
          <p>
            18, 3rd Main Rd, near Hotel Dwarka, NR Colony, Basavanagudi,
            Bengaluru, Karnataka 560019
          </p>
        </div>
        <div className="row">
          <h3 className="sub-title">Contact</h3>
          <p>
            Mobile: <br />
            +91 9945255552 <br />
            +91 9845698136
          </p>
          <p>
            Telephone: <br />
            080 2660 2666 <br />
            080 2660 2667
          </p>
          <p>
            <br />
            V2holdings.blr@gmail.com <br />
            {/* v2holdings.blr@rediffmail.com */}
          </p>
        </div>
        <div className="row">
          <h3 className="sub-title">Sales and Enquiry</h3>
          <p>
            Mobile: <br />
            +91 99452 55552 <br />
            +91 99452 55553 <br />
            +91 90717 12000 <br />
            +91 99452 55550 <br />
          </p>
        </div>
        <div className="row">
          <h3 className="sub-title">Opening Hours</h3>
          <p>Mon-Sun: 10:00 am to 07:00 pm</p>
        </div>
      </div>
      <div className="map-details">
        <iframe
        title="map location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.03288625010345!2d77.56770334341246!3d12.938146393324637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158c00b2bf89%3A0xae8511c89c4a9f62!2sV2%20Holdings!5e0!3m2!1sen!2sin!4v1724411559304!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="copyright">
        <p >Copyright @ 2024 V2 Holdigs</p>
        <p className="portfolio"> Developed by <a href="https://sheikhnizam.xyz">Sheikh Nizam</a> </p>
      </div>
    </footer>
  );
};

export default Footer;
