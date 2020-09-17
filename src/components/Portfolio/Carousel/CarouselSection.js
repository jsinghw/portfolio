import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import carouselStyle from "assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.js";


import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

const useStyles = makeStyles(carouselStyle);

export default function CarouselSection() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    // autoplay: true
  };
  return (
      <section id='portfolio'>
          <div className='arrow-down-portfolio'>
          </div>
          <h2 className="header-text">Portfolio</h2>
          <div className={classes.section} id="carousel">
            <div className={classes.container}>
              <GridContainer className='grid-container'>
                <GridItem xs={12} sm={10} md={7} className={classes.marginAuto}>
                  <div>
                    <Carousel {...settings}>
                      <div>
                        <img src={image1} alt="First slide" className="slick-image" />
                        <div className="slick-caption">
                          <h4>
                            <LocationOn className="slick-icons" />
                            Yellowstone National Park, United States
                          </h4>
                        </div>
                      </div>
                      <div>
                        <img
                          src={image2}
                          alt="Second slide"
                          className="slick-image"
                        />
                        <div className="slick-caption">
                          <h4>
                            <LocationOn className="slick-icons" />
                            Somewhere Beyond, United States
                          </h4>
                        </div>
                      </div>
                      <div>
                        <img src={image3} alt="Third slide" className="slick-image" />
                        <div className="slick-caption">
                          <h4>
                            <LocationOn className="slick-icons" />
                            Yellowstone National Park, United States
                          </h4>
                        </div>
                      </div>
                    </Carousel>
                  </div>
                </GridItem>
                <GridItem xs={3} md={4}>
                    <Card className='side-text-wrapper'>
                        <h3 className='side-text-header'>
                          Project 1
                        </h3>
                        <div className='side-text-body'>
                            words
                        </div>
                    </Card>
                </GridItem>
              </GridContainer>
            </div>
            <div className={classes.container}>
              <GridContainer className='grid-container'>
                <GridItem xs={3} md={4}>
                    <Card className='side-text-wrapper'>
                        <h3 className='side-text-header'>
                          Project 1
                        </h3>
                        <div className='side-text-body'>
                            words
                        </div>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={10} md={7} className={classes.marginAuto}>
                <div>
                <Carousel {...settings}>
                <div>
                <img src={image1} alt="First slide" className="slick-image" />
                <div className="slick-caption">
                <h4>
                <LocationOn className="slick-icons" />
                Yellowstone National Park, United States
                </h4>
                </div>
                </div>
                <div>
                <img
                src={image2}
                alt="Second slide"
                className="slick-image"
                />
                <div className="slick-caption">
                <h4>
                <LocationOn className="slick-icons" />
                Somewhere Beyond, United States
                </h4>
                </div>
                </div>
                <div>
                <img src={image3} alt="Third slide" className="slick-image" />
                <div className="slick-caption">
                <h4>
                <LocationOn className="slick-icons" />
                Yellowstone National Park, United States
                </h4>
                </div>
                </div>
                </Carousel>
                </div>
                </GridItem>
              </GridContainer>
            </div>
            <div className={classes.container}>
              <GridContainer className='grid-container'>
                <GridItem xs={12} sm={10} md={7} className={classes.marginAuto}>
                  <div>
                    <Carousel {...settings}>
                      <div>
                        <img src={image1} alt="First slide" className="slick-image" />
                        <div className="slick-caption">
                          <h4>
                            <LocationOn className="slick-icons" />
                            Yellowstone National Park, United States
                          </h4>
                        </div>
                      </div>
                      <div>
                        <img
                          src={image2}
                          alt="Second slide"
                          className="slick-image"
                        />
                        <div className="slick-caption">
                          <h4>
                            <LocationOn className="slick-icons" />
                            Somewhere Beyond, United States
                          </h4>
                        </div>
                      </div>
                      <div>
                        <img src={image3} alt="Third slide" className="slick-image" />
                        <div className="slick-caption">
                          <h4>
                            <LocationOn className="slick-icons" />
                            Yellowstone National Park, United States
                          </h4>
                        </div>
                      </div>
                    </Carousel>
                  </div>
                </GridItem>
                <GridItem xs={3} md={4}>
                    <Card className='side-text-wrapper'>
                        <h3 className='side-text-header'>
                          Project 1
                        </h3>
                        <div className='side-text-body'>
                            words
                        </div>
                    </Card>
                </GridItem>
              </GridContainer>
            </div>
            <div className={classes.container}>
              <GridContainer className='grid-container'>
              <GridItem xs={3} md={4}>
                  <Card className='side-text-wrapper'>
                      <h3 className='side-text-header'>
                        Project 1
                      </h3>
                      <div className='side-text-body'>
                          words
                      </div>
                  </Card>
              </GridItem>
                <GridItem xs={12} sm={10} md={7} className={classes.marginAuto}>
                  <div>
                    <Carousel {...settings}>
                      <div>
                        <img src={image1} alt="First slide" className="slick-image" />
                        <div className="slick-caption">
                          <h4>
                            <LocationOn className="slick-icons" />
                            Yellowstone National Park, United States
                          </h4>
                        </div>
                      </div>
                      <div>
                        <img
                          src={image2}
                          alt="Second slide"
                          className="slick-image"
                        />
                        <div className="slick-caption">
                          <h4>
                            <LocationOn className="slick-icons" />
                            Somewhere Beyond, United States
                          </h4>
                        </div>
                      </div>
                      <div>
                        <img src={image3} alt="Third slide" className="slick-image" />
                        <div className="slick-caption">
                          <h4>
                            <LocationOn className="slick-icons" />
                            Yellowstone National Park, United States
                          </h4>
                        </div>
                      </div>
                    </Carousel>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </div>
      </section>
  );
}
