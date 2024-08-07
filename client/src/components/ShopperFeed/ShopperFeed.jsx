import React from "react";
import './ShopperFeed.css';
import { truncate } from 'lodash';
import { useNavigate } from "react-router-dom";
import Heart from "../Heart/Heart";

const ShopCard = ({ card }) => {
  const navigate = useNavigate();

  return (
    <div className="flexColStart r-card" onClick={() => navigate(`../properties/${card.id}`)}>
      <span className="primaryText">{truncate(card.title, { length: 15 })}</span>
      <span className="secondaryText">{truncate(card.category, { length: 90 })}</span>
      <span className="secondaryText">{truncate(card.city, { length: 90 })}</span>
      <span className="secondaryText">{truncate(card.country, { length: 90 })}</span>
      <p>About <span className="primaryText">{truncate(card.sdescription, { length: 15 })}</span></p>
      <Heart id={card?.id} />
      {card.images && card.images.length > 0 && (
        <img src={card.images[0]} alt="home" />
      )}

    </div>
  );
};

export default ShopCard;
