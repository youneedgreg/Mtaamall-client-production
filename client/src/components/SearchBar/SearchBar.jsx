import React from "react";
import { FaSearchLocation } from "react-icons/fa";

const SearchBar = ({ filter, setFilter }) => {
  return (
    <div
      className="flexCenter search-bar"
      style={{
        background: 'red',
        backgroundColor: 'lightgrey',
        borderRadius: '25px',
        padding: '10px',
        border: '2px solid red', // Added red border
      }}
    >
      <FaSearchLocation color="gray" size={25} />
      <input
        placeholder="Search for shop, Brand categories..."
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{
          border: 'none',
          backgroundColor: 'lightgrey',
          outline: 'none',
          borderRadius: '25px',
          padding: '8px 12px',
          flex: 1,
        }}
      />
    </div>
  );
};

export default SearchBar;
