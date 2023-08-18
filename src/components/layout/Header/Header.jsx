import React from "react";
import styled from "@emotion/styled";
import logo from "../../../logo.svg";
import cart from "./cart.png";
import ContentContainer from "../ContentContainer.styled";

const MainHeader = styled.header`
  background-color: #EEE;
`;

const HeaderNav = styled.div`
  display: flex;
  align-items: stretch;
  float: right;
  input[type="text"] {
    min-width: 16em;
  }
  a {
    display: inline-block;
    margin-left: 0.5em;
  }
`;

const MainLogo = styled.h1`
  float: left;
  width: 2em;
  height: 2em;
  margin: 0;
  img {
    object-fit: contain;
  }
`

const Header = (props) => {
    return (
        <MainHeader>
            <ContentContainer>
                <MainLogo>
                    <img src={logo} alt="E-commerce.com"></img>
                </MainLogo>
                <HeaderNav>
                    <input type="text" placeholder="Search.."/>
                <a href='/cart'>
                    <img src={cart} alt="cart" width={30}></img>
                </a>
                </HeaderNav>
            </ContentContainer>
        </MainHeader>
    );
};

export default Header;