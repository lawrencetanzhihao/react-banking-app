

import React, { useState } from 'react';
import MainSection from '../components/MainSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggle = () => {
      setIsOpen(!isOpen);
   }


   return (
      <>
         <Navbar toggle={toggle} />
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <MainSection />
      </>
   )

};

export default Home;
