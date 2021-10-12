import styled from "styled-components";

export const InfoContainer = styled.div`
   color: #fff;
   background: ${({ lightBg }) => (lightBg ? '#fff' : '#c5b598b7')};

   @media screen and (max-width: 768px) {
      padding: 100px 0;
   }
`;

export const InfoWrapper = styled.div`
      display: grid;
      z-index: 1;
      height: 860px;
      width: 100%;
      max-width: 1100px;
      margin-right: auto;
      margin-left: auto;
      padding: 0 24px;
      justify-content: center;
`;

export const InfoRow = styled.div`
   display: grid;
   align-items: center;
   grid-auto-columns: minmax(auto, 1fr);
   grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col1' 'col2 col2'`)};

   @media screen and (max-width: 768px) {
      grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
   }
`;

export const Column1 = styled.div`
   grid-area: col1;
   margin-bottom: 15px;
   padding: 0 15px;
`;

export const Column2 = styled.div`
   grid-area: col2;
   margin-bottom: 15px;
   padding: 0 15px;
`;

export const TextWrapper = styled.div`
   padding-top: 0px;
   padding-bottom: 16px;
   max-width: 540px;
`;

export const FirstText = styled.p`
   color: #000;
   line-height: 16px;
   font-size: 18px;
   font-weight: 700;
   letter-spacing: 1.3px;
   text-transform: uppercase;
   margin-bottom: 15px;
`;

export const Heading = styled.h1`
   font-size: 40px;
   font-weight: 600;
   line-height: 1;
   margin-bottom: 20px;
   color: ${({ lightText }) => (lightText ? '#ffffff' : '#000')};
   opacity: 0.8;

   @media screen and (max-width: 450px) {
      font-size: 30px;
   }
`;

export const Subtitle = styled.p`
   font-size: 16px;
   line-height: 20px;
   margin-bottom: 35px;
   max-width: 450px;
   color: ${({ darkText }) => (darkText ? '#2e2e2e' : '#fff')};
`;

export const BtnWrap = styled.div`
   display: flex;
   justify-content: flex-start;
`;

export const ImgWrap = styled.div`
   height: 100%;
   max-width: 550px;
`;

export const Img = styled.img`
   width: 100%;
   padding-right: 0;
   margin: 0 0 10px 0;
`;