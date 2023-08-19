import React from 'react';
import { Nav, Menu, MenuItem, MenuLink, Input} from './Header.style';
import {NAME_STORE} from '../../utils/constants'

export default function Header() {
  return (
    <Nav>
      <Menu>
      <MenuItem>
          <MenuLink> 
            {NAME_STORE}
            </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink> 
            HOME
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink> 
            INFO
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink> 
              ABOUT
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <Input/>
        </MenuItem>
      </Menu>
    </Nav>
  );
};
