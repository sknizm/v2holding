import React, { useEffect } from "react";
import "./Leadership.css";
import { award_list } from "../../data";
import Card2 from "../../Components/Card2/Card2";
import dp from "../../Components/Assets/dp.webp";
import Footer from "../../Components/Footer/Footer";

const Leadership = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="leadership">
      <div className="header">
        <div className="title-box">
          <h1>V2 HOLDINGS</h1>
        </div>
      </div>
      <div className="leader">
        <img src={dp} alt="" />
        <div className="bio">
          <h1>Dr. P L Venkatarama Reddy</h1>
          <p>
          For over two decades, the Managing Director has led the company to a prominent position in real estate development and construction. By consistently delivering high-quality residential and commercial properties in prime locations, the company has established a strong reputation for professionalism.
          </p>
        </div>
      </div>
      <h1 className="head1">Achievements</h1>
      <div className="leadership-list">
        {award_list.map((e) => {
          return <Card2 image={e.image} text={e.text} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Leadership;
