import React from "react";
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';

import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from 'components/CustomInput/CustomInput.js';
import Card from "components/Card/Card.js";
import Button from 'components/CustomButtons/Button.js';
import ContactForm from 'components/Portfolio/Contact/ContactForm.js'

import basicsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(basicsStyle);


init("user_1ED4n9wgLPnUEAcEZymZd");


export default function ContactSection() {

  return (
      <section id='contact'>
          <div className='contact-section'>
              <div className='arrow-down'>
              </div>
              <div className='contact-wrapper'>
                  <h2 className="header-text">Contact</h2>
                  <Card className="contact-form">
                      <h3 className="contact-question">Have a question or want to work together?</h3>
                      <ContactForm></ContactForm>
                  </Card>
                  <Button color="linkedin" justIcon>
                      <i className="fab fa-linkedin-in" />
                  </Button>
              </div>
          </div>
      </section>

  );
}
