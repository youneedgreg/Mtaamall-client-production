import React from "react";
import "./Hero1.css";
import { FaStore, FaUtensils, FaCut, FaGamepad, FaTools, FaCamera } from "react-icons/fa";
im
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Hero1 = () => {
  const [filter, setFilter] = React.useState("");

  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* Header */}
        <div className="flexCenter header">
          <div className="search-bar-wrapper">
            <SearchBar filter={filter} setFilter={setFilter} />
          </div>
        </div>

        {/* Categories */}
        <div className="flexCenter categories">
          <div className="category">
            <FaUtensils size={50} />
            <span>Eatery</span>
          </div>
          <div className="category">
            <FaCut size={50} />
            <span>Grooming services</span>
          </div>
          <div className="category">
            <FaGamepad size={50} />
            <span>Recreational services</span>
          </div>
          <div className="category">
            <FaTools size={50} />
            <span>Electronics services</span>
          </div>
          <div className="category">
            <FaCamera size={50} />
            <span>Photography</span>
          </div>
        </div>

        {/* Welcome text */}
        <div className="welcome-text">
          <h2>Welcome to MtaaMall,</h2>
          <p>Where we unleash the power of endless possibilities in every click.</p>
        </div>

        {/* Banners */}
        <div className="banners">
          <div className="banner">
            <img src="./hero-image.jpeg" alt="MtaaMall logo" />
            <span>Find Stores</span>
          </div>
          <div className="banner">
            <img src="./hero-image.jpeg" alt="My Stores" />
            <span>My Stores</span>
          </div>
          <div className="banner">
            <img src="./hero-image.jpeg" alt="Hot Deals" />
            <span>Hot Deals!!!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
