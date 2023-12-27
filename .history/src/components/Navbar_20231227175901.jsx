import React from "react";
import logo from "../assets/logo2.png";

const Navbar = ({ onClick }) => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul>
        <li onClick={() => onClick("home")}>Home</li>
        <li onClick={() => onClick("menu")}>Menu</li>
        <li onClick={() => onClick("contact")}>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
