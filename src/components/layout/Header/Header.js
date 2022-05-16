import React from "react";
import "./header.css";
import logo from "../../../assets/images/logo.png";
import cart from "../../../assets/images/shopping_cart.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <NavLink to="/"><img src={logo} alt="logo"/></NavLink>
      </div>
      <div className="header-right">
        <input type="text" placeholder="Search item"></input>
        <img src={cart} alt="cart" />
      </div>
    </div>
  );
};

export default Header;
