import React, { useState } from "react";
import logo from "../assets/logo2.png";

const Navbar = ({ onClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktop, setDesktop] = useState();

  const toggleMenu = () => {
    setMobileMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" />
      {!mobileMenuOpen && (
        <ul>
          <li onClick={() => onClick("home")}>Home</li>
          <li onClick={() => onClick("menu")}>Menu</li>
          <li onClick={() => onClick("contact")}>Contact</li>
        </ul>
      )}

      {!desktop && (
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
