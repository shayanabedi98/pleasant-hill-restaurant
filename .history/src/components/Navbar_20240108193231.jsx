import React, { useState } from "react";
import logo from "../assets/logo2.png";

const Navbar = ({ onClick }) => {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" />
      {menuOpen && (
        <ul>
          <li onClick={() => onClick("home")}>Home</li>
          <li onClick={() => onClick("menu")}>Menu</li>
          <li onClick={() => onClick("contact")}>Contact</li>
        </ul>
      )}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
