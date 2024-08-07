import React from "react";
import './ShopperFeed.css';
import { truncate } from 'lodash';
import { useNavigate } from "react-router-dom";
import Heart from "../Heart/Heart";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";

const ShopCard = ({ card }) => {
  const { data, isError, isLoading } = useProperties();
  const navigate = useNavigate();
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
        {card.images && card.images.length > 0 && card.images.map((image, index) => (
          <img key={index} src={image} alt={`image-${index}`} />
        ))}
      </div>
      <div className="shop-card-details">
        <h2>{truncate(card.title, { length: 15 })}</h2>
        <p className="shop-card-category">{truncate(card.category, { length: 90 })}</p>
        <p>{truncate(card.city, { length: 90 })}, {truncate(card.country, { length: 90 })}</p>
        <p>About <span>{truncate(card.sdescription, { length: 90 })}</span></p>
        <div className="shop-card-meta">
          <Heart id={card?.id} />
          <button className="shop-card-social">Social media</button>
          <button className="shop-card-message">Message</button>
          <button className="shop-card-call">Call Us</button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
