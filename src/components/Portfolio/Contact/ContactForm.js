import React from "react";
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';


import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from 'components/CustomInput/CustomInput.js';
import Button from 'components/CustomButtons/Button.js';

init("user_1ED4n9wgLPnUEAcEZymZd");

 export default class ContactForm extends React.Component {
     state = {user_name: '',
              user_email: '',
              message: ''
    };


    handleNameChange = event => {
      this.setState({user_name: event.target.value});
    }
    handleEmailChange = event => {
      this.setState({user_email: event.target.value});
    }
    handleMessageChange = event => {
      this.setState({message: event.target.value});
    }

    sendEmail = e => {
      e.preventDefault();
      emailjs.sendForm('jsinghw94@gmail.com',
                       'template_d8celzd',
                        e.target,
                        'user_1ED4n9wgLPnUEAcEZymZd',
                        {
                            user_name: this.state.user_name,
                            user_email: this.state.user_email,
                            message: this.state.message
                        })
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    render() {
        return (
            <form onSubmit={this.sendEmail}>
                <GridContainer
                      direction="column"
                      justify="center"
                      alignItems="center"
                      className="contact-grid">
                      <GridItem xs={3} md={9}>
                          <CustomInput
                              labelText="Email"
                              formControlProps={{
                                  fullWidth: true
                              }}
                              inputProps={{onChange: this.handleEmailChange,
                                           value: this.state.user_email,
                                           name: "user_name",
                                           required: true
                                         }}
                              />
                      </GridItem>
                      <GridItem xs={3} md={9}>
                          <CustomInput
                              labelText="Name"
                              formControlProps={{
                                  fullWidth: true
                              }}
                              inputProps={{onChange: this.handleNameChange,
                                           value: this.state.user_name,
                                           name: "user_name",
                                           required: true
                                         }}
                              />
                      </GridItem>
                      <GridItem xs={3} md={9}>
                          <CustomInput
                              labelText="Message"
                              inputProps={{multiline: true,
                                           rows: 10,
                                           onChange: this.handleMessageChange,
                                           value: this.state.message,
                                           required: true,
                                           name: "message"
                                         }}
                              formControlProps={{
                                  fullWidth: true
                              }}
                              />
                      </GridItem>
                      <GridItem xs={3} md={3}>
                          <div className="form-button">
                              <Button type="submit">Submit</Button>
                          </div>
                      </GridItem>
                </GridContainer>
            </form>
        )
    }
}
