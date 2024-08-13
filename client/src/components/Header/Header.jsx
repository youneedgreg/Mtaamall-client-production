import React from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import SearchBar from "../SearchBar/SearchBar.jsx";

const Header = ({ filter, setFilter }) => {
  const headerColor = useHeaderColor();
  const location = useLocation();
  const showSearchBar = ["/properties", "/bookings", "/favourites", "/shoppers"].includes(location.pathname);

  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings h-container">
        <Link to="/">MtaaMall</Link>
        {showSearchBar && <SearchBar filter={filter} setFilter={setFilter} />}
        <OutsideClickHandler>
          <div className="flexCenter h-menu">
            <a href="https://business-mtaamall.vercel.app">Business</a>
            <a href="mailto:gregorytemwa1212@gmail.com">Contact us</a>
            {/* Login/Profile Menu */}
          </div>
        </OutsideClickHandler>
        <div className="menu-icon">
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
