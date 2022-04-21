import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <header className="wz-header">
            <input type="checkbox" id="nav-check"></input>
            <div className="nav-header">
                <div className="nav-title">Furnituria</div>
            </div>
            <div className="nav-btn">
                <label htmlFor="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
            <div className="nav-links">
                <a href="/#">
                    <FontAwesomeIcon icon={faSearch} /> Search
                </a>
                <a href="/#">
                    <FontAwesomeIcon icon={faShoppingCart} /> Cart
                </a>
            </div>
        </header>
    );
}

export default Header; 
