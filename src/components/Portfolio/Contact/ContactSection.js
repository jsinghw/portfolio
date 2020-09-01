import React from "react";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from 'components/CustomInput/CustomInput.js';
import Card from "components/Card/Card.js";
import Button from 'components/CustomButtons/Button.js';


export default function ContactSection() {
  return (
      <section id='contact'>
          <div className='contact-section'>
              <div className='arrow-down'>
              </div>
              <div className='contact-wrapper'>
                  <h2 className="header-text">Contact</h2>
                  <Card className="contact-form">
                  <GridContainer
                        direction="column"
                        justify="center"
                        alignItems="center"
                        className="contact-grid">
                    <GridItem xs={3} md={9}>
                    <CustomInput
                          labelText="Email"
                          id="float"
                          formControlProps={{
                            fullWidth: true
                          }}
                        />
                    </GridItem>
                    <GridItem xs={3} md={9}>
                    <CustomInput
                          labelText="Name"
                          id="float"
                          formControlProps={{
                            fullWidth: true
                          }}
                        />
                    </GridItem>
                    <GridItem xs={3} md={9}>
                    <CustomInput
                          labelText="Message"
                          id="float"
                          inputProps={{multiline: true, rows: 10}}
                          formControlProps={{
                            fullWidth: true
                          }}
                        />
                    </GridItem>
                    <GridItem xs={3} md={3}>
                        <Button type="button">Submit</Button>
                    </GridItem>
                  </GridContainer>
                  <Button color="twitter" justIcon>
                  <i className={ " fab fa-twitter"} />
                  </Button>
                  </Card>
              </div>
          </div>
      </section>

  );
}
