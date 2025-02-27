import React from "react";
import "./Header.scss";
import logo from "../../assets/images/music-monkey1.png";
import { NavLink } from "react-router-dom";
function Header() {
    return (
      <header className="header">
        <NavLink to={`/`}>
          <img src={logo} alt="music monkey logo" className="header__logo" />
          <h1 className="header_text">Music Monkey</h1>
        </NavLink>
      </header>
    );
}

export default Header;