import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Paper from '@material-ui/core/Paper';

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import Info from "components/Typography/Info.js";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import cardProfile4 from "assets/img/profile.jpg";


import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";

const useStyles = makeStyles(styles);


library.add(fab)



export default function AboutSection() {
  const classes = useStyles();


  return (
      <React.Fragment>
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
              <div className="about-body-wrapper">
                  <div className="about-card-wrapper">
                      <Card profile>
                          <CardHeader image>
                              <a href="#pablo" onClick={e => e.preventDefault()}>
                                  <img src={cardProfile4} alt="..." />
                                  <div className={classes.cardTitleAbsolute}>
                                      Jaspal Singh
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
                                  <h6 className={classes.cardCategory}>FULL STACK ENGINEER</h6>
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
                              <Button color="linkedin" href="https://www.linkedin.com/in/jaspalsingh94/" justIcon>
                                  <FontAwesomeIcon icon={['fab', 'linkedin']} className="svg-inline--fa.fa-w-14" />
                              </Button>
                              <Button color="github" href="https://github.com/jsinghw" justIcon>
                                  <FontAwesomeIcon icon={['fab', 'github']} className="svg-inline--fa.fa-w-16" />
                              </Button>
                          </CardFooter>
                      </Card>
                  </div>
                  <div className='about-text-wrapper'>
                      <Paper elevation={3} className='about-text'>
                          Change md to 4 if you want to switch back to 2/3 of the screen.
                          I'm baby edison bulb taxidermy banh mi squid tumblr raw denim. Taiyaki jianbing etsy street art typewriter succulents authentic. Everyday carry four dollar toast fam, man bun gluten-free tumblr banh mi kogi palo santo artisan. Mlkshk yuccie subway tile hell of jean shorts cold-pressed artisan drinking vinegar woke organic mustache scenester. Artisan +1 synth salvia. Roof party shabby chic DIY, butcher four loko portland twee williamsburg vegan knausgaard ramps echo park. Hell of vice la croix, slow-carb flexitarian kogi leggings prism kitsch.
                      </Paper>
                  </div>
              </div>
          </div>
      </section>
      </React.Fragment>
  );
}
