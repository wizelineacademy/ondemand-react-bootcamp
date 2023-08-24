import React from 'react';
import { Nav, Menu, MenuItem, NavbarContainer } from './Footer.style';

export default function Footer() { 
    return (
    <footer>
        <Nav>
            <NavbarContainer>
                <Menu>
                    <MenuItem>
                        Created by Brian Zuniga Uribe
                    </MenuItem>
                </Menu>
            </NavbarContainer>
        </Nav>
    </footer>
    )
};