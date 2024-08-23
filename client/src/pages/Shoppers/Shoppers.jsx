import React, { useEffect, useState } from 'react';
import './Shoppers.css';
import { FaStore, FaCut, FaGamepad, FaTools, FaCamera } from "react-icons/fa";
import SearchBar from '../../components/SearchBar/SearchBar';
import ShopperFeed from '../../components/ShopperFeed/ShopperFeed';
import { getAllProperties } from '../../utils/api';

const categories = [
  { name: "Eatery", icon: <FaStore size={50} /> },
  { name: "Grooming services", icon: <FaCut size={50} /> },
  { name: "Recreational services", icon: <FaGamepad size={50} /> },
  { name: "Electronics services", icon: <FaTools size={50} /> },
  { name: "Photography", icon: <FaCamera size={50} /> }
];

const Shoppers = () => {
  const [filter, setFilter] = React.useState("");
  const [shops, setShops] = useState([]);
  const [filteredShops, setFilteredShops] = useState([]);
  const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(false);
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const data = await getAllProperties();
        setShops(data);
        setFilteredShops(data);
      } catch (error) {
        console.error("Error fetching shops:", error);
      }
    };
    fetchShops();
  }, []);

  useEffect(() => {
    setFilteredShops(
      shops.filter(shop => shop.title.toLowerCase().includes(filter.toLowerCase()))
    );
  }, [filter, shops]);

  const toggleLeftMenu = () => {
    setIsLeftMenuOpen(!isLeftMenuOpen);
    setIsRightMenuOpen(false); // Close the right menu if open
  };

  const toggleRightMenu = () => {
    setIsRightMenuOpen(!isRightMenuOpen);
    setIsLeftMenuOpen(false); // Close the left menu if open
  };

  return (
    <div className="shoppers-container">
      <button className="menu-button left" onClick={toggleLeftMenu}>
        ☰
      </button>
      <button className="menu-button right" onClick={toggleRightMenu}>
        ☰
      </button>
      
      <div className={`left-column ${isLeftMenuOpen ? 'open' : ''}`}>
        {/* Left column content */}
        <div className='one'>Menu</div>
        <div className='one'>Menu1</div>
        <div className='one'>Menu</div>
        <div className='one'>Menu</div>
        <div className='one'>Menu</div>
      </div>
      
      <div className="middle-column">
        <div className="search-bar-wrapper">
          <SearchBar filter={filter} setFilter={setFilter} />
        </div>
        {/* Categories */}
        <div className="flexCenter categories" style={{ backgroundColor: 'white'}}>
          {categories.map((category, index) => (
            <div className="category" key={index}>
              {category.icon}
              <span>{category.name}</span>
            </div>
          ))}
        </div>
        <div className="shops-list">
          {filteredShops.map(shop => (
            <ShopperFeed key={shop.id} card={shop} />
          ))}
        </div>
      </div>
      
      <div className={`right-column ${isRightMenuOpen ? 'open' : ''}`}>
        {/* Right column content */}
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
