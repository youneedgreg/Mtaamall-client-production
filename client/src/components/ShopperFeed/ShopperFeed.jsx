import React, { useState } from "react";
import './ShopperFeed.css'; // Update this to match your CSS file name
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

  return (
    <div className="shop-card" onClick={() => navigate(`../properties/${card.id}`)}>
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
      <div className="shop-card-details">
        <div className="shop-card-header">
          <h2>{truncate(card.title, { length: 15 })}</h2>
          <p className="category">{truncate(card.category, { length: 90 })}</p>
          <div className="shop-card-meta">
            <Heart id={card?.id} />
            <button className="shop-card-social">Social media</button>
            <button className="shop-card-message">Message</button>
            <button className="shop-card-call">Call Us</button>
          </div>
        </div>
        <div className="shop-card-info">
          <p className="shop-card-category">{truncate(card.category, { length: 90 })}</p>
          <p>{truncate(card.city, { length: 90 })}, {truncate(card.country, { length: 90 })}</p>
          <p>About <span>{truncate(card.sdescription, { length: 90 })}</span></p>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;