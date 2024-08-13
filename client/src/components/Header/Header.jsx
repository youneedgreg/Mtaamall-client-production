import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import SearchBar from "../SearchBar/SearchBar.jsx";

const Header = ({ filter, setFilter }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();
  const location = useLocation();
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  const showSearchBar = ["/properties", "/bookings", "/favourites", "/shoppers"].includes(location.pathname);

  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings h-container">
        <Link to="/">
          <h1>MtaaMall</h1>
        </Link>

        {showSearchBar && <SearchBar filter={filter} setFilter={setFilter} />}

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            className="flexCenter h-menu"
            style={{ display: menuOpened ? "flex" : "none" }}
          >
            {!isAuthenticated && <a href="https://business-mtaamall.vercel.app">Business</a>}

            <a href="mailto:gregorytemwa1212@gmail.com">Contact us</a>

            {!isAuthenticated ? (
              <button className="button" onClick={loginWithRedirect}>
                Login
              </button>
            ) : (
              <ProfileMenu user={user} logout={logout} />
            )}
          </div>
        </OutsideClickHandler>

        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
