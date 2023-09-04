import React, { useRef } from "react";
import styled from "@emotion/styled";
import logo from "../../../logo.svg";
import cart from "./cart.png";
import ContentContainer from "../ContentContainer.styled";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const MainHeader = styled.header`
  background-color: #EEE;
  position: sticky;
  top: 0;
  z-index: 999;

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

const MainLogo = styled.div`
  float: left;
  width: 4em;
  height: 4em;
  margin: 0;
  cursor: pointer;
  img {
    object-fit: contain;
  }
`

const Header = (props) => {
    const navigate = useNavigate();
    const searchTerm = useRef();

    const goHome = () => {
        navigate('home');
    };

    const search = () => {
      navigate({
        pathname: '../search',
        search: `?q=${searchTerm.current.value}`
      });
      searchTerm.current.value="";
    };

    return (
        <MainHeader>
            <ContentContainer>
                <MainLogo>
                  <Link to={{
                            pathname: `/`
                    }}>
                    <img src={logo} alt="E-commerce.com" onClick={goHome}></img>
                  </Link>
                </MainLogo>
                <HeaderNav>
                    <input ref={searchTerm} type="text" placeholder="Search.."/>
                    <button onClick={search}>buscar</button>
                    <Link to={{
                            pathname: `/cart`
                    }}>
                      <img src={cart} alt="cart" width={30}></img>
                    </Link>
                </HeaderNav>
            </ContentContainer>
        </MainHeader>
    );
};

export default Header;