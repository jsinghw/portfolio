import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components

import Card from "../../../components/Card/Card.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";
import Button from "../../../components/CustomButtons/Button.js";
import Info from "../../../components/Typography/Info.js";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import cardProfile4 from "../../../assets/img/profile.jpg";


import styles from "../../../assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";

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
                          Hi, I'm a recent Kenzie Academy Grad who has a real passion building out projects and always trying to learning something new along the way.
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

              </div>
          </div>
      </section>
      </React.Fragment>
  );
}
