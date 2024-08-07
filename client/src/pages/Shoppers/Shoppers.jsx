import React from 'react';
import './Shoppers.css';
import { FaStore, FaCut, FaGamepad, FaTools, FaCamera } from "react-icons/fa";
import SearchBar from '../../components/SearchBar/SearchBar';

const Shoppers = () => {
  return (
    <div className="shoppers-container">
      <div className="left-column">
        {/* Left column content can be added here */}
      </div>
      <div className="middle-column">
      <div className="search-bar-wrapper">
            <SearchBar filter={filter} setFilter={setFilter} />
          </div>
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
      </div>
      <div className="right-column">
        {/* Right column content can be added here */}
        <div className="icons">
          <div className="icon">Icon 1</div>
          <div className="icon">Icon 2</div>
          <div className="icon">Icon 3</div>
        </div>
      </div>
    </div>
  );
};

export default Shoppers;
