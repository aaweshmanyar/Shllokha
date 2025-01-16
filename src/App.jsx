import React from "react";
import { HomePage } from "./Components/Homepage";
import { SiteHeader } from "./Components/SiteHeader";
import Home from './Components/Home';
import Card from './Components/card';

function App() {
  return (
    <div className="min-h-screen bg-[#e6f2ef]">
      <SiteHeader />
      <HomePage />
      <Card/>
      {/* <Home /> */}
      
    </div>
  );
}

export default App;
