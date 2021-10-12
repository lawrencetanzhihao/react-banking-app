

import React from 'react';
import { Button } from '../ButtonStyles';
import {
   BtnWrap,
   Column1,
   Column2,
   FirstText,
   Heading,
   Img,
   ImgWrap,
   InfoContainer,
   InfoRow,
   InfoWrapper,
   Subtitle,
   TextWrapper,
} from './InfoStyles';


const InfoSection = ({lightBg, id, imgStart, firstText, lightText, heading, darkText, subtitle, buttonTag, img, alt, primary, dark}) => {
   return (
      <>
         <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
               <InfoRow imgStart={imgStart}>

                  <Column1>
                     <TextWrapper>
                        <FirstText>{firstText}</FirstText>
                        <Heading lightText={lightText}>{heading}</Heading>
                        <Subtitle darkText={darkText}>{subtitle}</Subtitle>
                        <BtnWrap>
                           <Button
                              to="home"
                              smooth={true}
                              spy={true}
                              duration={400}
                              offset={-80}
                              exact={true}
                              primary={primary ? 1 : 0}
                              dark={dark ? 1 : 0}

                           >{buttonTag}</Button>
                        </BtnWrap>
                     </TextWrapper>
                  </Column1>

                  <Column2>
                     <ImgWrap>
                        <Img src={img} alt={alt} />
                     </ImgWrap>
                  </Column2>

               </InfoRow>
            </InfoWrapper>
         </InfoContainer>
      </>
   )
}

export default InfoSection;
