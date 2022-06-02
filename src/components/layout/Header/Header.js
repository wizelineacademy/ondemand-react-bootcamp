import {useState} from "react";
import "./header.css";
import logo from "../../../assets/images/logo.png";
import cart from "../../../assets/images/shopping_cart.png";
import cart_active from "../../../assets/images/shopping_cart_active.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isHover, setIsHover] = useState(false);
  const handlerOnMouseEnter = () => {
    setIsHover(prevIsHover => (true));
  }
  const handlerOnMouseLeave = () =>{
    setIsHover(prevIsHover => (false));
  }
  return (
    <div className="header">
      <div className="header-logo">
        <NavLink to="/"><img src={logo} alt="logo"style={{height:120}}/></NavLink>
      </div>
      <div className="header-right">
        <input type="text" placeholder="Search item"></input>
        <img src={isHover ? cart_active : cart } alt="cart" style={{height:60}} onMouseEnter={handlerOnMouseEnter} onMouseLeave={handlerOnMouseLeave}/>
      </div>
    </div>
  );
};

export default Header;
