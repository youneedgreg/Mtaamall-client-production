import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <h1>MtaaMall</h1>
          <span className="secondaryText">
            Our vision is to make your surrounding <br />
            your habitat.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Location</span>
          <span className="secondaryText">Mirema Rd, Nairobi, Kenya</span>
          <div className="flexCenter f-menu">
            <span>Contact us</span>
            <span>Services</span>
            <span>Companies</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
