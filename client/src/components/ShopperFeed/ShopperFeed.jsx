import React, { useState } from "react";
import './ShopperFeed.css'; 
import { truncate } from 'lodash';
import { useNavigate } from "react-router-dom";
import Heart from "../Heart/Heart";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";

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
          color="#4066ff"
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
          <h2>{truncate(card.title, { length: 15 })}</h2>
          <p className="category">{truncate(card.category, { length: 90 })}</p>
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
          <button className="shop-card-social">Social media</button>
          <button className="shop-card-message">Message</button>
          <button className="shop-card-call">Call Us</button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
