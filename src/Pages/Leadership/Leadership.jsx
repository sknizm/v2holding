import React from "react";
import "./Leadership.css";
import { award_list } from "../../data";
import Card2 from "../../Components/Card2/Card2";
import dp from "../../Components/Assets/dp.webp";
import Footer from "../../Components/Footer/Footer";

const Leadership = () => {
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
            The Managing Director of the company, since its inception over two
            decades ago, has established a prominent position in the real estate
            development and construction industry. By consistently setting
            high-quality benchmarks in property development, including
            residential apartments and commercial spaces in prime locations, the
            promoter demonstrates a strong foundation of professionalism.
          </p>
        </div>
      </div>
      <h1>V2 HOLDINGS</h1>
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
