import React, { useEffect, useState } from 'react';
import './Shoppers.css';
import { FaStore, FaCut, FaGamepad, FaTools, FaCamera } from "react-icons/fa";
import SearchBar from '../../components/SearchBar/SearchBar';
import ShopperFeed from '../../components/ShopperFeed/ShopperFeed';
import { getAllProperties } from '../../api/api';

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
          {categories.map(category => (
            <div key={category.name} className="category">
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
