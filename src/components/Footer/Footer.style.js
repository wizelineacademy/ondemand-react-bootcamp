import styled from 'styled-components';
import { Container } from '../../Global.styles';

export const Nav = styled.nav`
  font-size: 18px;
  position: sticky;
  top: 0;
  z-index: 999;
  height: 110px;
  background-color: #fff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const NavbarContainer = styled(Container)`
  align: center;
  height: 80px;
  ${Container};
`;


export const Menu = styled.ul`
  display: flex;
  align: center;
  text-align: center;
`;

export const MenuItem = styled.li`
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
