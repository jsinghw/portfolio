import React from "react";
import { Link as LinkScroll } from "react-scroll";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// core components
import { makeStyles } from '@material-ui/core/styles';
import Card from "../../../components/Card/Card.js";
import Button from '../../../components/CustomButtons/Button.js';

import ContactForm from '../../../components/Portfolio/Contact/ContactForm.js'
import ContactSocial from "../../../components/Portfolio/Contact/ContactSocial.js"

library.add(fas)


const useStyles = makeStyles({
    buttonBackground: {
        backgroundColor: '#801357',
        '&:hover':{
            backgroundColor: '#e7627d'
        }
    },
})

export default function ContactSection() {

    const classes = useStyles();

  return (
      <section id='contact'>
          <div className='contact-section'>
              <div className='arrow-down'>
              </div>
              <div className='contact-wrapper'>
                  <h2 className="header-text">Contact</h2>
                  <div className="contact-form-wrapper">
                      <Card className="contact-form">
                          <h3 className="contact-question">Have a question or want to work together?</h3>
                          <ContactForm></ContactForm>
                      </Card>
                  <ContactSocial></ContactSocial>
              </div>
              </div>
              <div className="contact-back-to-top-wrapper">
                  <LinkScroll
                      to='home'
                      spy={true}
                      smooth={true}
                      offset={-45}
                      duration={350}
                      >
                      <Button type="button" className={classes.buttonBackground}>
                          <FontAwesomeIcon icon={['fas', 'angle-double-up']} className="svg-inline--fa.fa-w-10" />
                      </Button>
                  </LinkScroll>
              </div>
          </div>
      </section>

  );
}
