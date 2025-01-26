import React from "react";
import { HomePage } from "./Components/Homepage";
import { SiteHeader } from "./Components/SiteHeader";
import Home from './Components/Home';
import Card from './Components/card';
import Carousel from './Components/carousel';
import StorySection from "./Components/ourstory";
import Gallery from './Components/Gallery'
import Contact from "./Components/Contactform";
import Footer from "./Components/Footer";
import Style from './Components/style';
import Events from "./Components/Events";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <HomePage />
      <Style/>
      <Card/>
      <Carousel/>
      <Events/>
      <StorySection/>
      <Gallery/>
      <Contact/>
      <Footer/>
      {/* <Home /> */}
      
    </div>
  );
}

export default App;
