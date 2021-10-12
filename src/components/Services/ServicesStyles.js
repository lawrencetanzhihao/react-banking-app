import styled from "styled-components";

export const ServicesContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   background: #8f8052;
   height: 800px;

   @media screen and (max-width: 768px) {
      height: 1100px;
   }

   @media screen and (max-width: 480px) {
      height: 1000px;
   }
`;

export const ServicesH1 = styled.h1`
   color: #000;
   margin-bottom: 60px;
   margin-top: 50px;

   @media screen and (max-width: 480px) {
      font-size: 2rem;
   }
`;

export const ServicesWrapper = styled.div`
   display: grid;
   grid-gap: 16px;
   padding: 0 50px;
   align-items: center;
   margin: 0 auto;
   max-width: 1000px;
   grid-template-columns: 1fr 1fr 1fr;

   @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
   }

   @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
   }
`;



export const ServicesCard = styled.div`
   background: #bbbbbb;
   opacity: 0.8;
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   flex-direction: column;
   border-radius: 10px;
   max-height: 300px;
   padding: 35px;
   box-shadow: 0 1px 3px rgba(0,0,0,0.2);
   transition: all 0.3s ease-in-out;
   

   &:hover {
      transform: scale(1.05);
      transition: all 0.3s ease-in-out;
      cursor: pointer;
   }
`;


export const ServicesIcon = styled.img`
   margin-bottom: 10px;
   height: 150px;
   width: 150px;
`;

export const ServicesH2 = styled.h2`
   margin-bottom: 10px;
   margin-top: 10px;
   font-size: 1rem;
`;


export const ServicesP = styled.p`
   text-align: center;
   font-size: 1rem;
`;

