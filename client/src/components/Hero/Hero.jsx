import React from "react";
import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FaStore } from "react-icons/fa"; // Importing store icon from react-icons
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              Why register <br />
              with MtaaMall?
              <br />
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Find customers and let customers find you.</span>
            <span>Forget all difficulties in finding business for you</span>
          </div>

          {/* Find Stores Button */}
          <div className="flexCenter">
            <Link to="/properties">
            <button className="find-stores-button">
              Find Stores <FaStore className="store-icon" />
            </button>
            </Link>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Customers registered.</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Businesses registered.</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondaryText">Connections made.</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./hero-image.jpeg" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
