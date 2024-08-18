import React, { useState } from "react";
import './ShopperFeed.css'; 
import { truncate } from 'lodash';
import { useNavigate } from "react-router-dom";
import Heart from "../Heart/Heart";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { IoSendOutline } from "react-icons/io5";
import { SiTheconversation } from "react-icons/si";
import { CiStar } from "react-icons/ci";

const ShopCard = ({ card }) => {
  const { data, isError, isLoading } = useProperties();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % card.images.length);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? card.images.length - 1 : prevIndex - 1
    );
  };

  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="red"
          aria-label="puff-loading"
        />
      </div>
    );
  }

  // Extract the first image to use as the logo
  const shopLogo = card.images && card.images.length > 0 ? card.images[0] : '';

  return (
    <div className="shop-card" onClick={() => navigate(`../properties/${card.id}`)}>
      <div className="shop-card-header">
      <div className="left-section">
  <div className="shop-logo">
    <img src={shopLogo} alt="Shop Logo" />
  </div>
  <div className="text-container">
    <h2>{truncate(card.title, { length: 15 })}</h2>
    <p className="categoryt">{truncate(card.category, { length: 90 })}</p>
  </div>
</div>

        <div className="bookmark">
          <Heart id={card?.id} />
        </div>
      </div>
      <div className="shop-card-details">
        <div className="shop-card-images">
          {card.images && card.images.length > 0 && (
            <>
              <img src={card.images[currentImageIndex]} alt="property" />
              {card.images.length > 1 && (
                <>
                  <button className="prev" onClick={handlePrevImage}>&#10094;</button>
                  <button className="next" onClick={handleNextImage}>&#10095;</button>
                </>
              )}
            </>
          )}
        </div>
        <div className="shop-card-info">
          <p className="shop-card-address">
            {card.city} - {card.address}
          </p>
          <p className="shop-card-about">
            About <span className="shop-card-title">{card.title}</span>
          </p>
          <p className="shop-card-description">{truncate(card.sdescription, { length: 150 })}</p>
        </div>
        <div className="shop-card-meta">
          <button className="shop-card-call"><FaWhatsapp size={20}/>Message</button>
          <button className="shop-card-call"><IoCallOutline size={20}/>Call Us</button>
          <button className="shop-card-call"><MdOutlineMessage size={20}/>Social media</button>
        </div>
      </div>
      <div className="Review" style={{ position: "absolute", bottom: "12rem", left: "0", right: "0", padding: "1rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
  <div style={{ display: "flex", alignItems: "center", width: "75%"}}>
    <input className="Thoughts" style={{ width: "60%", borderRadius: "25px", paddingTop: '6px', paddingBottom: '6px' }} placeholder="   Send Reviews" />
    <button className="send circle" style={{ borderRadius: "50%", width: "40px", height: "40px", backgroundColor: "green", marginLeft: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <IoSendOutline className="send" />
    </button>
  </div>
  <div style={{ display: "flex", alignItems: "center" }}>
    <SiTheconversation size={30} style={{ marginRight: "0.5rem" }} />
    <p style={{ margin: 0 }}>250 reviews</p>
  </div>
</div>
<div className="Ratings" style={{position: "absolute", bottom: "4rem", display: "flex",  justifyContent: "space-between", width: "100%"}}>
    <div className="Rating 1">Ambience<br/><CiStar /><CiStar /><CiStar /><CiStar /><CiStar /></div>
    <div className="Rating 1">Safety<br/><CiStar /><CiStar /><CiStar /><CiStar /><CiStar /></div>
    <div className="Rating 1">Variety<br/><CiStar /><CiStar /><CiStar /><CiStar /><CiStar /></div>
  </div>


    </div>
  );
};

export default ShopCard;
