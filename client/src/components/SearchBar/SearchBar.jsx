import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SearchBar = ({ filter, setFilter }) => {
  const navigate = useNavigate(); // Initialize navigate

  const handleSearchClick = () => {
    // Navigate to /properties when the search bar is clicked
    navigate("/properties");
  };

  return (
    <div
      className="flexCenter search-bar"
      style={{ backgroundColor: 'lightgrey', borderRadius: '25px', padding: '10px' }}
      onClick={handleSearchClick} // Add click handler
    >
      <FaSearchLocation color="red" size={25} />
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
