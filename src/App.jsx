import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import ParticleCanvas from "./components/ParticleCanvas";
import NeuroBackground from "./components/NeuroBackground";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {

  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  
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