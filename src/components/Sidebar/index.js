
import React from 'react';
import {
   CloseIcon,
   Icon,
   SidebarBtnWrap,
   SidebarContainer,
   SidebarLink,
   SidebarMenu,
   SidebarRoute,
   SidebarWrapper
} from './SidebarStyles';

const Sidebar = ({ isOpen, toggle }) => {
   return (
      <>
         <SidebarContainer isOpen={isOpen} onClick={toggle}>

            <Icon onClick={toggle}>
               <CloseIcon />
            </Icon>

            <SidebarWrapper>

               <SidebarMenu>
                  <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                  <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                  <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
               </SidebarMenu>

               <SidebarBtnWrap>
                  <SidebarRoute to="/login">Login</SidebarRoute>
               </SidebarBtnWrap>

            </SidebarWrapper>
         </SidebarContainer>
      </>
   )
}

export default Sidebar;
