import React from 'react';
import './Shoppers.css'; // Import the CSS file

const Shoppers = () => {
  return (
    <div className="shoppers-container">
      <div className="left-column">
        {/* Left column content can be added here */}
      </div>
      <div className="middle-column">
        Shopper-Dashboard
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
