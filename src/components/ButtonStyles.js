import styled from "styled-components";
import { Link } from "react-scroll";


export const Button = styled(Link)`
   background: ${({ primary }) => (primary ? '#c9c2bcb5' : '#000')};
   padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
   font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
   color: ${({ dark }) => (dark ? '#000' : '#fff')};
   white-space: nowrap;
   border: none;
   justify-content: center;
   align-items: center;
   display: flex;
   cursor: pointer;
   outline: none;
   border-radius: 5px;
   transition: all 0.4s ease-in-out;

   &:hover {
      transition: all 0.4s ease-in-out;
      background: ${({ primary }) => (primary ? '#ffffffb5' : '#000')};
   };
`;