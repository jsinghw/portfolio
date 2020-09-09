import React from 'react';

import { makeStyles } from "@material-ui/core/styles";

import HomeSection from "components/Portfolio/Home/HomeSection.js"
import NavSection from "components/Portfolio/Nav/NavSection.js"
import AboutSection from "components/Portfolio/About/AboutSection.js"
import CarouselSection from "components/Portfolio/Carousel/CarouselSection.js"
import ContactSection from "components/Portfolio/Contact/ContactSection.js"



import './App.css';


import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";




const useStyles = makeStyles(styles);




function App() {


    const [activeRotate1, setActiveRotate1] = React.useState("");
    const [activeRotate2, setActiveRotate2] = React.useState("");
    const [activeRotate3, setActiveRotate3] = React.useState("");
    const classes = useStyles();
    React.useEffect(() => {
      if (window) {
        window.addEventListener("resize", addStylesForRotatingCards);
      }
      addStylesForRotatingCards();
      return function cleanup() {
        if (window) {
          window.removeEventListener("resize", addStylesForRotatingCards);
        }
      };
    });
    const addStylesForRotatingCards = () => {
      var rotatingCards = document.getElementsByClassName(classes.cardRotate);
      for (let i = 0; i < rotatingCards.length; i++) {
        var rotatingCard = rotatingCards[i];
        var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
        var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
        cardFront.style.height = "unset";
        cardFront.style.width = "unset";
        cardBack.style.height = "unset";
        cardBack.style.width = "unset";
        var rotatingWrapper = rotatingCard.parentElement;
        var cardWidth = rotatingCard.parentElement.offsetWidth;
        var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
        rotatingWrapper.style.height = cardHeight + "px";
        rotatingWrapper.style["margin-bottom"] = 30 + "px";
        cardFront.style.height = "unset";
        cardFront.style.width = "unset";
        cardBack.style.height = "unset";
        cardBack.style.width = "unset";
        cardFront.style.height = cardHeight + 35 + "px";
        cardFront.style.width = cardWidth + "px";
        cardBack.style.height = cardHeight + 35 + "px";
        cardBack.style.width = cardWidth + "px";
      }
    };

  return (
    <div>
        <HomeSection></HomeSection>
        <NavSection>
        </NavSection>
        <AboutSection>
        </AboutSection>
        <section id='portfolio'>
            <h2 className="header-text">Portfolio</h2>
            <CarouselSection>
            </CarouselSection>
        </section>
        <ContactSection>
        </ContactSection>
    </div>
  );
}

export default App;
