import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import {
   HamburgerIcon,
   Nav,
   NavbarContainer,
   NavBtn,
   NavBtnLink,
   NavItem,
   NavLinks,
   NavLogo, 
   NavMenu
} from './NavbarStyles';

const Navbar = ({ toggle }) => {


   return (
      <>
         <IconContext.Provider value={{ color: "#fff" }}>
            <Nav>
               <NavbarContainer>
                  
                  <NavLogo to="/">Bank</NavLogo>

                  <HamburgerIcon onClick={toggle}>
                     <FaBars />
                  </HamburgerIcon>

                  <NavMenu>
                     <NavItem>
                        <NavLinks>
                           About
                        </NavLinks>
                     </NavItem>
                     <NavItem>
                        <NavLinks>
                           Services
                        </NavLinks>
                     </NavItem>
                  </NavMenu>

                  <NavBtn>
                     <NavBtnLink to="/signin">Login</NavBtnLink>
                  </NavBtn>

               </NavbarContainer>
            </Nav>
         </IconContext.Provider>
      </>
   )
}

export default Navbar;
