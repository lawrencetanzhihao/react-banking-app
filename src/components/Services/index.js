import React from 'react';
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesStyles';
import Img1 from '../../images/img1.svg';
import Img2 from '../../images/img2.svg';
import Img3 from '../../images/img3.svg';


const Services = () => {
   return (
      <>
         <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
               <ServicesWrapper>

                  <ServicesCard>
                     <ServicesIcon src={Img1} />
                     <ServicesH2>Simple</ServicesH2>
                     <ServicesP>
                        Lesser time needed on banking means more time for other things in life
                     </ServicesP>
                  </ServicesCard>

                  <ServicesCard>
                     <ServicesIcon src={Img2} />
                     <ServicesH2>24/7 Anytime, Anywhere</ServicesH2>
                     <ServicesP>
                        Access our banking platform anywhere in the world
                     </ServicesP>
                  </ServicesCard>

                  <ServicesCard>
                  <ServicesIcon src={Img3} />
                     <ServicesH2>Transact Conveniently</ServicesH2>
                     <ServicesP>
                        Transfer money on your fingertips
                     </ServicesP>
                  </ServicesCard>

               </ServicesWrapper>
         </ServicesContainer>
      </>
   )
}

export default Services;
