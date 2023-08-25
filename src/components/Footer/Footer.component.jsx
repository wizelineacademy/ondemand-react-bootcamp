import React from "react";
import {
  Nav,
  Menu,
  MenuItem,
  NavbarContainer,
  ContainerFooter,
} from "./Footer.style";

export default function Footer() {
  return (
    <ContainerFooter>
      <Nav>
        <NavbarContainer>
          <Menu>
            <MenuItem>Created by Brian Zuniga Uribe</MenuItem>
          </Menu>
        </NavbarContainer>
      </Nav>
    </ContainerFooter>
  );
}
