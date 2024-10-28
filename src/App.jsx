
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import ParticleCanvas from "./components/ParticleCanvas";
import NeuroBackground from "./components/NeuroBackground";
import React, { useEffect } from 'react';


export default function App() {

 

  return (
    <>
    <div className="app">
    {/* <NeuroBackground/> */}
    {/* <ParticleCanvas /> */}
      <Navbar/>
      <Hero/>
      <Portfolio/>
      <Contact/>
      <About/>
      <Footer/>
      </div>
    </>
  )
}