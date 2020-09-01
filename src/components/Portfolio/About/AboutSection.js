import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardAvatar from "components/Card/CardAvatar.js";
import Button from "components/CustomButtons/Button.js";
import Info from "components/Typography/Info.js";


import cardProfile4 from "assets/img/examples/card-profile4.jpg";


import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";

const useStyles = makeStyles(styles);

export default function AboutSection() {
  const classes = useStyles();


  return (
      <section id='about'>
          <h2 className="header-text">About</h2>
          <div className='key-point-wrapper'>
              <div className='key-point'>
                  <img className='key-point-img'
                       src={'./images/rocket.gif'}
                       alt='Rocket'></img>
                   <div className='key-point-main-text'>
                       Fast
                   </div>
                   <div className='key-point-text'>
                      Some text about Fast
                  </div>
              </div>
              <div className='key-point'>
                  <img className='key-point-img'
                       src={'./images/design.gif'}
                       alt='Design'></img>
                   <div className='key-point-main-text'>
                       Responsive
                   </div>
                   <div className='key-point-text'>
                      Some text about Fast
                  </div>
              </div>
              <div className='key-point'>
                  <img className='key-point-img'
                       src={'./images/gears.gif'}
                       alt='Gears turning'></img>
                   <div className='key-point-main-text'>
                       Intuitive
                   </div>
                   <div className='key-point-text'>
                      Some text about Fast
                  </div>
              </div>
              <div className='key-point'>
                  <img className='key-point-img'
                       src={'./images/critical-thinking.gif'}
                       alt='Critical thinking'></img>
                   <div className='key-point-main-text'>
                       Dynamic
                   </div>
                   <div className='key-point-text'>
                      Some text about Fast
                  </div>
              </div>
          </div>
          <div className="about-me-wrapper">
              <GridContainer spacing={0}>
                  <GridItem xs={12} sm={4} md={4}>
                      <Card profile>
                          <CardHeader image>
                              <a href="#pablo" onClick={e => e.preventDefault()}>
                                  <img src={cardProfile4} alt="..." />
                                  <div className={classes.cardTitleAbsolute}>
                                      Tania Andrew
                                  </div>
                              </a>
                              <div
                                  className={classes.coloredShadow}
                                  style={{
                                      backgroundImage: `url(${cardProfile4})`,
                                      opacity: "1"
                                  }}
                                  />
                          </CardHeader>
                          <CardBody>
                              <Info>
                                  <h6 className={classes.cardCategory}>WEB DESIGNER</h6>
                              </Info>
                              <p className={classes.cardDescription}>
                                  Don{"'"}t be scared of the truth because we need to
                                  restart the human foundation in truth And I love you
                                  like Kanye loves Kanye I love Rick Owens’ bed design but
                                  the back is...
                              </p>
                          </CardBody>
                          <CardFooter
                              profile
                              className={classes.justifyContentCenter}
                              >
                              <Button justIcon simple color="twitter">
                                  <i className="fab fa-twitter" />
                              </Button>
                              <Button justIcon simple color="dribbble">
                                  <i className="fab fa-dribbble" />
                              </Button>
                              <Button justIcon simple color="instagram">
                                  <i className="fab fa-instagram" />
                              </Button>
                          </CardFooter>
                      </Card>
                  </GridItem>
                  <GridItem xs={12} sm={4} md={8} className='about-text-wrapper'>
                      <div className='about-text'>
                          Change md to 4 if you want to switch back to 2/3 of the screen.
                          I'm baby edison bulb taxidermy banh mi squid tumblr raw denim. Taiyaki jianbing etsy street art typewriter succulents authentic. Everyday carry four dollar toast fam, man bun gluten-free tumblr banh mi kogi palo santo artisan. Mlkshk yuccie subway tile hell of jean shorts cold-pressed artisan drinking vinegar woke organic mustache scenester. Artisan +1 synth salvia. Roof party shabby chic DIY, butcher four loko portland twee williamsburg vegan knausgaard ramps echo park. Hell of vice la croix, slow-carb flexitarian kogi leggings prism kitsch.
                      </div>
                  </GridItem>
              </GridContainer>
          </div>
      </section>
  );
}
