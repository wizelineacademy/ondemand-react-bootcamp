import styled from "styled-components";
import { Container } from "../../Global.styles";

export const Nav = styled.nav`
  font-size: 18px;
  position: sticky;
  top: 0;
  z-index: 999;
  height: 110px;
  background-color: #fff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  margin-left: auto;
  ${Container};
`;

export const Menu = styled.ul`
  display: flex;
`;

export const MenuItem = styled.li`
  margin: 1em;
  width: 100%;
  font-size: 20px;
  font-family: "Lucida Console", "Courier New", monospace;
  list-style: none;
`;

export const MenuItemRight = styled.li`
  float: right;
  margin: 1em;
  width: 100%;
  font-size: 20px;
  font-family: "Lucida Console", "Courier New", monospace;
  list-style: none;
`;

export const MenuLink = styled.a`
  margin : auto
  text-decoration: none;
  font-weight: bold;
  display: inline;
  justify-content: space-between;
  align-items: center;
  height: 105%;
`;

export const Input = styled.input.attrs({
  type: "text",
  placeholder: "Search",
})`
  background: #00aec9;
  color: #fff;
  cursor: pointer;
  margin-bottom: 0;
  text-transform: uppercase;
  width: 400%;
  border-radius: 5px;
  height: 35px;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  text-align: center;
  &:active {
    background-color: #f1ac15;
  }
`;

export const Icon = styled.i.attrs({
  className: "fa fa-shopping-cart fa-2x",
})`
  width: px;
  display: block;
  cursor: pointer;
  &:active {
    background-color: #f1ac15;
  }
`;
