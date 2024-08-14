import React from "react";
import "./Hero1.css";
import { FaStore, FaCut, FaGamepad, FaTools, FaCamera } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero1 = () => {

  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">

        {/* Categories */}
        <div className="flexCenter categories">
          <div className="category">
            <FaStore size={50} />
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
          <Link to="/shoppers">
            <motion.div
              className="banner"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <img src="./hero-image.jpeg" alt="MtaaMall logo" />
              <span>Find Stores</span>
            </motion.div>
          </Link>
          <Link to="/favourites">
            <motion.div
              className="banner"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <img src="./bookmark.png" alt="My Stores" />
              <span>My Stores</span>
            </motion.div>
          </Link>
          <Link to="/deals">
            <motion.div
              className="banner"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <img src="./shopping.png" alt="Hot Deals" />
              <span>Hot Deals!!!</span>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
