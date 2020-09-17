import React from 'react';

import HomeSection from "components/Portfolio/Home/HomeSection.js"
import NavSection from "components/Portfolio/Nav/NavSection.js"
import AboutSection from "components/Portfolio/About/AboutSection.js"
import CarouselSection from "components/Portfolio/Carousel/CarouselSection.js"
import ContactSection from "components/Portfolio/Contact/ContactSection.js"

import './App.css';


function App() {

  return (
    <div>
        <HomeSection></HomeSection>
        <NavSection></NavSection>
        <AboutSection></AboutSection>
        <CarouselSection></CarouselSection>
        <ContactSection></ContactSection>
    </div>
  );
}

export default App;
