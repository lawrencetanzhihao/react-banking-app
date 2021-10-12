

import styled from "styled-components";
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from "react-icons/md";

export const MainContainer = styled.div`
   background: #fff;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 0 30px;
   height: 800px;
   position: relative;
   z-index: 1;

   :before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
         180deg,
         rgba(0, 0, 0, 0.2) 0%,
         rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, transparent 100%);
      z-index: 1;
   }
`;

export const MainBg = styled.div`
   top: 0;
   right: 0;
   left: 0;
   bottom: 0;
   height: 100%;
   width: 100%;
   overflow: hidden;
   position: absolute;
`;

export const VideoBg = styled.video`
   background: #fff;
   height: 100%;
   width: 100%;
   object-fit: cover;
   --o-object-fit: cover;
`;

export const MainContent = styled.div`
   position: absolute;
   display: flex;
   flex-direction: column;
   align-items: center;
   max-width: 1200px;
   padding: 6px 22px;
   z-index: 3;
`;

export const MainH1 = styled.h1`
   color: #fff;
   font-size: 40px;
   text-align: center;
   opacity: 0.8;

   @media screen and (max-width: 768px) {
      font-size: 30px;
   }

   @media screen and (max-width: 480px) {
      font-size: 22px;
   }
`;

export const MainP = styled.p`
   color: #fff;
   font-size: 20px;
   text-align: center;
   margin-top: 22px;
   max-width: 550px;
   opacity: 0.8;

   @media screen and (max-width: 768px) {
      font-size: 20px;
   }

   @media screen and (max-width: 480px) {
      font-size: 10px;
   }
`;

export const MainBtnWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 40px;
`;

export const ArrowForward = styled(MdOutlineArrowForward)`
   font-size: 22px;
   margin-left: 8px;
`;

export const ArrowRight = styled(MdOutlineKeyboardArrowRight)`
   font-size: 22px;
   margin-left: 8px;
`;


