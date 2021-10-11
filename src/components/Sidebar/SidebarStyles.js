

import styled from "styled-components";
import { TiTimes } from "react-icons/ti";
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-scroll';


export const SidebarContainer = styled.aside`
   position: fixed;
   background: #332d2d;
   height: 100%;
   width: 100%;
   display: grid;
   align-items: center;
   z-index: 999; //999 means it will be above everything else no matter where you click on it
   top: 0;
   left: 0;
   transition: 0.3s ease-in-out;
   opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
   top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const Icon = styled.div`
   top: 1.2rem;
   right: 1.5rem;
   background: transparent;
   position: absolute;
   font-size: 2rem;
   cursor: pointer;
   outline: none;
`;

export const CloseIcon = styled(TiTimes)`
   color: #dddddd;
`;

export const SidebarWrapper = styled.div`
   color: #dddddd;
`;

export const SidebarMenu = styled.ul`
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: repeat(6, 80px);
   text-align: center;

   @media screen and (max-width: 480px) {
      grid-template-rows: repeat(6, 60px);
   }
`;

export const SidebarLink = styled(LinkScroll)`
   display: flex;
   justify-content: center;
   align-items: center;
   text-decoration: none;
   font-size: 1.6rem;
   list-style: none;
   transition: 0.3s ease-in-out;
   color: #fff;
   cursor: pointer;

   &:hover {
      color: #8d8383;
      transition: 0.4s ease-in-out;
   }
`;


export const SidebarBtnWrap = styled.div`
   display: flex;
   justify-content: center;
`;

export const SidebarRoute = styled(LinkRouter)`
   background: #dddddd;
   white-space: nowrap;
   border-radius: 5px;
   padding: 15px 65px;
   font-size: 16px;
   color: #332d2d;
   outline: none;
   border: none;
   cursor: pointer;
   text-decoration: none;
   transition: all 0.2s ease-in-out;

   &:hover {
      transition: all 0.3s ease-in-out;
      background: #fff;
      color: #332d2d;
   }
`

