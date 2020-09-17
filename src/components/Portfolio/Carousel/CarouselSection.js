import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import Card from "components/Card/Card.js";



import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";


export default function CarouselSection() {
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
          <div className="carousel-wrapper">
              <div className="carousel-imgs-1">
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
              <div className="carousel-txt-1">
                  <Card className='side-text-wrapper'>
                      <h3 className='side-text-header'>
                          Project 1
                      </h3>
                      <div className='side-text-body'>
                          words
                      </div>
                  </Card>
              </div>
          </div>
          <div className="carousel-wrapper">
              <div className="carousel-txt-2">
                  <Card className='side-text-wrapper'>
                      <h3 className='side-text-header'>
                          Project 1
                      </h3>
                      <div className='side-text-body'>
                          words
                      </div>
                  </Card>
              </div>
              <div className="carousel-imgs-2">
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
          </div>
          <div className="carousel-wrapper">
              <div className="carousel-imgs-1">
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
              <div className="carousel-txt-1">
                  <Card className='side-text-wrapper'>
                      <h3 className='side-text-header'>
                          Project 1
                      </h3>
                      <div className='side-text-body'>
                          words
                      </div>
                  </Card>
              </div>
          </div>
          <div className="carousel-wrapper">
              <div className="carousel-txt-2">
                  <Card className='side-text-wrapper'>
                      <h3 className='side-text-header'>
                          Project 1
                      </h3>
                      <div className='side-text-body'>
                          words
                      </div>
                  </Card>
              </div>
              <div className="carousel-imgs-2">
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
          </div>
      </section>
  );
}
