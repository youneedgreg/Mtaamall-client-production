import React from "react";
import { HiLocationMarker } from "react-icons/hi";

const SearchBar = ({ filter, setFilter }) => {
  return (
    <div className="flexCenter search-bar" style={{ backgroundColor: 'grey', borderRadius: '25px', padding: '10px' }}>
      <HiLocationMarker color="var(--blue)" size={25} />
      <input
        placeholder="Search for shop, Brand categories..."
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{
          border: 'none',
          backgroundColor: 'grey',
          outline: 'none',
          borderRadius: '25px',
          padding: '8px 12px',
          flex: 1,
        }}
      />
      <button className="button" style={{ borderRadius: '25px', marginLeft: '10px' }}>Search</button>
    </div>
  );
};

export default SearchBar;
