import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom"; // Import useNavigate and useLocation

const SearchBar = ({ filter, setFilter }) => {
  const navigate = useNavigate(); // Initialize navigate
  const location = useLocation(); // Get current location

  const handleSearchClick = () => {
    // Check if the current page is the home page before navigating
    if (location.pathname === "/") {
      navigate("/properties");
    }
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
