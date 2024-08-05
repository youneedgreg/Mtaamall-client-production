import React from "react";
import "./Hero1.css";
import {
  HomeIcon,
  ScissorsIcon,
  PuzzlePieceIcon,
  CogIcon,
  CameraIcon,
} from "@heroicons/react/solid";
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
            <HomeIcon className="h-12 w-12" />
            <span>Eatery</span>
          </div>
          <div className="category">
            <ScissorsIcon className="h-12 w-12" />
            <span>Grooming services</span>
          </div>
          <div className="category">
            <PuzzlePieceIcon className="h-12 w-12" />
            <span>Recreational services</span>
          </div>
          <div className="category">
            <CogIcon className="h-12 w-12" />
            <span>Electronics services</span>
          </div>
          <div className="category">
            <CameraIcon className="h-12 w-12" />
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
