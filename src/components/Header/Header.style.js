import styled from 'styled-components';
import { Container } from '../../Global.styles';

export const Nav = styled.nav`
  font-size: 18px;
  position: sticky;
  top: 0;
  z-index: 999;
  height: 80px;
  background-color: #fff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  ${Container};
`;


export const Menu = styled.ul`
  display: flex;
`;

export const MenuItem = styled.li`
  align: right;
  margin: auto;
  width: 100%;
  font-size: 20px;
  font-family: "Lucida Console", "Courier New", monospace;
  list-style: none;
`;

export const MenuItemRight = styled.li`
  list-style: none;
  margin-top: 10px;
  height: 80px;
  float: right;
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
  type: 'text', 
  placeholder: 'Search'
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