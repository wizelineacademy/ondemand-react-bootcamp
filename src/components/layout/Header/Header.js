import React from "react";
import "./header.css";
import logo from "../../../assets/images/logo.png";
import cart from "../../../assets/images/shopping_cart.png";

const Header = () => {
  function handleOnclick(){
    window.location = 'http://localhost:3000';
  }
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="logo" onClick={handleOnclick}/>
      </div>
      <div className="header-right">
        <input type="text" placeholder="Search item"></input>
        <img src={cart} alt="cart" />
      </div>
    </div>
  );
};

export default Header;
