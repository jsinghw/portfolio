import React from "react";

// core components
import Card from "components/Card/Card.js";

import ContactForm from 'components/Portfolio/Contact/ContactForm.js'
import ContactSocial from "components/Portfolio/Contact/ContactSocial.js"



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
                  <ContactSocial></ContactSocial>
              </div>
          </div>
      </section>

  );
}
