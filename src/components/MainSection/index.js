

import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonStyles';
import {
   ArrowForward,
   ArrowRight,
   MainBg,
   MainBtnWrapper,
   MainContainer,
   MainContent,
   MainH1,
   MainP,
   VideoBg
} from './MainStyles';

const MainSection = () => {

   const [hover, setHover] = useState(false);

   const onHover = () => {
      setHover(!hover);
   }
   

   return (
      <>
         <MainContainer id="home">

            <MainBg>
               {/* Video extracted from pexels.com */}
               <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </MainBg>

            <MainContent id="home">
               <MainH1>iBanking made convenient and secure to manage your finances anytime, anywhere</MainH1>

               <MainP>
                  Register for a new account and receive a $100 sign-up bonus credited into your account
               </MainP>

               <MainBtnWrapper>
                  <Button
                     to="signup"
                     primary="true"
                     dark="true"
                     smooth={true}
                     duration={500}
                     spy={true}
                     offset={-80}
                     exact="true"
                     onMouseEnter={onHover}
                     onMouseLeave={onHover}
                  >
                     Apply Now {hover ? <ArrowForward /> : <ArrowRight />}
                  </Button>
               </MainBtnWrapper>

            </MainContent>
         </MainContainer>
      </>
   )
}

export default MainSection;
