import React, { useEffect, useState } from 'react';
import './Shoppers.css';
import { FaStore, FaCut, FaGamepad, FaTools, FaCamera } from "react-icons/fa";
import SearchBar from '../../components/SearchBar/SearchBar';
import ShopperFeed from '../../components/ShopperFeed/ShopperFeed';
import { getAllProperties } from '../../utils/api';
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";
import { Checkbox, Container } from '@mantine/core';
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineVideoCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const categories = [
  { name: "Eatery", icon: <FaStore size={50} /> },
  { name: "Grooming services", icon: <FaCut size={50} /> },
  { name: "Recreational services", icon: <FaGamepad size={50} /> },
  { name: "Services", icon: <FaTools size={50} /> },
  { name: "Photography", icon: <FaCamera size={50} /> }
];

const Shoppers = ({ card }) => {
  const { data, isError, isLoading } = useProperties();
  const [filter, setFilter] = React.useState("");
  const [shops, setShops] = useState([]);
  const [filteredShops, setFilteredShops] = useState([]);
  const [randomShop, setRandomShop] = useState(null);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const data = await getAllProperties();
        setShops(data);
        setFilteredShops(data);
        // Pick a random shop
        if (data.length > 0) {
          setRandomShop(data[Math.floor(Math.random() * data.length)]);
        }
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
          color="red"
          aria-label="puff-loading"
        />
      </div>
    );
  }

  return (
    <div className="shoppers-container">
      <div className="left-column">
        <div className='icons' style={{paddingTop: "1vw", border: "black"}}>
        <div className='icon'>Home</div>
        <div className='icon'>Saved stores</div>
        <div className='icon'>New Stores</div>
        <div className='icon'>Connects</div>
        <div className='icon'>Offers and promos</div>
        <div className='icon'>Supports and tools</div>
        </div>
        <h2><u>Contact Us</u></h2>
        <div className='contacts'>
          <IoCallOutline />Call Us<div className='call'></div>
          <MdOutlineVideoCall />Video chat<div className='vid'></div>
          <FaWhatsapp />Whatsapp<div className='app'></div>
        </div>
      </div>
      <div className="middle-column">
        <div className="search-bar-wrapper">
          <SearchBar filter={filter} setFilter={setFilter} />
        </div>
        <div className="flexCenter categories" style={{ backgroundColor: 'white'}}>
          {categories.map(category => (
            <div className="category" key={category.name}>
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
        <div className="icons">
          <div className="one">Bookings and Appoinments</div>
          <div className="icon section-heading">Today's Specials</div>
          {randomShop && (
            <div 
              className="random-shop" 
              onClick={() => alert(`Navigating to shop: ${randomShop.title}`)}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img 
                src={randomShop.images[0]} 
                alt={randomShop.title} 
                className="random-shop-image"
              />
              <p className="random-shop-title">
                {randomShop.title}
              </p>
            </div>
          )}
          <div className="icon section-heading">Businesses to Watch</div>
          {randomShop && (
            <div 
              className="random-shop" 
              onClick={() => alert(`Navigating to shop: ${randomShop.title}`)}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img 
                src={randomShop.images[0]} 
                alt={randomShop.title} 
                className="random-shop-image"
              />
              <p className="random-shop-title">
                {randomShop.title}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shoppers;
