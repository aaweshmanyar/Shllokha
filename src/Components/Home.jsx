import React from 'react'
import { HomePage } from "./Homepage";
import { SiteHeader } from "./SiteHeader";
import Card from './card';
import Carousel from './carousel';
import StorySection from "./ourstory";
import Gallery from './Gallery'
import Contact from "./Contactform";
import Footer from "./Footer";
import Style from './style';
import Events from "./Events";
import About from './About';

const Homedemo = () => {
  return (
    <div>
      {/* <SiteHeader /> */}
      <HomePage />
      <Style/>
      <Card/>
      <Carousel/>
      <Events/>
      <StorySection/>
      <Gallery/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default Homedemo