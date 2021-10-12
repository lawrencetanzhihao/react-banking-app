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
                        <NavLinks
                           to="about"
                           duration={400}
                           smooth={true}
                           spy={true} // tells us which one we're clicking on 
                           exact="true"
                           offset={-80} //match the margin-top value of navbar
                        >
                           About
                        </NavLinks>
                     </NavItem>
                     <NavItem>
                        <NavLinks
                           to="services"
                           duration={400}
                           smooth={true}
                           spy={true}
                           exact="true"
                           offset={-80} 
                        >
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
