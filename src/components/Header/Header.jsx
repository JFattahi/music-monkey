import React from "react";
import "./Header.scss";
import logo from "../../assets/images/music-monkey1.png";

function Header() {
    return <header className="header">
        <img src={logo} alt="music monkey logo" className="header__logo" />
        <h1 className="header_text">Music Monkey</h1>
  </header>;
}

export default Header;