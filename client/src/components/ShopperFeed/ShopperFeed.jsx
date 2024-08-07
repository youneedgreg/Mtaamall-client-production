import React from "react";
import './ShopperFeed.css';
import { truncate } from 'lodash';
import { useNavigate } from "react-router-dom";
import Heart from "../Heart/Heart";

const ShopCard = ({ card }) => {
  const navigate = useNavigate();

  return (
    <div className="flexColStart r-card" onClick={() => navigate(`../properties/${card.id}`)}>
      <Heart id={card?.id} />
      {card.images && card.images.length > 0 && (
        <img src={card.images[0]} alt="home" />
      )}
      <span className="primaryText">{truncate(card.title, { length: 15 })}</span>
      <span className="secondaryText">{truncate(card.sdescription, { length: 90 })}</span>
    </div>
  );
};

export default ShopCard;
