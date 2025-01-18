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

function App() {
  return (
    <div className="min-h-screen bg-[#e6f2ef]">
      <SiteHeader />
      <HomePage />
      <Card/>
      <Carousel/>
      <StorySection/>
      <Gallery/>
      <Contact/>
      <Footer/>
      {/* <Home /> */}
      
    </div>
  );
}

export default App;
