import React from 'react';
import logo from '../../assets/logo.jpeg';
import {
  CartSection,
  HeaderItems,
  HeaderMain,
  Logo,
  Search,
} from './Header.style';

export const Header = () => {
  return (
    <HeaderMain>
      <Logo data-testid="logo" src={logo} alt="logo" />
      <HeaderItems>
        <Search placeholder="Search" />
        <CartSection>
          <div>0</div>
          <i className="fas fa-shopping-cart"></i>
        </CartSection>
      </HeaderItems>
    </HeaderMain>
  );
};
