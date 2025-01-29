import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SiteHeader } from "./Components/SiteHeader";
import HomePage from "./Components/Home";
import Style from "./Components/style";
import Card from "./Components/card";
import Carousel from "./Components/carousel";
import Events from "./Components/Events";
// import StorySection from "./Components/StorySection";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contactform";
import Footer from "./components/Footer";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <SiteHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/style" element={<Style />} />
          <Route path="/card" element={<Card />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/events" element={<Events />} />
          <Route path="/siteheader" element={<SiteHeader />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
