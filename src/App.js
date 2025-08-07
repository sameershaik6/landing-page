import React from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Home from "./pages/Home";
import Services from "./pages/Services";
import Navbar from './components/Navbar';
import "./App.css"
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* <div><Home id="home"/></div> */}
      <div><About /></div>
      <div><Services /></div>
      <div><Contact /></div>
    </div>

  );
}

export default App;
